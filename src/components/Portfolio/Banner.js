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
            <img src={GreenTriangle} className="greenTriangle" />
            <img src={YellowTriangle} className="yellowTriangle" />
          </div>
      </div>
    </div>
  )
}

export default Banner