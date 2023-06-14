import React from "react";
import Navigation from "./components/navigation";


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/contact";
import Prayer from "./components/prayer"
import Branches from "./components/Branches";
import PrayerPartner from "./components/PrayerPartner";
import Links from "./components/Links";
function App() {
 
  return (

    <div className="App ">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact  path="/about" element={<Contact/>}/>
        <Route exact  path="/branches" element={<Links/>}/>
        <Route exact  path="/links" element={<Links/>}/>
        <Route exact  path="/prayerpartner" element={<PrayerPartner/>}/>
        <Route exact  path="/prayer" element={<Prayer/>}/>
      

      </Routes>
      
      </BrowserRouter>

     
    </div>
  )
}

export default App
