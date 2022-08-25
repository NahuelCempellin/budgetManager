import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/landingPage/landing';
import Navbar from './components/navbar/navbar';
import LoginPage from './components/login/loginpage';
import Home from './components/home/home';


function App() {
  const login= localStorage.getItem('login');
  console.log(login)


  return (

    <div className="App">
      {
        login.length === 0 || login !== null?
        (
          <Routes>
        <Route exact path={'/'} element={<LandingPage/>}/>
        <Route exact path={'/login'} element={<LoginPage/>}/>
        <Route exact path={'/home'} element={<Home/>}/>
        </Routes> 
          )
          :
        (
      <Routes>
      <Route exact path={'/login'} element={<LoginPage/>}/>
      <Route exact path={'/home'} element={<Home/>}/>
      </Routes> 
        )
        
       
      }
    
    </div>
    
  )


}

export default App;
