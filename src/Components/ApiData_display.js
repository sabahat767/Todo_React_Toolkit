import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchApi_data} from '../store/slicer/ReduxToolkit_Thunk_Slice'
function ApiData_display() {
    const dispatch = useDispatch()
const state = useSelector(state => state)
console.log(".......",state)

    return (
        <div>
          
            
                <button type='submit' onClick={()=>dispatch(fetchApi_data()) } >Add</button>
                {state.map((item)=>
                     <div key={item.id}>
                     {item.title}
                 
                  </div>
                )}
                {/* <div>{state.id}</div>
                <div>{state.title}</div>  for single object */}
          
        </div>
    )
}

export default ApiData_display
