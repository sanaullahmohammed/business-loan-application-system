export interface IAccountProviders {
  providers: Array<string>;
}

export interface IBalanceSheetEntry {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}

export interface IOutcome {
  companyName: string;
  yearOfEstd: number;
  loanAmount: number;
  balanceSheet: Array<IBalanceSheetEntry> | [];
}
