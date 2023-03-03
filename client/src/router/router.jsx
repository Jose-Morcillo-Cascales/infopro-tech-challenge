import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchProvider from "../search_context/SearchProvider"
import { GeneralProvider } from "../utils"
import { Home } from "./../pages/index"

const router = () => {
    return (
        <GeneralProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SearchProvider><Home /></SearchProvider>} />
                </Routes>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default router