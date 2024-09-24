// This function expects a JS object as an argument
// The object should contain the following properties
// - mortgageAmount: The mortgage amount
// - mortgageTerm: The duration of the mortgage (time frame in years)
// - interestRate: The expected (annual) rate of return
export function calculateMortgage({
  mortgageAmount,
  mortgageTerm,
  interestRate
}) {
  const mortgageResult = [];

  const principal = mortgageAmount;
  const annualRate = interestRate / 100;
  const monthlyRate = annualRate / 12;
  const duration = mortgageTerm * 12;
  const increment = (1 + monthlyRate) ** duration;

  // Formula for calculating monthly mortgage repayment
  const monthlyPayment = (principal * monthlyRate * increment) / (increment - 1);

  // Formula for calculating the total interest accrued on the mortgage
  const interestOnly = principal * annualRate;

  mortgageResult.push({
    monthlyInterestOnly: interestOnly / duration, // the amount of interest in a month
    annualInterestOnly: interestOnly, // the amount of interest in a year
    monthlyRepayment: monthlyPayment, // the mortgage to be paid at the end of the month
    totalRepayment:  monthlyPayment * duration // the total mortgage to be paid at the end of the term
  });
  
  return mortgageResult;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});
