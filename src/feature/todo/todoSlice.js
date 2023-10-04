import {createSlice,nanoid} from '@reduxjs/toolkit'




export const todoSlice = createSlice({
    name : "todo",
    initialState :{
        todos : [{
            id:1,
            text:"Hello"
        }]
    }, 
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
         editTodo: (state,action) => {
           let {todos} = state;
             state.todos = todos.map((item) =>
                 item.id === action.payload.id ? action.payload : item);
         }
    }
})

export const {addTodo,removeTod,editTodo} = todoSlice.actions

export default todoSlice.reducer