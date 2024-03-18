
import { Link } from "react-router-dom"

const ContactSection = () => {

  return (
        <section className="w-full h-[100vh] flex flex-col items-center justify-center gap-4">

            <h2 className="font-bold">Thanks for visiting my page!</h2>

            <p className="text-center">design + code 
                <Link to="https://jirilinduska.cz" className="text-main-default transition duration-500 hover:text-main-dark hover:underline">@jirilinduska</Link>, <br /> images <Link to="https://www.queens.cz" className="text-main-default transition duration-500 hover:text-main-dark hover:underline">@queens.cz</Link> </p>

            <Link
                to="https://jirilinduska.cz"
                className="text-main-default transition duration-500 hover:text-main-dark hover:underline"
            >
                https://jirilinduska.cz/
            </Link>

            <Link
                to="https://github.com/Jirilinduska"
                className="text-main-default transition duration-500 hover:text-main-dark hover:underline"
            >
                https://github.com/jirilinduska
            </Link>

        </section>
  )
}

export default ContactSection