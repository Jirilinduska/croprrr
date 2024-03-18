
import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";

const IconsContact = () => {
  
    return (
    <section className="h-[50vh] flex flex-col items-center justify-center">

        <h3 className="text-xl font-bold mb-4 lg:text-2xl">Contact us</h3>

        <p className="text-sm text-center mb-6 lg:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure!</p>

        <div className="flex items-center justify-center gap-6 text-xl lg:text-3xl">

            <Link 
                to=""
                className="text-secondary transition duration-500 hover:text-main-default"
            >
                <FaFacebook />
            </Link>

            <Link 
                to=""
                className="text-secondary transition duration-500 hover:text-main-default"
            >
                <FaInstagram />
            </Link>

            <Link 
                to=""
                className="text-secondary transition duration-500 hover:text-main-default"
            >
                <IoLogoTiktok />
            </Link>

            <Link 
                to=""
                className="text-secondary transition duration-500 hover:text-main-default"
            >
                <AiFillYoutube />
            </Link>

        </div>

    </section>
  )
}

export default IconsContact