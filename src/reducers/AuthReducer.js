import {
    TRIGGER_REGISTER,
    TRIGGER_REGISTER_SUCCESS,
    

} from '../actions'

// import { persistor } from '../../src/store';

const initialState = {
    registerObj: {
        loading: false,
        data: [],
        error: null
    },
    loginObj: {
        loading: false,
        data: [],
        error: null
    },
    
}

const authReducer = function (state = initialState, action) {
    switch (action.type) {
        case TRIGGER_REGISTER:
            return {
                ...state,
                registerObj: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case TRIGGER_REGISTER_SUCCESS:
            return {
                ...state,
                registerObj: {
                    loading: false,
                    data: action.payload,
                    error: null
                },
                isLoggedIn: true
            }
     
        default:
            return state
    }
}

export default authReducer;