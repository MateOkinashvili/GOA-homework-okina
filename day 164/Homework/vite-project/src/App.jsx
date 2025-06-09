import React, {useState} from 'react'
import './App.css'

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className='App'>

<h1 className=' relative top-1 text-white text-6xl font-bold font'>To-do</h1>
<div className="wrap relative top-18 bg-[#2e2e2e] h-140">
  <div className="input">
    <div className="inputItem relative text-3xl text-white right-80  top-17">
      <label>Title</label>
      <input type="text" placeholder="What's the title?" className=' text-center relative right-15 top-12 text-black bg-white h-12'/>
    </div>
    <div className="inputItem relative text-3xl text-white -right-30 top-5">
      <label>Task</label>
      <input type="text" placeholder="What's the task?" className=' text-center relative right-15 top-12 text-black bg-white h-12'/>
    </div>
    <div className="inputItem">
      <button type="button" className="primaryBtn relative left-117 top-5 text-3xl w-25 h-13 rounded-md border-none hover:bg-[#05C66D] hover:cursor-pointer text-white bg-[#00E67D]">Add</button>
      <div className=' w-260 h-0.5 bg-stone-600 m-auto relative top-14'></div>
    </div>
  </div>

    <div className="btnArea absolute top-60 left-22 text-xl">
    <button className={` hover:cursor-pointer text-white bg-[#5c5c5a] p-3 ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
    <button className={` hover:cursor-pointer text-white bg-[#5c5c5a] p-3 ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>History</button>
  </div>
  <div className="todoList">
    <div className="listItem absolute top-85 left-22 bg-[#5c5c5a] pr-235 h-42">
      <h3 className=' relative left-5 top-5 text-white text-2xl'><span className=' font-bold'>Task</span> 1</h3>
      <p className=' relative top-8 left-5 text-xl text-white'>Description</p>
    </div>
  </div>
</div>   
    
    
    
    </div>
  )
}

export default App
