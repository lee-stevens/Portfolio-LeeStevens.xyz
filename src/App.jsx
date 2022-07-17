import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar   from './components/navbar/' 
import Sidebar  from './components/sidebar/'
import Home     from './components/page-home/'
import Unity    from './components/page-unity/'
import WebDev   from './components/page-webdev'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Unity" element={<Unity/>}/>
          <Route path="/WebDev" element={<WebDev/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App