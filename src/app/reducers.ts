import { IBalanceSheetEntry, IOutcome } from "./interfaces";

export type Action =
  | { type: "UPDATE_COMPANY_NAME"; payload: string }
  | { type: "UPDATE_YEAR_ESTABLISHED"; payload: number }
  | { type: "UPDATE_LOAN_AMOUNT"; payload: number }
  | { type: "ADD_TO_BALANCE_SHEET"; payload: Array<IBalanceSheetEntry> };

export const ActionTypes = {
  // Action types for updating various fields
  UPDATE_COMPANY_NAME: "UPDATE_COMPANY_NAME",
  UPDATE_YEAR_ESTABLISHED: "UPDATE_YEAR_ESTABLISHED",
  UPDATE_LOAN_AMOUNT: "UPDATE_LOAN_AMOUNT",
  ADD_TO_BALANCE_SHEET: "ADD_TO_BALANCE_SHEET",

  // Define other action types as needed
};

export const initialState: IOutcome = {
  companyName: "",
  yearOfEstd: new Date().getFullYear(),
  loanAmount: 0,
  balanceSheet: [],
};

export function reducer(state: IOutcome, action: Action) {
  switch (action.type) {
    case "UPDATE_COMPANY_NAME":
      return { ...state, companyName: action.payload };
    case "UPDATE_YEAR_ESTABLISHED":
      return { ...state, yearofEstd: action.payload };
    case "UPDATE_LOAN_AMOUNT":
      return { ...state, loanAmount: action.payload };
    case "ADD_TO_BALANCE_SHEET":
      return {
        ...state,
        balanceSheet: action.payload,
      };
    default:
      return state;
  }
}
