const FormInput = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full ${Icon ? "pl-10" : "pl-3"} pr-3 py-3
            bg-gray-50
            border border-gray-300
            rounded-lg
            text-sm
            placeholder-gray-400
            transition
            hover:border-[#00669f]
            focus:border-[#00669f]
            focus:ring-2 focus:ring-[#00669f]/20
            outline-none
          `}
        />
      </div>
    </div>
  );
};

export default FormInput;
