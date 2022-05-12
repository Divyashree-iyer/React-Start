import React from "react";

function InputArea(props) {
	
	const [task, setTask]=React.useState("");
	
	function change(event){
		const {value}=event.target;
		setTask(value);
	}
	

	
  return (
    <div className="form">
      <input onChange={change} type="text" value={task} />
      <button onClick={()=> {
		  props.add(task);
	  setTask("");}}>
        <span>Add</span>
      </button>
    </div>
  );
}



export default InputArea;
