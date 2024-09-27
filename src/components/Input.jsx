const Input = ({name, label, type, unit, onUpdate, changedValue}) => {
    return (
        <>
            <div className="input-wrapper">
                <label htmlFor={name}>{label}</label>

                <div className="unit-wrapper">
                    <span className="unit">{unit}</span>
                    <input name={name} type={type} onChange={onUpdate} value={changedValue} min="0.01" step="0.01" required/> 
                </div>
            </div>
        </>
    );
}
 
export default Input;