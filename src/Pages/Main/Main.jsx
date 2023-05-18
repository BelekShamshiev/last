import React from "react";
import Burger from "../../components/Burger/Burger";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Build from "../../components/BuildBase/Build";
import Best from "../../components/BestCoffee/Best";
import Blog from "../../components/DataSlider/Data";
import Client from "../../components/Client/Client";
import Coffeedespina from "../../components/Coffeedespina/Coffeedespina";
import Footer from "../../components/Footer/Footer";
import Discoveri from "../../components/Discovery/Discovery"

const Main = () => {
  return (
    <>
    <Burger/>
    <Hero/>
    <Card/>
    <Discoveri/>  
    <Build/>
    <Best/>
    <Blog/>
    <Client/>
    <Coffeedespina/>
    <Footer/>
    </>
  );
};

export default Main;
