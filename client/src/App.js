import React,{useState,useEffect} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/landingPage/landing';
import LoginPage from './components/login/loginpage';
import Home from './components/home/home';
import AddIncome from './components/IncomeExpenses/addIncome';
import AddExpenses from './components/IncomeExpenses/addExpenses';
import LastMovements from './components/movements/movements';
import MovementsID from './components/movements/movementsID';
import Register from './components/register/register';

function App() {
  const [log,setLog]= useState(false);
  const login= localStorage.getItem('login');
  const usedLog= JSON.parse(login)
  

useEffect(()=>{
  
 if(usedLog !== null){
  if(login.length >= 0){
    setLog(true)

  }
 }
},[login])


  return (

    <div className="App">
     
        <Routes>
        <Route exact path={'/'} element={<LandingPage/>}/>
        <Route exact path={'/login'} element={<LoginPage/>}/>
        <Route exact path={'/home'} element={<Home/>}/>
        <Route exact path={'/addincome'} element={<AddIncome/>}/>
        <Route exact path={'/addexpenses'} element={<AddExpenses/>}/>
        <Route exact path={'/movements'} element={<LastMovements/>}/>
        <Route exact path={'/movements/:id'} element={<MovementsID/>}/>
        <Route exact path={'/register'} element={<Register/>}/>
        </Routes> 
      
    
    </div>
    
  )


}

export default App;
