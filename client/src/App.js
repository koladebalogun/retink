import './App.scss';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Auth from './components/AuthForm/Auth';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';


function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/aboutus" element={<AboutUs/>}/>

            <Route path="/services" element={<Services/>}/>
            
            <Route path="/auth" element={!user ? <Auth/> : <Navigate to='/'/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
