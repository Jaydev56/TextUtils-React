//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  const navArray = ['light', 'dark']
  const [mode, setMode] = useState(navArray);
  const [alert, setAlert] = useState(null);

  

  const alertFunc= (message, alertMode)=>{
    setAlert({
      msg: message, alert:alertMode
    })
    setTimeout(() => {
      setAlert('null')
    }, 2000);
  }


  const toggleMode = ()=>{
    if(mode[0] === 'light'){
      const updatedMode = ['dark', 'light']
      setMode(updatedMode)
      document.body.style.backgroundColor = '#212529'
      alertFunc('Dark mode has been activated', "success")
    }
    else{
      setMode(navArray);
      document.body.style.backgroundColor = 'white'
      alertFunc('Light mode has been activated', "success")

    }
  }

  return (
  <>
  
 
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode[0]} toggleMode = {toggleMode} darkModeText={mode[1]}/>
    <Alerts alert = {alert}/>
      <Routes>
      <Route exact path="/" element = {<><div className='container my-3'><TextForm heading="Text" col = {mode[0]} alertFunc={alertFunc}/></div></>}/>
      </Routes>
      <Routes>
      <Route exact path="/about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  
  
  </>
  );
}


export default App;



