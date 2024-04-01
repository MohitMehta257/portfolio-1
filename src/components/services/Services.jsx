import React from 'react'
import "./services.scss"
import {motion} from "framer-motion"


export const Services = () => {

    const variants={
        initial:{x:-500,y:100,opacity:0},
        animate:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.5
            }
        }
    }


  return (
    <motion.div className='services' variants={variants} initial="initial" animate={"animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on developing app which helps<br/> to grow your brands</p><hr/>

        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg" />
                <h1><motion.b whileHover={{color:"orange"}}>Fresh</motion.b> Ideas</h1>
            </div>

            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b> Brands</h1>
                <button>WHAT WE DO?</button>
            </div>


        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor:'lightgray',color:"black"}}>
                <h2>Documentation</h2>
                <p>
                Software documentation is written text or illustration that accompanies computer software or is embedded in the source code. 
                The documentation either explains how the software operates or how to use it, and may mean different things to people in different roles.
                </p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:'lightgray',color:"black"}}>
                <h2>Coding</h2>
                <p>
                Software coding is the process of creating a software program using a computer-readable language. It involves writing lines of code using a programming language such as C, Java, or Python. 
                Through software coding, developers create software programs like mobile apps for ecommerce stores or automated invoicing software.
                </p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:'lightgray',color:"black"}}>
                <h2>Development</h2>
                <p>
                Software development is the process used to create software. 
                Programming and maintaining the source code is the central step of this process, 
                but it also includes conceiving the project, evaluating its feasibility, analyzing the business requirements, software design, testing, to release.
                </p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor:'lightgray',color:"black"}}>
                <h2>Testing</h2>
                <p>
                Software testing is the process of checking the quality, functionality, and performance of a software product before launching. 
                To do software testing, testers either interact with the software manually or execute test scripts to find bugs and errors, ensuring that the software works as expected.
                </p>
                <button>Go</button>
            </motion.div>


        </motion.div>
    </motion.div>
  )
}
