import { create } from "zustand";

interface Product {
    id: string;
    producto: string;
    cover: string | undefined;
    rename: string;
    price: number;
    allergens: string[];
    cantidad: number;
}

export const useProductStore = create((set) => ({
    cart: [],
    total: 0,

    addToCart: (p:Product) =>
        set((state:any) => {
            const isPresent = state.cart.find((product: Product) => product.id === p.id)
            if (!isPresent) {
                return {
                    ...state,
                    cart: [...state.cart, { id: p.id, cantidad: 1, price: p.price, producto: p.producto }],
                    total: state.total + p.price
                }
            }

            const updatedCart = state.cart.map((product: Product) =>
                product.id === p.id ? { ...product, cantidad: product.cantidad + 1 } : product
            )

            return {
                ...state,
                cart: updatedCart,
                total: state.total + p.price
            }
        }),

    removeFromCart: (p: Product) =>
        set((state:any) => {
            const isPresent = state.cart.find((product: Product) => product.id === p.id)
            if (!isPresent) {
                return {
                    ...state
                };
            }

            const updatedCart = state.cart
                .map((product: Product) => (product.id === p.id ? { ...product, cantidad: Math.max(product.cantidad - 1, 0) } : product))
                .filter((product: Product) => product.cantidad > 0);

            return {
                ...state,
                cart: updatedCart,
                total: state.total - p.price
            };

        }),
    reset: () => {
        set((state:any) => {
            return {
                cart: [],
                total: 0
            }
        })
    }
}))