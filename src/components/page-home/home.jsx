import './index.css'
import { motion } from "framer-motion"
import { pageAnimation } from "../frameranimations/frameranimations"
import { useRef } from 'react'


const Home = () => {
    const headerSection = useRef(null);
    const sectionAbout = useRef(null);
    const sectionGameDev = useRef(null);
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


        <section>
            <nav id="navBar">
                <button onClick={() => scrollToSection(headerSection)}>Home</button>
                <button onClick={() => scrollToSection(sectionAbout)}>About Me</button>
                <button onClick={() => scrollToSection(sectionWebDev)}>Web Dev</button>
                <button onClick={() => scrollToSection(sectionGameDev)}>Game Dev</button>
                <button onClick={() => scrollToSection(sectionVBA)}>VBA</button>
                <button onClick={() => scrollToSection(sectionContact)}>Contact</button>
            </nav>
        </section>



        <motion.div initial="initial" animate="animate" exit="exit"
        variants={pageAnimation}
        transition={{ duration: 2}}>

        <section ref={headerSection} className="titleSection">
            <div className="headerImage">
                <img src="/images/zephyr/zephyr1.png"></img>
                <div className="centeredOverlay">
                    <h1>Lee Stevens</h1>
                </div>
            </div>
        </section>

        <section className="sectionAboutMe" ref={sectionAbout}>
            <div className="headerSection"><h1>About Me</h1></div>
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer">
                        <div className="tileContent">
                            <p>
                                My name is Lee Stevens and I am a programmer based in London. <br/>
                                 I currently work as a VBA developer at Audit Intelligence where my main goal is to automate our daily processes. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            


        <section className="wholePage" ref={sectionGameDev}>
            <div className="headerSection"><h1>Game Development</h1></div>
            
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer">
                        <div className="tileImage">
                            <a><img className="tileImage" id="item1" src="./images/icons/unity.png"/></a>
                        </div><div className="tileContent">
                            <h2>Project Zephyr</h2>
                            <ul className="tileTags">
                                <li>Unity</li>
                                <li>C#</li>
                                <li>Physics</li>
                            </ul>
                            <h3>
                                In-Development
                            </h3>
                            <p> 
                                Zephyr is a survival city builder game based in the clouds. With nothing but a simple ship, the hero must 
                                harvest resources from floating islands, defeat enemies and trade with their inhabitants in order to build
                                a fortress strong enough to one day, reclaim their throne. 
                            </p>
                        </div> 
                    </div>

                    <div className="tileContainer">
                        <div className="tileImage">
                            <a><img className="tileImage" id="item1" src="./images/wildlands/ice - square.png"/></a>
                        </div>
                        <div className="tileContent">
                            <h2>Wildlands</h2>
                            <ul className="tileTags">
                                <li>Unity</li>
                                <li>C#</li>
                                <li>Python</li>                                
                            </ul>
                            <p>
                                Wildlands was a submission for my MA module <i>Prototyping</i> where I worked in a team of 2 to produce 
                                prototypes at 4 stages.<br/>
                            </p>
                            <ol>
                                    <li>Paper (Conceptual)</li>
                                    <li>2D Clickteam</li>
                                    <li>3D Unity MVP</li>
                                    <li>3D Unity Demo</li>
                                </ol>
                            
                        </div> 
                    </div>
                    
                </div>
            </div> 
        </section>
        


        <section className="wholePage" ref={sectionWebDev}>
            <div className="headerSection"><h1 >Web Development</h1></div>
            
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer">
                        <a><img className="tileImage" id="item1" src="./images/icons/react1.png"/></a>
                        <h2>Portfolio - ReactJS</h2>
                        <ul className="tileTags">
                            <li>Front-End</li>
                            <li>ReactJS</li>
                            <li>Framer-Motion</li>
                            <li>SCSS</li>
                            <li>Routers</li>
                        </ul>
                        <p>
                            This website was my first project in the world of Web Development.
                            I learned the basics of HTML and CSS and soon after found ReactJS.
                            With a background in C# I loved the syntax of ReactJS. I went through 
                            many iterations and different designs before settling with this single 
                            page layout.
                        </p>
                    </div>

                    <div className="tileContainer">
                        <div className="tileContent">
                        <a href="https://leestevens-portfolio-three.netlify.app/"><img className="tileImage" id="item1" src="./images/icons/threejs.png"/></a>
                            <h2>Portfolio - Three.js</h2>
                            <ul className="tileTags">
                                <li>Front-End</li>
                                <li>Three.js</li>
                                <li>ReactJS</li>
                                <li>React-Three-Fiber</li>
                            </ul>
                            <p>
                                After developing this portfolio in ReactJS I wanted to try something completely different<br/>
                                I found that you could make 3D interactive websites using ThreeJS and that you can
                                integrate ReactJS using React-Three-Fiber. I knew
                                I was right at home since it was so similar to Unity Game Development<br/>
                            </p>
                        </div> 
                    </div>
                </div>
            </div> 
        </section>



        



        <section className="wholePage" ref={sectionVBA}>
            <div className="headerSection"><h1 >VBA - Professional Work</h1></div>
            
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer">
                        <a><img className="tileImage" id="item1" src="./images/icons/excel.png"/></a>
                        <div className="tileContent">
                            <h2>File Automation</h2>
                            <ul className="tileTags">
                                <li>VBA</li>
                                <li>Excel</li>
                                <li>Microsoft 365</li>
                                <li>Automation</li>                                
                            </ul>
                            <p>
                                <br/>
                            </p>
                            
                        </div> 
                    </div>
                    <div className="tileContainer">
                        <a><img className="tileImage" id="item1" src="./images/icons/excel.png"/></a>
                        <div className="tileContent">
                            <h2>Invoice Generators</h2>
                            <ul className="tileTags">
                                <li>VBA</li>
                                <li>Excel</li>
                                <li>Word</li>
                                <li>Automation</li>
                            </ul>
                            <p>
                                <br/>
                            </p>
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
                    <li><a href="https://www.linkedin.com/in/lee-stevens-dev/"><img src="images/icons/linkedin.png"></img></a></li>
                    <li><a href="https://github.com/leesprojects"><img src="images/icons/github.png"></img></a></li>
                    <li><a href="mailto:leepeterstevens@gmail.com"><img src="images/icons/email.png"></img></a></li>
                </ul>
            </nav>
        </footer>
        

        
        </motion.div>
       </main>   
    )
}

export default Home