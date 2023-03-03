import { useContext } from 'react'
import { Navbar, Dashboard, FilterDashboard } from '../components'
import { SearchContext } from '../search_context/SearchContext'


const Home = () => {
  const { search } = useContext(SearchContext)
  return (
    <>
      <Navbar />
      {
        search.length === 0
          ?
          <Dashboard />
          :
          <FilterDashboard />
      }
    </>
  )
}

export default Home