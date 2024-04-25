import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://www.omdbapi.com/?apikey=your_api_key&s=fashion')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fashion Forward</h1>
      </header>
      <main>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </main>
    </div>
  );
}

export default App;