import invoices, { invoiceByClientName, paper } from "./data/invoices";

const invoicesName = invoices.map((i) => i.name);
console.log(invoicesName);

const invoiceFilter2 = invoices.filter((i) => i.items.includes(paper));
console.log(invoiceFilter2);

console.log("Buscar por nombre del cliente");
console.log(invoiceByClientName("Maria"));
