import illustration from "../assets/illustration-empty.svg";
import Result from "./Result.jsx";

const ResultSection = ({isSubmitted, mortgageData, mortgageType}) => {
    return (
      <section id="result-section">
        {isSubmitted ? (
          <>
            <h2>Your results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
            <Result mortgageData={mortgageData} mortgageType={mortgageType}/>
          </>
        ) : (
          <>
            <img src={illustration} alt="illusration" />
            <h2 className="center" >Results shown here</h2>
            <p className="center" >
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
          </>
        )}
      </section>
    );
}
 
export default ResultSection;