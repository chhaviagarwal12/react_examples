import { combineReducers } from "redux";
import singleProduct from "./singleProductReducer";
import allProducts from "./allProductsReducer"
import allCategories from "./allCategoriesReducer"
import singleCategory from "./singleCategoryReducer"
import addToCartReducer from "./addToCartReducer";
import setQtyReducer from "./setQtyReducer";
import userDetailsReducer from "./userDetailsReducer";


export default combineReducers({
    allCategories:allCategories,
    singleCategory:singleCategory,
    allProducts:allProducts,
    singleProduct:singleProduct,
    addToCart:addToCartReducer,
    setQty:setQtyReducer,
    userDetails:userDetailsReducer
})