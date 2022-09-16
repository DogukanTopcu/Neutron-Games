import React, { useEffect, useState } from 'react'
import Banner from '../../components/Portfolio/Banner'

import "./portfolio.css";

const Portfolio = () => {
  
  const [scrollY, setScrollY] = useState("0");

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  
  useEffect(() => {
    let bannerSection = document.querySelector(".banner-section");
    // let bannerDiv = document.querySelector(".banner-content");
    let Neutron = document.querySelector(".neutron");
    let Games = document.querySelector(".games");
    let greenTriangle = document.querySelector(".greenTriangle");
    let yellowTriangle = document.querySelector(".yellowTriangle");


    // Banner magic
    let bannerFixed = 10000;
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



  }, [scrollY]);

  



  return (
    <div style={{height: "800vh"}}>
      <div className='banner-section'>
        <Banner />
      </div>
    </div>
  )
}

export default Portfolio