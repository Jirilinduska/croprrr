
import { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom"

const Header = () => {

    const [showNav, setShowNav] = useState(false)

  return (
    <header className="
            fixed top-0 left-0 w-screen bg-primary h-[60px] flex justify-between items-center px-5 shadow-lg
            lg:px-20"
    >

        <nav className={`${ showNav 
                            ? 'fixed w-screen h-screen top-[60px] left-0 z-1 text-2xl flex flex-col gap-10 justify-center items-center bg-primary lg:block lg:static lg:text-lg lg:bg-transparent lg:h-auto lg:w-auto lg:space-x-6' 
                            : 'hidden lg:block lg:static lg:bg-transparent lg:h-auto lg:w-auto lg:space-x-6'
                        }`}
        >

            <NavLink to="/" className="text-secondary hover:text-rose-default">Home</NavLink>

            <NavLink to="/" className="text-secondary hover:text-rose-default">Shop</NavLink>

            <NavLink to="/" className="text-secondary hover:text-rose-default">Sales</NavLink>

            <NavLink to="/" className="text-secondary hover:text-rose-default">Sign-In</NavLink>

            <NavLink to="/" className="text-secondary hover:text-rose-default">Contact</NavLink>

        </nav>

        <div className="lg:hidden">

            <NavLink to="/">
                {/* <img src="" alt="" className="" /> */}
                <p>LogoForNow</p>
            </NavLink>

        </div>

        <div className="flex items-center gap-6">

            <div className="
                        text-3xl transition duration-500 
                        hover:text-rose-default"
            >
                <RiShoppingCart2Line className="cursor-pointer"/>
            </div>

            <div 
                className="
                        text-3xl transition duration-500 
                        hover:text-rose-default 
                        lg:hidden" 
                onClick={ () => setShowNav(!showNav) }
            >
                {showNav ? <RxCross1 className="cursor-pointer"/> : <RxHamburgerMenu className="cursor-pointer"/> }
            </div>

        </div>

    </header>
  )
}

export default Header