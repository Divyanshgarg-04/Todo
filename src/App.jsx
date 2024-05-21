import { useState } from "react"
import Todo from "./components/Todo";



function App() {
  const [todo,setTodo] = useState([]);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  
  return (
    <div className="flex flex-col justify-center items-center h-full mt-20 ">
    <div className="border-black border-8 p-8 md:w-[700px] text-center rounded-xl bg-gray-700 no-wrap">
      <h1 className="font-bold text-4xl mb-8 text-gray-100">Todo Application</h1>
      <div className="grid grid-cols-12">
        <label className="m-2 p-2 text-2xl text-cneter font-bold text-gray-100 mr-10 ml-10 col-span-4">Title : </label>
        <input className="border-black border-2 my-2 p-2 rounded-xl font-bold col-span-8 outline-none text-center"  type="text" placeholder="Enter the title" onChange={(e)=>{
          setTitle(e.target.value);
        }} value={title}/>
      </div>
      <br />
      <div className="grid grid-cols-12">
        <label className="m-2 p-2 text-2xl text-center font-bold text-gray-100 col-span-4">Descripion : </label>
        <input className="border-black border-2 my-2 p-2 rounded-xl font-bold col-span-8 outline-none text-center" type="text" placeholder="Enter the Description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
      </div>
      <br />
      <div className="grid grid-cols-1">
        <button className="bg-gray-400 p-2 font-bold text-2xl rounded-xl mx-2 box-border px-20 hover:bg-gray-100 my-6 border-black border-4 outline-none" onClick={()=>{
          if(title == '' || description == ''){
            alert("Fill both the inputs")
            return
          }
          const newObj = {
            todoTitle : title,
            todoDescription : description
          }
          const todos = [...todo,newObj];
          setTodo(todos);
          setTitle('');
          setDescription('');
        }}>Add Todo</button>
      </div>
      <div className="">
      {todo.map((t,index)=>{
        return (<Todo key={index} title={t.todoTitle} description={t.todoDescription}/>)
      })}
      </div>
    </div>
    </div>
  )
}

export default App
