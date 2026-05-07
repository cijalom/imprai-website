import mission_statement_1 from '../assets/mission_statement_1.png'
import mission_statement_2 from '../assets/mission_statement_2.png'
import mission_statement_3 from '../assets/mission_statement_3.png'
import mission_statement_banner from '../assets/mission_statement_banner.gif'
import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import {useState} from "react";

function MissionStatement() {
    const [loaded, setLoaded] = useState(false)

    return (
        <div>
            <div className = "relative h-52 bg-stone-700 flex flex-col justify-center items-center gap-2 overflow-hidden">
                <img
                    src = {mission_statement_banner}
                    onLoad = {() => setLoaded(true)}
                    className = {`object-cover blur-sm absolute inset-0 w-full h-full scale-110 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    alt = " "
                />
                <h1 className = "absolute text-6xl text-white">
                    Mission Statement
                </h1>
            </div>
            <div className = "p-4 bg-stone-200 flex flex-col justify center overflow-hidden">
                <div className = "p-5 flex flex-row justify-center items-center gap-12">
                    <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                        <h1 className = "fade-in text-3xl text-black">A future for everyone</h1>
                        <p className = "fade-in text-black text-lg">Our mission is to promote responsible artificial intelligence development through ethical regulation that protects human employment, preserves environmental resources, and ensures technology serves society; not replace it. </p>
                    </div>
                    <div className = "fade-in h-120 w-px bg-black"></div>
                    <img src = {mission_statement_1} className = "object-cover w-1/2 h-120 fade-in delay-2 text-black" alt = " "/>
                </div>
            </div>
            <div className = "p-4 bg-stone-300 flex flex-col justify center overflow-hidden">
                <div className = "p-5 flex flex-row justify-center items-center gap-12">
                    <img src = {mission_statement_2} className = "object-cover w-1/2 h-120 fade-in delay-2 text-black" alt = " "/>
                    <div className = "fade-in h-120 w-px bg-black"></div>
                    <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                        <h1 className = "fade-in text-3xl text-black">Protect the places you love</h1>
                        <p className = "fade-in text-black text-lg">AI infrastructure poses a great threat to local communities. What AI executives see as mere plots of land to build data centers on, we see as groups of people worth more than any machine.</p>
                    </div>
                </div>
            </div>
            <div className = "p-4 bg-stone-200 flex flex-col justify center overflow-hidden">
                <div className = "p-5 flex flex-row justify-center items-center gap-12">
                    <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                        <h1 className = "fade-in text-3xl text-black">Inform the world</h1>
                        <p className = "fade-in text-black text-lg">With AI constantly evolving, there's tons of information to learn.</p>
                        <Link to = "/faq" className = "text-green-800 text-lg tracking-wide fade-in hover:text-green-600 transition-colors">
                            Frequently Asked Questions
                        </Link>
                    </div>
                    <div className = "fade-in h-120 w-px bg-black"></div>
                    <img src = {mission_statement_3} className = "object-cover object-center w-1/2 h-120 fade-in delay-2 text-black" alt = " "/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MissionStatement