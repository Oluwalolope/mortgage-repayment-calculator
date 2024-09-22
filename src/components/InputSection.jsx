import Input from './Input.jsx';


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
            </form>
        </section>
    );
}
 
export default InputSection;