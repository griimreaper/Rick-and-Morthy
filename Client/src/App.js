import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Error from "./components/Error"
import Favorites from "./components/favorites/Favorites"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addCharacter, addLocation, removeFav, searchCharacters } from './redux/actions';
import HistoryNavigate from './components/HistoryNavigate';

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()
   const email = "leonelbehnke@gmail.com"
   const password = "Synyster6"

   const dispatch = useDispatch()
   function login(userData) {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout() {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   useEffect(() => {
      axios.get(`http://localhost:3001/rickandmorty/character`)
         .then((results) => {
            setCharacters([...results.data.results])
            dispatch(addCharacter(results.data.results))
         })
         .catch((error) => {
            console.log(error)
         })
   }, [])

   function onSearch(id) {
      axios
         .get(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            dispatch(searchCharacters(data))
         })
   };

   function onClose(id) {
      setCharacters((oldChars) => { return oldChars.filter((ch) => ch.id !== id) })
      dispatch(removeFav(id))
   }

   useEffect(() => {
      dispatch(addLocation(location.pathname))
   })
   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav logout={logout} onSearch={onSearch}></Nav>}
         {location.pathname !== "/" &&
            <Link to="/favorites">
               <button title="Tus Favoritos" className='favorites'></button>
            </Link>
         }
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards onClose={onClose} className="cards" characters={characters} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/:cualquier" element={<Error></Error>} />
            <Route path="/favorites" element={<Favorites></Favorites>} />
            <Route path="/history" element={<HistoryNavigate></HistoryNavigate>} />
         </Routes>
      </div>
   );
}

export default App;
