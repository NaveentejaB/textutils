import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      showAlert(null);
    }, 2000);
  }
  // toggle between light and dark theme
  const togglebtn = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#02398b';
      showAlert("Dark mode as been enabled" , "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light mode as been enabled" , "success");
    }   
  }
  // toggle between dark and green theme
    return (
    <>
    
    <Navbar title='TextUtils' about ='About' mode={mode} alert={alert} togglebtn={togglebtn}/>
    <Alert alert={alert}/>
    <div className='container'>
        <TextForm heading='Enter your text below' showAlert={showAlert} mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
