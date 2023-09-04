"use client";

import {
  useState,
  FormEvent,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import {
  updateCompanyName,
  updateLoanAmount,
  updateYearEstablished,
  addToBalanceSheet,
} from "../actions";
import { IBalanceSheetEntry } from "../interfaces";

interface IForm {
  balanceSheet: Array<IBalanceSheetEntry>;
  setBalanceSheet: Dispatch<SetStateAction<Array<IBalanceSheetEntry>>>;
}

const Form = ({ balanceSheet, setBalanceSheet }: IForm) => {
  const [companyName, setCompanyName] = useState("");
  const [yearOfEstd, setYearOfEstd] = useState(new Date().getFullYear());
  const [loanAmt, setLoanAmt] = useState(0);
  const [selectedAccountProvider, setSelectedAccountProvider] = useState("");
  const [accountingProviders, setAccountingProviders] = useState([]);

  useEffect(() => {
    if (accountingProviders.length === 0) {
      (async () => {
        try {
          const response = await fetch("/api/accountingproviders");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setAccountingProviders(data.providers);
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      })();
    }
  }, [accountingProviders]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Form submit handler triggered!`);
    // Handle form validations including client-side
    updateCompanyName(companyName);
    updateYearEstablished(yearOfEstd);
    updateLoanAmount(loanAmt);
    setBalanceSheet([
      {
        year: 2023,
        month: 9,
        profitOrLoss: 92036,
        assetsValue: 242199,
      },
      {
        year: 2023,
        month: 8,
        profitOrLoss: 921463,
        assetsValue: 414289,
      },
      {
        year: 2023,
        month: 7,
        profitOrLoss: -239227,
        assetsValue: 566515,
      },
      {
        year: 2023,
        month: 6,
        profitOrLoss: 789325,
        assetsValue: 390810,
      },
      {
        year: 2023,
        month: 5,
        profitOrLoss: -987781,
        assetsValue: 967877,
      },
      {
        year: 2023,
        month: 4,
        profitOrLoss: 716456,
        assetsValue: 122031,
      },
      {
        year: 2023,
        month: 3,
        profitOrLoss: 965785,
        assetsValue: 218319,
      },
      {
        year: 2023,
        month: 2,
        profitOrLoss: 608633,
        assetsValue: 613855,
      },
      {
        year: 2023,
        month: 1,
        profitOrLoss: -787775,
        assetsValue: 582861,
      },
      {
        year: 2022,
        month: 12,
        profitOrLoss: -487129,
        assetsValue: 142685,
      },
      {
        year: 2022,
        month: 11,
        profitOrLoss: -200553,
        assetsValue: 861393,
      },
      {
        year: 2022,
        month: 10,
        profitOrLoss: 607500,
        assetsValue: 702228,
      },
      {
        year: 2022,
        month: 9,
        profitOrLoss: -990379,
        assetsValue: 381448,
      },
      {
        year: 2022,
        month: 8,
        profitOrLoss: -334765,
        assetsValue: 691630,
      },
      {
        year: 2022,
        month: 7,
        profitOrLoss: 368268,
        assetsValue: 935608,
      },
      {
        year: 2022,
        month: 6,
        profitOrLoss: -272348,
        assetsValue: 606587,
      },
      {
        year: 2022,
        month: 5,
        profitOrLoss: 917273,
        assetsValue: 879783,
      },
      {
        year: 2022,
        month: 4,
        profitOrLoss: -106644,
        assetsValue: 862518,
      },
      {
        year: 2022,
        month: 3,
        profitOrLoss: -511172,
        assetsValue: 465700,
      },
      {
        year: 2022,
        month: 2,
        profitOrLoss: 149958,
        assetsValue: 628067,
      },
    ]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Company Name</span> :
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label>
        <span>Year of Establishment</span> :
        <input
          type="number"
          value={yearOfEstd}
          onChange={(e) => setYearOfEstd(parseInt(e.target.value))}
        />
      </label>
      <label>
        <span>Requested Loan Amount</span> :
        <input
          type="number"
          min="0"
          value={loanAmt}
          onChange={(e) => setLoanAmt(parseInt(e.target.value))}
        />
      </label>
      {accountingProviders.length !== 0 ? (
        <label>
          <span>Select Accounting Provider</span> :
          <select
            onChange={(e) => setSelectedAccountProvider(e.target.value)}
            value={selectedAccountProvider}
          >
            {accountingProviders.map((provider, idx) => (
              <option key={idx} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <h5>Fetching Accounting Providers!</h5>
      )}
      <button type="submit">Fetch Balance Sheet</button>
    </form>
  );
};

export default Form;
