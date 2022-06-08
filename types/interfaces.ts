import {ESocialMedia} from "../index.ts";

export interface ICity {
    name: string;
}

export interface ISocialMediaContact {
    media: ESocialMedia;
    username: string;
}
