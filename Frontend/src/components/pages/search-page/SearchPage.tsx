import React, { SyntheticEvent, useEffect, useState } from 'react'
import { searchCompanies } from '../../../api'
import Search from '../../search/Search'
import ListPorfolio from '../../portfolio/list-portfolio/ListPorfolio'
import CardList from '../../cardlist/CardList'
import { CompanySearch } from '../../../company'
import { PortfolioGet } from '../../../models/Portfolio'
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../../services/PortfolioService'
import { toast } from 'react-toastify'

type Props = {}

const SearchPage = (props: Props) => {

    const [search, setSearch] = useState<string>("")
      const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[]>([])
      const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
      const [serverError, setServerError] = useState<string | null>(null)
    
        const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value)
            console.log(e)
        }

        useEffect(() => {
          getPortfolio()
        }, [])

        const getPortfolio = () => {
          portfolioGetAPI()
          .then((res) => {
            if(res?.data) {
              setPortfolioValues(res?.data)
            }
          }).catch((e) => {
            toast.warning('Could not get portfolio values!')
          })
        }

        
    
        const onPortfolioCreate = (e: any) => {
          e.preventDefault();
          portfolioAddAPI(e.target[0].value)
            .then((res) => {
              if (res?.status === 204) {
                toast.success("Stock added to portfolio!");
                getPortfolio();
              }
            })
            .catch((e) => {
              toast.warning("Could not add stock to portfolio!");
            });
        };
    
        const onPortfolioDelete = (e: any) => {
          e.preventDefault()
          portfolioDeleteAPI(e.target[0].value)
          .then((res) => {
            if(res?.status === 200) {
              toast.success("Stock deleted from portfolio")
              getPortfolio()
            }
          })
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