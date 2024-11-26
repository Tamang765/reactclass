import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "helllo",
    email: "admin@gmail.com",
    password: "asdasdas",
  });

  function handleChange(e) {
    console.log(e.target.name, e.target.value, "this is event");
    console.log(user, "this is user");
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  console.log(user, "this is from outside");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
