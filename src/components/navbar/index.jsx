import './index.scss'

const NavBar = () => {
    return (
      <>
        <section id="navBar">
            <nav>
                <ul>
                <li>
                    <a href="https://www.linkedin.com/in/lee-stevens-dev/">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/leesprojects">GitHub</a>
                </li>
                <li>
                    <a href="https://leetcode.com/Zaeroso/">Leetcode</a>
                </li>
                </ul>
            </nav>
            </section>

            <section class="titleSection">
            <div>
                <video autoplay muted>
                <source src="videos/Video - Test A.mp4"></source>
                </video>
            </div>
            <div>
                <div>
                <img class="logo" src="images/icon - ls.jpg"></img>
                </div>
                <div>
                <h1>Lee Stevens | Portfolio </h1>
                </div>
            </div>
        </section>
      </>
    )
}

export default NavBar