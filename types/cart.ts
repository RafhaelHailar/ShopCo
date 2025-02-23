import type { productOption } from "./product";

export interface CartItem {
    id: number;
    productId: number;
    productOption: productOption;
    quantity: number;
}