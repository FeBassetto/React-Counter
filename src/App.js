import React from 'react';
import './App.css';

import Contador from './components/Contador/Contador';


function App() {
  return (
    <div>
      <Contador initialNumber={10} amountNumber={5} />
    </div>
  );
}

export default App;
