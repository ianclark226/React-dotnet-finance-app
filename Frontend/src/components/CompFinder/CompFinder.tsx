// import React, { useEffect, useState } from "react";
// import CompFinderItem from "./CompFinderItem";
// import { CompanyCompareableData } from "../../company";
// import { getCompData } from "../../api";

// type Props = {
//   ticker: string;
// };

// const CompFinder = ({ ticker }: Props) => {
//   const [companyData, setCompanyData] = useState<CompanyCompareableData>();
//   useEffect(() => {
//     const getComps = async () => {
//       const value = await getCompData(ticker);
//       setCompanyData(value?.data[0]);
//     };
//     getComps();
//   }, [ticker]);
//   return (
//     <div className="inline-flex rounded-md shadow-sm m-4" role="group">
//       {companyData ? (
//         companyData?.peersList.map((ticker) => {
//           return <CompFinderItem ticker={ticker} />;
//         })
//       ) : (
//         <h1>not found</h1>
//       )}
//     </div>
//   );
// };

// export default CompFinder;