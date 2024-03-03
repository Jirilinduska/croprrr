

import { useEffect, useState } from "react"
import useFetch from "../../firebase/useFetch"
import ShopItem from "../ShopItem/ShopItem"
import Loader from "../Loader/Loader"

const SalesSection = () => {

    const { data, loading, error } = useFetch()
    const [items, setItems] = useState(data)

    useEffect( () => {
        setItems( data && data.filter( (x) => x.sale === true) )
    }, [data] )

  return (
    <section className="w-[90%] mx-auto min-h-[100vh] py-24">

        { loading && <Loader /> }

        <h3 className="text-center text-xl md:text-3xl mb-6">Fresh <strong className="text-main-default">SALES</strong></h3>

        <div className="flex justify-center items-center flex-wrap gap-6">
            { items && items.map( (x) => <ShopItem key={x.id} {...x}/> ) }
        </div>

    </section>
  )
}

export default SalesSection