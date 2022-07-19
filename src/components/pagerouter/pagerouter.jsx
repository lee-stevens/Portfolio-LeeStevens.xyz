import { Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Home     from '../page-home/home'
import Unity_Wildlands from '../unity-projects/wildlands'

import './index.css'


function PageRouter() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Unity-Wildlands" element={<Unity_Wildlands/>}/>
                <Route path="/Unity-Epsilon" element={<p>Project Epsilon</p>}/>
                <Route path="/WebDev-Portfolio" element={<p>React</p>}/>
                <Route path="/WebDev-ThreeJS" element={<p>ThreeJS</p>}/>
            </Routes>
        </AnimatePresence>
    )
  }
  
  export default PageRouter