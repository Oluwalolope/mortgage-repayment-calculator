const Input = ({name, label,type}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} />
        </>
    );
}
 
export default Input;