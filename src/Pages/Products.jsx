import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
  




const App = () => {
  return (
    <Router>
        <main className="flex-grow">
          <Routes>
            <Route path="/Products" element={<Products/>} />
          </Routes>
        </main>
        
    </Router>
  );
};

export default App;
