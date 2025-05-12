import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from '../api';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-md-3 mb-4">
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card">
              <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;
