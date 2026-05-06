import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop({ mainRef }) {
    const { pathname } = useLocation()

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo(0, 0)
        }
    }, [pathname])

    return null
}

export default ScrollToTop