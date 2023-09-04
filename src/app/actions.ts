import { ActionTypes } from "./reducers";
import { IBalanceSheetEntry } from "./interfaces";

// Define action creators

// Action to update the company name
export const updateCompanyName = (name: string) => ({
  type: ActionTypes.UPDATE_COMPANY_NAME,
  payload: name,
});

// Action to update the year established
export const updateYearEstablished = (year: number) => ({
  type: ActionTypes.UPDATE_YEAR_ESTABLISHED,
  payload: year,
});

// Action to update the loan amount
export const updateLoanAmount = (amount: number) => ({
  type: ActionTypes.UPDATE_LOAN_AMOUNT,
  payload: amount,
});

// Action to add a new entry to the balance sheet
export const addToBalanceSheet = (entry: Array<IBalanceSheetEntry>) => ({
  type: ActionTypes.ADD_TO_BALANCE_SHEET,
  payload: entry,
});
