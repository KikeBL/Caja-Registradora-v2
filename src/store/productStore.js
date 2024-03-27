import { create } from "zustand";

export const useProductStore = create((set) => ({
    cart: [],
    
    addToCart: id =>
        set(state => {
            const isPresent = state.cart.find(product => product.id === id)
            if (!isPresent) {
                return {
                    ...state,
                    cart: [...state.cart, { id, cantidad: 1 }]
                }
            }

            const updatedCart = state.cart.map(product =>
                product.id === id ? { ...product, cantidad: product.cantidad + 1 } : product
            )
            return {
                ...state,
                cart: updatedCart
            }
        }),

    removeFromCart: id =>
        set(state => {
            const isPresent = state.cart.find(product => product.id === id)
            if (!isPresent) {
                return {
                    ...state
                };
            }

            const updatedCart = state.cart
                .map(product => (product.id === id ? { ...product, cantidad: Math.max(product.cantidad - 1, 0) } : product))
                .filter(product => product.cantidad > 0);

            return {
                ...state,
                cart: updatedCart
            };

        })

}),
    {
        computed: {
            // Recomputes every time property1 or property2 changes.
            total() {
                return this.cart?.map(product => product.cantidad * product.price).reduce((acc, curr) => acc + curr, 0)
            }
        }
    }
)