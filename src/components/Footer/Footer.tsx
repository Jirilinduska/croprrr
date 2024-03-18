
import { Link } from "react-router-dom"

const Footer = () => {
    
  return (
    <footer className="w-[100%] h-[60px] px-5 flex justify-between items-center bg-secondary text-primary">

        <p>@2024</p>

        <Link 
            to="https://jirilinduska.cz/" 
            target="_blank"
        >
            @jirilinduska
        </Link>

    </footer>
  )
}

export default Footer