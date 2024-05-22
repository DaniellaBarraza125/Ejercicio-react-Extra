import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const URL = "https://swapi.dev/api/people";

function App() {
  const [characters, setCharacters] = useState([]);

const getCharacters = async ()=>{
try {
  const res = await axios(URL)
  console.log(res.data.results);
  setCharacters(res.data.results)
} catch (error) {
  console.error(error);
  
}}
  
  useEffect(()=>{getCharacters()
  }, [])

  const characterList = characters.map((character) => (console.log(character),
  <p key={character.name}>{character.name}</p>
  ));

  return (
    <div>
    <h1>Personajes de Star Wars</h1>
    {characterList}
    
  </div>
  );
}

export default App;
