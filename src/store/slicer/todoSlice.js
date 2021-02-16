import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { createAsyncThunk } from '@reduxjs/toolkit'
// First, create the thunk
export const fetchApi_data = createAsyncThunk(
    'fetchApi_data',
    async (data, thunkAPI) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/')//for single object
      

      return await response.json();
    }
  );
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos:[{title:'buy milk', id:1}],
    post:[],
    },
    reducers: {
        addtodo: {
        reducer(state, action){
            console.log(action.payload)
            let newObj = action.payload
            // let {id, title} = newObj
          //  let newState =  [...state.todos, newObj]
          state.todos=[...state.todos, newObj]
           // return newState

        },
        prepare(title){
            return { payload:{title:title, id:uuidv4()}}
        }
    },
    deletetodo: {
        reducer(state, action){
            console.log(action.payload.id)
            //let newState1 = state.filter(item=>item.id!=action.payload.id)
             state.todos = state.todos.filter(item=>item.id!=action.payload.id)
            // return newState1

        },
        prepare(id){
            return {payload: {id}}
        }
    },

        // deletetodo(state,action){
        //     console.log(action.payload)
        //     let newState1 = state.filter(
        //         (item)=> item.id !== action.payload
        //     )
        //     return newState1
        // }
},
    extraReducers: {
        
        [fetchApi_data.fulfilled]: (state, action) => {
            console.log(action.payload)
          state.post=action.payload.slice(0,10)
        //  console.log(action.payload.slice(0,10))
          //state.push(action.payload.slice(0,10)); //push ya state.value+=---- s states m data directly dal skte hain agr data array m ho
    // return {...state,...action.payload}//wrna direct return krwado agr object m hai upr initial state m object lekr
     // return [...state.post,...action.payload.slice(0,10)]// for array of objects
        }
}
})
export const { addtodo, deletetodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer