import { useState } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isTrending, setIsTrending] = useState(true);

  const searchGifs = (data) => {
    setGifs(data);
    setLoading(false);
  };

  return (
    <div className="app">
      <Header />
      <Search
        setLoading={setLoading}
        setIsTrending={setIsTrending}
        searchGifs={searchGifs}
      />
      <Results
        gifs={gifs}
        searchGifs={searchGifs}
        loading={loading}
        setLoading={setLoading}
        isTrending={isTrending}
      />
    </div>
  );
}

export default App;
