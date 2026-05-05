import mission_statement_1 from '../assets/mission_statement_1.png'
import mission_statement_2 from '../assets/mission_statement_2.png'
import mission_statement_3 from '../assets/mission_statement_3.png'
import mission_statement_banner from '../assets/mission_statement_banner.gif'

function MissionStatement() {
    return (
        <div>
            <div className = "relative h-52 bg-green-600 flex flex-col justify-center items-center gap-2 overflow-hidden">
                <img src = {mission_statement_banner} className = "object-cover blur-sm absolute inset-0 w-full h-full scale-110"/>
                <h1 className = "absolute text-6xl text-white">
                    Mission Statement
                </h1>
            </div>
            <div className = "p-4 bg-stone-300 flex flex-col justify center">
                <div className = "p-5 flex flex-row justify-center items-center gap-4">
                    <div className = "flex flex-col justify-start items-start gap-2">
                        <h1 className = "fade-in text-3xl text-black">placeholder</h1>
                        <p className = "fade-in text-black">other placeholder</p>
                    </div>
                    <div className = "fade-in h-6 w-px bg-black"></div>
                    <img className = "fade-in text-black" alt = "image placeholder"/>
                </div>
            </div>
        </div>
    )
}

export default MissionStatement