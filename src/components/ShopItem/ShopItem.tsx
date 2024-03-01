
import { ShoppingItem } from "../../firebase/useFetch"
import { Link } from "react-router-dom"

const ShopItem: React.FC<ShoppingItem> = ( { id, brand, gender, price, sale, size, title, type, image } ) => {
  return (
    <Link
        to={`/preview/${id}`} 
        className="w-80 border-2 border-gray rounded-lg overflow-hidden transition duration-500 hover:shadow-lg">

        <div 
            className="relative h-[200px] w-[100%] bg-center bg-cover bg-no-repeat"
            style={ {backgroundImage: `url(${image})`} }
        >
            {sale && <p className="uppercase absolute bottom-2 left-2 bg-main-default text-white px-3 py-1 rounded-lg">sale</p>}
        </div>

        <div className="flex justify-between px-3 py-2">
            <h3 className="">{title}</h3>
            <p className="text-gray">{gender}</p>
        </div>      

        <div className="px-3 py-2">
            <p className="font-bold">{price}€</p>
        </div>

    </Link>
  )
}

export default ShopItem