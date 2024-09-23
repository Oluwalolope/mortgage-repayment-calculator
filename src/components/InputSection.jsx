import Input from './Input.jsx';
import calculatorIcon from '../assets/icon-calculator.svg';


const InputSection = () => {
    return (
        <section id="input-section">
            <div id="heading-wrapper">
                <h1>Mortgage Calculator</h1>
                <button id="clear">Clear All</button>
            </div>

            <form>
                <Input name="mortgageAmount" type="number"  label="Mortgage Amount"  required />
                <Input name="mortgageTerm" type="number"  label="Mortgage Term"  required />
                <Input name="interestRate" type="number"  label="Interest Rate"  required />
                <Input name="mortgageType" radio1="Repayment" radio2="Interest Only" type="radio"  label="Mortgage Type"  required />
                <button type="submit">
                    <img src={calculatorIcon} alt="an icon of a calculator" />
                    <span>Calculate Repayments</span>
                </button>
            </form>
        </section>
    );
}
 
export default InputSection;