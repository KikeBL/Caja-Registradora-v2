import { create } from "zustand";

export const useProductStore = create((set) => ({
    cart: [
        {
            "id": "b3fc8c22-64fb-4318-b806-3be03d4d0de1",
            "cantidad": 2,
            "price": 13,
            "producto": "Mary-roll"
        },
        {
            "id": "8d2a949b-9b44-481b-adb5-603551a078bb",
            "cantidad": 2,
            "price": 4.5,
            "producto": "Pasteles de Belem pack 6"
        },
        {
            "id": "10bbb44b-0325-4dc7-adf4-6c56fd2bce68",
            "cantidad": 1,
            "price": 4.2,
            "producto": "Perrunillas pack 6"
        },
        {
            "id": "cc710aaa-43a7-468f-b7d7-9fc7bda69349",
            "cantidad": 1,
            "price": 3.5,
            "producto": "Membrillo de naranja 300"
        },
        {
            "id": "7df8621f-c8a6-4a73-aa5d-d15b9d148bbd",
            "cantidad": 2,
            "price": 3,
            "producto": "Cake-pops"
        },
        {
            "id": "d577f77e-31ec-41c3-a8ac-d5b68cc66748",
            "cantidad": 2,
            "price": 4.2,
            "producto": "Pestiños pack 6"
        }
    ],
    total: 30.25,

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

        })

})
)