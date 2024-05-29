
function Button({text}) {
  return (
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
    >
      {text}
    </button>
  )
}

export default Button