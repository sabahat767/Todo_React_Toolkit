import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slicer/todoSlice'
//import thunkReducer from './slicer/ReduxToolkit_Thunk_Slice'
//import createSagaMiddleware from 'redux-saga'
//import { hello } from './sagas';

//const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: todoReducer,
    //middleware: sagaMiddleware
})
//sagaMiddleware.run(hello)
export default store