const DatalistRegister = ({ id, label, register, error, options, setValue }) => {
    const handleChange = (event) => {
      const selectedOption = options.find(option => option.name === event.target.value);
      if (selectedOption) {
        setValue(id, selectedOption.id);
      }
    };
  
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          list={`${id}-list`}
          id={id}
          onChange={handleChange}
          className={`mt-1 block w-full shadow-sm sm:text-sm border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        <datalist id={`${id}-list`}>
          {options.map(option => (
            <option key={option.id} value={option.name} />
          ))}
        </datalist>
        <input type="hidden" {...register} />
        {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
      </div>
    );
  };
  
  export default DatalistRegister;