import "./hero.scss"
import React from 'react'
import {motion} from "framer-motion";





const textVariants={
    intial:{
        x:-500,
        opacity:0
    },

    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },

    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2, 
            repeat:Infinity
        }
    }
}


const sliderVariants={
    intial:{
        x:-0,
    },

    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        }
    },
}

const hrefFunction=()=>{
    console.log("clicked");
    windows.location.href = "#Portfolio";
}

export const Hero = () => {

    

  return (
<div className='hero'>
          <div className="wrapper">
              <motion.div className="textContainer" variants={textVariants} initial="intial" animate="animate">
                  <motion.h2 variants={textVariants}>Mohit Mehta</motion.h2>
                  <motion.h1 variants={textVariants}>Software Engineer, VWITS</motion.h1>
                  <motion.div variants={textVariants} className="buttons">
                      <motion.button onClick={hrefFunction} variants={textVariants}>See the Latest Works</motion.button>
                      <motion.button variants={textVariants}>Contact Me</motion.button>
                  </motion.div>
                  <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png'></motion.img>
              </motion.div>
              </div>
      
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
              Passionate, Resilient and optimistic

        </motion.div>
          <div className="imageContainer">
              <img src="/hero1.png"></img>
          </div>
            </div>
        
        
  )
}



