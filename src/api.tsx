import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompareableData, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanyTenK } from "./company";


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
  
// These two api route seem to throw errors. Comp = 403 Forbidden and TenK = 401 Unauthorized. Maybe you have to have a paid version of the api. Either way, the two exports and any files related to them are commented out.

  // export const getCompData = async (query: string) => {
  //   try {
  //     const data = await axios.get<CompanyCompareableData[]>(
  //       `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${apiKey}`
  //     );
  //     return data;
  //   } catch (error: any) {
  //     console.log("error message: ", error.message);
  //   }
  // };

  // export const getTenK = async (query: string) => {
  //   try {
  //     const data = await axios.get<CompanyTenK[]>(
  //       `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-k&page=0@apikey=${apiKey}`
  //     );
  //     return data;
  //   } catch (error: any) {
  //     console.log("error message: ", error.message);
  //   }
  // };

  export const getHistoricalDividend = async (query: string) => {
    try {
      const data = await axios.get<CompanyHistoricalDividend>(
        `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=${apiKey}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };
  