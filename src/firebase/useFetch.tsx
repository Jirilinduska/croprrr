import { useEffect, useState } from "react"
import { projectFirestore } from "./config"


export interface ShoppingItem {
    id: string,
    beforePrice: string,
    brand: string,
    gender: string,
    price: number,
    sale: boolean,
    size: string[],
    title: string,
    type: string,
    image: string[],
    itemQuantity: number, 
    chosenSize: string,
}

const useFetch = () => {

    const [data, setData] = useState<ShoppingItem[] | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(true)

    
    useEffect( () => {

        projectFirestore.collection('shoppingitems').get().then( (snapshot) => {
            if(snapshot.empty) {
                setError(error)
            } else {
                let result: ShoppingItem[] = []
                snapshot.docs.map( (oneItem) => { 
                    return result.push( { id: oneItem.id, ...oneItem.data() } as ShoppingItem)
                })
                setData(result)
                setLoading(false)
            }

        }) .catch( (err) => {
            setError(err.message)
            setLoading(false)
        })
    }, [error] )

    return { data, error, loading }
}

export default useFetch