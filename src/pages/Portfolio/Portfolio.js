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
    let bannerDiv = document.querySelector(".banner-content");
    let Neutron = document.querySelector(".neutron");
    let Games = document.querySelector(".games");

    // Banner magic
    let bannerFixed = 1000;
    if (bannerSection && window.scrollY <= bannerFixed) {
      bannerSection.style.position = "fixed";
      bannerSection.style.top = "0";
      
      bannerSection.style.transform = `translateY(0px)`;

      // console.log(window.pageYOffset);
    }
    else {
      bannerSection.style.position = "absolute";
      bannerSection.style.transform = `translateY(${bannerFixed}px)`;
    }


    // Banner text magic
    Neutron.style.transform = `translateX(-${window.pageYOffset * 2}px)`;
    Neutron.style.transition = "0.8s";

    Games.style.transform = `translateX(${window.pageYOffset * 2}px)`;
    Games.style.transition = "0.8s";


  }, [scrollY]);

  



  return (
    <div style={{height: "300vh"}}>
      <div className='banner-section'>
        <Banner />
      </div>
    </div>
  )
}

export default Portfolio