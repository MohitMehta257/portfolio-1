import React, { useRef, useState } from 'react'
import "./contact.scss"
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser';

const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}


export const Contact = () => {
    const formRef=useRef();

    const [error,setError]=useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ojlzu5f', 'template_p0limr8', formRef.current, {
            publicKey: 'QHwP6eGUQ_Ik4q_T9',
          })
          .then(
            () => {
              setError(false);
            },
            (error) => {
              setError(true);
            },
          );
      };

  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>mehtamohit68429@gmail.com</span>
            </motion.div>

            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Hello, Gurgaon</span>
            </motion.div>

            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+917488954059</span>
            </motion.div>

        </motion.div>
        <div className="formContainer">
            <form ref={formRef} onSubmit={sendEmail}>
            <input type="text"  required placeholder="Name" name="name"/>
            <input type="email" required placeholder="Email" name="email"/>
            <textarea rows={8} placeholder='Message' name="message"></textarea>
            <button>Submit</button>
            
            </form>

        </div>
    </motion.div>
  )
}
