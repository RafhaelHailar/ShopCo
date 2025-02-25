import type { ProductOption } from "./product";

export interface CartItem {
    id: number;
    productId: number;
    productOption: ProductOption;
    quantity: number;
}