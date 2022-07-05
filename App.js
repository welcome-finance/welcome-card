import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Header.js"
import Home from "./pages/Home.js"
import Footer from "./pages/Footer.js"


function App() {
  return (

    <Router>
      <Home />
    </Router>
  );
}

export default App;
