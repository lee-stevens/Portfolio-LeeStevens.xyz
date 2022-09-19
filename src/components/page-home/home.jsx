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


    
        <nav id="navBar">
            <button onClick={() => scrollToSection(headerSection)}>Home</button>
            <button onClick={() => scrollToSection(sectionAbout)}>About Me</button>
            <button onClick={() => scrollToSection(sectionWebDev)}>Web Dev</button>
            <button onClick={() => scrollToSection(sectionVBA)}>VBA</button>
            <button onClick={() => scrollToSection(sectionGameDev)}>Game Dev</button>
            <button onClick={() => scrollToSection(sectionContact)}>Contact</button>
        </nav>
        


        <motion.div initial="initial" animate="animate" exit="exit"
        variants={pageAnimation}
        transition={{ duration: 2}}>

        <section className="sectionAboutMe" ref={sectionAbout}>
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer" style={{width: "70em"}}>
                        <div className="tileContent">
                            <h2>My name is Lee Stevens and I am a programmer based in London. </h2>
                            <h3>Job Search Status | Looking For Web Development MEAN or MERN full-stack</h3><br/>

                            <h3>Current Projects</h3>
                                Inside-Work | 🔭<a href="https://forenzicswebapp2-sandbox.mxapps.io/">Forenzix Web App</a> for Audit Intelligence | Monday - Thursday<br/>
                                Outside-Work | <a href="https://github.com/leesprojects/MEAN-LeesProjects">LeesProjects</a> | Afterwork & Friday to Sunday<br/><br/>

                             <h3>About me</h3>
                                Since graduating from Brunel University with a BSc in Computer Science and an MA in Game Development, to the projects at my current job,<br/>
                                I've had the priviledge of experiencing programming in many different capacities. I'm now looking for the best learning opportunity to settle down and learn from the best. <br/>
                                This website is still in development so I apologise if it's missing sections you're looking for, I'm happy to get in contact and fill in the blanks 🙂
                        </div>
                    </div>
                </div>
            </div>
        </section>
            


        <section ref={sectionWebDev}>
            <div className="headerSection"><h1 >Web Development</h1></div>
            <div className="sectionContent">
                <div className="tilesContainer">
                <div className="tileContainer">
                        <a><img className="tileImage" id="item1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"/></a>
                        <h2>Lees Projects | MEAN</h2>
                        <ul className="tileTags">
                            <li>Full-Stack</li>
                            <li>Angular</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
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
                        <a><img className="tileImage" id="item1" src="./images/icons/react-1.png"/></a>
                        <h2>Portfolio | React.js</h2>
                        <ul className="tileTags">
                            <li>Front-End</li>
                            <li>ReactJS</li>
                            <li>Framer-Motion</li>
                            <li>SCSS</li>
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
                            <h2>Portfolio | Three.js</h2>
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
                        <a><img className="tileImage" id="item1" src="/images/icons/vba.png"/></a>
                        <div className="tileContent">
                            <h2>File Automation</h2>
                            <ul className="tileTags">
                                <li>VBA</li>
                                <li>Excel</li>
                                <li>Automation</li>                                
                            </ul>
                            
                        </div> 
                    </div>
                    <div className="tileContainer">
                        <a><img className="tileImage" id="item1" src="/images/icons/vba.png"/></a>
                        <div className="tileContent">
                            <h2>Invoice Generators</h2>
                            <ul className="tileTags">
                                <li>VBA</li>
                                <li>Excel</li>
                                <li>Word</li>
                                <li>Automation</li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div> 
        </section>


        
        <section ref={sectionGameDev}>
            <div className="headerSection"><h1>Game Development</h1></div>
            
            <div className="sectionContent">
                <div className="tilesContainer">
                    <div className="tileContainer">
                        <div className="tileContent">
                            <div className="tileImage">
                                <a><img className="tileImage" id="item1" src="/images/zephyr/main-1.png"/></a>
                            </div>
                            <h2>Project Zephyr</h2>
                            <ul className="tileTags">
                                <li>Unity</li>
                                <li>C#</li>
                                <li>Physics-Heavy</li>
                                <li>Blender</li>
                                <li>Photoshop</li>   
                            </ul>
                            <p> 
                                Zephyr is a survival city builder game based in the clouds. With nothing but a simple ship, the hero must 
                                harvest resources from floating islands, defeat enemies and trade with their inhabitants in order to build
                                a fortress strong enough to one day, reclaim their throne. 
                            </p>
                        </div> 
                    </div>

                    <div className="tileContainer">
                        <div className="tileContent">
                            <div className="tileImage">
                                <a><img className="tileImage" id="item1" src="./images/wildlands/minigame-ice.png"/></a>
                            </div>
                            <h2>Wildlands</h2>
                            <ul className="tileTags">
                                <li>Unity</li>
                                <li>C#</li>
                                <li>Python</li>
                                <li>Blender</li>
                                <li>Photoshop</li>                                
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



        <footer id="sectionContact" ref={sectionContact}>
            <div id="navHeader">
                <h1>My Socials</h1>
            </div>
            
            <nav id="footerLinks"> 
                <ul>
                    <li><a href="https://www.linkedin.com/in/lee-stevens-dev/"><img src="images/icons/linkedin.png"></img></a></li>
                    <li><a href="https://github.com/leesprojects"><img src="images/icons/github.png"></img></a></li>
                    <li><a href="mailto:leepeterstevens@gmail.com">Leepeterstevens@gmail.com</a></li>
                </ul>
            </nav>
        </footer>
        

        
        </motion.div>
       </main>   
    )
}

export default Home