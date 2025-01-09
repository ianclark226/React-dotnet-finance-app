import React, { SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../../api'
import Search from '../../search/Search'
import ListPorfolio from '../../portfolio/list-portfolio/ListPorfolio'
import CardList from '../../cardlist/CardList'
import { CompanySearch } from '../../../company'

type Props = {}

const SearchPage = (props: Props) => {

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
            e.preventDefault();
            const result = await searchCompanies(search);
            //setServerError(result.data);
            if (typeof result === "string") {
              setServerError(result);
            } else if (Array.isArray(result.data)) {
              setSearchResult(result.data);
            }
          };
    
  return (
    <>
    
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
            <ListPorfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
            
            <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
            {serverError&& <h1>{serverError}</h1>}
          </>
  )
}

export default SearchPage