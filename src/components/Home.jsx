import React, { useState } from "react";
import Main from "./main";
import Head from "./subcomp/Head";
import Carousel from "./subcomp/carousel";
import Footer from "./footer";
import One from "../assets/images/1.jpeg";
import Two from "../assets/images/2.jpeg";
import Three from "../assets/images/3.jpeg";
import Four from "../assets/images/4.jpeg";
import Five from "../assets/images/5.jpeg";
import Six from "../assets/images/6.jpeg";
import Seven from "../assets/images/7.jpeg";
import Eight from "../assets/images/8.jpeg";
import Nine from "../assets/images/9.jpeg";
import Ten from "../assets/images/10.jpeg";
import Eleven from "../assets/images/11.jpeg";
import Twelve from "../assets/images/12.jpeg";
import Thirteen from "../assets/images/13.jpeg";
import Fourteen from "../assets/images/14.jpeg";
import Fifteen from "../assets/images/15.jpeg";
import Sixteen from "../assets/images/16.jpeg";
import Seventeen from "../assets/images/17.jpeg";
import Eighteen from "../assets/images/18.jpeg";
import Nineteen from "../assets/images/19.jpeg";
import Twenty from "../assets/images/20.jpeg";
import Twentyone from "../assets/images/21.jpeg";
import Twentytwo from "../assets/images/22.jpeg";
import Twentythree from "../assets/images/23.jpeg";
const Home = () => {
  const [turn, setTurn] = useState(false);
  const colabedPic = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Eighteen,
    Nineteen,
    Twenty,
    Twentyone,
    Twentytwo,
    Twentythree,
  ];
  return (
    <div>
      {turn && <Carousel colabedPic={colabedPic} setTurn={setTurn} />}
      <Head />
      <Main setTurn={setTurn} />
      <Footer />
    </div>
  );
};

export default Home;
