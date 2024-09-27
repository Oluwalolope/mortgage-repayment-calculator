import Input from './Input.jsx';
import calculatorIcon from '../assets/icon-calculator.svg';
import RadioButtonGroup from './RadioButtonGroup.jsx';


const InputSection = ({inputData, updateInputData ,handleSubmission, handleClearInput}) => {
    return (
      <section id="input-section">
        <div id="heading-wrapper">
          <h1>Mortgage Calculator</h1>
          <button id="clear" onClick={handleClearInput} >Clear All</button>
        </div>

        <form onSubmit={(e) => handleSubmission(e)}>
          <Input
            name="mortgageAmount"
            type="number"
            changedValue={inputData.mortgageAmount}
            onUpdate={(e) => updateInputData('mortgageAmount', e.target.value)}
            label="Mortgage Amount"
            unit="&pound;"
          />
          <Input
            name="mortgageTerm"
            type="number"
            changedValue={inputData.mortgageTerm}
            onUpdate={(e) => updateInputData('mortgageTerm', e.target.value)}
            label="Mortgage Term"
            unit="years"
          />
          <Input
            name="interestRate"
            type="number"
            changedValue={inputData.interestRate}
            onUpdate={(e) => updateInputData('interestRate', e.target.value)}
            label="Interest Rate"
            unit="%"
          />
          <RadioButtonGroup
            name="mortgageType"
            option1="Repayment"
            option2="Interest Only"
            selectedOption={inputData.mortgageType}
            onUpdate={(e) => updateInputData('mortgageType', e.target.value)}
            label="Mortgage Type"
          />
          <button type="submit">
            <img src={calculatorIcon} alt="an icon of a calculator" />
            <span>Calculate Repayments</span>
          </button>
        </form>
      </section>
    );
}
 
export default InputSection;