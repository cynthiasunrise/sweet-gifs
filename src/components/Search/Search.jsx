import './Search.css';
import SearchForm from './SearchForm';

function Search({ setLoading, setIsTrending, searchGifs }) {
  return (
    <section className="search">
      <div className="search__container">
        <p>
          ¡Insp&iacute;rate y busca los mejores{' '}
          <span className="bold-text">GIFS!</span>
        </p>
        <img
          className="searchImg"
          src="images/ilustra_header.svg"
          alt="Gifos banner"
        />
        <SearchForm
          setLoading={setLoading}
          setIsTrending={setIsTrending}
          searchGifs={searchGifs}
        />
      </div>
    </section>
  );
}

export default Search;
