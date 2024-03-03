
import { Link } from "react-router-dom"

const EmptyCart = () => {
  
    return (
    <section className="h-[500px] flex flex-col items-center justify-center gap-8">
        
        <div 
            className="bg-cover bg-center bg-no-repeat h-[80%] w-[100%] md:h-[60%] md:w-[60%] xl:[h-80%]"
            style={ {backgroundImage: 'url("/images/cart/cart-empty.png")'}}
        >

        </div>

        <div className="flex flex-col items-center justify-center">

            <h2 className="font-bold mb-10 lg:text-2xl ">Your shopping cart is empty!</h2>

            <Link 
                to="/shop"
                className="block bg-main-default w-[200px] h-[50px] leading-[50px] text-center text-lg text-primary transition duration-500 rounded-lg
                        hover:bg-main-dark"
            >
                Shop now
            </Link>

        </div>

    </section>
  )
}

export default EmptyCart