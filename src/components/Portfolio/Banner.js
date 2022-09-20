import React from 'react';
import "./banner.css";

import YellowTriangle from "../../assets/1x/yellow-triangle.png";
import GreenTriangle from "../../assets/1x/green-triangle.png";

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

              {/* <img className='banner-img-format bannerImg-one' src={} />
              <img className='banner-img-format bannerImg-two' src={} />
              <img className='banner-img-format bannerImg-three' src={} />
              <img className='banner-img-format bannerImg-four' src={} />
              <img className='banner-img-format bannerImg-five' src={} /> */}

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