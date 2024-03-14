"use client";

import { useEffect, useState } from "react";

export default function Page({ params }) {
  let id = params.id;
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    console.log(
      "🚀 ~ file: page.js:20 ~ getUserDetails ~ data:",
      data.result[0].name
    );

    setName(data.result[0].name);
    setUsername(data.result[0].username);
    setEmail(data.result[0].email);
    setWebsite(data.result[0].website);
    setPhone(data.result[0].phone);
  };

  const updateUser = async () => {
    let response = await fetch("http://localhost:3000/api/users/" + id, {
      method: "Put",
      body: JSON.stringify({ name, username, email, website, phone }),
    });
    response = await response.json();

    if (response.success) {
      alert("user updated");
    } else {
      alert("Please fill required filed");
    }
  };
  return (
    <div>
      <h1>Update User</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={updateUser}>Add User</button>
    </div>
  );
}
