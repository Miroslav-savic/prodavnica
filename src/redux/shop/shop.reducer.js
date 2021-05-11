import ShopActionTypes from './shop.types';

const INIT_STATE = {
    collections: null 
};

const shopReducer = (state = {}, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS: 
            return { 
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;