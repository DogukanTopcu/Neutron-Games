import React from 'react';
import "./banner.css";

import YellowTriangle from "../../assets/1x/yellow-triangle.png";
import GreenTriangle from "../../assets/1x/green-triangle.png";

import ANewSun from "../../assets/bannerImages/ANewSun.png";
import AyCarmela from "../../assets/bannerImages/AyCarmela.png";
import DontLookDown from "../../assets/bannerImages/DontLookDown.png";
import EscapeForGalapagos from "../../assets/bannerImages/EscapeForGalapagos.png";
import GammaLand from "../../assets/bannerImages/GammaLand.png";
import LittleRedRidingHood from "../../assets/bannerImages/LittleRedRidingHood.png";
import SoccerRun from "../../assets/bannerImages/SoccerRun.png";
import ThePatient from "../../assets/bannerImages/ThePatient.png";


const Banner = () => {

  return (
    <div className='banner'>
      <div className='container banner-content'>
          <div className='neutron'>Neutron</div>
          <div className='games'>Games</div>

          <div className='triangles'>
            <h2 className='banner-first-text'>We are Game Designer</h2>
            <div className='banner-second-content'>
              <h2>Did someone say Game?</h2>

              <img className='banner-img-format bannerImg-one' src={ANewSun} />
              <img className='banner-img-format bannerImg-two' src={AyCarmela} />
              <img className='banner-img-format bannerImg-three' src={DontLookDown} />
              <img className='banner-img-format bannerImg-four' src={EscapeForGalapagos} />
              <img className='banner-img-format bannerImg-five' src={GammaLand} />
              <img className='banner-img-format bannerImg-six' src={LittleRedRidingHood} />
              <img className='banner-img-format bannerImg-seven' src={SoccerRun} />
              <img className='banner-img-format bannerImg-eight' src={ThePatient} />

              <div className='discover-our-games-button'>
                <p>Discover Our Games</p>
              </div>
            </div>
            
            <img src={GreenTriangle} className="greenTriangle" />
            <img src={YellowTriangle} className="yellowTriangle" />
            
          </div>

          
      </div>
    </div>
  )
}

export default Banner