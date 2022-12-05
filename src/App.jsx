import React from "react";
import Navigation from "./components/navigation";


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact";
import Prayer from "./components/prayer"
function App() {
 
  return (

    <div className="App ">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/prayer" element={<Prayer/>}/>
      

      </Routes>
      
      </BrowserRouter>

     
    </div>
  )
}

export default App
