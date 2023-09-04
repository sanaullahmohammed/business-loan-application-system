import { IBalanceSheetEntry } from "../interfaces";

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random balance sheet data
export function generateBalanceSheet(
  yearOfEstablishment: number
): IBalanceSheetEntry[] {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  if (yearOfEstablishment > currentYear) {
    throw new Error("Year of establishment cannot be in the future.");
  }

  let numberOfMonths = 0;
  let upperLimitYear = 0;

  if (yearOfEstablishment === currentYear) {
    // If the year of establishment is the current year, generate data from the beginning of the year.
    numberOfMonths = currentMonth;
    upperLimitYear = currentYear;
  } else {
    // If the year of establishment is in the past, generate data for at least 12 months.
    numberOfMonths = Math.max(12, currentMonth);
    upperLimitYear = yearOfEstablishment;
  }

  const balanceSheet: IBalanceSheetEntry[] = [];

  for (let i = 0; i < numberOfMonths; i++) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    const profitOrLoss = getRandomNumber(-1000000, 1000000);
    const assetsValue = getRandomNumber(100000, 1000000);

    balanceSheet.push({
      year,
      month,
      profitOrLoss,
      assetsValue,
    });

    if (currentDate.getMonth() === 0) {
      currentDate.setFullYear(currentDate.getFullYear() - 1);
      currentDate.setMonth(11);
    } else {
      currentDate.setMonth(currentDate.getMonth() - 1);
    }

    // Stop generating data if we reach the upper limit year.
    if (year === upperLimitYear && month === 0) {
      break;
    }
  }

  return balanceSheet.reverse(); // Reverse the array to have the latest data first.
}
