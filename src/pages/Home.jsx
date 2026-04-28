import home_banner from '../assets/home_banner.gif'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className = "h-full">
            <div className = "relative h-full">
                <img src = {home_banner} className = "w-full h-full object-cover blur-sm"/>
                <div className = "absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <h1 className = "text-9xl text-white fade-in delay-1">IMPRAI</h1>
                    <hr className = "w-1/2 border-white fade-in delay-1"/>
                    <p className = "text-3xl text-white fade-in delay-1">Working towards a brighter, smarter future</p>
                    <Link to = "/mission-statement" className = "absolute bottom-8 text-white text-sm tracking-wide hover:text-green-400 transition-colors">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home