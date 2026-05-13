import faq_banner from "../assets/faq/faq_banner.gif";
import faq_cm from "../assets/faq/faq_cm.png";
import Footer from "../components/Footer.jsx"
import Dropdown from "../components/Dropdown.jsx"
import {Link} from "react-router-dom";
import {useState} from "react";

function FAQ() {
    const [loaded, setLoaded] = useState(false)

    return (
        <div>
            <div className = "relative h-52 bg-stone-700 flex flex-col justify-center items-center gap-2 overflow-hidden">
                <img
                    src = {faq_banner}
                    onLoad = {() => setLoaded(true)}
                    className = {`object-cover blur-sm absolute inset-0 w-full h-full scale-110 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    alt = " "
                />
                <h1 className = "absolute text-6xl text-white">
                    Frequently Asked Questions
                </h1>
            </div>
            <div className = "p-4 flex flex-col justify-center items-left gap-4">
                <Dropdown question = "Why is artificial intelligence a concern?" answer = "While AI offers innovation and efficiency, it also presents serious risks. Companies are increasingly replacing human workers with AI, and large scale data centers consume massive amounts of waste and energy, sometimes up to 4 million gallons of water per day."></Dropdown>
                <Dropdown question = "Who should care about this issue?" answer = "This issue affects workers across all industries, environmental advocates, investors and policymakers, and anyone concerned about the future of technology and society."></Dropdown>
                <Dropdown question = "Are you completely against AI? " answer = "No, we are not against AI; we support its responsible use. Our goal is to ensure AI is developed and used ethically, with proper regulations to protect people and the environment. "></Dropdown>
                <Dropdown question = "How does AI affect jobs?" answer = "AI can automate tasks that were previously done by humans, leading to job displacement. Without regulations, companies may prioritize cost savings over employee well being, putting many careers at risk. "></Dropdown>
                <Dropdown question = "How does AI impact the environment?" answer = "AI relies on data centers that require enormous amounts of electricity and water for cooling. These facilities contribute to carbon emissions and can strain local water supplies, making them a growing environmental concern."></Dropdown>
                <Dropdown question = "How does AI affect communities?" answer = "It can strain local resources like water and electricity near data centers, reducing quality of life by a significant margin."></Dropdown>
                <Dropdown question = "What solutions does your campaign propose? " answer = "We support laws protecting workers from being replaced unfairly by AI, regulations limiting environmental damage from data centers, and policies ensuring ethical AI development and transparency. "></Dropdown>
            </div>
            <div className = "p-4 bg-stone-200 flex flex-col justify center overflow-hidden">
                <div className = "p-5 flex flex-row justify-center items-center gap-12">
                    <div className = "flex flex-col justify-start items-start gap-2 w-1/3">
                        <h1 className = "fade-in text-3xl text-black">Combatting misinformation</h1>
                        <p className = "fade-in text-black text-lg">With all of the news and talk about AI, there's a lot of misinformation worth filtering through.</p>
                        <Link to = "/myths-versus-facts" className = "text-green-600 text-lg tracking-wide fade-in hover:text-green-800 transition-colors">
                            Myths Versus Facts
                        </Link>
                    </div>
                    <div className = "fade-in h-120 w-px bg-black"></div>
                    <img src = {faq_cm} className = "object-cover object-center w-200 h-120 fade-in delay-2 text-black" alt = " "/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FAQ