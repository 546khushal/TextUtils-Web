import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Abbt  from './components/Abbt';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');        //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    // Clear the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#424442';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-DarkMode";          //title ke vha bhi change dynamically
      // setInterval(()=> {
      //   document.title="TextUtils is Best"; 
      // },700);
      // setInterval(()=> {
      //   document.title="TextUtils Download Now"; 
      // },500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils"; 
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/>  
        {/* <Abbt/> */}
      </div>
    </>
  );
}

export default App;
