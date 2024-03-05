import { ChangeEvent, useEffect, useState } from "react"
import useFetch from "../../firebase/useFetch"
import { ShoppingItem } from "../../firebase/useFetch"
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5";

interface ModalSearchProps {
    closeModalSearch: () => void
}


const ModalSearch: React.FC<ModalSearchProps> = ( { closeModalSearch } ) => {

    const [inputValue, setInputValue] = useState('')

    const { data, loading, error } = useFetch()

    const [array, setArray] = useState<ShoppingItem[]>([])
    
    const filterArray = () => {

        if(data) {

            const value = inputValue.trim()

            if(value === '') {
                setArray([])
            }

            if(value !== '') {

                const filtered = data.filter( (x) => {
                    return x.title.includes(value)
                })

                setArray(filtered)
            }

        }
    }

    useEffect( () => {
        filterArray()
    }, [inputValue] )


  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center bg-secondary bg-opacity-60">

        <div className="
                    relative w-[90%] h-[8%] bg-primary mt-20
                    lg:w-[60%]"
        >

            <IoClose 
                className="fixed top-3 right-3 text-primary text-3xl cursor-pointer transition duration-500 
                        hover:text-main-default
                        sm:text-4xl" 
                onClick={closeModalSearch}
            />
            
            <input 
                type="text" 
                placeholder="Search product..."
                className="w-[100%] h-[100%] text-sm focus:outline-none px-2 lg:text-lg" 
                value={inputValue}
                onChange={ (e: ChangeEvent<HTMLInputElement> ) => {
                    setInputValue(e.target.value)
                } }
            />

            <div className="absolute top-full left-0 w-[100%] max-h-[600px] overflow-y-auto">
                
                { array && array.map( (x) => {
                    return (
                        <Link
                            key={x.id}
                            to={`/preview/${x.id}`} 
                            onClick={closeModalSearch}
                            className="
                                    h-12 w-full bg-primary pr-1 flex items-center hover:cursor-pointer hover:bg-main-light
                                    sm:h-14 sm:pr-4"
                        >
                            
                            <div className="w-8 flex-grow-0 mr-2 sm:w-11">

                                <img 
                                    className="w-full h-full"
                                    src={x.image[0]} 
                                    alt="" 
                                />

                            </div>

                            <div className="flex-grow">
                                <p className="text-xs font-bold sm:text-sm">{x.title}</p>
                            </div>

                            <div className="flex-grow-0">
                                <p className="text-xs sm:text-sm">{x.price}€</p>
                            </div>
                        </Link>
                    )
                })  }
            </div>

        </div>

    </div>
  )
}

export default ModalSearch