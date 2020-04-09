import React from 'react';

import './global.css';

import Routes from './routes';

// import React, { useState } from 'react';
// import Header from './Header';

function App() {
  // const [counter, setCounter] = useState(0);

  // // Array [valor, funcaoDeAtualizacao]

  // function increment() { 
  //   setCounter(counter + 1);
  //   console.log(counter);
  // }

  // return (
  //   <div>
  //   <Header>Contador: {counter}</Header>
  //   <button onClick={increment}>Incrementar</button>
  //   </div>
  // );
  
  return (
    <Routes />
  );

}

export default App;