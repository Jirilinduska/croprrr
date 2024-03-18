
import { ShoppingItem } from "../../firebase/useFetch" 
import { Link } from "react-router-dom"

const ShopItem: React.FC<ShoppingItem> = ( { id, beforePrice, gender, price, sale, title, image } ) => { 
    
  return ( 
    <Link
        to={`/preview/${id}`} 
        className="w-80 rounded-lg overflow-hidden transition duration-500 hover:shadow-lg">

        <div 
            className="relative h-[200px] w-[100%] bg-center bg-cover bg-no-repeat"
            style={ {backgroundImage: `url(${image[0]})`} }
        >
            {sale && <p className="uppercase absolute bottom-2 left-2 bg-main-default text-white px-3 py-1 rounded-lg">sale</p>}
        </div>

        <div className="flex justify-between px-3 py-2">
            <h3 className="text-sm lg:text-base">{title}</h3>
            <p className="text-main-dark">{gender}</p>
        </div>      

        <div className="px-3 py-2 flex items-center gap-3">
            <p className="font-bold">{price}€</p>
            { beforePrice ? <p className="font-bold line-through text-main-light text-sm">{beforePrice}€</p> : null }
        </div>

    </Link>
  )
}

export default ShopItem