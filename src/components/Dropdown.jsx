import { useState } from "react"

function Dropdown({ question, answer }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="rounded-md bg-stone-300 p-4">
            <button className="text-2xl hover:text-stone-600 transition-colors" onClick={() => setOpen(!open)}>{question}</button>
            <p className={`dropdown-content ${open ? 'open' : ''} text-lg`}>{answer}</p>
        </div>
    )
}

export default Dropdown