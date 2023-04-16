import React from "react";
import "./styles.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar"
import { BrowserRouter as Route,Router,Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Compete from "./Pages/Compete";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route 
        path="/">
        <Home />
        </Route>
        <Route 
        path="/contest">
        <Compete/>
        
        </Route>
        <Route 
        path="/Jobs">
        <Jobs/>
        </Route>
      

        <Footer/>
      </Router>
      
    </div>
  );
}
