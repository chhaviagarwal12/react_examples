import { combineReducers } from "redux";
import singleProduct from "./singleProductReducer";
import allProducts from "./allProductsReducer"
import allCategories from "./allCategoriesReducer"
import singleCategory from "./singleCategoryReducer"
// import addToCart from "./addToCartReducer";
import addToCartReducer from "./addToCartReducer";
import increaseQtyReducer from "./increaseQtyReducer";

export default combineReducers({
    allCategories:allCategories,
    singleCategory:singleCategory,
    allProducts:allProducts,
    singleProduct:singleProduct,
    addToCart:addToCartReducer,
    setQty:increaseQtyReducer
})