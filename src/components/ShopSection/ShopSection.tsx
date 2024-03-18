import useFetch, { ShoppingItem } from "../../firebase/useFetch"


import { IoFilter } from "react-icons/io5"
import ShopFilter from "../ShopFilter/ShopFilter";
import ShopItem from "../ShopItem/ShopItem"
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react"

const ShopSection = () => {

    const { data, error, loading } = useFetch()

    const [showFilter, setShowFilter] = useState(false)
    const [type, setType] = useState('')
    const [items, setItems] = useState<ShoppingItem[] | null>([])
    const [activeGender, setActiveGender] = useState('')

    const handleCloseFilter = () => setShowFilter(false)

    const handleGender = (selectedGender: string) => {
        if (data) {
          const filteredArray = data.filter((oneItem) => oneItem.gender === selectedGender)
          setItems(filteredArray)
          setActiveGender(selectedGender)
          setType('')
        }
      }

    const handleType= (selectedCategory: string) => {

        if(data && !activeGender) {
            const filteredArray = data.filter( (oneItem) => oneItem.type === selectedCategory.toLowerCase())
            setItems(filteredArray)
        }
        if (data && activeGender) {
            const filteredArray = data.filter( (oneItem) => oneItem.type === selectedCategory.toLowerCase() && oneItem.gender === activeGender)
            setType(selectedCategory)
            setItems(filteredArray)
        }   
    }

    useEffect( () => {
        setItems(data)
    }, [data] )

  return (

    <section className="min-h-[100vh] py-28">

        {error && <p>Something went wrong! {error.message}</p>}

        {loading && <Loader /> }


        {/* Filtered Shopping Items */}
        {items && 
            <>
                <div className="flex justify-center items-center flex-wrap gap-6">
                    {items.map( (x) => <ShopItem key={x.id} {...x}/>)}
                </div>

                <IoFilter 
                    className="fixed top-20 left-4 p-2 w-[40px] h-[40px] bg-main-default rounded-full cursor-pointer"
                    onClick={ () => setShowFilter(true) }
                />

                {/* FILTER */}
                <ShopFilter
                    showFilter={showFilter}
                    handleCloseFilter={handleCloseFilter}
                    handleGender={handleGender}
                    activeGender={activeGender}
                    type={type}
                    handleType={handleType}
                />
            </>
        }
        

    </section>
  )
}

export default ShopSection