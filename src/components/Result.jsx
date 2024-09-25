import { formatter } from '../util/mortgage.js';

const Result = ({mortgageData, mortgageType}) => {
    let monthly = mortgageData.monthlyRepayment;
    let total = mortgageData.totalRepayment;

    if (mortgageType !== 'Repayment') {
        monthly = mortgageData.monthlyInterestOnly;
        total = mortgageData.annualInterestOnly;
    };

    return (
      <div id="result">
        <p>
          Your monthly {mortgageType === 'Repayment' ? 'repayments' : 'interest'}
        </p>
        <h3>{formatter.format(monthly)}</h3>
        <p>
          Total {mortgageType === 'Repayment' ? "you'll repay" : "interest accrued"} over the term
        </p>
        <h4>{formatter.format(total)}</h4>
      </div>
    );
}
 
export default Result;