const Input = ({name, label, type, unit, radio1, radio2, onUpdate, changedValue}) => {
    return (
        <>
            { type !== "radio" && 
                <div className="input-wrapper">
                    <label htmlFor={name}>{label}</label>

                    <div className="unit-wrapper">
                        <span className="unit">{unit}</span>
                        <input name={name} type={type} onChange={onUpdate} value={changedValue}/> 
                    </div>
                </div>
            }

            { type === "radio" && 
                <> 
                    <p id="radio-label">{label}</p>

                    <div className="radio-wrapper">
                        <input name={name} id={radio1} value={radio1} type={type} />
                        <label htmlFor={radio1}>{radio1}</label>
                    </div>

                    <div className="radio-wrapper">
                        <input name={name} id={radio2} value={radio2} type={type} />
                        <label htmlFor={radio2}>{radio2}</label>
                    </div>
                </>
            }
        </>
    );
}
 
export default Input;