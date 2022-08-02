import { Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Home     from '../page-home/home'

import './index.css'


function PageRouter() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </AnimatePresence>
    )
  }
  
  export default PageRouter