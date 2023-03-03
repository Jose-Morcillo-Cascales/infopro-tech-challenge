import { SearchContext } from "./SearchContext"
import {useSearchParams} from "react-router-dom"

const SearchProvider = ({ children}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get('q') || ''
  return (
    <SearchContext.Provider value={{searchParams,setSearchParams,search}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider