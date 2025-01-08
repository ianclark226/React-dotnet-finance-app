import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { data, useOutletContext } from 'react-router-dom';
import { getCashFlow } from '../../api';
import Table from '../table/Table';
import Spinner from '../spinner/Spinner';

type Props = {}

const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) =>
        company.operatingCashFlow
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedForInvestingActivites
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        
          company.netCashUsedProvidedByFinancingActivities
        
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) =>
        company.cashAtEndOfPeriod
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) =>
        company.capitalExpenditure
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) =>
        company.commonStockIssued
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) =>
        company.freeCashFlow
    },
  ];

const CashflowStatement = (props: Props) => {

    const ticker = useOutletContext<string>()
    const [cashflowData, setCashFlowData] = useState<CompanyCashFlow[]>()

    useEffect(() => {
        const getCashflowData = async () => {
            const value = await getCashFlow(ticker!)
            setCashFlowData(value!.data)
        }
        getCashflowData()
    }, [])

  return (
    <>
        {cashflowData ? (
            <Table config={config} data={cashflowData} />
        ) : (
            <Spinner/>
        )}
    </>
  )
}

export default CashflowStatement


