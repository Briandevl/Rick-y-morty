

import Cards from './components/Cards.jsx';
import axios from "axios";
import {Route,Routes} from "react-router-dom";
import Detail from "./views/Detail/Detail";
import About from "./views/about/About";
import listCharacters  from './data.js';
import styled from 'styled-components';
import NavBar from "./components/navBar/navBar.jsx";
import { useState } from 'react';

import './App.css';




function App() {
   const [characters, setCharacters] = useState(listCharacters)


   function searcHandler(id) {
      //setCharacters([...characters,example])

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert("¡No hay personajes con este ID!");
         }
      });
   }



   function closeHandler(id) {
   
      window.alert('Emulamos que se cierra la card')
      let deleted = characters.filter(character => character.id !== Number(id))
      setCharacters(deleted);

   }


   function randomHandler() {
      let haveIt = [];

      let random = (Math.random() * 826).toFixed();

      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/characters/${random}`)
            .then((response) => response.json())
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert("No hay personajes con ese ID");

               }
            });
      } else {
         console.log("Ya agregaste todos los personajes");
         return false;
      }
   }

   return (
      <div className='App'>
       

          <NavBar onSearch={searcHandler} /> 
          <Cards characters={characters} onClose={closeHandler} /> 
          <Routes>
            <Route path="/home" 
            element={<Cards characters={characters} onClose={closeHandler} />}/>
            <Route path="/detail/:id" element ={<Detail/>} />
            <Route path="/about" element ={<About/>} />
            <Route path="*" element ={""}/>
          </Routes>
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
   /> */}
      </div>
   );

}

export default App;
