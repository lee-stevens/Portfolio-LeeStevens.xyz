import React, { useState, useEffect } from 'react'
import Loader from "react-spinners/HashLoader";
import { BrowserRouter as Router } from 'react-router-dom'

import NavBar   from './components/navbar/navbar' 
import PageRouter from './components/pagerouter/pagerouter'
import './App.css'


function App() {
  const [loading, setLoading] = useState(false);

  const style = { 
    position: "fixed", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])

  return(
    <div className='App'>
      <NavBar/>
      {loading ? (
        <div className="pageLoader" style={style}>
          <Loader className="loader" color={"black"} loading={loading} size={150} />
          <p>Loading...</p>
        </div>
      ) : (
        <div className='pageContents'>
          <Router>
            
            <PageRouter/>
          </Router>
        </div>
      )}
    </div>
  )
}

export default App