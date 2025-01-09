import React from 'react'
import Table from '../table/Table'
import RatioList from '../ratio-list/RatioList'
import { testIncomeStatementData } from '../table/testData'

type Props = {}

const tableConfig = [
    {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total Value of all a companys share in stock"
    }

]

const DesignGuide = (props: Props) => {
  return (
    <>
    <h1>FinShark Design Page</h1>
    <h2>This is FinShark's design page. This is where various designs are stored within the app</h2>
    <RatioList data={testIncomeStatementData} config={tableConfig}/>
    <Table data={testIncomeStatementData} config={tableConfig}/>
    </>
  )
}

export default DesignGuide