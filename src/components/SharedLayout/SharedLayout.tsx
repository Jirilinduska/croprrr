

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import { CartProvider } from "../../contexts/CartContext"


const SharedLayout = () => {
  return (
    <>
        <CartProvider>

            <Header />
            
            <Outlet />

            <Footer />

        </CartProvider>
    </>
  )
}

export default SharedLayout