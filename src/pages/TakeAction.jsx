import take_action_banner from "../assets/take_action/take_action_banner.gif";
import take_action_1 from "../assets/take_action/take_action_1.png";
import take_action_2 from "../assets/take_action/take_action_2.png";
import take_action_3 from "../assets/take_action/take_action_3.png";
import {useState} from "react";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";

function TakeAction() {
    const [loaded, setLoaded] = useState(false)

    return (
        <div>
            <div className = "relative h-52 bg-stone-700 flex flex-col justify-center items-center gap-2 overflow-hidden">
                <img
                    src = {take_action_banner}
                    onLoad = {() => setLoaded(true)}
                    className = {`object-cover blur-sm absolute inset-0 w-full h-full scale-110 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    alt = " "
                />
                <h1 className = "absolute text-6xl text-white">
                    Take Action
                </h1>
            </div>
            <div className = "p-4 bg-stone-200 flex flex-col justify center overflow-hidden">
                <div className = "p-5 flex flex-row justify-center items-center gap-12">
                    <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                        <h1 className = "fade-in text-3xl text-black">Contact local politicians</h1>
                        <p className = "fade-in text-black text-lg">In the US democracy, it is key for politicians to listen to their constituents. Contact your local senator today and ensure that your voice is heard in the fight against harmful usage of AI and AI infrastructure.</p>
                        <a href = "https://www.congress.gov/members/find-your-member" target = "_blank" rel = "noopener noreferrer" className = "text-green-800 text-lg tracking-wide fade-in hover:text-green-600 transition-colors">Congress.gov</a>
                    </div>
                    <div className = "fade-in h-120 w-px bg-black"></div>
                    <img src = {take_action_1} className = "object-cover w-1/2 h-120 fade-in delay-2 text-black" alt = " "/>
                </div>
            </div>
            <div className = "p-4 bg-stone-300 flex flex-col justify center overflow-hidden">
                <div className = "p-5 flex flex-row justify-center items-center gap-12">
                    <img src = {take_action_2} className = "object-cover w-1/2 h-120 fade-in delay-2 text-black" alt = " "/>
                    <div className = "fade-in h-120 w-px bg-black"></div>
                    <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                        <h1 className = "fade-in text-3xl text-black">Check out other organizations</h1>
                        <p className = "fade-in text-black text-lg">Imprai is far from the only group that cares about protecting humanity from unregulated AI. PauseAI is an organization under a non-profit dedicated to ensuring that AI doesn't replace what we love most. You can also donate to organizations like these to help them keep fighting for a better world.</p>
                        <a href = "https://pauseai.info/" target = "_blank" rel = "noopener noreferrer" className = "text-green-800 text-lg tracking-wide fade-in hover:text-green-600 transition-colors">PauseAI.info</a>
                    </div>
                </div>
            </div>
            <div className = "p-4 bg-stone-200 flex flex-col justify center overflow-hidden">
                <div className = "p-5 flex flex-row justify-center items-center gap-12">
                    <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                        <h1 className = "fade-in text-3xl text-black">Spread the word</h1>
                        <p className = "fade-in text-black text-lg">Don't be afraid to tell your communities about the various harms of AI; take initiative to organize and speak up for those around you.</p>
                        <a href = "https://activisthandbook.org/organising" target = "_blank" rel = "noopener noreferrer" className = "text-green-800 text-lg tracking-wide fade-in hover:text-green-600 transition-colors">ActivistHandbook.org</a>
                        <p className = "fade-in text-black text-lg">For questions on AI and it's impact, on how to organize communities to protect themselves, and on how to ensure a better tomorrow, feel free to contact us through Towson University.</p>
                    </div>
                    <div className = "fade-in h-120 w-px bg-black"></div>
                    <img src = {take_action_3} className = "object-cover object-center w-1/2 h-120 fade-in delay-2 text-black" alt = " "/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TakeAction