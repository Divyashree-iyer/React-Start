import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function create_Contact(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      ph={contact.phone}
      email={contact.email}
      img={contact.imgURL}
    />
  );
}

function make_rows() {
  var rows = [];
  for (var i = 0; i < contacts.length; i++) {
    rows.push(
      <Card
        ph={contacts[i]["phone"]}
        email={contacts[i]["email"]}
        name={contacts[i]["name"]}
        img={contacts[i]["imgURL"]}
      />
    );
  }
  return <div>{rows}</div>;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(create_Contact)}
    </div>
  );
}

export default App;
