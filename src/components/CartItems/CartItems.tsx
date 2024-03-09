
import { useEffect, useState } from "react"
import CartItem from "../CartItem/CartItem"
import EmptyCart from "../EmptyCart/EmptyCart"
import { ShoppingItem } from "../../firebase/useFetch"
import { useCart } from "../../contexts/CartContext"


const CartItems = () => {

    const [itemsInCart, setItemsInCart] = useState<ShoppingItem[] | null>(null)
    
    const { totalItems, currentCart, removeAllItems } = useCart() 

    const handleGetCartItems = () => setItemsInCart(currentCart)  

    useEffect( () => {
        handleGetCartItems()        
    }, [currentCart] )

  return (
    <section className="py-24">

        <div className="mx-auto flex justify-between items-center mb-4 px-2">

            <h3 className="font-bold">
                { itemsInCart && itemsInCart.length >= 1 ? 'Shopping Cart' : '' }
            </h3>
        
            <p 
                className="underline text-red-500 cursor-pointer"
                onClick={ () => {
                    removeAllItems()
                }}
            >
                { itemsInCart && itemsInCart.length >= 1 ? 'Remove all' : '' }
            </p>
        
        </div>


        <div className="">
            { itemsInCart && itemsInCart.map( (oneItem) => <CartItem key={oneItem.id} {...oneItem}/>)}
            { itemsInCart && itemsInCart.length === 0 ? <EmptyCart /> : null }
        </div>

        <div className="w-[90%] mx-auto">

            <div className="flex items-center justify-between mb-8">
                <p className="font-bold">Total items</p>
                <p className="font-bold">{totalItems}</p>
            </div>

            <div className="flex items-center justify-between">
                <p className="font-bold">Total Price</p>
                <p className="font-bold">€</p>
            </div>

        </div>

    </section>
  )
}

export default CartItems