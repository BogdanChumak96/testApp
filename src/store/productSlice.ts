import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface ProductState {
  value: number;
  showInput: boolean;
  allProducts: string[];
  favorites: any;
  filterValue: string;
}

// Define the initial state using that type
const initialState: ProductState = {
  value: 0,
  allProducts: [],
  showInput: true,
  favorites: [],
  filterValue: "",
};
// const filteredItems = items.filter((item) => item.title.includes("Item"));
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
    toggleShowInput: (state, action) => {
      action.payload === true
        ? (state.showInput = true)
        : (state.showInput = false);
    },
    setProducts: (state, action) => {
      const newProducts = action.payload.filter((product) => {
        return !state.allProducts.some(
          (existingProduct) => existingProduct.id === product.id
        );
      });
      state.allProducts = [...state.allProducts, ...newProducts];
    },
    addToFavorites: (state, action) => {
      const exists = state.favorites.some(
        (item) => item.id === action.payload.id
      );
      if (exists) {
        // Элемент уже существует в хранилище
        console.log("Элемент уже существует в хранилище");
        return;
      }
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      const idToRemove = action.payload;
      state.favorites = state.favorites.filter(
        (item) => item.id !== idToRemove
      );
    },
    clearCart: (state) => {
      state.favorites = [];
    },
  },
});

export const {
  toggleShowInput,
  setProducts,
  addToFavorites,
  removeFromFavorites,
  setFilterValue,
  clearCart,
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter;
export const selectItems = (state) => state.product.allProducts;
export const selectFilterValue = (state) => state.product.filterValue;

export const selectFilteredItems = createSelector(
  [selectItems, selectFilterValue],
  (items, filterValue) => {
    return items.filter((item) =>
      item.title?.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

export default productSlice.reducer;
