import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import {motion} from "framer-motion"

const Navbar=()=>{
    return(
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}}>Mohit Mehta</motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/www.marvellousmohit"><img src="/facebook.png"></img></a>
                    <a href="https://www.instagram.com/yours_truly_mohit/"><img src="/instagram.png"></img></a>
                    <a href="https://www.linkedin.com/in/mohit-mehta-0aa3531a1/"><img src="/linkedin.png"></img></a>
                    <a href="https://github.com/MohitMehta257"><img src="/github.png"></img></a>

                </div>
            </div>
        </div>
    )
}

export default Navbar