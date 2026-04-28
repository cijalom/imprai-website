import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/faq", label: "FAQ" },
    { path: "/mission-statement", label: "Mission Statement" },
    { path: "/myths-versus-facts", label: "Myths Versus Facts" },
    { path: "/take-action", label: "Take Action" }
]

function Navbar() {
    const location = useLocation();

    return (
        <nav className = "bg-stone-900 border-b border-stone-700">
            <div className = "mx-auto px-6 py-4 flex items-center justify-between">
                {/* Links */}
                <div className = "flex items-center gap-6">
                    {navLinks.map(({ path, label }) => (
                        <Link
                            key = {path}
                            to = {path}
                            className = {location.pathname === path ?
                                "text-green-400 text-lg font-light" :
                                "text-stone-300 text-lg font-light hover:text-green-600"
                            }
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Logo */}
                <img src = {logo} alt = "logo" className = {"w-10 h-10"}/>
            </div>
        </nav>
    )
}

export default Navbar