import React from "react";
import Info from "./subcomp/Info";
import PastorPic from "../assets/images/pastor.jpg"
import ShowWork from "../assets/images/hall.jpg"
import Social from "./subcomp/Social";
import Activities from "./subcomp/Activities";
const main = ({setTurn}) => {
  return (

    <main>
      
      <Info/>
      <img className="w-[100%] h-64  md:h-[35rem] blur-[1px] object-cover " loading="lazy" src={PastorPic} alt="All in one" />
      <Social/>
      <img className="w-[100%] h-64 md:h-[30rem] blur-[1px] object-cover " loading="lazy" src={ShowWork} alt="show work" />
      <Activities setTurn={setTurn} />
    </main>
      
  );
};

export default main;
