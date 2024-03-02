
import { Link } from "react-router-dom" 

const ItemsGrid = () => { 
  return (
    <section className="
                    w-[90%] mx-auto h-[100vh] py-6 grid grid-cols-1 grid-rows-4 gap-4 
                    lg:h-[80vh] lg:grid-cols-3 lg:grid-rows-2"
    >

        <Link 
            to="/shop" 
            className="relative row-span-1 lg:col-span-1 rounded-lg flex items-end bg-center bg-cover bg-no-repeat"
            style={ {backgroundImage: 'url("/images/shopitems/men/men-vans-old-skool.jpg")'} }
        >
            <p className="absolute left-0 bottom-0 w-[100%] p-2 text-3xl font-bold bg-gray bg-opacity-60">Fresh Designs</p>
        </Link>

        <Link 
            to="" 
            className="relative row-span-1 lg:col-span-1 rounded-lg flex items-end bg-center bg-cover bg-no-repeat"
            style={ {backgroundImage: 'url("/images/shopitems/men/the-north-face-m-ss-shirt.jpg")'} }
        >
            <p className="absolute left-0 bottom-0 w-[100%] p-2 text-3xl font-bold bg-gray bg-opacity-60">Shirts</p>
        </Link>

        <Link 
            to="" 
            className="relative row-span-1 lg:row-span-2 rounded-lg flex items-end bg-center bg-cover bg-no-repeat"
            style={ {backgroundImage: 'url("/images/shopitems/men/pulp-fiction-jack-rabbit.webp")'} }
        >
            <p className="absolute left-0 bottom-0 w-[100%] p-2 text-3xl font-bold bg-gray bg-opacity-60">Hoodies</p>
        </Link>

        <Link 
            to="" 
            className="relative row-span-1 lg:col-span-2 rounded-lg flex items-end bg-center bg-cover bg-no-repeat"
            style={ {backgroundImage: 'url("/images/shopitems/women/women-veja-venturi.jpg")'} }
        >
            <p className="absolute left-0 bottom-0 w-[100%] p-2 text-3xl font-bold bg-gray bg-opacity-60">Women</p>
        </Link>

    </section>
  )
}

export default ItemsGrid
