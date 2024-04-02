import { create } from "zustand";

export const useProductStore = create((set) => ({
    cart: [],
    total: 0,

    addToCart: p =>
        set(state => {
            const isPresent = state.cart.find(product => product.id === p.id)
            if (!isPresent) {
                return {
                    ...state,
                    cart: [...state.cart, { id: p.id, cantidad: 1, price: p.price, producto: p.producto }],
                    total: state.total + p.price
                }
            }

            const updatedCart = state.cart.map(product =>
                product.id === p.id ? { ...product, cantidad: product.cantidad + 1 } : product
            )

            return {
                ...state,
                cart: updatedCart,
                total: state.total + p.price
            }
        }),

    removeFromCart: p =>
        set(state => {
            const isPresent = state.cart.find(product => product.id === p.id)
            if (!isPresent) {
                return {
                    ...state
                };
            }

            const updatedCart = state.cart
                .map(product => (product.id === p.id ? { ...product, cantidad: Math.max(product.cantidad - 1, 0) } : product))
                .filter(product => product.cantidad > 0);

            return {
                ...state,
                cart: updatedCart,
                total: state.total - p.price
            };

        }),
    reset: () => {
        set(state => {
            return {
                cart: [],
                total: 0
            }
        })
    }
}))