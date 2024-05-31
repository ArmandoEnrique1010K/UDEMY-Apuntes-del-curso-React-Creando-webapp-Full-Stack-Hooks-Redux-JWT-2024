import { findInvoiceById } from "./data/invoices";

findInvoiceById(1).then(console.log).catch(console.error);
