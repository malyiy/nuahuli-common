import {ESize, EColor, ECategory, ESocialMedia, EProductStatus, EOrderStatus} from '../index.ts';

export const isSize = (size: any) => {
    const values = Object.values(ESize);
    return values.includes(size as unknown as ESize)
}

export const isColor = (value: any) => {
    const values = Object.values(EColor);
    return values.includes(value as unknown as EColor)
}

export const isCategory = (value: any) => {
    const values = Object.values(ECategory);
    return values.includes(value as unknown as ECategory)
}

export const isSocialMedia = (value: any) => {
    const values = Object.values(ESocialMedia);
    return values.includes(value as unknown as ESocialMedia)
}

export const isProductStatus = (value: any) => {
    const values = Object.values(EProductStatus);
    return values.includes(value as unknown as EProductStatus)
}

export const isOrderStatus = (value: any) => {
    const values = Object.values(EOrderStatus);
    return values.includes(value as unknown as EOrderStatus)
}

