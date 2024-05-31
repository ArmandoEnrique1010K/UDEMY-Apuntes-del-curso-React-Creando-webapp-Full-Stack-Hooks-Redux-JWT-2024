const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastname: "Doe",
    age: 20,
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
    {
      product: "papel",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: () => {
    return `Hola ${invoice.client.name}`;
  },
};

// const invoice2 = invoice;
const invoice2 = { ...invoice };

const result = invoice === invoice2;

if (result) {
  console.log(result);
} else {
  console.log("no son iguales");
}

invoice2.id = 20;

console.log(invoice.id);
console.log(invoice2.id);
