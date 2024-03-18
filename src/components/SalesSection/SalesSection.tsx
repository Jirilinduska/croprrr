

import { useEffect, useState } from "react"
import useFetch from "../../firebase/useFetch"
import ShopItem from "../ShopItem/ShopItem"
import Loader from "../Loader/Loader"
import { ShoppingItem } from "../../firebase/useFetch"


const SalesSection = () => {

    const { data, loading, error } = useFetch()
    const [items, setItems] = useState<ShoppingItem[] | null>([])

    useEffect( () => {

      if(data) {
        setItems(data.filter( (x) => x.sale === true) )
      }
    }, [data] )

  return (
    <section className="w-[90%] mx-auto min-h-screen py-24">

        { loading && <Loader /> }

        <h3 className="text-center text-xl md:text-3xl mb-6">Fresh <strong className="text-main-default">SALES</strong></h3>

        <div className="flex justify-center items-center flex-wrap gap-6">
            { items && items.map( (x) => <ShopItem key={x.id} {...x}/> ) }
            { error && <p className="">Something went wrong...</p> }
        </div>

    </section>
  )
}

export default SalesSection