"use client";

import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, username, email, website, phone }),
    });
    response = await response.json();
    console.log("🚀 ~ file: page.js:18 ~ addUser ~ response:", response);

    if (response.success) {
      alert("user create");
    } else {
      alert("Please fill required filed");
    }
  };
  return (
    <div>
      <h1>Add New User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Website"
        onChange={(e) => setWebsite(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Phone"
        onChange={(e) => setPhone(e.target.value)}
        className="input-field"
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}
