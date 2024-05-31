/*
const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

httpClient
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

const findAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await response.json();
  // console.log(data);
  return await response.json();
};

const users = await findAllUsers();
console.log(users);
console.log("Hola que tal!");
