import { ReactNode, createContext, useContext, useState } from 'react'
import { ShoppingItem } from '../firebase/useFetch'


interface CartProviderProps {
    children: ReactNode
}

interface CartContextProps {
    currentCart: ShoppingItem[],
    totalItems: number,
    totalPrice: number,
    addItemToCart: (itemID: string, itemQuantity: number, chosenSize: string, price: number) => void
    removeItemFromCart: (itemID: string) => void,
    removeAllItems: () => void, 
    countTotalQuantity: () => void,
    countTotalPrice: () => void,
    generateCart: () => void,
    addQuantityOfItem: (itemID: string, quantity: number, price: number) => void,
    removeQuantityOfItem: (itemID: string, quantity: number, price: number) => void,
}

const CartContext = createContext<CartContextProps>({
    currentCart: [],
    totalItems: 0,
    totalPrice: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeAllItems: () => {},
    countTotalQuantity: () => {},
    countTotalPrice: () => {},
    generateCart: () => {},
    addQuantityOfItem: () => {},
    removeQuantityOfItem: () => {},
})

export const CartProvider: React.FC<CartProviderProps> = ( { children } ) => {

    const [currentCart, setCurrentCart] = useState<ShoppingItem[]>([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const LOCAL_STORAGE_KEY = 'Croprrr'
    const getItemsFromLS = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
    const updateItemsLS = (arrayName: ShoppingItem[]) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrayName))

    // Add one item to cart
    const addItemToCart = ( itemID: string, itemQuantity: number, itemSize: string, price: number ) => {
        const newItem: Partial<ShoppingItem> = { 
            id: itemID,
            itemQuantity: itemQuantity,
            chosenSize: itemSize, 
            price: price,
        }
        const updatedCart = [...currentCart, newItem as ShoppingItem]
        updateItemsLS(updatedCart)
        setCurrentCart(updatedCart)
        countTotalQuantity() 
        countTotalPrice()
    }

    // Remove one item from cart
    const removeItemFromCart = (itemID: string) => {
        const arrayLS = getItemsFromLS()
        const updatedArray = arrayLS.filter((x: ShoppingItem) => x.id !== itemID)
        updateItemsLS(updatedArray)
        setCurrentCart(updatedArray)
        countTotalQuantity()
        countTotalPrice()
    }
      
    // Remove all items in cart
    const removeAllItems = () => {
        updateItemsLS( [] )
        setCurrentCart( [] )
        countTotalQuantity()
        countTotalPrice()
    }

    // Generate cart items in components after update
    const generateCart = () => {
        const arrayLS = getItemsFromLS()
        setCurrentCart(arrayLS)
    }

    // Count total quantity of cart items
    const countTotalQuantity = () => {
        const arrayLS = getItemsFromLS()
        const countItems = arrayLS.reduce( (total: number, obj: ShoppingItem) => total + obj.itemQuantity, 0)
        setTotalItems(countItems)
    }

    // Count total price of cart items
    const countTotalPrice = () => {
        const arrayLS = getItemsFromLS()
        const countPrice = arrayLS.reduce( (total: number, obj: ShoppingItem) => total + (obj.price * obj.itemQuantity), 0)
        setTotalPrice(countPrice)
    }

    // Add Quantity
    const addQuantityOfItem = (itemID: string, quantity: number, price: number) => {
        const arrayLS = getItemsFromLS();
    
        if (!arrayLS) {
            console.error("Local Storage is empty or not defined.");
            return;
        }
    
        const updatedArray = arrayLS.map((item: ShoppingItem) => {
            if (item.id === itemID) {
                item.itemQuantity += quantity;
                item.price = price
            }
            return item;
        });
    
        updateItemsLS(updatedArray)
        setCurrentCart(updatedArray)
        countTotalQuantity()
        countTotalPrice()
    }

    // Remove Quantity
    const removeQuantityOfItem = (itemID: string, quantity: number, price: number) => {
    
        const arrayLS = getItemsFromLS();
    
        if (!arrayLS) {
            console.error("Local Storage is empty or not defined.");
            return;
        }
    
        const updatedArray = arrayLS.map((item: ShoppingItem) => {
            if (item.id === itemID) {
                item.itemQuantity -= quantity
                item.price = price
            }
            return item;
        });
    
        updateItemsLS(updatedArray)
        setCurrentCart(updatedArray)
        countTotalQuantity()
        countTotalPrice()
    }
    
    const contextValue: CartContextProps = {
        totalPrice,
        totalItems,
        currentCart,
        addItemToCart,
        removeItemFromCart,
        removeAllItems,
        countTotalQuantity,
        countTotalPrice,
        generateCart,
        addQuantityOfItem,
        removeQuantityOfItem,
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
