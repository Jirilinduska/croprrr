
import { BrowserRouter, Routes, Route } from "react-router-dom"

import SharedLayout from "./components/SharedLayout/SharedLayout"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"

const App = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={ <SharedLayout /> } >

                <Route index element={ <Home /> } />

                <Route path="/shop" element={ <Shop /> } />

            </Route>


        </Routes>

    </BrowserRouter>

  )
}

export default App