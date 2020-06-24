import React, { useState } from "react";
import "../component/contactCard.css";

const ContactList = (props) => {
  // Declare a new state variable, which we'll call "showAge"
  const [showAge, setShowAge] = useState(true);
  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {props.age}</p>}
        <p>Nationality: {props.nat}</p>
      </div>
    </div>
  );
};

export default ContactList;
