// @ts-nocheck
import React from 'react';
import './App.css';
import Title from './Components/Title/Title.js';
import Cards from './Pages/Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Details from './Pages/Details';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <Title label="Digimon" />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/Details/:name" element={<Details />} />           
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
