import './index.css';
import { useState } from 'react';
import InputSection from './components/InputSection.jsx';
import ResultSection from './components/ResultSection.jsx';
import { calculateMortgage } from './util/mortgage.js';

const App = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const [mortgageData, setMortgageData] = useState({
      mortgageAmount: '',
      mortgageTerm: '',
      interestRate: '',
      mortgageType: ''
    });

    const handleChange = (identifier, value) => {
      setMortgageData((prevMortgageData) => {
        return {
          ...prevMortgageData,
          [identifier]: value,
        };
      });
    };

    const handleClear = () => {
      setMortgageData(() => {
        return {
          mortgageAmount: '',
          mortgageTerm: '',
          interestRate: '',
          mortgageType: ''
        };
      });
      setSubmitted(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    };

    const [data] = calculateMortgage(mortgageData);

    return (
        <main>
            <InputSection inputData={mortgageData} updateInputData={handleChange} handleClearInput={handleClear} handleSubmission={handleSubmit}/>
            <ResultSection mortgageData={data} mortgageType={mortgageData.mortgageType} isSubmitted={submitted}/>
        </main>
    );
}
 
export default App;