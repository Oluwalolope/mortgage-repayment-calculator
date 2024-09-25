import './index.css';
import { useState } from 'react';
import InputSection from './components/InputSection.jsx';
import ResultSection from './components/ResultSection.jsx';
import { calculateMortgage } from './util/mortgage.js';

const App = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const [mortgageData, setMortgageData] = useState({
      mortgageAmount: 300000,
      mortgageTerm: 25,
      interestRate: 5,
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

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted((prevValue) => !prevValue);
    };

    const [data] = calculateMortgage(mortgageData);

    return (
        <main>
            <InputSection inputData={mortgageData} updateInputData={handleChange} handleSubmission={handleSubmit}/>
            <ResultSection mortgageData={data} mortgageType={mortgageData.mortgageType} isSubmitted={submitted}/>
        </main>
    );
}
 
export default App;