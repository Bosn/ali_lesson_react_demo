import React from 'react';
import './App.css';
import { useAPI } from './rapper';

require('./rapper/customFetch')


function App() {
  const [data] = useAPI['GET/example/1603262772330']()
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 4)}
      </pre>
    </div>
  );
}

export default App;
