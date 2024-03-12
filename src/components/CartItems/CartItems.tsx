
import { useEffect, useState } from "react"
import CartItem from "../CartItem/CartItem"
import EmptyCart from "../EmptyCart/EmptyCart"
import { ShoppingItem } from "../../firebase/useFetch"
import { useCart } from "../../contexts/CartContext"


const CartItems = () => {
    
    const { totalItems, currentCart, removeAllItems, generateCart, totalPrice, countTotalPrice } = useCart() 

    useEffect(() => {
        generateCart();
        countTotalPrice()
    }, [currentCart, generateCart]);


  return (
    <section className="py-24 w-[90%] mx-auto md:w-[70%]">

        <div className="mx-auto flex justify-between items-center mb-4 px-2">

            <h3 className="font-bold">
                { currentCart && currentCart.length >= 1 ? 'Shopping Cart' : '' }
            </h3>
        
            <p 
                className="underline text-red-500 cursor-pointer"
                onClick={ () => {
                    removeAllItems()
                }}
            >
                { currentCart && currentCart.length >= 1 ? 'Remove all' : '' }
            </p>
        
        </div>


        <div className="">
            { currentCart && currentCart.map( (oneItem) => <CartItem key={oneItem.id} {...oneItem}/>)}
            { currentCart && currentCart.length === 0 ? <EmptyCart /> : null }
        </div>


            { totalItems && 

                <div className="w-[90%] mx-auto mt-8">

                    <div className="flex items-center justify-between mb-8 border-b-2 border-b-gray">
                        <p className="font-bold">Total items</p>
                        <p className="font-bold">{totalItems}</p>
                    </div>

                    <div className="flex items-center justify-between border-b-2 border-b-gray">
                        <p className="font-bold">Total Price</p>
                        <p className="font-bold">{(totalPrice.toFixed(2))}€</p>
                    </div>
                </div>
            }

    </section>
  )
}

export default CartItems