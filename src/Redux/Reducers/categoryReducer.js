const initialState = {
    categoriesData:[],categoriesAllData:[]
}

const categoryReducers = (state = initialState,action)=>{
    switch(action.type){
        case "GET_CATEGORIES":
            return {...state,categoriesData:action.getData};
        case "GET_ALL_CATEGORIES":
            return {...state,categoriesAllData:action.alldata};
        default:
        return state;
    }
}

export default categoryReducers;