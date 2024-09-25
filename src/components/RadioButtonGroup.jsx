const RadioButtonGroup = ({name, label, option1, option2, onUpdate, selectedOption}) => {
    return (
        <> 
            <p id="radio-label">{label}</p>

            <div className="radio-wrapper">
                <input name={name} id={option1} checked={selectedOption === option1} onChange={onUpdate} value={option1} type="radio" />
                <label htmlFor={option1}>{option1}</label>
            </div>

            <div className="radio-wrapper">
                <input name={name} id={option2} checked={selectedOption === option2} onChange={onUpdate} value={option2} type="radio" />
                <label htmlFor={option2}>{option2}</label>
            </div>
        </>
    );
}
 
export default RadioButtonGroup;