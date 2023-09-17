const initialState = {
    productsData: [],productsAllData:[]
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, productsData: action.getData };
        case "GET_ALL_PRODUCTS":
            return { ...state, productsAllData: action.allData };
        default:
            return state;
    }
}

export default productReducer