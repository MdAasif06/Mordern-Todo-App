import React, { useState } from "react";

const TodoApp = () => {
  const [task,setTask]=useState("");
  const [tasks, setTasks] = useState([
    { task: "Make Dosa for mummy", completed: "flase" },
    { task: "Make Dosa for mummy", completed: "flase" },
]);

const addTask=(e)=>{
  // e.preventDefault()
  setTasks([...tasks,{task:task,completed:false}])
  setTask('')
}

  return (
    <div className="h-screen bg-black text-white pt-15">
      <div className="bg-[#111] rounded-2xl p-8 max-w-[600px] m-auto flex flex-col gap-5">
        {/* logo */}
        <div className="text-green-400 text-3xl font-semibold">TODO App</div>
        {/* ----------input and button section */}
        <div className="flex gap-4">
          <input onChange={(e)=>setTask(e.target.value)} value={task}
          onKeyDown={(e)=>{e.key === 'Enter' && addTask()}}
            className="rounded-lg px-5 py-3 w-full bg-[#222] outline-none"
            type="text"
            placeholder="Enter your new task"
          />
          <button onClick={addTask} className="cursor-pointer bg-green-400 px-5 py-3 rounded-lg text-black font-semibold">
            Add
          </button>
        </div>
        {/* filter section */}
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <button className="bg-green-400 px-4 py-1 cursor-pointer text-black font-semi rounded-lg">
              All
            </button>
            <button className="bg-[#222] px-4 rounded-sm cursor-pointer">Active</button>
            <button className="bg-[#222] px-4 rounded-sm cursor-pointer">Completed</button>
          </div>
          <span className="text-xl">3 task</span>
        </div>

        {/* ----- this div contain all tasks */}
        <div className="flex flex-col gap-3 h-[270px] overflow-scroll hide-scrollbar">
          {tasks.map((ele, index) => (
            <div key={index} className="flex justify-between bg-[#222] px-3 py-2 rounded-lg">
              <div className="flex gap-2">
                <input className="accent-green-400" type="checkbox" id={index} />
                {/* only htmlFor work with label */}
                <label htmlFor={index} className="text-lg cursor-pointer select-none">{ele.task}</label> 
              </div>
              <div className="flex gap-2">
                <span className="cursor-pointer h-5 w-5 bg-yellow-400 rounded-full p-2"></span>
                <span className="cursor-pointer h-5 w-5 bg-red-400 rounded-full p-2"></span>
              </div>
            </div>
          ))}
        </div>

        {/* last portion of this project */}
        <div className="flex gap-4 font-medium">
            <button className="cursor-pointer px-3 py-2 rounded-lg bg-red-400 text-black" >Clear Completed</button>
            <button className="cursor-pointer px-3 py-2 rounded-lg bg-[#222]">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
