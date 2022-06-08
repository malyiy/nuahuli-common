import {SchemaOrder, SchemaProduct} from '../index.ts';
import {SchemaCustomer} from "../schemes/Customer.ts";

export type TRef = string;
export type TRefOrProduct = SchemaProduct | TRef;
export type TRefOrOrder = SchemaOrder | TRef;
export type TRefOrCustomer = SchemaCustomer | TRef;
