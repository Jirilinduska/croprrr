
import { Link } from "react-router-dom"

const ErrorPageSection = () => {
  return (
    <section className="h-[100vh] w-full flex flex-col items-center justify-center gap-8 text-center">
        
        <h2 className="font-bold text-5xl">404</h2>

        <h3 className="font-bold text-2xl">Page Not Found</h3>

        <p className="">
            The page you are looking for does not exist <br /> 
            Go to   <Link 
                        to="/"
                        className="underline text-main-default transition duration-500 hover:text-main-dark"
                    >
                        Home Page
                    </Link> 
        
        </p>

    </section>
  )
}

export default ErrorPageSection