
import { useEffect, useState } from "react"
import CartItem from "../CartItem/CartItem"
import { ShoppingItem } from "../../firebase/useFetch"


const CartItems = () => {

    const [itemsInCart, setItemsInCart] = useState<ShoppingItem[] | null>(null)

    const handleItemsFromLS = () => {
        const arrayLS = JSON.parse(localStorage.getItem('CROPRR-CART') || "[]")
        setItemsInCart(arrayLS)
    }


    useEffect( () => {
        handleItemsFromLS()
    },[])

  return (
    <section className="py-24">

        <div className="mx-auto flex justify-between items-center mb-4 px-2">

            <h3 className="font-bold">Shopping Cart</h3>
        
            <p className="underline text-red-500 cursor-pointer">Remove all</p>
        
        </div>

        <div className="">
            { itemsInCart && itemsInCart.map( (oneItem) => <CartItem key={oneItem.id} {...oneItem}/>)}
        </div>



    </section>
  )
}

export default CartItems