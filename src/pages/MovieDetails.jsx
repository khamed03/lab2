import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from '../api';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="card mb-3">
      <img src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h2>{movie.title}</h2>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
