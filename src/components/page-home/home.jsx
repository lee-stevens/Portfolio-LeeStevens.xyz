import './index.css'
import { motion } from "framer-motion"
import { pageAnimation, sectionContentAnimation } from "../frameranimations/frameranimations"
import NavBar from '../navbar/navbar'
import { useRef } from 'react'


const Home = () => {
    const sectionHeader = useRef(null);
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
                <button onClick={() => scrollToSection(sectionHeader)}>Top</button>
                <button onClick={() => scrollToSection(sectionAbout)}>About Me</button>
                <button onClick={() => scrollToSection(sectionWebDev)}>Web Dev</button>
                <button onClick={() => scrollToSection(sectionUnity)}>Game Dev</button>
                <button onClick={() => scrollToSection(sectionVBA)}>VBA</button>
                <button onClick={() => scrollToSection(sectionContact)}>Contact</button>
            </nav>
        </section>
        
        <main>
            <section ref={sectionHeader} className="titleSection">
                <div className="headerImage">
                    <img src="images/wildlands/Project Wildlands - Unity Final - Minigame Forest 2.png"></img>
                    <div className="centeredOverlay">
                        <h1>Lee Stevens</h1>
                        <h3>Unity & Web Developer</h3>
                    </div>       
                </div>
            </section>

            <motion.div initial="initial" animate="animate" exit="exit"
            variants={sectionContentAnimation} 
            transition={{ duration: 2}}>
            <section ref={sectionAbout}>
                <div  className="sectionHeader">
                    <h1>About Me</h1>
                </div>
                <div className="sectionContent">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus convallis consectetur. Cras lorem nibh, tincidunt ut molestie ac, tristique nec leo. Suspendisse non laoreet nisi, eu ultrices augue. Morbi vitae orci sagittis, ullamcorper massa sed, commodo lectus. Suspendisse potenti. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet justo vulputate, volutpat arcu non, porttitor libero. Duis a ex feugiat dolor vestibulum pellentesque. Nullam viverra tincidunt tortor, in tempor nulla vestibulum tincidunt. Ut tincidunt convallis pretium.
                    </p>
                </div>
            </section>
            
            <div class="sectionDivider"/>

            <section ref={sectionWebDev}>
                <div className="sectionHeader">
                    <h1>Web Development - React & ThreeJS</h1>
                </div>
                <div className="sectionContent">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus convallis consectetur. Cras lorem nibh, tincidunt ut molestie ac, tristique nec leo. Suspendisse non laoreet nisi, eu ultrices augue. Morbi vitae orci sagittis, ullamcorper massa sed, commodo lectus. Suspendisse potenti. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet justo vulputate, volutpat arcu non, porttitor libero. Duis a ex feugiat dolor vestibulum pellentesque. Nullam viverra tincidunt tortor, in tempor nulla vestibulum tincidunt. Ut tincidunt convallis pretium.
                    </p>
                </div>
            </section>

            <div class="sectionDivider"/>
            
            <section ref={sectionUnity}>
                <div className="sectionHeader">
                    <h1 >Game Development - Unity</h1>
                </div>
                <div className="sectionContent">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus convallis consectetur. Cras lorem nibh, tincidunt ut molestie ac, tristique nec leo. Suspendisse non laoreet nisi, eu ultrices augue. Morbi vitae orci sagittis, ullamcorper massa sed, commodo lectus. Suspendisse potenti. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet justo vulputate, volutpat arcu non, porttitor libero. Duis a ex feugiat dolor vestibulum pellentesque. Nullam viverra tincidunt tortor, in tempor nulla vestibulum tincidunt. Ut tincidunt convallis pretium.
                    </p>
                </div> 
            </section>

            <div class="sectionDivider"/>

            <section ref={sectionVBA}>
                <div  className="sectionHeader">
                    <h1>Software Development - VBA</h1>
                </div>
                <div className="sectionContent">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus convallis consectetur. Cras lorem nibh, tincidunt ut molestie ac, tristique nec leo. Suspendisse non laoreet nisi, eu ultrices augue. Morbi vitae orci sagittis, ullamcorper massa sed, commodo lectus. Suspendisse potenti. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet justo vulputate, volutpat arcu non, porttitor libero. Duis a ex feugiat dolor vestibulum pellentesque. Nullam viverra tincidunt tortor, in tempor nulla vestibulum tincidunt. Ut tincidunt convallis pretium.
                    </p>
                </div>
            </section>

            <div class="sectionDivider"/>
            
            <section ref={sectionContact}>
                <div className="sectionHeader">
                    <h3>Contact Me</h3>
                </div>

                <div className="sectionContent">
                    <nav className="siteLinks">
                        <div className="horizontalList">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/lee-stevens-dev/"><img src="images/icon - linkedin.png"></img></a></li>
                            <li><a href="https://github.com/leesprojects"><img src="images/icon - github.png"></img></a></li>
                            <li><a href="https://leetcode.com/Zaeroso/"><img src="images/icon - leetcode.png"></img></a></li>
                        </ul>
                        </div>
                    </nav>
                    </div>
                
            </section>
            </motion.div>
        </main>   
        </motion.div>  
    )
}

export default Home