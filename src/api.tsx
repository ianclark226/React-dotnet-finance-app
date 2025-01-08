import axios from "axios"
import { CompanySearch } from "./company"

interface SearchResponse {
    data: any[]
}

type SearchCompaniesResult = SearchResponse | string;


export const searchCompanies = async(query: string) : Promise<SearchCompaniesResult> => {
    try {
        const response = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        )
        return response.data;

    } catch(error) {
        
        if ((axios as any).isAxiosError(error)) {
            console.error('Axios error occurred:', error);
            return error
        } else {
            console.log("unexpected error", error)
            return "An expected error has occured"
        }
    }
}