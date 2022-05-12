import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
	
	
	const [tasks, setTasks]=React.useState([]);

	function add(task){
		setTasks((prevVal) => {return [...prevVal,[task,false]]} );
	}

	function del(id, job){
		if (job==="del")
		{
			setTasks(prevItems => {
			  return prevItems.filter((item, index) => {
				return index !== id;
			  });
			});
		}
		else{
			setTasks(prevItems => {
			return prevItems.map((item,index)=> 
			{
				
				if (index===id) 
					return ([item[0],!item[1]]); 
				else 
					return item;
				
			});
		});
		}
	}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
	  <InputArea add={add} />
      <div>
        <ul>
			{tasks.map((item,index)=>
				<ToDoItem key={index} id={index} item={item} onCheck={del} />
			)}
        </ul>
      </div>
    </div>
  );
}

export default App;
