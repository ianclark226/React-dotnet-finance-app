import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../components/pages/home-page/HomePage";
import SearchPage from "../components/pages/search-page/SearchPage";
import CompanyPage from "../components/pages/company-page/CompanyPage";
import CompanyProfile from "../components/company-profile/CompanyProfile";
import IncomeStatement from "../components/income-statement/IncomeStatement";
import DesignGuide from "../components/design-guide/DesignGuide";
import BalanceSheet from "../components/balance-sheet/BalanceSheet";
import CashflowStatement from "../components/cashflow-statement/CashflowStatement";
import HistoricalDividend from "../components/historical-dividend/HistoricalDiv";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <App />,
    children: [
        { path:'', element: <HomePage/> },
        { path:'search', element: <SearchPage/> },
        { path:'design-guide', element: <DesignGuide/> },
        { path:'company/:ticker', 
          element: <CompanyPage/>, 
          children: [
            { path: "company-profile", element: <CompanyProfile/>},
            { path: "income-statement", element: <IncomeStatement/>},
            { path: "balance-sheet", element: <BalanceSheet/>},
            { path: "cashflow-statement", element: <CashflowStatement/>},
            { path: "historical-dividend", element: <HistoricalDividend /> },
        ]},
    ],
    }
])