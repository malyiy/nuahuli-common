import {ICity, ISocialMediaContact} from "../index.ts";

export interface SchemaCustomer {
    name: string;
    city: ICity;
    phoneNumber: string;
    socialMediaContact: ISocialMediaContact[],
}
