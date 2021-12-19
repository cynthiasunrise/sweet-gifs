import { useEffect, useState } from 'react';
import { API_KEY, API_LIMIT, API_SEARCH } from '../../constants/api';

function SearchForm({ setLoading, setIsTrending, searchGifs }) {
  const [term, setTerm] = useState('');
  const [search, setSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Suggestions
  useEffect(() => {
    const getSuggestions = async () => {
      const response = await fetch(
        `${API_SEARCH}/tags?api_key=${API_KEY}&q=${term}`
      );
      const data = await response.json();
      setSuggestions(data.data);
    };
    getSuggestions();
  }, [term]);

  // Search Gifs
  useEffect(() => {
    if (search) {
      setLoading(true);
      const getGifs = async () => {
        const response = await fetch(
          `${API_SEARCH}?api_key=${API_KEY}&q=${term}&limit=${API_LIMIT}`
        );
        const data = await response.json();
        searchGifs(data.data);
        setSearch(false);
        setTerm('');
        setIsTrending(false);
      };
      getGifs();
    }
  }, [search]);

  const handleChangeCategory = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(true);
  };

  const handleClickAutoTerm = (event) => {
    setTerm(event.target.innerText);
    setSearch(true);
  };

  return (
    <div className="searchControl">
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          onChange={handleChangeCategory}
          className="searchTerm"
          placeholder="Busca Gifs"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </form>
      {suggestions.length > 0 && (
        <div className="search__suggestions">
          {suggestions.map((suggestion) => (
            <div
              onClick={handleClickAutoTerm}
              className="search__suggestion"
              key={suggestion.name}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchForm;
