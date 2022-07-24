import './index.css'
import { motion } from 'framer-motion'
import { pageAnimation } from "../frameranimations/frameranimations"

const Unity_Wildlands = () => {
    return (
        <main>
        <section >
            <nav id="navBar">
                <a href="/"><button >Home</button></a>
            </nav>
        </section>

            <section className="titleSection">
                <div>
                    <video autoPlay muted loop>
                        <source src="videos/video - test b.mp4"></source>
                    </video>
                </div>
                <div>
                    <h1>Project Wildlands</h1>
                </div>
            </section>

            <section className="contentSection">
                <div >
                    <h1>Description</h1>
                </div>
                <div className="sectionContent">
                    <p>
                        Project description
                    </p>
                </div>

                <div className="sectionHeader">
                    <h1>Challenges</h1>
                </div>
                <div className="sectionContent">
                    <p>
                        Solutions
                    </p>
                </div>
            </section>
        </main>
        
    )
}

export default Unity_Wildlands