import { combineReducers } from "redux";
import singleProduct from "./singleProductReducer";
import allProducts from "./allProductsReducer"
import allCategories from "./allCategoriesReducer"
import singleCategory from "./singleCategoryReducer"


export default combineReducers({
    allCategories:allCategories,
    singleCategory:singleCategory,
    allProducts:allProducts,
    singleProduct:singleProduct
})