
import { BrowserRouter, Routes, Route } from "react-router-dom"

import SharedLayout from "./components/SharedLayout/SharedLayout"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path="/" element={ <SharedLayout /> } >

                <Route index element={ <Home /> } />

            </Route>


        </Routes>

    </BrowserRouter>

  )
}

export default App