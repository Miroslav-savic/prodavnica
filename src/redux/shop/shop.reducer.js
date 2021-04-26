import './shop.data';
import SHOP_DATA from './shop.data';

const INIT_STATE = {
    collection: SHOP_DATA 
};

const shopReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopReducer;