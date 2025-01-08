import axios from "axios"


interface SearchResponse {
    data: any[]
}

const apiKey = import.meta.env.VITE_API_KEY


export const searchCompanies = async (query: string) => {
    
      const data = await axios.get<SearchResponse>(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
      );
      return data;
    
  };