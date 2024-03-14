export default async function getUsers() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // const userData = await result.json
  // console.log("🚀 ~ file: getUsers.js:3 ~ getUsers ~ result:", userData)
  return result.json();
}
