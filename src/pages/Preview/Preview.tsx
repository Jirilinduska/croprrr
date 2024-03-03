
import { useParams } from "react-router-dom"

import useFetch from "../../firebase/useFetch"
import OneItemPreview from "../../components/OneItemPreview/OneItemPreview"
import SliderItems from "../../components/SliderItems/SliderItems"
import IconsContact from "../../components/IconsContact/IconsContact"
import { useEffect, useState } from "react"
import { ShoppingItem } from "../../firebase/useFetch"

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
    }, [findItem, itemID] )

  return (
    <>

        { oneItem && 
            <>
                <OneItemPreview { ...oneItem } />
                <SliderItems />
                <IconsContact />
            </>
        }

    </>
  )
}

export default Preview