import { Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Home     from '../page-home/home'
import Unity    from '../page-unity/unity'
import WebDev   from '../page-webdev/webdev'
import Contact from '../page-contact/contact'
import './index.css'


function PageRouter() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Unity" element={<Unity/>}/>
                <Route path="/WebDev" element={<WebDev/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
    )
  }
  
  export default PageRouter