import React, { useState } from "react";

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  return (
    <div>
      <p>{firstName}</p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First and Last Name"
        />

        <p>First and Last Name</p>
        <input name="email" type="text" placeholder="email" />
        <p>Email</p>
        <input name="message" type="text" placeholder="email message"></input>
        <p>Email message</p>
        <button type="submit">Submit Info</button>
      </form>
    </div>
  );
}

export default Form;
