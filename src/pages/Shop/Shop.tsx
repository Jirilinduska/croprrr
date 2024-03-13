
import { useEffect } from "react"
import ShopSection from "../../components/ShopSection/ShopSection"

const Shop = () => {

  useEffect( () => {
    document.title = 'Croprrr 🛒 | Shop '
  }, [])

  return (
    <>
        <ShopSection />
    </>
  )
}

export default Shop 