import { useEffect, useState } from "react";
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

interface AddItemArgs { 
    productId: number; 
    quantity?: number;
    productOption: ProductOption;
};

function add({ productId, quantity = 1, productOption }: AddItemArgs) {
    const cartItems = get();

    let similarItemIdx = null;
    for (let i = 0;i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        if (cartItem.productId === productId && (cartItem.productOption && cartItem.productOption.color === productOption.color && cartItem.productOption.size === productOption.size)) {
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

interface CartHookMethods {
    add: (arg0: AddItemArgs) => void;
    get: () => CartItem[];
}

export default function useCart() {
    const [methods, setMethods] = useState<CartHookMethods>({
        get: () => [],
        add: () => {}
    });

    useEffect(() => {
        if (localStorage) {
            setMethods({
                add,
                get
            });
        }
    }, []);

    return methods;
}