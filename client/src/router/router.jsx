import { BrowserRouter, Routes, Route } from "react-router-dom"
import FilterProvider from "../filter_context/FilterProvider"
import SearchProvider from "../search_context/SearchProvider"
import { GeneralProvider } from "../utils"
import { Home } from "./../pages/index"

const router = () => {
    return (
        <GeneralProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <SearchProvider>
                            <FilterProvider>
                                <Home />
                            </FilterProvider>
                        </SearchProvider>} />
                </Routes>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default router