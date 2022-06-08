import {EOrderStatus, TRefOrCustomer, TRefOrProduct} from "../index.ts";

export interface SchemaOrder {
    customer: TRefOrCustomer;
    product: TRefOrProduct;
    status: EOrderStatus;
    count: number;
    datePurchase: Date;
    departureDay: Date;
}
