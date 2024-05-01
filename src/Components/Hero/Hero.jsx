import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import Calorie from "../../assets/calories.png"
import NumberCounter from "number-counter"
import {motion} from "framer-motion"
const Hero = () => {
  const transition={type:"sprint", duration:3}
  const mobile=window.innerWidth<=768 ?true:false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?"165px":"238px"}}
          whileInView={{left: "8px"}}
          transition={{...transition,type: 'tween'}}>
          </motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div><span className='stroke-text'>Shape</span> <span>Your</span></div>
        <div><span>Ideal Body</span></div>
        <div><span className='small-hero'>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
        </div>
      </div>
      <div className="figures">
        <div>
          <span>
          <NumberCounter end={140} start={100} delay='4' preFix='+'/>
          </span>
          <span>EXPERT COACHES</span>
            
          </div>
          <div>
          <span> <NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
          <span>MEMBERS JOINED</span>
            
          </div>
          <div>
          <span> <NumberCounter end={50} start={10} delay='4' preFix='+'/></span>
          <span>FITNESS PROGRAMS</span>
            
          </div>
      </div>
      <div className="hero-button">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
      </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right: "4rem"}}
       transition={transition}
         className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span><span>116 bpn</span>
        </motion.div>
        <img src={hero_image} className="hero_image" alt="" />
        <motion.img 
        initial={{right:"11rem"}}
        whileInView={{right: "20rem"}}
       transition={transition}
        src={hero_image_back} className="hero_image_back" alt="" />
      <motion.div 
        initial={{right:"37rem"}}
        whileInView={{right: "28rem"}}
       transition={transition}

       className="calories">
        <img src={Calorie} alt="" />
        <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
        </div>
        
      </motion.div>
      
      </div>
    </div>
  )
}

export default Hero
