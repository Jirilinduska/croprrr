import useFetch, { ShoppingItem } from "../../firebase/useFetch"

import { IoFilter } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"
import { IoIosMan } from "react-icons/io"
import { IoIosWoman } from "react-icons/io";


import ShopItem from "../ShopItem/ShopItem"
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react"

const ShopSection = () => {

    const { data, error, loading } = useFetch()

    const categories = ['Shoes', 'Shirts', 'Hoodies']

    const [showFilter, setShowFilter] = useState(false)
    const [type, setType] = useState('')
    const [gender, setGender] = useState('')
    const [items, setItems] = useState<ShoppingItem[] | null>(data)



    const handleGender = () => {
        if(data) {
            const filteredArray = data.filter( (oneItem) => oneItem.gender === gender)
            setItems(filteredArray)
        } 
    }

    const handleType= () => {

        if(data && !gender) {
            const filteredArray = data.filter( (oneItem) => oneItem.type === type.toLowerCase())
            setItems(filteredArray)
        }
        if (data && gender) {
            const filteredArray = data.filter( (oneItem) => oneItem.type === type.toLowerCase() && oneItem.gender === gender)
            setItems(filteredArray)
        }   
    }

    useEffect( () => {
        setItems(data)
    }, [data] )

    useEffect( () => {
        handleGender()
    }, [gender] )

    useEffect( () => {
        handleType()
    }, [type])

  return (

    <section className="min-h-[100vh] py-28">

        {error && <p>Something went wrong! {error.message}</p>}

        {loading && <Loader /> }


        {/* FILTER */}
        {data && showFilter && 
            <div className="fixed top-0 left-0 w-[90%] h-screen bg-white z-30 shadow-xl p-5
                            md:w-[60%]
                            lg:w-[40%]"                
            >

                <div 
                    className="absolute top-4 right-4 text-sm cursor-pointer bg-gray p-4 rounded-full"
                    onClick={ () => setShowFilter(false)}
                >
                    <RxCross1 />
                </div>

                <h3 className="text-2xl font-bold mb-4">Filter items</h3>

                <div className="flex items-center justify-between w-[100%] gap-1 mb-10">

                    <button 
                        className="flex items-center gap-1 justify-center bg-main-default w-[50%] h-8"
                        onClick={ () => setGender('Men') }
                    >
                        Men <IoIosMan /> 
                    </button>

                    <button 
                        className="flex items-center gap-1 justify-center bg-main-default w-[50%] h-8"
                        onClick={ () => setGender('Women') }
                    >
                        Women <IoIosWoman /> 
                    </button>

                </div>

                <p className="mb-4">Womens Wear</p>


                <div className="w-[100%]">

                    {categories.map( (oneCategory) => {
                        return (
                            <button 
                                className="w-[100%] bg-gray h-10 mb-4"
                                onClick={ () => setType(oneCategory)}
                            >
                                {oneCategory}
                            </button>
                        )
                    })}

                </div>




            </div>
        }
        
        {/* Filtered Shopping Items */}
        {items && 
            <div className="flex justify-center items-center flex-wrap gap-6">

                <div 
                    className="fixed top-24 left-6 bg-main-default p-4 text-2xl rounded-full cursor-pointer z-10 animate-pulse"
                    onClick={ () => setShowFilter(true)}
                >
                    <IoFilter />
                </div>

                {items.map( (x) => <ShopItem key={x.id} {...x}/>)}
            </div>
        }

    </section>
  )
}

export default ShopSection