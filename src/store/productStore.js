import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    addCurrentProduct: (product) => set((state) => ({
        products: [...state.products, product]
    })),
    removeCurrentProduct: (product) => set((state) => ({
        products: state.products.filter((p) => p !== product)
    }))
}))