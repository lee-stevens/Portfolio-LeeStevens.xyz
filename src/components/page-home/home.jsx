import './index.css'
import { motion } from "framer-motion"
import { pageAnimation, contentSectionAnimation } from "../frameranimations/frameranimations"
import { useRef } from 'react'


const Home = () => {
    const headerSection = useRef(null);
    const sectionAbout = useRef(null);
    const sectionUnity = useRef(null);
    const sectionWebDev = useRef(null);
    const sectionVBA = useRef(null);
    const sectionContact = useRef(null);
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <motion.div initial="initial" animate="animate" exit="exit"
        variants={pageAnimation}
        transition={{ duration: 2}}>

        <section >
            <nav id="navBar">
                <button onClick={() => scrollToSection(headerSection)}>Home</button>
                <button onClick={() => scrollToSection(sectionAbout)}>About Me</button>
                <button onClick={() => scrollToSection(sectionWebDev)}>Web Dev</button>
                <button onClick={() => scrollToSection(sectionUnity)}>Game Dev</button>
                <button onClick={() => scrollToSection(sectionVBA)}>VBA</button>
                <button onClick={() => scrollToSection(sectionContact)}>Contact</button>
                <a href="/"><button>Reload</button></a>
            </nav>
        </section>
        
        <main>
            <section ref={headerSection} className="titleSection">
                <div className="headerImage">
                    <img src="images/wildlands/Project Wildlands - Unity Final - Minigame Forest 2.png"></img>
                    <div className="centeredOverlay">
                        <h1>Lee Stevens</h1>
                        <h3>Unity Developer</h3>
                    </div>       
                </div>
            </section>

            <div className="sectionDivider"></div>

            <motion.div initial="initial" animate="animate" exit="exit"
            variants={contentSectionAnimation} 
            transition={{ duration: 2}}>

            <section ref={sectionWebDev}>
                <div className="headerSection"><h1>Web Development - React & ThreeJS</h1></div>
                <div className="contentSection">
                    <div className="tileContainer"> 
                    <a href="/"><img className="tileItem" id="item1" src="./images/icon - ls.jpg"/></a>
                    <a href="/"><img className="tileItem" id="item2" src="./images/icon - ls.jpg"/></a>
                    <a href="/"><img className="tileItem" id="item3"  src="./images/icon - ls.jpg"/></a>
                </div>
                </div>
            </section>
            
            <section ref={sectionUnity}>
                <div className="headerSection"><h1 >Game Development - Unity</h1></div>
                <div className="contentSection">
                    <div className="tileContainer"> 
                        <a href="/Unity-Wildlands"><img className="tileItem" src="./images/icon - ls.jpg"/></a>
                        <a href="/Unity-Epsilon"><img className="tileItem" src="./images/icon - ls.jpg"/></a>
                        <a href="/React-Portfolio"><img className="tileItem" src="./images/icon - ls.jpg"/></a>
                    </div>
                </div> 
            </section>

            <section ref={sectionVBA}>
                <div className="headerSection"><h1>Software Development - VBA</h1></div>
                <div className="contentSection">
                    <div className="tileContainer"> 
                        <a href="/Unity-Wildlands"><img className="tileItem" src="./images/icon - ls.jpg"/></a>
                        <a href="/Unity-Epsilon"><img className="tileItem" src="./images/icon - ls.jpg"/></a>
                        <a href="/React-Portfolio"><img className="tileItem" src="./images/icon - ls.jpg"/></a>
                    </div>
                </div>
            </section>

            <section ref={sectionContact}>
                <footer>
                    <div id="footerSection" ref={sectionContact}>
                        <h1>Contact me</h1>
                        <nav className="siteLinks">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/lee-stevens-dev/"><img src="images/icon - linkedin.png"></img></a></li>
                                <li><a href="https://github.com/leesprojects"><img src="images/icon - github.png"></img></a></li>
                                <li><a href="https://leetcode.com/Zaeroso/"><img src="images/icon - leetcode.png"></img></a></li>
                            </ul>
                        </nav>
                        </div>
                </footer>
            </section>
            </motion.div>
        </main>   
        </motion.div>  
    )
}

export default Home