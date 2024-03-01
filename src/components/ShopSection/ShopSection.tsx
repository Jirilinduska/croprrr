import useFetch from "../../firebase/useFetch"

import { IoFilter } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"
import { IoIosMan } from "react-icons/io"
import { IoIosWoman } from "react-icons/io";


import ShopItem from "../ShopItem/ShopItem"
import { useState } from "react"

const ShopSection = () => {

    const [showFilter, setShowFilter] = useState(false)

    const { data, error, loading } = useFetch()

  return (

    <section className="min-h-[100vh] py-28">

        {error && <p>Something went wrong! {error.message}</p>}

        {loading && <p>Loading...</p>}

        {data && showFilter && 
            <div className="fixed top-0 left-0 w-[90%] h-screen bg-white z-30 shadow-xl p-5
                            md:w-[60%]
                            lg:w-[40%]"                
            >

                <div 
                    className="absolute top-4 right-4 text-sm cursor-pointer bg-gray p-4 rounded-full lg:text-2xl"
                    onClick={ () => setShowFilter(!showFilter)}
                >
                    <RxCross1 />
                </div>

                <h3 className="text-2xl font-bold mb-4">Filter items</h3>

                <p className="text-gray">Gender</p>

                <div className="flex items-center gap-4">
                    <input 
                        type="checkbox" 
                        className="" 
                    />
                    <label htmlFor="" className="flex items-center gap-2"> <IoIosMan /> Men</label>
                </div>

                <div className="flex items-center gap-4">
                    <input 
                        type="checkbox" 
                        className="" 
                    />
                    <label htmlFor="" className="flex items-center gap-2"> <IoIosWoman /> Women</label>
                </div>

                <div className="">

                    <div className="">
                        <input 
                            type="checkbox" 
                            className=""
                        />
                        <label htmlFor="" className="">Shoes</label>
                    </div>

                </div>

            </div>
        }
        
        {data && 
            <div className="flex justify-center items-center flex-wrap gap-6">

                <div 
                    className="fixed top-24 left-6 bg-gray p-4 text-2xl rounded-full cursor-pointer z-20 animate-pulse"
                    onClick={ () => setShowFilter(!showFilter)}
                >
                    <IoFilter />
                </div>

                {data.map( (x) => <ShopItem key={x.id} {...x}/>)}
            </div>
        }

    </section>
  )
}

export default ShopSection