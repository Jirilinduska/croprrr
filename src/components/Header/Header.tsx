
import { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom"
import ModalSearch from "../ModalSearch/ModalSearch";
import { ShoppingItem } from "../../firebase/useFetch";
import { useCart } from "../../contexts/CartContext";

const Header = () => {

    const { totalItems, countTotalQuantity } = useCart()

    const [showNav, setShowNav] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const closeModalSearch = () => {
        setShowSearch(false)
    }

    useEffect( () => {
        countTotalQuantity()
    }, [countTotalQuantity] )


  return ( 
    <header className="
            fixed top-0 left-0 w-screen bg-primary h-[60px] flex justify-between items-center px-5 shadow-lg z-10
            lg:px-20 lg:justify-normal"
    >

        {/* LOGO */}
        <div 
            className="h-[100%] lg:flex-grow-0 mr-10"
            onClick={ () => setShowNav(false) } 
        >

            <Link to="/">
                <img 
                    src="/images/logo/logo.png" 
                    alt="croprrr-logo" 
                    className="w-[100%] h-[100%]" 
                />
            </Link>

        </div>

        {/* NAVIGATION */}
        <nav className={`${ showNav 
                            ? 'fixed w-screen h-screen top-[60px] left-0 z-50 text-2xl flex flex-col gap-10 justify-center items-center bg-primary lg:flex-grow lg:block lg:static lg:text-lg lg:bg-transparent lg:h-auto lg:w-auto lg:space-x-6' 
                            : 'hidden lg:block lg:static lg:bg-transparent lg:h-auto lg:w-auto lg:space-x-6 lg:flex-grow'
                        }`} 
        > 

            <NavLink onClick={ () => setShowNav(false) } to="/" className="text-secondary hover:underline">Home</NavLink>

            <NavLink onClick={ () => setShowNav(false) } to="/shop" className="text-secondary hover:underline">Shop</NavLink>

            <NavLink onClick={ () => setShowNav(false) } to="/sales" className="text-secondary hover:underline">Sales</NavLink>

            <NavLink onClick={ () => setShowNav(false) } to="/" className="text-secondary hover:underline">Sign-In</NavLink>

            <NavLink onClick={ () => setShowNav(false) } to="/" className="text-secondary hover:underline">Contact</NavLink>

        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-6 flex-grow-0">

            {/* Search */}
            <div 
                className="text-3xl transition duration-500 hover:text-main-dark" 
                onClick={ () => {
                    setShowNav(false)
                    setShowSearch(true)
                } }
            >
                <IoSearch className="cursor-pointer"/>
            </div>
            
            { showSearch && <ModalSearch closeModalSearch={closeModalSearch}/> }

            {/* Shopping Cart */}
            <Link 
                to="/cart"
                onClick={ () => setShowNav(false) }
                className="relative text-3xl transition duration-500 hover:text-main-dark"
            >
                <RiShoppingCart2Line className="cursor-pointer"/>

                {totalItems >= 1 
                ?   <div className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-main-light text-center rounded-full flex items-center justify-center">
                        <p className="text-xs">{totalItems}</p>
                    </div>
                : null
                }
            </Link>

            {/* Hamburger menu */}
            <div 
                className="text-3xl transition duration-500 hover:text-main-dark lg:hidden" 
                onClick={ () => setShowNav(!showNav) }
            >
                {showNav ? <RxCross1 className="cursor-pointer"/> : <RxHamburgerMenu className="cursor-pointer"/> }
            </div>

        </div>

    </header>
  )
}

export default Header