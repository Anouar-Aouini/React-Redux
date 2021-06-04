import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';

import MovieList from "./Components/MovieList/MovieList"
import React from 'react';

function App() {
  return (
    <div>
      <NavBar />
      <MovieList ></MovieList>
    </div>
  );}
export default App;