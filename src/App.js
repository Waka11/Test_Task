import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PokeCard from './pokecard/pokecard';
import PokeInfo from './pokeinfo/pokeinfo';
import React,{ Component, useState } from 'react';

const LoadElem = () => {
  return <PokeCard/>
}

const App = ()=>{
  
  const [elem, setElem] = useState([]);
  
  const LoadMore = event =>{
    setElem(elem.concat(<PokeCard key={elem.length}/>))
  }
  return (
    <div className='page'>
      <div className='divHeader'>
        <header className='header'>
          Pokedex
        </header>
      </div>
      <main className='main'>
        <div className='pb'>
          <PokeCard/>
          {elem}
          <div className='pb2'>
            <button type="button" className="btn btn-primary" onClick={LoadMore}>Load more</button>
          </div>
        </div>
        <PokeInfo/>
      </main>
    </div>
  );
}

export default App;
