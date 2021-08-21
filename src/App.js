import React, { useState } from 'react';
import DisplayWeather from './Components/DisplayWeather';
import Loading from './Components/Loading';

const api = {
  key: "02db419a7c0f44463ec4a1a566dd93b5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loader, setLoader] = useState(false);

  const search = evt => {
    setLoader(true);
    if (evt.key === "Enter") {
      setTimeout(async()=>{
        await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setLoader(false);
          setWeather(result);
          setQuery('');
          console.log(result);
        }, 2000);
      })
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 16) ? 'app-cold' : 'app-warm') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {loader?<Loading />:(typeof weather.main != "undefined") ? <DisplayWeather obj={weather} /> : ('')}
      </main>
    </div>
  );
}

export default App;
