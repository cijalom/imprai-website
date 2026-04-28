import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx'
import Proposal from './pages/Proposal.jsx'
import MissionStatement from './pages/MissionStatement.jsx'
import MythsVersusFacts from './pages/MythsVersusFacts.jsx'
import TakeAction from './pages/TakeAction.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/proposal" element = {<Proposal/>}/>
        <Route path = "/mission-statement" element = {<MissionStatement/>}/>
        <Route path = "/myths-versus-facts" element = {<MythsVersusFacts/>}/>
        <Route path = "/take-action" element = {<TakeAction/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
