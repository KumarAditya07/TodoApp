import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{
        id:1,
        text:"Hello"
    }]
} 

export const todoSlice = createSlice({
    name : "todo",
    initialState, 
    reducers : {
        //property : funcation 
         addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload 
            }
            state.todos.push(todo); 
         },
         removeTod : (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
         },
    }
})

export const {addTodo,removeTod} = todoSlice.actions

export default todoSlice.reducer