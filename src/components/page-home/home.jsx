import './index.css'
import { motion } from "framer-motion"
import { pageAnimation } from "../frameranimations/frameranimations"
import { useRef } from 'react'


const Home = () => {
    const sectionAbout = useRef(null);
    const sectionGameDev = useRef(null);
    const sectionWebDev = useRef(null);
    const sectionVBA = useRef(null);
    const sectionContact = useRef(null);
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 48,
            behavior: "smooth"
        })
    }

    return (
        <main>


    
        <nav id="navBar">
            <button onClick={() => scrollToSection(sectionAbout)}>About Me</button>
            <button onClick={() => scrollToSection(sectionWebDev)}>Web Dev</button>
            <button onClick={() => scrollToSection(sectionVBA)}>VBA</button>
            <button onClick={() => scrollToSection(sectionGameDev)}>Game Dev</button>
            <button onClick={() => scrollToSection(sectionContact)}>Contact</button>
        </nav>
        


        <motion.div initial="initial" animate="animate" exit="exit"
        variants={pageAnimation}
        transition={{ duration: 2}}>

        <section ref={sectionAbout}>
            <div className="section-content">
                <div className="cards-container">
                    <div className="card-container" style={{width: "70em"}}>
                        <h2>My name is Lee Stevens and I am a programmer based in London. </h2>
                        <h3>Job Search Status | Looking For Web Development MEAN or MERN full-stack</h3><br/>

                        <h3>Current Projects</h3>
                            Inside-Work | 🔭<a href="https://forenzicswebapp2-sandbox.mxapps.io/">Forenzix Web App</a> for Audit Intelligence | Monday - Thursday<br/>
                            Outside-Work | <a href="https://github.com/leesprojects/MEAN-LeesProjects">LeesProjects</a> | Afterwork & Friday to Sunday<br/><br/>

                            <h3>About me</h3>
                            I'm a recent graduate from Brunel University with a BSc in Computer Science and an MA in Game Development.<br/>
                            My final 2 years of University was centered around C# and Unity game development. <br/><br/>
                            
                            Since graduating I have started working as a VBA and Web Developer at Audit Intelligence.<br/>
                            However, I am on a team of one and rely on self-teaching to become a better programmer.<br/>
                            That's why I am looking to join a talented team who can propel myself as a programmer whilst developing brilliant products.
                    </div>
                </div>
            </div>
        </section>
            


        <section ref={sectionWebDev}>
            <div className="section-header"><h1>Web Development</h1></div>

            <div className="section-content">
                <div className="cards-container">
                    <div className="card-container">
                        <a href="https://github.com/leesprojects/MEAN-LeesProjects"><img className="card-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"/></a>
                        <h2>Lees Projects | MEAN</h2>
                        <ul className="card-tags">
                            <li>Full-Stack</li>
                            <li>Angular</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                        </ul>
                        <p>
                            This web app is built with MEAN full-stack, it's essentially an all-in-one website for everything I could need at home or on the go<br/>
                            One sub-project is a flashcard system which I used for learning new languages and programming concepts!
                        </p>
                    </div>

                    <div className="card-container">
                        <a href=""><img className="card-img" src="./images/icons/react-1.png"/></a>
                        <h2>Portfolio | React.js</h2>
                        <ul className="card-tags">
                            <li>Front-End</li>
                            <li>React.js</li>
                            <li>Framer-Motion</li>
                            <li>SCSS</li>
                        </ul>
                        <p>
                            My first portfolio built using React.js, it was my first step in becomming a web developer<br/>
                            Since then I have learned a lot including MEAN and with this new knowledge, I recreated the portfolio with Angular right here!
                        </p>
                    </div>

                    <div className="card-container">
                        <a href="https://forenzicswebapp2-sandbox.mxapps.io/"><img className="card-img" src="https://avatars.githubusercontent.com/u/133443?s=280&v=4"/></a>
                        <h2>Forenzix Web</h2>
                        <ul className="card-tags">
                            <li>Mendix</li>
                            <li>Java</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                            <li>RDBMS</li>
                        </ul>
                        <p>
                            A bespoke web application for the company Forenzix built using Mendix<br/>
                            This was a 4-month long project and my first time building a large-scale web application for my company.<br/>
                            I was commissioned to use a low-code web app so in the future, less experienced developers would be able to pick it up if I left.<br/>
                            Although it's 'low-code', there was a lot of code involved, mainly SCSS, VBA and Java.
                        </p>
                    </div>

                    <div className="card-container">
                        <div className="cardContent">
                        <a href="https://leestevens-portfolio-three.netlify.app/"><img className="card-img" src="./images/icons/threejs.png"/></a>
                            <h2>Portfolio | Three.js</h2>
                            <ul className="card-tags">
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



        <section ref={sectionVBA}>
            <div className="section-header"><h1>VBA - Professional Work</h1></div>
            
            <div className="section-content">
                <div className="cards-container">
                    <div className="card-container">
                        <a><img className="card-img" src="/images/icons/vba.png"/></a>
                        <div className="cardContent">
                            <h2>Litigation Calculators</h2>
                            <ul className="card-tags">
                                <li>VBA</li>
                                <li>Excel</li>
                                <li>Motor Finance</li>
                                <li>Mortgages</li>
                                <li>Credit Cards</li>                                    
                            </ul>
                        </div> 
                    </div>
                    <div className="card-container">
                        <a><img className="card-img" src="/images/icons/vba.png"/></a>
                        <div className="cardContent">
                            <h2>Internal File Management System</h2>
                            <ul className="card-tags">
                                <li>VBA</li>
                                <li>Excel</li>
                                <li>Sharepoint</li>
                                <li>Automation</li>                                
                            </ul>
                        </div> 
                    </div>
                    <div className="card-container">
                        <a><img className="card-img" src="/images/icons/vba.png"/></a>
                        <div className="cardContent">
                            <h2>Invoice Generators & Emailing</h2>
                            <ul className="card-tags">
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
            <div className="section-header"><h1>Game Development</h1></div>
            
            <div className="section-content">
                <div className="cards-container">
                    <div className="card-container">
                        <div className="cardContent">
                            <div className="card-img">
                                <a><img className="card-img" src="/images/zephyr/main-1.png"/></a>
                            </div>
                            <h2>Project Zephyr</h2>
                            <ul className="card-tags">
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

                    <div className="card-container">
                        <div className="cardContent">
                            <div className="card-img">
                                <a><img className="card-img" src="./images/wildlands/minigame-ice.png"/></a>
                            </div>
                            <h2>Wildlands</h2>
                            <ul className="card-tags">
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