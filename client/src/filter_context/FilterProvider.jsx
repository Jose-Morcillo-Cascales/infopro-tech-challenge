import { useState } from 'react'
import { FilterContext } from './FilterContext'

const FilterProvider = ({ children }) => {
    const [workers, setWorkers] = useState(false)
    return (
        <FilterContext.Provider value={{ workers, setWorkers }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider