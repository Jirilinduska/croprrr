
import { BrowserRouter, Routes, Route } from "react-router-dom"

import SharedLayout from "./components/SharedLayout/SharedLayout"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Preview from "./pages/Preview/Preview"
import Cart from "./pages/Cart/Cart"
import Sales from "./pages/Sales/Sales"
import Contact from "./pages/Contact/Contact"
import Error from "./pages/Error/Error"

const App = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={ <SharedLayout /> } >

                <Route index element={ <Home /> } />

                <Route path="/shop" element={ <Shop /> } />

                <Route path="/preview/:itemID" element={ <Preview /> } />

                <Route path="/cart" element={ <Cart /> } />

                <Route path="/sales" element={ <Sales /> } />

                <Route path="/contact" element={ <Contact /> } />

                <Route path="*" element={ <Error /> } />

            </Route>


        </Routes>

    </BrowserRouter>

  )
}

export default App