
function Button({text, type}) {
  return (
    <button
      type={type}
      className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500"
    >
      {text}
    </button>
  )
}

export default Button