import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface ProductState {
  value: number;
  showInput: boolean;
  allProducts: any;
  favorites: any;
  filterValue: string;
  sortValue: string;
  selectedCategory: string;
}

// Define the initial state using that type
const initialState: ProductState = {
  value: 0,
  allProducts: [],
  showInput: true,
  favorites: [],
  filterValue: "",
  sortValue: "PRICE_ASC",
  selectedCategory: "All",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
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
        console.log("Item already in favorites");
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
  setCategory,
  clearCart,
  setSortValue,
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter;
export const selectItems = (state) => state.product.allProducts;
export const selectFilterValue = (state) => state.product.filterValue;
export const selectSelectedCategory = (state) => state.product.selectedCategory;

export const selectFilteredItems = createSelector(
  [selectItems, selectFilterValue, selectSelectedCategory],
  (items, filterValue, selectedCategory) => {
    return items.filter(
      (item) =>
        item.title?.toLowerCase().includes(filterValue.toLowerCase()) &&
        (selectedCategory === "All" || item.category === selectedCategory)
    );
  }
);

export const selectSortedItems = createSelector(
  [selectFilteredItems, (_, sortingOrder) => sortingOrder],
  (filteredItems, sortingOrder) => {
    const sortedItems = [...filteredItems];

    switch (sortingOrder) {
      case "PRICE_ASC":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "PRICE_DESC":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "ALPHABETICAL_ASC":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_DESC":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return sortedItems;
  }
);

export default productSlice.reducer;
