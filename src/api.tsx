import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile } from "./company";


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

  export const getCompanyProfile = async (query: string) => {
    try {
      const data = await axios.get<CompanyProfile[]>(
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getKeyMetrics = async (query: string) => {
    try {
      const data = await axios.get<CompanyKeyMetrics[]>(
        `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${apiKey}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getIncomeStatement = async (query: string) => {
    try {
      const data = await axios.get<CompanyIncomeStatement[]>(
        `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${apiKey}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getBalanceSheet = async (query: string) => {
    try {
      const data = await axios.get<CompanyBalanceSheet[]>(
        `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${apiKey}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };

  export const getCashFlow = async (query: string) => {
    try {
      const data = await axios.get<CompanyCashFlow[]>(
        `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${apiKey}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };
  