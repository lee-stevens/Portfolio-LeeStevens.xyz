import './index.css'
import { motion } from "framer-motion"
import { navBarAnimation, pageAnimation, contentSectionAnimation } from "../frameranimations/frameranimations"
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
        <main>

        <motion.div initial="initial" animate="animate" exit="exit"
        variants={navBarAnimation} 
        transition={{ duration: 4}}>
        <section>
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
        </motion.div>



        <motion.div initial="initial" animate="animate" exit="exit"
        variants={pageAnimation}
        transition={{ duration: 2}}>
        <section ref={headerSection} className="titleSection">
            <div className="headerImage">
                <img src="/images/background-b.jpg"></img>    
            </div>
        </section>



        <motion.div initial="initial" animate="animate" exit="exit"
        variants={contentSectionAnimation} 
        transition={{ duration: 2}}>


        <section className="wholePage" ref={sectionAbout}>
            <div className="headerSection"><h1 >Lee Stevens - About Me</h1></div>
        </section>
            


        <section className="wholePage" ref={sectionWebDev}>
            <div className="headerSection"><h1 >Web Development</h1></div>
            
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer">
                        <a href="/Unity-Wildlands"><img className="tileImage" id="item1" src="./images/icon - ls.jpg"/></a>
                        <div className="tileContent">
                            <h2>Portfolio - ReactJS</h2>
                            <ul>
                                <li>ReactJS</li>
                                <li>Framer-Motion</li>
                                <li>SCSS</li>
                                <li>Routers</li>
                            </ul>
                            <p>Wildlands was a submission for my MA module for producing Unity Prototypes. Wildlands was a submission for my MA module for producing Unity Prototypes. Wildlands was a submission for my MA module for producing Unity Prototypes</p>
                        </div> 
                    </div>
                    <div className="tileContainer">
                        <a href="/"><img className="tileImage" id="item1" src="./images/icon - ls.jpg"/></a>
                        <div className="tileContent">
                            <h2>Portfolio - Three.js</h2>
                            <ul>
                                <li>Three.js</li>
                                <li>ReactJS</li>
                                <li>React-Three-Fiber</li>
                                <li>Framer-Motion</li>
                                <li>SCSS</li>
                            </ul>
                            <p>Epsilon is a hobby project. Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project</p>
                        </div> 
                    </div>
                </div>
            </div> 
        </section>



        <section className="wholePage" ref={sectionUnity}>
            <div className="headerSection"><h1 >Game Development - Unity</h1></div>
            
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer">
                        <a href="/Unity-Wildlands"><img className="tileImage" id="item1" src="./images/icon - ls.jpg"/></a>
                        <div className="tileContent">
                            <h2>Wildlands</h2>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                                <li>Skill 4</li>
                            </ul>
                            <p>Wildlands was a submission for my MA module for producing Unity Prototypes. Wildlands was a submission for my MA module for producing Unity Prototypes. Wildlands was a submission for my MA module for producing Unity Prototypes</p>
                        </div> 
                    </div>
                    <div className="tileContainer">
                        <a href="/"><img className="tileImage" id="item1" src="./images/icon - ls.jpg"/></a>
                        <div className="tileContent">
                            <h2>Project Epsilon</h2>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                                <li>Skill 4</li>
                            </ul>
                            <p>Epsilon is a hobby project. Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project Epsilon is a hobby project</p>
                        </div> 
                    </div>
                </div>
            </div> 
        </section>



        <footer id="sectionContact" ref={sectionContact}>
            <div id="navHeader">
                <h1>My Socials</h1>
            </div>
            
            <nav id="footerLinks"> 
                <ul>
                    <li><a href="https://www.linkedin.com/in/lee-stevens-dev/"><img src="images/icon - linkedin.png"></img></a></li>
                    <li><a href="https://github.com/leesprojects"><img src="images/icon - github.png"></img></a></li>
                    <li><a href="mailto:leepeterstevens@gmail.com"><img src="images/icon - email.png"></img></a></li>
                </ul>
            </nav>
        </footer>
        

        
        </motion.div>
        </motion.div>  
        </main>   
    )
}

export default Home