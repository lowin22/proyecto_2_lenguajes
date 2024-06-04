
function InputRegister({ type, id, label, register, error }) {
  return (
    <div className="mb-2">
    <label htmlFor={id} className="block">
      {label}
    </label>
    <input
      type={type}
      id={id}
      {...register}
      className="w-full p-2 pl-10 text-sm text-gray-700"
    />
    {error && <span className="text-sm text-red-400">{error.message}</span>}
  </div>
  )
}

export default InputRegister