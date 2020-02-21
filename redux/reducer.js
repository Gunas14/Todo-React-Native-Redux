import { ADD_NEW_TODO, TOGGLE_STATUS  } from './types';

const initialState = {
    todoList : [ {
        "id": 1,
        "description": "React Native",
        "complete": true,
    },
    {
        "id": 2,
        "description": "Redux",
        "complete": true,
    },
    {
        "id": 3,
        "description": "Persist",
        "complete": false,
    },
    {
        "id": 4,
        "description": "Logger",
        "complete": true,
    },
    ]
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_NEW_TODO: 
        return {
            ...state,
            todoList : [...state.todoList, action.payload]  
        }
        case TOGGLE_STATUS :
            return {
            ...state,
            todoList: [...state.todoList.filter(todo => { 
                if(todo.id == action.payload){
                    todo.complete = !todo.complete;
                }
                return todo;
            })]
        }
        default: return state
    }
}

export default reducer