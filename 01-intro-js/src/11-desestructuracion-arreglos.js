const users = ["pepe", "ana", "maria", "juan", "sebastian", "carlos", "josefa"];

const [pepe, user2, maria, ...rest] = users;

console.log(pepe, user2, maria, ...rest);
