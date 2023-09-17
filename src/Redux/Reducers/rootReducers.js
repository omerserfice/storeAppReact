import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailReducers from "./productDetailReducer";
import categoryReducers from "./categoryReducer";


const rootReducers = combineReducers({
    productReducer,productDetailReducers,categoryReducers
})


export default rootReducers;