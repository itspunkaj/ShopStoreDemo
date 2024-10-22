import { create } from "zustand";

const usePriceStore = create((set) => ({
  totalPrice: 0,
  addPrice: (price) => set((state) => ({ totalPrice: Math.round((state.totalPrice+price)*100)/100 })),
  removePrice: (price) => set((state) => ({ totalPrice: state.totalPrice - price }))
}))


const useItemsBoughtStore = create((set)=>({
  products : [],
  addProduct : (product) => set((state)=>({products : [...state.products, product]}))
}))
export { usePriceStore, useItemsBoughtStore };