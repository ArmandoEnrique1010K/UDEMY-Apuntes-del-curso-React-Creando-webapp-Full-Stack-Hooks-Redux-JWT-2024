const paper = {
  product: "paper",
  price: 100,
  quantity: 10,
};

const invoices = [
  {
    id: 1,
    name: "Compras de oficina",
    client: {
      name: "Maria",
      lastname: "Doe",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        product: "mouse",
        price: 200,
        quantity: 1,
      },
      paper,
    ],
  },
  {
    id: 2,
    name: "Compras de computacion",
    client: {
      name: "Pepe",
      lastname: "Doe",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        product: "screen 17",
        price: 500,
        quantity: 1,
      },
      {
        product: "cpu intel",
        price: 1000,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Compras de papeleria",
    client: {
      name: "Jhon",
      lastname: "Doe",
    },
    items: [
      {
        product: "pencil",
        price: 50,
        quantity: 1,
      },
      paper,
    ],
  },
];

/*
const invoicesName = invoices.map((i) => {
  return i.name;
});

console.log(invoices);
console.log(invoicesName);

const invoicesClientName = invoices.map((i) => {
  return i.client.name;
});

console.log(invoicesClientName);
*/
/*
const invoiceById = invoices.find((i) => i.id === 3);
console.log(invoiceById);
*/
/*
const invoiceByName = invoices.find((i) => i.name === "Compras de oficina2");
console.log(invoiceByName);
*/
/*
const invoiceByClientName = invoices.find((i) => i.client.name === "Pepe");
console.log(invoiceByClientName);
*/
/*
const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter);
*/
/*
const invoiceFilter2 = invoices.filter((i) => i.items.includes(paper));
console.log(invoiceFilter2);
*/
/*
const result = invoices.some((i) => i.client.name === "Juan");
console.log(result);
*/
console.log("filter eliminar");
const invoiceDeleted = invoices.filter((i) => i.id != "2");
console.log(invoiceDeleted);
