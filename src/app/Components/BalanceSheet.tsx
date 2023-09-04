"use client";
import { IBalanceSheetEntry } from "../interfaces";
import styles from "../page.module.css";

interface IBalanceSheet {
  balanceSheet: Array<IBalanceSheetEntry>;
}

const BalanceSheet = ({ balanceSheet }: IBalanceSheet) => {
  return (
    <section>
      {balanceSheet.map((balance, idx) => (
        <div className={styles.balanceItem} key={idx}>
          <div>year : {balance.year}</div>
          <div>month : {balance.month}</div>
          <div>profitOrLoss : {balance.profitOrLoss}</div>
          <div>assetsValue : {balance.assetsValue}</div>
          <br></br>
        </div>
      ))}
    </section>
  );
};

export default BalanceSheet;
