"use client";

import Form from "./Components/Form";
import { IBalanceSheetEntry, IOutcome } from "./interfaces";
import styles from "./page.module.css";
import { useState, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducers";
import BalanceSheet from "./Components/BalanceSheet";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { companyName, yearOfEstd, loanAmount } = state;
  const [balanceSheet, setBalanceSheet] = useState<Array<IBalanceSheetEntry>>(
    []
  );
  const [isResultAvailable, setIsResultAvailable] = useState<boolean>(false);

  useEffect(() => {
    console.log(`Inside HomePage UseEffect`);
  });

  return (
    <div id={styles.mainContainer}>
      {isResultAvailable ? (
        <div id="resultContainer">
          <h1>Final Result</h1>
        </div>
      ) : (
        <>
          <div id={styles.topSection}>
            <div id={styles.formContainer}>
              <h3>Form To Be Submitted</h3>
              <Form
                balanceSheet={balanceSheet}
                setBalanceSheet={setBalanceSheet}
              />
            </div>
            {balanceSheet.length !== 0 ? (
              <div id={styles.balanceSheetContainer}>
                <h3>Balance Sheet</h3>
                <BalanceSheet balanceSheet={balanceSheet} />
              </div>
            ) : null}
          </div>
          <div id={styles.bottomSection}>
            <button id="finalSubmit">FINAL SUBMIT</button>
          </div>
        </>
      )}
    </div>
  );
}
