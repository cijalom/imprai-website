import home_banner from '../assets/home_banner.gif'
import { Link } from "react-router-dom"
import {useState} from "react";

function Home() {
    const [loaded, setLoad] = useState(false)

    return (
        <div className = "h-full">
            <div className = "relative h-full overflow-hidden bg-stone-700">
                <img
                    src = {home_banner}
                    onLoad = {() => setLoad(true)}
                    className = {`w-full h-full object-cover blur-sm scale-110 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className = "absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <h1 className = "text-9xl text-white fade-in delay-2">IMPRAI</h1>
                    <hr className = "w-200 border-white fade-in delay-2"/>
                    <p className = "text-3xl text-white fade-in delay-3">Working towards a calmer, smarter future with regulated AI</p>
                    <Link to = "/mission-statement" className = "absolute bottom-8 text-white text-sm tracking-wide hover:text-green-400 transition-colors">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home