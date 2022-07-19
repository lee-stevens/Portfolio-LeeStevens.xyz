import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home     from '../page-home'
import Unity    from '../page-unity'
import WebDev   from '../page-webdev'
import Contact from '../page-contact'
import './index.css'

function PageRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Unity" element={<Unity/>}/>
                <Route path="/WebDev" element={<WebDev/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </Router>
    )
  }
  
  export default PageRouter