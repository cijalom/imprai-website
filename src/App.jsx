import { useRef } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from './pages/Home.jsx'
import FAQ from './pages/FAQ.jsx'
import MissionStatement from './pages/MissionStatement.jsx'
import MythsVersusFacts from './pages/MythsVersusFacts.jsx'
import TakeAction from './pages/TakeAction.jsx'

function App() {
    const mainRef = useRef(null)

    return (
        <HashRouter>
            <ScrollToTop mainRef={mainRef}/>
            <div className="flex flex-col h-screen">
                <Navbar/>
                <main ref={mainRef} className="flex-1 overflow-auto">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/mission-statement" element={<MissionStatement/>}/>
                        <Route path="/myths-versus-facts" element={<MythsVersusFacts/>}/>
                        <Route path="/take-action" element={<TakeAction/>}/>
                    </Routes>
                </main>
            </div>
        </HashRouter>
    )
}

export default App