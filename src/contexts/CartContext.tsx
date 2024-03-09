import { ReactNode, createContext, useContext, useState } from 'react'
import { ShoppingItem } from '../firebase/useFetch'


interface CartProviderProps {
    children: ReactNode
}

interface CartContextProps {
    currentCart: ShoppingItem[],
    totalItems: number,
    addItemToCart: (itemID: string, itemQuantity: number, chosenSize: string) => void
    removeItemFromCart: (itemID: string) => void,
    removeAllItems: () => void, 
    countTotalQuantity: () => void,
}

const CartContext = createContext<CartContextProps>({
    currentCart: [],
    totalItems: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeAllItems: () => {},
    countTotalQuantity: () => {},
})

export const CartProvider: React.FC<CartProviderProps> = ( { children } ) => {

    const [currentCart, setCurrentCart] = useState<ShoppingItem[]>([])
    const [totalItems, setTotalItems] = useState(0)

    const addItemToCart = ( itemID: string, itemQuantity: number, itemSize: string ) => {
        const newItem: Partial<ShoppingItem> = { 
            id: itemID,
            itemQuantity: itemQuantity,
            chosenSize: itemSize, 
        }
        const updatedCart = [...currentCart, newItem as ShoppingItem]
        setCurrentCart(updatedCart)
        countTotalQuantity()
    }

    const removeItemFromCart = (itemID: string) => {
        const updatedArray = currentCart.filter((x: ShoppingItem) => x.id !== itemID)
        setCurrentCart(updatedArray)
        countTotalQuantity()
    }
      
    const removeAllItems = () => setCurrentCart([])

    const countTotalQuantity = () => {
        const countItems = currentCart.reduce( (total: number, obj: ShoppingItem) => total + obj.itemQuantity, 0)
        setTotalItems(countItems)
    }

    


    const contextValue: CartContextProps = {
        totalItems,
        currentCart,
        addItemToCart,
        removeItemFromCart,
        removeAllItems,
        countTotalQuantity,
    }

    return (
        <CartContext.Provider value={ contextValue }>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
