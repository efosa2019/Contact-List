import React, { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./component/contactCard";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
      });
  }, []);
  return (
    <>
      <div className="App">
        {contacts.map((contact) => (
          <ContactList
            key={contact.name.first + " " + contact.name.last}
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        ))}
      </div>
    </>
  );
}

export default App;
