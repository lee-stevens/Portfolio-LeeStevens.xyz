import React, { useState, useEffect } from 'react'
import NavBar   from './components/navbar/' 
import PageRouter from './components/pagerouter/pagerouter'
import './App.css'
import Loader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  const style = { position: "fixed", 
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
      {loading ? (
        <div className="pageLoader" style={style}>
          <Loader className="loader" color={"#ffffff"} loading={loading} size={150} />
          <p>Loading...</p>
        </div>
        
      ) : (
        <div className='pageContents'>
          <NavBar/>
          <PageRouter/>
        </div>
      )}
    </div>
  )
}

export default App