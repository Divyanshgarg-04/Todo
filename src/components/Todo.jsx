
function Todo({title,description}) {
  return (
    <div className="border-black border-2 rounded-xl bg-white my-2 shadow-sm shadow-white grid grid-cols-1">
      <h1 className="text-black font-bold text-2xl overflow-auto">{title}</h1>
      <p className="text-black font-semibold text-lg  overflow-auto ">{description}</p>
    </div>
  )
}

export default Todo
