import { create } from "zustand";

const usePriceStore = create((set) => ({
  totalPrice: 0,
  addPrice: (price) => set((state) => ({ totalPrice: Math.round((state.totalPrice + price) * 100) / 100 })),
  removePrice: (price) => set((state) => ({ totalPrice: Math.round((state.totalPrice - price) * 100) / 100 }))
}))




const useItemsBoughtStore = create((set) => ({
  products: {},
  totItems: 0,
  addProduct: (productId) => set((state) => {
    const currentCount = state.products[productId] || 0;

    return {
      products: {
        ...state.products,
        [productId]: currentCount + 1,
      },
      totItems: state.totItems + 1,
    }
  }),
  removeProduct: (productId) => set((state) => {
    const currentCount = state.products[productId];

    return {
      products: {
        ...state.products,
        [productId]: currentCount - 1,
      },
      totItems: state.totItems - 1,
    }
  })
}))
export { usePriceStore, useItemsBoughtStore };