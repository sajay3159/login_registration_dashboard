import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Registration from './Component/Registration'
import NavBar from './Component/NavBar';
import User from './Component/User';
import Profile from './Component/Profile';
import Home from './Component/Home';
import RequiredAuth from './Component/Private/RequiredAuth';
import { useState } from 'react';




function App() {
  const[toggleButton,setToggle]= useState(false);

  return (
   <>
   <NavBar toggleButton={toggleButton} setToggle={setToggle}/>
   <Routes>
   <Route path="/home" element={<Home/>}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/login" element={<Login setToggle={setToggle}/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
   </Routes>
   </>
  );
}

export default App;
