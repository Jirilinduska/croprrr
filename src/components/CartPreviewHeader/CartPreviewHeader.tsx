
import { Link } from "react-router-dom"
import { useCart } from "../../contexts/CartContext"
import CartPreviewItem from "../CartPreviewItem/CartPreviewItem"
import { IoMdCloseCircle } from "react-icons/io";


interface CartPreviewHeaderProps {
    closeCartPreview: () => void
}

const CartPreviewHeader: React.FC<CartPreviewHeaderProps> = ( { closeCartPreview } ) => {

    const { totalPrice, currentCart, removeItemFromCart, removeAllItems } = useCart()

  return (
    <div className="fixed top-[60px] right-0 h-full w-full bg-primary p-4 shadow-lg
                    sm:w-[60%]
                    md:w-[50%]
                    lg:w-[40%]
                    xl:w-[30%]              
    ">

        <div className="absolute hidden cursor-pointer sm:block sm:top-[-10px] sm:left-[-10px]">
            
            <IoMdCloseCircle 
                className="text-red-500 text-3xl transition duration-500 hover:text-red-700"
                onClick={closeCartPreview}
            />
        
        </div>

        { currentCart && currentCart.length === 0 && 
            <div className="flex items-center justify-center h-full w-full">
                <p className="text-center">Shopping cart is empty...</p>
            </div> 
        }

        { currentCart && currentCart.length >= 1 && <div className="flex justify-end">

                                                        <p 
                                                            className="cursor-pointer text-red-500 underline text-sm"
                                                            onClick={removeAllItems}
                                                        >
                                                            Remove all
                                                        </p>

                                                    </div> 
        }

        { currentCart && currentCart.length >= 1 &&
            <div className="overflow-y-scroll h-[80%] mt-4">
                {currentCart.map( (oneItem) => <CartPreviewItem 
                                                    key={oneItem.id} 
                                                    oneItem={oneItem}
                                                    closeCartPreview={closeCartPreview}
                                                    removeItemFromCart={removeItemFromCart}
                                                /> 
                )}
            </div>
        }

        { currentCart && currentCart.length >= 1 && 
            <div className="absolute bottom-[60px] h-[40px] w-full pl-4 text-lg left-0 flex justify-between items-center bg-primary">

                <p className="text-sm font-bold">Total Price: {totalPrice.toFixed(2)}€</p>

                <Link
                    to="/cart"
                    className="text-sm w-[30%] h-full bg-main-default p-2 text-white flex justify-center items-center transition duration-500 hover:bg-main-dark"
                    onClick={closeCartPreview}
                >
                    Go To Cart
                </Link>

            </div>
        }

    </div>
  )
}

export default CartPreviewHeader