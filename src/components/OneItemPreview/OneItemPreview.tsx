import { useState } from "react" 
import { ShoppingItem } from "../../firebase/useFetch"
import useFetch from "../../firebase/useFetch"
import Loader from "../Loader/Loader"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OneItemPreview: React.FC<ShoppingItem> = ( {  id, beforePrice, brand, gender, price, sale, size, title, type, image } ) => {

    const [value, setValue] = useState(1)

    const { loading } = useFetch()

    const handleItemToLS = (itemID: string, itemValue: number) => {
        
        const arrayLS = JSON.parse(localStorage.getItem('CROPRR-CART') || "[]")

        const isItemIn = arrayLS.find( (x: ShoppingItem) => x.id === itemID)

        if(!isItemIn) {
            const newItemToLS = {
                id: itemID,
                itemValue: value
            }
            arrayLS.push(newItemToLS)
            localStorage.setItem('CROPRR-CART', JSON.stringify(arrayLS))
        }
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

  return ( 
    <section className="
            py-24 w-[100%] mx-auto min-h-[100vh] bg-gray
            lg:flex lg:justify-between lg:gap-10" 
    > 
 
        { loading && <Loader/>}

        {/* TEXT */}
        <div className="
                px-4 mb-10
                lg:w-[50%] lg:flex lg:flex-col"
        >

            <h3 className="font-bold text-xl mb-4">{title}</h3>
        
            <div className="flex justify-between items-center text-lg mb-4">

                <p className="">{brand}</p>

                <p className="text-main-dark">{gender}</p>

            </div>

            <div className="flex justify-between items-center mb-6">

                <p className="">{type}</p>

                <select 
                    name="" 
                    id=""
                    className="w-20 h-9 border-2 border-gray focus:outline-none cursor-pointer"
                    required
                >
                    {size.map( (x) => <option value={x}>{x}</option>)}
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
                        onClick={ () => value === 1 ? setValue(1) : setValue(value - 1) }
                    >
                        -
                    </button>

                    <p className="w-9 h-9 flex items-center justify-center font-bold">{value}</p>

                    <button 
                        className="w-9 h-9 bg-main-default font-bold active:bg-main-dark"
                        onClick={ () => setValue( value + 1 ) }
                    >
                        +
                    </button>

                </div>

            </div>

            <div className="flex justify-center 
                            md:justify-end"
            >
    
                <button 
                    onClick={ () => handleItemToLS(id, value)}
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
                    lg:w-[50%]"
        >

                <Slider {...settings}>
                    { image.map( (x) => {
                        return (
                            <div className="w-[100%] h-[450px]">
                                <img 
                                    src={x} 
                                    className="w-[100%] h-[100%] object-contain"
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