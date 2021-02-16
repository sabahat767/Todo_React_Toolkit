import {createSlice,} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
// First, create the thunk
export const fetchApi_data = createAsyncThunk(
    'fetchApi_data',
    async (data, thunkAPI) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/')//for single object
      //const response = await fetch('https://jsonplaceholder.typicode.com/todos/') //for array pf objects

      return await response.json();
    }
  );
const thunkSlice = createSlice({
    name:'Api_Fetch',
  //initialState:{}, //for single object
    initialState:[],//for array of objects
    reducers: {
                   // incrementAction: state => state + 1,
                  //  decrementAction: state => state - 1  
                  },
      extraReducers: {
        
        [fetchApi_data.fulfilled]: (state, action) => {
            console.log(action.payload)
          
        //  console.log(action.payload.slice(0,10))
          //state.push(action.payload.slice(0,10)); //push ya state.value+=---- s states m data directly dal skte hain agr data array m ho
    // return {...state,...action.payload}//wrna direct return krwado agr object m hai upr initial state m object lekr
      return [...state,...action.payload.slice(0,10)]// for array of objects
    },
      }
    });
    export const {incrementAction, decrementAction} = thunkSlice.actions;
const thunk_Reducer = thunkSlice.reducer;
export default thunk_Reducer