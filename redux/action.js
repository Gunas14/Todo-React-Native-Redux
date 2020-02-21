import { ADD_NEW_TODO, TOGGLE_STATUS  } from './types';

export const addnewtodoItem = (value) =>{
    return{
        type : ADD_NEW_TODO,
        payload : value
    }
}

export const toggleStatus = (value) =>{
    return{
        type : TOGGLE_STATUS,
        payload : value
    }
}