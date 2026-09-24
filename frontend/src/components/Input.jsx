const Input = ({ id, label, type, placeholder, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-100 h-9 focus:outline-none border border-[#AFAFAF] pl-3 rounded-[5px]`}
      />
    </div>
  );
};

export default Input;
