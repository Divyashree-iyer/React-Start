import React from "react";

function App() {
  const [bg, setBg] = React.useState("white");
  const [contact, setContact] = React.useState({
	  fname:"",
	  lname:"",
	  email:""
  });
  const [username, setUsername] = React.useState({
	  fname:"",
	  lname:"",
	  email:""
  });
  function over() {
    setBg("black");
  }
  function out() {
    setBg("white");
  }
  function click() {
    setUsername({fname:contact.fname,lname:contact.lname, email:contact.email});
  }

  function change(event) {
	const { value, name } = event.target;
	
	setContact((prevVal)=>{
		return {
			...prevVal,
			[name]:value
		};
	});
	
  }
  return (
    <div className="container">
      <h1>Hello {username.fname} {username.lname} </h1>
	  <p>{username.email}</p>
      <input
        value={contact.fname}
        onChange={change}
        type="text"
        placeholder="First Name"
		name="fname"
      />
	  <input
        value={contact.lname}
        onChange={change}
        type="text"
        placeholder="Last Name"
		name="lname"
      />
	  <input
        value={contact.email}
        onChange={change}
        type="text"
        placeholder="Email"
		name="email"
      />
      <button
        style={{ backgroundColor: bg }}
        onMouseOut={out}
        onMouseOver={over}
        onClick={click}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
