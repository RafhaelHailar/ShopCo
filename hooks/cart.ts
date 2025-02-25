import type { CartItem } from "types/cart";
import type { ProductOption } from "types/product";

const CartLSKey = "shop-co-my-cart";

function get(): CartItem[] {
    if (!localStorage) return []; 

    const item = localStorage.getItem(CartLSKey);
    
    if (item) {
        const parsedJSON = JSON.parse(item);
        
        if (typeof parsedJSON === "object") {
            return parsedJSON;
        } else {
            return [];
        }
    }

    return [];
}

function add({ productId, quantity = 1, productOption }: { productId: number, quantity?: number, productOption: ProductOption}) {
    const cartItems = get();

    let similarItemIdx = null;
    for (let i = 0;i < cartItems.length; i++) {
        if (cartItems[i].productId === productId) {
            similarItemIdx = i;
            break;
        }
    }

    if (similarItemIdx != null) {
        cartItems[similarItemIdx].quantity += quantity;
    } else {
        const lastCartItem = cartItems[cartItems.length - 1];
        cartItems.push({
            id: lastCartItem ? lastCartItem.id + 1 : 0,
            productId: productId,
            quantity,
            productOption: productOption
        });

    }

    localStorage.setItem(CartLSKey, JSON.stringify(cartItems));
}


export default function useCart() {
    return {
        add,
        get
    }
}