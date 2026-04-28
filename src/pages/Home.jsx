import home_banner from '../assets/home_banner.gif'

function Home() {
    return (
        <div className = "h-full">
            <div className = "relative h-full">
                <img src = {home_banner} className = "w-full h-full object-cover blur-sm"/>
                <div className = "absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <h1 className = "text-9xl text-white">NAME</h1>
                    <hr className = "w-1/3 border-white"/>
                    <p className = "text-3xl text-white">SUBTITLE GOES HERE</p>
                </div>
            </div>
        </div>
    )
}

export default Home