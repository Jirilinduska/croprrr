
import { BrowserRouter, Routes, Route } from "react-router-dom"

import SharedLayout from "./components/SharedLayout/SharedLayout"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Preview from "./pages/Preview/Preview"
import Cart from "./pages/Cart/Cart"

const App = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={ <SharedLayout /> } >

                <Route index element={ <Home /> } />

                <Route path="/shop" element={ <Shop /> } />

                <Route path="/preview/:itemID" element={ <Preview /> } />

                <Route path="/cart" element={ <Cart /> } />

            </Route>


        </Routes>

    </BrowserRouter>

  )
}

export default App