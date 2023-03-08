import { useContext, useState } from 'react'
import { Navbar, Dashboard, FilterDashboard } from '../components'
import { SearchContext } from '../search_context/SearchContext'


const Home = () => {
  const { search } = useContext(SearchContext)
  const [seePass, setSeePass] = useState(false)
  return (
    <>
      <Navbar />
      {
        search.length === 0
          ?
          <Dashboard  seePass = {seePass} setSeePass ={setSeePass}/>
          :
          <FilterDashboard  seePass = {seePass} setSeePass ={setSeePass}/>
      }
    </>
  )
}

export default Home