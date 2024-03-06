

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingItem } from "../../firebase/useFetch"
import useFetch from "../../firebase/useFetch"
import Loader from "../Loader/Loader"

const CartItem: React.FC<ShoppingItem> = ( { id, itemValue, chosenSize } ) => {

    const { data, loading, error } = useFetch()

    const [oneItem, setOneItem] = useState<ShoppingItem>()
    const [value, setValue] = useState(0)

    const handleFindItem = () => {
        if(data) {
            const item = data.find( (x) => x.id === id )
            setOneItem(item)
        }
    }

    const handleRemoveItem = () => {
        const arrayLS = JSON.parse(localStorage.getItem('CROPRR-CART') || "[]")
        const itemToRemove = arrayLS.find( (x: ShoppingItem) => x.id === id)
        const indexToRemove = arrayLS.indexOf(itemToRemove)
        arrayLS.splice(indexToRemove, 1)  
        localStorage.setItem('CROPRR-CART', JSON.stringify(arrayLS))
        window.location.reload()
    }

    useEffect( () => {
        handleFindItem()
        setValue(itemValue)        
    }, [data, itemValue] )

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
                style={ {backgroundImage: `url(${oneItem.image})`}}
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
                    onClick={ () => value === 1 ? setValue(1) : setValue(value - 1)}
                >
                    -
                </button>

                <p 
                    className="h-[30px] w-[30px] bg-primary md:w-[40px] md:h-[40px] flex items-center justify-center font-bold"
                >
                    {value}
                </p>
                
                <button 
                    className="h-[30px] w-[30px] bg-main-default md:w-[40px] md:h-[40px] font-bold text-white active:bg-main-dark"
                    onClick={ () => setValue(value + 1) }
                >
                    +
                </button>

            </div>

            <div className="">

                <p 
                    className="text-red-500 underline cursor-pointer mb-4"
                    onClick={handleRemoveItem}
                >
                    Remove
                </p>

                <p className="font-bold">{(value * parseFloat(oneItem.price)).toFixed(2)}€</p>

            </div>

        </div>}
    </>
  ) 
}

export default CartItem