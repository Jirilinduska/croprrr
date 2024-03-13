
import CartItems from "../../components/CartItems/CartItems"
import IconsContact from "../../components/IconsContact/IconsContact"
import { useEffect } from "react"

const Cart = () => {

  useEffect( () => {
    document.title = 'Croprrr 🛒 | Cart '
  }, [])

  return (
    <>
        <CartItems />
        <IconsContact />
    </>
  )
}

export default Cart