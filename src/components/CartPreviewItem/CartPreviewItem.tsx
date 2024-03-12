import { useEffect, useState } from "react"
import { ShoppingItem } from "../../firebase/useFetch"
import useFetch from "../../firebase/useFetch"
import { Link } from "react-router-dom"
import { IoIosRemoveCircle } from "react-icons/io";


interface CartPreviewItemProps {
    oneItem: ShoppingItem,
    closeCartPreview: () => void,
    removeItemFromCart: (itemID: string) => void,
}

const CartPreviewItem: React.FC<CartPreviewItemProps> = ( { oneItem, closeCartPreview, removeItemFromCart } ) => {

    const { data } = useFetch()
    const [item, setItem] = useState<ShoppingItem | undefined>(undefined)

    const findItem = () => {
        const currentItem = data?.find( (x) => x.id === oneItem.id)
        setItem(currentItem)
    }

    useEffect( () => {
        findItem()
    }, [data] )

  return (


        <>
            { item && 

                <div 
                    className="relative h-14 w-[90%] flex items-center justify-between mb-2 hover:bg-main-default"
                >
                    
                    <div className="flex-grow-0 h-full mr-2">
                        <img 
                            src={item.image[0]} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>

                    <Link 
                        to={`/preview/${oneItem.id}`} 
                        onClick={closeCartPreview}
                        className="w-28 hover:underline flex-grow-0"
                    >
                        <p className="text-xs">{item.title}</p>
                    </Link>

                    <div className="text-xs font-bold flex-grow-0">
                        <p className="">{oneItem.itemQuantity}x</p>
                    </div>

                    <div className="text-xs font-bold flex-grow-0">
                        <p>{oneItem.price * oneItem.itemQuantity}€</p>
                    </div>

                    <div className="absolute right-[-30px] top-[50%] translate-y-[-50%]">

                        <IoIosRemoveCircle 
                            className="text-red-500 text-xl cursor-pointer transition duration-500 hover:text-red-700"
                            onClick={ () => removeItemFromCart(oneItem.id)}
                        />

                    </div>

                </div>
            }
        </>

  )
}

export default CartPreviewItem