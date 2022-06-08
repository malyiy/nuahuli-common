import {TRefOrProduct} from '../index.ts';

export interface SchemaOrderedProduct {
    product: TRefOrProduct;
    countPurchased: number;
    totalPrice: number;
    customsClearanceCost: number;
    deliveryPrice: number;
}
