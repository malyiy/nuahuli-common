import {ECategory, EColor, EProductStatus, ESize} from '../types/index.ts'

export interface SchemaProduct {
    name: string;
    category: ECategory;
    size: ESize;
    status: EProductStatus;
    count: number;
    color: EColor;
    price?: number;
    description?: string;
}

