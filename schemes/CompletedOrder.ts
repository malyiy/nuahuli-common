import {TRefOrOrder} from "../types/index.ts";

export interface SchemaCompletedOrder {
    order: TRefOrOrder;
    dateWhenCompleted: Date
}
