import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/mission-statement", label: "Mission Statement" },
    { path: "/faq", label: "FAQ" },
    { path: "/myths-versus-facts", label: "Myths Versus Facts" },
    { path: "/take-action", label: "Take Action" }
]

function Navbar() {
    const location = useLocation();

    return (
        <nav className = "bg-stone-200 border-b border-stone-400">
            <div className = "mx-auto px-6 py-3 flex items-center justify-between">
                <div className = "flex items-center gap-6">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key = {path}
                            to = {path}
                            className = {location.pathname === path ?
                                "text-green-600 text-lg font-light hover:text-green-700" :
                                "text-stone-800 text-lg font-light hover:text-green-700"
                            }
                        >
                            {label}
                        </Link>
                    ))}
                </div>
                <div className = "bg-stone-300 rounded-full p-1">
                    <img src = {logo} alt = "logo" className = {"w-10 h-10"}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar