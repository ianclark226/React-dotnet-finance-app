import './App.css'
import CardList from './components/cardlist/CardList'
import Search from './components/search/Search'
import React, { useState, SyntheticEvent } from 'react'
import { CompanySearch } from './company'
import { searchCompanies } from './api'
import ListPorfolio from './components/portfolio/list-portfolio/ListPorfolio'
import Navbar from './components/navbar/Navbar'

function App() {
  const [search, setSearch] = useState<string>("")
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string | null>(null)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log(e)
    }

    const onPortfolioCreate = (e: any) => {
      e.preventDefault()
      const exists = portfolioValues.find((value) => value === e.target[0].value)
      if(exists) return
      const updatedPortfollio = [...portfolioValues, e.target[0].value]
      setPortfolioValues(updatedPortfollio)
      
    }

    const onPortfolioDelete = (e: any) => {
      e.preventDefault()
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value
      })
      setPortfolioValues(removed)
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
          const response = await searchCompanies(search)
        if(typeof response === "string") {
          setServerError(response)
        } else if(Array.isArray(response.data)) {
          setSearchResult(response.data)
        }
    }

  return (
    
      <div className='App'>
        <Navbar/>

        <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
        <ListPorfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
        {serverError&& <h1>{serverError}</h1>}
        <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      </div>
     
    
  )
}

export default App
