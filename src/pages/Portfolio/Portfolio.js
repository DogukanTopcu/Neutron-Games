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

    // Banner Images
    let imgOne = document.querySelector(".bannerImg-one");
    let imgTwo = document.querySelector(".bannerImg-two");
    let imgThree = document.querySelector(".bannerImg-three");
    let imgFour = document.querySelector(".bannerImg-four");
    let imgFive = document.querySelector(".bannerImg-five");
    let imgSix = document.querySelector(".bannerImg-six");
    let imgSeven = document.querySelector(".bannerImg-seven");
    let imgEight = document.querySelector(".bannerImg-eight");


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


    // Banner Content 2 and Image falling
    if (window.scrollY > 3100 && window.scrollY < 4500) {
      bannerContent.style.opacity = (window.pageYOffset - 3100) / 350;
    }
    else if (window.scrollY < 3000) {
      bannerContent.style.opacity = 0;
    }

    else if (window.scrollY > 4500 && window.scrollY < 10000) {
      // img1 anim
      imgOne.style.display = "block";
      imgOne.style.opacity = (window.pageYOffset - 4500) / 500;
      imgOne.style.transform = `translate(${(window.pageYOffset - 4500) / 3}px, ${(window.pageYOffset - 4500) / 2}px)`;
      imgOne.style.width = `${((window.pageYOffset - 4500) / 3) + 300}px`;
      imgOne.style.height = `${((window.pageYOffset - 4500) / 3) + 200}px`;

      // img2 anim
      if(window.scrollY > 5000) {
        imgTwo.style.display = "block";
        imgTwo.style.opacity = (window.pageYOffset - 5000) / 500;
        imgTwo.style.transform = `translate(-${(window.pageYOffset - 5000) / 3}px, ${(window.pageYOffset - 5000) / 2}px)`;
        imgTwo.style.width = `${((window.pageYOffset - 5000) / 3) + 300}px`;
        imgTwo.style.height = `${((window.pageYOffset - 5000) / 3) + 200}px`;

        // img3 anim
        if (window.scrollY > 5500) {
          imgThree.style.display = "block";
          imgThree.style.opacity = (window.pageYOffset - 5500) / 500;
          imgThree.style.transform = `translate(${(window.pageYOffset - 5500) / 3}px, ${(window.pageYOffset - 5500) / 2}px)`;
          imgThree.style.width = `${((window.pageYOffset - 5500) / 3) + 300}px`;
          imgThree.style.height = `${((window.pageYOffset - 5500) / 3) + 200}px`;

          // img4 anim
          if (window.scrollY > 6000) {
            imgFour.style.display = "block";
            imgFour.style.opacity = (window.pageYOffset - 6000) / 500;
            imgFour.style.transform = `translate(-${(window.pageYOffset - 6000) / 3}px, ${(window.pageYOffset - 6000) / 2}px)`;
            imgFour.style.width = `${((window.pageYOffset - 6000) / 3) + 300}px`;
            imgFour.style.height = `${((window.pageYOffset - 6000) / 3) + 200}px`;

            // img5 anim
            if (window.scrollY > 6500) {
              imgFive.style.display = "block";
              imgFive.style.opacity = (window.pageYOffset - 6500) / 500;
              imgFive.style.transform = `translate(${(window.pageYOffset - 6500) / 3}px, ${(window.pageYOffset - 6500) / 2}px)`;
              imgFive.style.width = `${((window.pageYOffset - 6500) / 3) + 300}px`;
              imgFive.style.height = `${((window.pageYOffset - 6500) / 3) + 200}px`;

              // img6 anim
              if (window.scrollY > 7000) {
                imgSix.style.display = "block";
                imgSix.style.opacity = (window.pageYOffset - 7000) / 500;
                imgSix.style.transform = `translate(-${(window.pageYOffset - 7000) / 3}px, ${(window.pageYOffset - 7000) / 2}px)`;
                imgSix.style.width = `${((window.pageYOffset - 7000) / 3) + 300}px`;
                imgSix.style.height = `${((window.pageYOffset - 7000) / 3) + 200}px`;
              }

              // img7 anim
              if (window.scrollY > 7500) {
                imgSeven.style.display = "block";
                imgSeven.style.opacity = (window.pageYOffset - 7500) / 500;
                imgSeven.style.transform = `translate(${(window.pageYOffset - 7500) / 3}px, ${(window.pageYOffset - 7500) / 2}px)`;
                imgSeven.style.width = `${((window.pageYOffset - 7500) / 3) + 300}px`;
                imgSeven.style.height = `${((window.pageYOffset - 7500) / 3) + 200}px`;

                // img8 anim
                if (window.scrollY > 8000) {
                  imgEight.style.display = "block";
                  imgEight.style.opacity = (window.pageYOffset - 8000) / 500;
                  imgEight.style.transform = `translate(-${(window.pageYOffset - 8000) / 3}px, ${(window.pageYOffset - 8000) / 2}px)`;
                  imgEight.style.width = `${((window.pageYOffset - 8000) / 3) + 300}px`;
                  imgEight.style.height = `${((window.pageYOffset - 8000) / 3) + 200}px`;
                }
                else imgEight.style.display = "none";
              }
              else imgSeven.style.display = "none";
            }
            else imgSix.style.display = "none";
          }
          else imgFive.style.display = "none";
        }
        else imgFour.style.display = "none";
      }
      else{
        imgThree.style.display = "none";
        imgTwo.style.display = "none";
      }
      
    }

    // display none images
    else if (window.scrollY > 10000) {
      imgOne.style.display = "none";
      imgTwo.style.display = "none";
      imgThree.style.display = "none";
      imgFour.style.display = "none";
      imgFive.style.display = "none";
      imgSix.style.display = "none";
      imgSeven.style.display = "none";
      imgEight.style.display = "none";
    }
    


    


    console.log(window.scrollY);
  }, [scrollY]);

  

  return (
    <div style={{height: "2500vh"}}>
      <div className='banner-section'>
        <Banner />
        <OurGames />
      </div>
    </div>
  )
}

export default Portfolio