const initialState = {
    productDetailData:[],
}

const productDetailReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL_PRODUCTS":
            return{...state, productDetailData: action.getdata }
        default:
            return state;
    }
}

export default productDetailReducers