import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Pages/Signup'; 
import LoginPage from './Pages/Login'; 
import HomePage from './Pages/Home';
import Offers from './Pages/Offers' 
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
    return (
        <Router>
          <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/Offers" element={<Offers/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
