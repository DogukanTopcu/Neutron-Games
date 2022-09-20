import React, { useEffect, useState } from 'react'
import Banner from '../../components/Portfolio/Banner'
import OurGames from '../../components/Portfolio/OurGames';

import "./portfolio.css";

const Portfolio = () => {
  
  const [scrollY, setScrollY] = useState("0");

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  
  useEffect(() => {
    let bannerSection = document.querySelector(".banner-section");
    let Neutron = document.querySelector(".neutron");
    let Games = document.querySelector(".games");
    let greenTriangle = document.querySelector(".greenTriangle");
    let yellowTriangle = document.querySelector(".yellowTriangle");

    let bannerTextOne = document.querySelector(".banner-first-text");
    let bannerContent = document.querySelector(".banner-second-content");


    // Banner magic
    let bannerFixed = 5000;
    if (bannerSection && window.scrollY <= bannerFixed) {
      bannerSection.style.position = "fixed";
      bannerSection.style.top = "0";
      
      bannerSection.style.transform = `translateY(0px)`;
    }
    else {
      bannerSection.style.position = "absolute";
      bannerSection.style.transform = `translateY(${bannerFixed}px)`;
    }


    // Banner text magic
    Neutron.style.transform = `translateX(${window.pageYOffset * -2}px)`;
    Games.style.transform = `translateX(${window.pageYOffset * 2}px)`;



    // Banner Triangles magic
    let startTriangles = 1000;
    let stopTriangles = 2000;
    let endAll = 5000;
    if (window.scrollY > startTriangles - 100 && window.scrollY < stopTriangles) {
      greenTriangle.style.transform = `translateX(${startTriangles - 100 - window.pageYOffset}px)`;
      yellowTriangle.style.transform = `translateX(${(startTriangles - 100 - window.pageYOffset) / 2}px)`;
      
      greenTriangle.style.zIndex = "1";
    }
    else if (window.scrollY > stopTriangles && window.scrollY < endAll) {
      greenTriangle.style.transform = `translateX(${window.pageYOffset - stopTriangles - (stopTriangles -  startTriangles)}px)`;
      yellowTriangle.style.transform = `translateX(${(window.pageYOffset - stopTriangles - (stopTriangles -  startTriangles)) / 2}px)`;
      
      greenTriangle.style.zIndex = "3";
    }




    // Banner Text 1
    if (window.scrollY > startTriangles + 100 && window.scrollY < 3080) {
      bannerTextOne.style.opacity = (window.pageYOffset - (startTriangles + 100)) / 350;
      bannerTextOne.style.zIndex = "3";
      
      bannerTextOne.style.display = "flex";
    }
    else if (window.scrollY < startTriangles + 80) {
      bannerTextOne.style.opacity = 0;
    }
    else if (window.scrollY > 3080) {
      bannerTextOne.style.opacity = 0;
      bannerTextOne.style.display = "none";
    }


    // Banner Content 2
    if (window.scrollY > 3100) {
      bannerContent.style.opacity = (window.pageYOffset - 3100) / 350;
    }
    else if (window.scrollY < 3000) {
      bannerContent.style.opacity = 0;
    }


    



    console.log(window.scrollY);
  }, [scrollY]);

  

  return (
    <div style={{height: "1000vh"}}>
      <div className='banner-section'>
        <Banner />
        <OurGames />
      </div>
    </div>
  )
}

export default Portfolio