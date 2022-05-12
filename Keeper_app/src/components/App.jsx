import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
	
	const [notes, setNotes] = React.useState([]);
	
	function add(newNote) {
		setNotes(prevNotes => {
		  return [...prevNotes, newNote];
		});
	}
	
	function deleteNote(id){
		setNotes(prevItems => {
		  return prevItems.filter((item, index) => {
			return index !== id;
		  });
		});
	}
	
	return (
		<div>
			<Header />
			<CreateArea add={add} />
			{notes.map((note,index) =>
					<Note 
						title={note.title} 
						content={note.content} 
						del={deleteNote}
						id={index}
						key={index}
					/>
				)
			}
			<Footer />
		</div>
	);
		
}

export default App;