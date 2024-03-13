
import SalesSection from "../../components/SalesSection/SalesSection"
import IconsContact from "../../components/IconsContact/IconsContact"
import { useEffect } from "react"

const Sales = () => {

  useEffect( () => {
    document.title = 'Croprrr 🛒 | Sales '
  }, [])

  return (
    <>
        <SalesSection />
        <IconsContact />
    </>
  )
}

export default Sales