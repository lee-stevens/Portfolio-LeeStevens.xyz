import './index.scss'

const SideBar = () => {
    return (
      <section id="thisSideBar" className="sideBar">
          <nav>
              <a href="/" id="home">Home</a>
              <a href="/Unity" id="unity">Unity</a>
              <a href="/WebDev" id="webdev">Web Dev</a>
              <a href="https://leestevens-portfolio-three.netlify.app/" id="threejs">ThreeJS</a>
              <a href="/Contact" id="contact">Contact</a>
          </nav>
      </section>
    )
}

export default SideBar