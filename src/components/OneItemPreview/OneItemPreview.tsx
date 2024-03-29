import { ChangeEvent, useState } from "react" 
import { ShoppingItem } from "../../firebase/useFetch"
import Slider from 'react-slick'
import AddToCartNotif from "../AddToCartNotif/AddToCartNotif"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useCart } from "../../contexts/CartContext"

const OneItemPreview: React.FC<ShoppingItem> = ( {  id, beforePrice, brand, gender, price, size, title, type, image } ) => {

    const [itemQuantity, setItemQuantity] = useState(1)
    const [itemSize, setItemSize] = useState(size[0])
    const [notifSuccess, setNotifSuccess] = useState(false)
    const [notifError, setNotifError] = useState(false)

    const { currentCart, addItemToCart } = useCart()

    const handleItemToCart = (itemID: string, itemValue: number, itemSize: string, price: number) => {
        
        const isItemIn = currentCart.find( (x: ShoppingItem) => x.id === itemID)

        if(!isItemIn) {
            addItemToCart(itemID, itemValue, itemSize, price)
            handleNotificationSuccess()
        } else {
            handleNotificationError()
        }
    }

    const handleItemSize = (event: ChangeEvent<HTMLSelectElement>) => {
        setItemSize(event.target.value)
    }

    const handleNotificationSuccess = () => {
        setNotifSuccess(true)
        setTimeout(() => {
            setNotifSuccess(false)
        }, 2000);
    }

    const handleNotificationError = () => {
        setNotifError(true)
        setTimeout(() => {
            setNotifError(false)
        }, 2000);
    }

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

  return ( 
    <section className="
            py-24 w-full mx-auto min-h-[100vh]
            lg:flex lg:justify-between lg:gap-10 lg:w-[90%]
            xl:w-[70%]" 
    > 

        { notifSuccess && <AddToCartNotif 
                                itemTitle={title}
                                notifMessage={` has been added to your cart.`}
                                bgColor={'#27D507'}
                                currentState={notifSuccess}
                            /> 
        }

        { notifError && <AddToCartNotif 
                            itemTitle={title}
                            notifMessage={` is already in your cart.`}
                            bgColor={'#FF4136'}
                            currentState={notifError}
                        /> 
        }

        {/* TEXT - ITEM INFO*/}
        <div className="
                px-4 mb-10
                lg:w-[40%] lg:flex lg:flex-col lg:order-1"
        >

            <h3 className="font-bold text-xl mb-6">{title}</h3>
        
            <div className="flex justify-between items-center text-lg mb-4">

                <p className="">Brand: {brand}</p>

                <p className="text-main-dark">{gender}</p>

            </div>


            {/* Select size element */}
            <div className="flex justify-between items-center mb-6">

                <p className="">Category: {type}</p>

                <select 
                    name="" 
                    id=""
                    className="w-20 h-9 border-2 border-gray focus:outline-none cursor-pointer"
                    value={itemSize}
                    onChange={handleItemSize}
                >
                    {size.map( (oneOption, index) => <option key={index} value={oneOption}>{oneOption}</option>)}
                </select>

            </div>

            <div className="flex justify-between items-center mb-6">

                <div className="flex items-center gap-4">
                    <p className="font-bold text-xl">{price}€</p>
                    { beforePrice ? <p className="line-through font-bold text-main-light text-sm">{beforePrice}€</p> : null}
                </div>

                <div className="flex justify-between items-center border-2 border-main-default rounded-lg">

                    <button 
                        className="w-9 h-9 bg-main-default font-bold active:bg-main-dark"
                        onClick={ () => itemQuantity === 1 ? setItemQuantity(1) : setItemQuantity(itemQuantity - 1) }
                    >
                        -
                    </button>

                    <p className="w-9 h-9 flex items-center justify-center font-bold">{itemQuantity}</p>

                    <button 
                        className="w-9 h-9 bg-main-default font-bold active:bg-main-dark"
                        onClick={ () => setItemQuantity( itemQuantity + 1 ) }
                    >
                        +
                    </button>

                </div>

            </div>

            <div className="flex justify-center 
                            md:justify-end"
            >
    
                <button 
                    onClick={ () => handleItemToCart(id, itemQuantity, itemSize, price) }
                    className=
                        "bg-main-default text-primary w-[90%] h-10 sm:w-[40%] md:w-[30%] rounded-lg transition duration-500 hover:bg-main-dark"
                    >
                        Add To Cart
                </button>

            </div>



        </div>

        {/* IMAGE */}
        <div 
            className="
                    overflow-hidden pb-10
                    lg:w-[60%]"
        >

                <Slider {...settings}>
                    { image.map( (imageSrc, index) => {
                        return (
                            <div key={index} className="w-[100%] h-[450px]">
                                <img 
                                    src={imageSrc} 
                                    className="w-[100%] h-[100%] object-contain lg:object-cover"
                                    alt={title}
                                />
                            </div>
                        )
                    }) }
                </Slider>


        </div>

    </section>
  )
}

export default OneItemPreview