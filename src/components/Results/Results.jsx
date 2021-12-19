import { useEffect } from 'react';
import { API_KEY, API_LIMIT, API_TRENDING } from '../../constants/api';
import { ReactComponent as Loading } from './loading.svg';
import './Results.css';

function Results({ gifs, searchGifs, loading, setLoading, isTrending }) {
  // Trending Gifs
  useEffect(() => {
    setLoading(true);
    const getTrending = async () => {
      const response = await fetch(
        `${API_TRENDING}?api_key=${API_KEY}&limit=${API_LIMIT}`
      );
      const data = await response.json();
      searchGifs(data.data);
    };
    getTrending();
  }, []);

  if (loading)
    return (
      <section className="results">
        <Loading className="results__loading" fill="pink" stroke="" />
      </section>
    );

  if (gifs.length)
    return (
      <section className="results">
        <p className="results__title">
          {isTrending ? 'Trending Gifs' : 'Resultados de la búsqueda'}
        </p>
        <div className="container">
          {gifs.map((gif) => (
            <a key={gif.id} href={gif.url} target="_blank" rel="noreferrer">
              <img
                className="results__gif"
                src={gif.images.original.url}
                alt={`Gif ${gif.id}`}
              />
            </a>
          ))}
        </div>
      </section>
    );

  if (!gifs.length)
    return (
      <section>
        <div className="container">
          <p className="noresults__text">
            <i className="noresults__icon fas fa-exclamation-circle fa-2x"></i>
            Lo sentimos, no hemos encontrado ningún gif para esta búsqueda
            específica. Por favor, intente una nueva búsqueda.
          </p>
        </div>
      </section>
    );
}

export default Results;
