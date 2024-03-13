
import ErrorPageSection from "../../components/ErrorPageSection/ErrorPageSection"
import { useEffect } from "react"

const Error = () => {

  useEffect( () => {
    document.title = '404 PAGE NOT FOUND | Croprrr 🛒'
  }, [])

  return (
    <>
        <ErrorPageSection />
    </>
  )
}

export default Error