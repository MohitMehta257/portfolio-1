import React from 'react'
import './portfolio.scss'
import {motion,useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from 'react';


const items=[
    {
        id:1,
        title:"Software Engineer Intern",
        img:"https://media.licdn.com/dms/image/D560BAQGQVt_yLBCxUw/company-logo_200_200/0/1680797947802/researchverge_labs_logo?e=2147483647&v=beta&t=soLzPQWU-EE0epGjoumxU_iiRFJlpBP2IGc7-Y7aZ8U",
        desc:"Focused on development of products interfacing with development and product management teams and end users. Analysis of product requirements, implement/code the solution and test across the entire product development life cycle."
    },

    {
        id:2,
        title:"Software Engineer Intern",
        img:"https://media.licdn.com/dms/image/C4E0BAQHfk_O8amPovQ/company-logo_200_200/0/1642532597684/oasis_infobyte_logo?e=2147483647&v=beta&t=YpWhXqvJ6rPztP0uXz7ZnXw4qgmNbrMGAUoBsN1yVsw",
        desc:"Created a Full Stack app using React, MongoDB, Node.js. Created an admin login and a user login with complete registration, authorization, email-authorization and forgot password system"

    },

    {
        id:3,
        title:"Intern",
        img:"https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/deloitte/us-deloitte-logo.jpg",
        desc:"Performed practical tasks in Development and Programming field using Java and Python. Analyzed log and issues in Cyber Security Tasks."

    },
    {
        id:4,
        title:"Software Developer Intern",
        img:"https://cionews.co.in/wp-content/uploads/2023/06/Article-Main-Image-2023-06-28T125556.721.png",
        desc:"Deployed on development of Chat Bots, POCs, Demos for International clients majorly from UAE, UK and Singapore. Implementation of solution using Java, Python, C sharp, Redis, Azure across the entire product development life cycle."

    }
]

const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref, offset:["start start","end start"]});

    const y=useTransform(scrollYProgress,[0,1],["0%","-300%"])

    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer">
                <img src={item.img}/>
                </div>
               
                <motion.div className="textContainer" style={{y:y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
            </div>
        </section>
    )
}


export const Portfolio = () => {

    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref, offset:["end end","start start"]});

    const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30})
    


  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}

    </div>
  )
}
