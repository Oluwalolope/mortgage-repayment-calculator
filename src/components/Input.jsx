const Input = ({name, label, type, radio1, radio2}) => {
    return (
        <>
            { type !== "radio" && 
                <div className="input-wrapper">
                    <label htmlFor={name}>{label}</label>
                    <input name={name} type={type} /> 
                </div>
            }

            { type === "radio" && 
                <> 
                    <p id="radio-title">{label}</p>

                    <div className="radio-wrapper">
                        <label htmlFor={radio1}>{radio1}</label>
                        <input name={name} id={radio1} value={radio1} type={type} />
                    </div>

                    <div className="radio-wrapper">
                        <label htmlFor={radio2}>{radio2}</label>
                        <input name={name} id={radio2} value={radio2} type={type} />
                    </div>
                </>
            }
        </>
    );
}
 
export default Input;