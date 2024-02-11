import React from 'react';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals'; 
import ReactDOM from 'react-dom/client';
import ProfileForm from './ProfileForm';
// import Title from './Title';
import Background from './Background';
import Navbar from './Components/Navbar'
import Home from './Home';
import About from './Components/About';
// import App from './App';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar title="InterestFusion" aboutText="About"/>c
    {/* <App /> */}
    <Home />
    <Background> 
    {/* <Title />  */}
    <About />
    <ProfileForm />
    </Background>
  </React.StrictMode>,
);

