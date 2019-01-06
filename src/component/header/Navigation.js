import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Navigation.css';
import img1 from './images/1.jpg';
import img2 from './images/3.jpg';
import img3 from './images/2.jpg';

const fadeImages = [
  img1,
   img2, img3,
  ];

const fadeProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const Navigation=()=>{
	return(<div>
		<nav className='header'> 
		<button>b1</button>
		<button>b1</button>
		<button>b1</button>
		</nav>

    <Fade {...fadeProperties}>
      <div className="slide each-fade">
        <div className=" image-container">
          <img src={fadeImages[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
      </div>
    </Fade>


		</div>)
} 
export default Navigation;