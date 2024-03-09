

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingItem } from "../../firebase/useFetch"
import useFetch from "../../firebase/useFetch"
import { useCart } from "../../contexts/CartContext"
import Loader from "../Loader/Loader"

const CartItem: React.FC<ShoppingItem> = ( { id, itemQuantity, chosenSize } ) => {

    const { data, loading, error } = useFetch()
    const { removeItemFromCart } = useCart()

    const [oneItem, setOneItem] = useState<ShoppingItem>()
    const [quantity, setQuantity] = useState(0)

    const handleFindItem = () => {

        if(data) {
            const item = data.find( (x) => x.id === id )
            setOneItem(item)
        }
    }

    useEffect( () => {
        handleFindItem()
        setQuantity(itemQuantity)     
    }, [data, itemQuantity] )

  return (
    <>

        {loading && <Loader /> }

        {oneItem && 
        <div className="
                flex justify-between items-center bg-gray px-2 text-sm h-24 mb-2
                lg:h-[150px] lg:w-[90%] lg:mx-auto"
        >

            <div 
                className="
                        hidden bg-center bg-cover bg-no-repeat w-[20%] h-[100%]
                        sm:block"
                style={ {backgroundImage: `url(${oneItem.image[0]})`}} 
            >    
            </div>

            <div className="w-[40%]">

                <Link 
                    to={`/preview/${id}`} 
                    className="font-bold text-sm hover:underline"
                >
                    {oneItem.title}
                </Link>

                <p className="mt-4">Size: {chosenSize}</p>

            </div>

            <div className="flex items-center justify-center border-2 border-main-default rounded-lg">

                <button 
                    className="h-[30px] w-[30px] bg-main-default md:w-[40px] md:h-[40px] font-bold text-white active:bg-main-dark"
                    onClick={ () => quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)}
                >
                    -
                </button>

                <p 
                    className="h-[30px] w-[30px] bg-primary md:w-[40px] md:h-[40px] flex items-center justify-center font-bold"
                >
                    {quantity}
                </p>
                
                <button 
                    className="h-[30px] w-[30px] bg-main-default md:w-[40px] md:h-[40px] font-bold text-white active:bg-main-dark"
                    onClick={ () => setQuantity(quantity + 1) }
                >
                    +
                </button>

            </div>

            <div className="">

                <p 
                    className="text-red-500 underline cursor-pointer mb-4"
                    onClick={ () => removeItemFromCart(id) }
                >
                    Remove
                </p>

                <p className="font-bold">{(quantity * (parseFloat(oneItem.price))).toFixed(2)}€</p>

            </div>

        </div>}
    </>
  ) 
}

export default CartItem