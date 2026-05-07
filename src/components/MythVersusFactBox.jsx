import { useState } from "react"

function MythVersusFactBox({ image, myth, fact }) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className = "relative rounded-md bg-stone-300 p-4 flex flex-row items-centered justify-center w-1/2 h-120">
            <div className = "flex flex-col p-6 w-1/2 justify-center gap-2">
                <h1 className = "text-4xl">Myth</h1>
                <p className = "text-2xl">{myth}</p>
            </div>
            <div className = "flex flex-col p-6 w-1/2 justify-center gap-2">
                <h1 className = "text-4xl">Fact</h1>
                <p className = "text-2xl">{fact}</p>
            </div>
            <div
                onClick = {() => setRevealed(!revealed)}
                className = {`overflow-hidden absolute top-0 bottom-0 w-1/2 bg-stone-700 rounded-md cursor-pointer transition-all duration-500 flex items-center justify-center ${revealed ? 'left-0' : 'left-1/2'}`}
            >
                <img src = {image} className = "absolute inset-0 w-full h-full object-cover blur-xs scale-110"/>
                <p className = "text-white hover:text-green-400 transition-colors text-4xl z-10">{revealed ? "View Myth" : "View Fact"}</p>
            </div>
        </div>
    )
}

export default MythVersusFactBox