
import { FaRegEnvelope } from "react-icons/fa";


const Newsletter = () => {
  return (
    <section className="container h-[70vh] mx-auto flex justify-center items-center">

        <div className="text-center w-[100%]">

            <div className="flex justify-center items-center gap-3 text-xl mb-4">

                <FaRegEnvelope className=""/>

                <p className="uppercase font-bold">newsletter</p>

            </div>

            <p className="mb-4 w-[90%] text-sm text-center sm:w-[100%] lg:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laudantium?</p>

            <div className="flex items-center border-2 w-[100%] mx-auto rounded-lg overflow-hidden
                            sm:w-[90%]
                            lg:w-[50%]"
            >

                <div className="h-11 flex justify-center items-center p-2">
                    <FaRegEnvelope className="text-xl"/>
                </div>

                <input 
                    type="text" 
                    placeholder="Enter your email adress.."
                    className="h-11 focus:outline-none flex-grow"
                />

                <button 
                    className="bg-main-default text-primary h-11 w-20 text-xs transition duration-500
                                hover:bg-main-dark
                                sm:w-44 sm:text-lg"
                >
                    Subscribe
                </button>

            </div>

        </div>

    </section>
  )
}

export default Newsletter