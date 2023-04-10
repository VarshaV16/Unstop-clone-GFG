import "./styles.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar"
// import { BrowserRouter as Route,Router,Routes } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar/>
        {/* <Route  */}
        {/* path="/"> */}
        <Home />
        {/* </Route> */}
        {/* <Route 
        path="/contest">
        <Contest />
        </Route>
        <Route 
        path="/Jobs">
        <Jobs/>
        </Route> */}
        <Footer/>
      {/* </Router> */}
      
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
