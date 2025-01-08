import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../components/pages/home-page/HomePage";
import SearchPage from "../components/pages/search-page/SearchPage";
import CompanyPage from "../components/pages/company-page/CompanyPage";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <App />,
    children: [
        { path:'', element: <HomePage/> },
        { path:'search', element: <SearchPage/> },
        { path:'', element: <CompanyPage/> },
    ],
    }
])