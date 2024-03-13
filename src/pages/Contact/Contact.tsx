import ContactSection from "../../components/ContactSection/ContactSection"
import { useEffect } from "react"

const Contact = () => {

  useEffect( () => {
    document.title = 'Croprrr 🛒 | Contact'
  }, [])

  return (
    <>
        <ContactSection />
    </>
  )
}

export default Contact