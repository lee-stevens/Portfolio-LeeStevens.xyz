import { Route, Routes } from 'react-router-dom'
import NavBar   from './components/navbar/' 
import Sidebar  from './components/sidebar/'
import Home     from './components/page-home/'
import Unity    from './components/page-unity/'
import WebDev   from './components/page-webdev'
import './App.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Unity></Unity>
      <WebDev></WebDev>
      <Sidebar></Sidebar>
    </>
  )
}

export default App