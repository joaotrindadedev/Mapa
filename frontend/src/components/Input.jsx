const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`w-100 h-9 focus:outline-none border border-[#AFAFAF] pl-3`}
      />
    </div>
  );
};

export default Input;
