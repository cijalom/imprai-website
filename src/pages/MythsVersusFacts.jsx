import MythVersusFactBox from "../components/MythVersusFactBox.jsx";
import mvf_banner from "../assets/mvf_banner.gif";
import {useState} from "react";
import Footer from "../components/Footer.jsx";
import mvf_1 from "../assets/mvf_1.png"
import mvf_2 from "../assets/mvf_2.png"
import mvf_3 from "../assets/mvf_3.png"
import mvf_4 from "../assets/mvf_4.png"
import mvf_bottom from "../assets/mvf_bottom.jpg"
import {Link} from "react-router-dom";

function MythsVersusFacts() {
    const [loaded, setLoaded] = useState(false)

    return (
        <div>
            <div className = "relative h-52 bg-stone-700 flex flex-col justify-center items-center gap-2 overflow-hidden">
                <img
                    src = {mvf_banner}
                    onLoad = {() => setLoaded(true)}
                    className = {`object-cover object-center blur-sm absolute inset-0 w-full h-full scale-110 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    alt = " "
                />
                <h1 className = "absolute text-6xl text-white">
                    Myths Versus Facts
                </h1>
            </div>
            <div className = "justify-center items-center flex flex-col p-4 gap-4">
                <div className = "justify-center items-center flex flex-row gap-4">
                    <MythVersusFactBox
                        myth = "AI can think like humans."
                        fact = "AI does not have emotion, consciousness, or self-awareness. It processes data and follows patterns based on programming and training."
                        image = {mvf_1}
                    />
                    <MythVersusFactBox
                        myth = "AI will take over all human jobs."
                        fact = "AI is more likely to change jobs than to eliminate them entirely. Many careers will evolve, and new jobs will be created that focus on working alongside AI."
                        image = {mvf_2}
                    />
                </div>
                <div className = "justify-center items-center flex flex-row gap-4">
                    <MythVersusFactBox
                        myth = "AI will soon become conscious."
                        fact = "AI, while able to replicate human speech and emotion, has no ability to have a genuine mind and soul like a human can."
                        image = {mvf_3}
                    />
                    <MythVersusFactBox
                        myth = "More AI means more progress."
                        fact = "While AI is able to help out in a multitude of industries, too much of it can replace human experience and ability that AI can't retain."
                        image = {mvf_4}
                    />
                </div>
                <div className = "p-4 bg-stone-300 flex flex-col justify center overflow-hidden rounded-md">
                    <div className = "p-5 flex flex-row justify-center items-center gap-12">
                        <img src = {mvf_bottom} className = "object-cover w-1/2 h-120 fade-in delay-2 text-black" alt = " "/>
                        <div className = "fade-in h-120 w-px bg-black"></div>
                        <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                            <h1 className = "fade-in text-3xl text-black">The biggest myth</h1>
                            <p className = "fade-in text-black text-lg">The biggest myth is that there's nothing ordinary people can do, but with grassroots organization and communities working with each other, we can ensure that humanity gets the better future it deserves.</p>
                            <Link to = "/take-action" className = "text-green-800 text-lg tracking-wide fade-in hover:text-green-600 transition-colors">
                                Take Action
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MythsVersusFacts