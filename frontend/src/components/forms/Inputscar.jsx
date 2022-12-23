function Inputscar(props) {
  const { children, type, placeholder, onChange } = props;
  return (
    <label className="input">
      <b>{children}</b>
      <input type={type} placeholder={placeholder} onChange={onChange}></input>
    </label>
  );
}

export default Inputscar;
