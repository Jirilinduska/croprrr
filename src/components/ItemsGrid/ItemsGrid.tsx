
import { Link } from "react-router-dom"

const ItemsGrid = () => {
  return (
    <section className="
                    w-[90%] mx-auto h-[100vh] py-6 grid grid-cols-1 grid-rows-4 gap-4 
                    lg:h-[80vh] lg:grid-cols-3 lg:grid-rows-2"
    >

        <Link 
            to="" 
            className="row-span-1 lg:col-span-1 rounded-lg flex items-end bg-center bg-cover bg-no-repeat"
            style={ {backgroundImage: 'url("/images/shopitems/men/men-vans-old-skool.jpg")'} }
        >
            <p className="mb-4 ml-4 text-3xl font-bold">Shoes</p>
        </Link>

        <Link to="" className="bg-secondary row-span-1 lg:col-span-1 rounded-lg flex items-end">
            <p className="text-primary mb-4 ml-4 text-2xl">Nadpis</p>
        </Link>

        <Link to="" className="bg-secondary row-span-1 lg:row-span-2 rounded-lg flex items-end">
            <p className="text-primary mb-4 ml-4 text-2xl">Nadpis</p>
        </Link>

        <Link to="" className="bg-secondary row-span-1 lg:col-span-2 rounded-lg flex items-end">
            <p className="text-primary mb-4 ml-4 text-2xl">Nadpis</p>
        </Link>

    </section>
  )
}

export default ItemsGrid
