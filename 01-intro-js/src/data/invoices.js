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

const invoiceByClientName = (clientName) => {
  return invoices.find((i) => i.client.name === clientName);
};

const invoiceById = (id) => {
  return invoices.find((i) => i.id === id);
};

const findInvoiceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = invoiceById(id);

      if (result) {
        resolve(result);
      } else {
        reject("error: no existe la factura por el id");
      }
    }, 2500);
  });

  return promise;
};

export {
  paper,
  invoices as default,
  invoiceByClientName,
  invoiceById,
  findInvoiceById,
};
