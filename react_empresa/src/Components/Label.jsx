

function Label({name}) {
  return (
    <label htmlFor={name} className="block mb-2">
         {name}
        </label>
  )
}

export default Label