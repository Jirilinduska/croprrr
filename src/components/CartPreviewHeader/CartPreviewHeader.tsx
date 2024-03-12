
import { Link } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import CartPreviewItem from "../CartPreviewItem/CartPreviewItem"

interface CartPreviewHeaderProps {
    closeCartPreview: () => void
}

const CartPreviewHeader: React.FC<CartPreviewHeaderProps> = ( { closeCartPreview } ) => {

    const { totalPrice, currentCart, addQuantityOfItem } = useCart()

  return (
    <div className="fixed top-[55px] right-0 h-full w-full bg-primary p-4
                    sm:w-[60%]
                    md:w-[50%]
                    lg:w-[40%]  
                    xl:w-[30%]              
    ">

        { currentCart && currentCart.length === 0 && 
            <div className="flex items-center justify-center h-full w-full">
                <p className="text-center">ShoppingCart is empty!</p>
            </div> 
        }

        { currentCart && currentCart.length >= 1 &&
            <div className="">
                {currentCart.map( (oneItem) => <CartPreviewItem 
                                                    key={oneItem.id} 
                                                    oneItem={oneItem}
                                                    closeCartPreview={closeCartPreview}
                                                /> 
                )}
            </div>
        }

        <div className="absolute bottom-[50px] h-[50px] w-full pl-4 text-lg left-0 flex justify-between items-center">

            <p className="text-sm font-bold">Total Price: {totalPrice.toFixed(2)}€</p>

            <Link
                to="/cart"
                className="text-sm w-[30%] h-full bg-main-default p-2 text-white flex justify-center items-center"
                onClick={closeCartPreview}
            >
                Go To Cart
            </Link>

        </div>

    </div>
  )
}

export default CartPreviewHeader