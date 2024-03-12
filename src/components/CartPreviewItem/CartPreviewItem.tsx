import { useEffect, useState } from "react"
import { ShoppingItem } from "../../firebase/useFetch"
import useFetch from "../../firebase/useFetch"
import { Link } from "react-router-dom"

interface CartPreviewItemProps {
    oneItem: ShoppingItem,
    closeCartPreview: () => void
}

const CartPreviewItem: React.FC<CartPreviewItemProps> = ( { oneItem, closeCartPreview } ) => {

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

                <Link 
                    className="h-14 w-full flex items-center justify-between mb-2 hover:bg-main-default"
                    to={`/preview/${oneItem.id}`}
                    onClick={closeCartPreview}
                >
                    
                    <div className="flex-grow-0 h-full mr-2">
                        <img 
                            src={item.image[0]} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>

                    <div className="w-28">
                        <p className="text-xs">{item.title}</p>
                    </div>

                    <div className="text-xs font-bold">
                        <p className="">{oneItem.itemQuantity}x</p>
                    </div>

                    <div className="text-xs font-bold">
                        <p>{oneItem.price * oneItem.itemQuantity}€</p>
                    </div>

                </Link>
            }
        </>

  )
}

export default CartPreviewItem