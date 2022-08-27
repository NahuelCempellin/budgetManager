import React,{useState,useEffect} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './components/landingPage/landing';
import LoginPage from './components/login/loginpage';
import Home from './components/home/home';
import AddIncome from './components/IncomeExpenses/addIncome';
import AddExpenses from './components/IncomeExpenses/addExpenses';

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
        </Routes> 
      
    
    </div>
    
  )


}

export default App;
