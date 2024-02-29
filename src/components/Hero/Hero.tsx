
import { Link } from "react-router-dom"

const Hero = () => {
  
return (
    
    <section 
        className="flex flex-col justify-center items-center gap-10 h-screen w-[100%] bg-cover bg-no-repeat bg-center"
        style={{backgroundImage: 'url("/images/hero/hero-banner-1.jpg")'}}
    >
        
        <Link 
            to=""
            className="block bg-main-default w-[200px] h-[50px] leading-[50px] text-center text-lg text-primary transition duration-500 rounded-lg
                        hover:bg-main-dark"
        >
            Shop now
        </Link>

    </section>
  )
}

export default Hero