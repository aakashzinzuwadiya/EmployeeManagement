import * as types from "./actionType";

const initialState = {
    users: [],
    user: {},
    leaves: [],
    loading: true
};

const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_EMPLOYEES:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case types.DELETE_EMPLOYEE:
            return {
                ...state,
                loading: false
            };
        case types.ADD_EMPLOYEE:
            return {
                ...state,
                loading: false
            };
        case types.GET_EMPLOYEE: 
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case types.UPDATE_EMPLOYEE:
            return {
                ...state,
                user: action.payload,
                loading: false
            };  
        case types.GET_LEAVES:
            return {
                ...state,
                leaves: action.payload,
                loading: false
            };
        case types.ADD_LEAVE:
            return {
                ...state,
                loading: false
            };
        case types.DELETE_LEAVE:
            return {
                ...state,
                loading: false
            }    
        default: 
            return state;
    }
};

export default userReducers;