

import { useEffect } from "react"
import { ShoppingItem } from "../../firebase/useFetch"

const OneItemPreview: React.FC<ShoppingItem> = ( {  id, brand, gender, price, sale, size, title, type, image } ) => {

  return (
    <section className="
            pt-24 w-[100%] mx-auto min-h-[100vh]
            lg:flex lg:justify-between"
    >

        {/* TEXT */}
        <div className="
                px-4 mb-10
                lg:w-[50%] lg:flex lg:flex-col"
        >

            <h3 className="font-bold text-xl mb-4">{title}</h3>
        
            <div className="flex justify-between items-center text-lg mb-4">

                <p className="">{brand}</p>

                <p className="text-gray">{gender}</p>

            </div>

            <div className="flex justify-between items-center mb-6">

                <p className="">{type}</p>

                <select 
                    name="" 
                    id=""
                    className="w-14 h-11 focus:outline-none"
                >
                    {size.map( (x) => <option value={x}>{x}</option>)}
                </select>

            </div>

            <div className="flex justify-between items-center mb-6">

                <div className="">
                    <p className="font-bold text-xl">{price}€</p>
                </div>

                <div className="flex justify-between items-center border-2 border-main-default rounded-lg">
                    <button className="w-9 h-9 bg-main-default font-bold">-</button>
                    <p className="w-9 h-9 flex items-center justify-center font-bold">1</p>
                    <button className="w-9 h-9 bg-main-default font-bold">+</button>
                </div>

            </div>

            <div className="flex justify-center 
                            md:justify-end"
            >
    
                <button 
                    className=
                        "bg-main-default text-primary w-[50%] h-10 md:w-[30%]"
                    >
                        Add To Cart
                </button>

            </div>



        </div>

        {/* IMAGE */}
        <div 
            className="
                    w-[95%] mx-auto h-[250px] bg-cover bg-no-repeat bg-center
                    sm:h-[500px] sm:w-[100%]
                    lg:w-[50%]"
            style={ {backgroundImage: `url(${image})`}}
        >
        </div>

    </section>
  )
}

export default OneItemPreview