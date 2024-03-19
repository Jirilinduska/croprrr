
import { useParams } from "react-router-dom"
import useFetch from "../../firebase/useFetch"
import OneItemPreview from "../../components/OneItemPreview/OneItemPreview"
import SliderItems from "../../components/SliderItems/SliderItems"
import IconsContact from "../../components/IconsContact/IconsContact"
import { useEffect, useState } from "react"
import { ShoppingItem } from "../../firebase/useFetch"
import Loader from "../../components/Loader/Loader"

const Preview = () => {

    const { itemID } = useParams()

    const {data, error, loading} = useFetch()

    const [oneItem, setOneItem] = useState<ShoppingItem | null>(null)
    

    const findItem = () => {   
        if(data) {
            const item = data.find( (oneItem) => oneItem.id === itemID)
            
            if(item) {
                setOneItem(item)
            }
        }
    }

    useEffect( () => {
        findItem()
        document.title = oneItem ? `${oneItem.title} | Croprrr 🛒 ` : 'Croprrr 🛒'
    }, [findItem, itemID] )

  return (
    <>

        { loading && <Loader/> }

        { error && (
            <div className="w-full h-screen flex items-center justify-center">
                <p>Something went wrong</p>
            </div>
        )}

        { oneItem && 
            <>
                <OneItemPreview { ...oneItem } />
                <SliderItems />
                <IconsContact />
            </>
        }

        {!loading && !oneItem && !error && (
            <div className="w-full h-screen flex items-center justify-center">
                <p>Item not found</p>
            </div>
        )}  

    </>
  )
}

export default Preview