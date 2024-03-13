
import Hero from "../../components/Hero/Hero"
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid"
import Newsletter from "../../components/Newsletter/Newsletter"
import SliderItems from "../../components/SliderItems/SliderItems"
import IconsContact from "../../components/IconsContact/IconsContact"
import { useEffect } from "react"

const Home = () => {

  useEffect( () => {
    document.title = 'Croprrr 🛒'
  }, [])

  return (
    <>
        <Hero />
        <ItemsGrid />
        <Newsletter />
        <SliderItems />
        <IconsContact />
    </>
  )
}

export default Home