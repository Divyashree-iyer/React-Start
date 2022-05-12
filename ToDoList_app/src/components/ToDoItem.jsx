import React from "react";

function ToDoItem(props){

	
	function click(event){
		if (event.ctrlKey)
			return props.onCheck(props.id,"del")
		else
			return props.onCheck(props.id,"cut")
	}

	return (<div onClick={click} style={props.item[1] ? { textDecoration:"line-through"}:null}>
		<li>{props.item[0]}</li>
		</div>);
	
}


export default ToDoItem;