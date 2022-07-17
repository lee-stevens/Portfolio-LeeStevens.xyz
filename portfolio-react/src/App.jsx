import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">

      <section>
        <nav class="navBar">
          <a href="https://www.linkedin.com/in/lee-stevens-dev/">Linked In</a>
          <a href="https://github.com/leesprojects">GitHub</a>
          <a href="https://leetcode.com/Zaeroso/">LeetCode</a>
        </nav>
      </section>

      <main>
          <section>
            <img class="logo" src="images/icon - ls.jpg"></img>
            <h1>Lee Stevens | Portfolio </h1>
          </section>

          <section>
            <button>Press me</button>
          </section>

      </main>     

    </div>
  )
}

export default App