import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deletetodo} from '../store/slicer/todoSlice'
import DeleteIcon from '@material-ui/icons/Delete';
function Viewtodo() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todos)
    const post = useSelector(state => state.post)
console.log('....',todo)
    console.log('.....',post)
    const handleDelete = (id)=>{
         dispatch(deletetodo(id))
    }
    return (
        <div>
            {
                todo.map((item)=>(
                    <div key={item.id} >
                        <h3 >
                        {item.title}
                       <DeleteIcon fontSize='medium' style={{color:'red',marginTop:'auto'}} onClick={()=>handleDelete(item.id)}/>

                        </h3>
                     </div>
                ))
                //sdadas
            }
            {post.map((item)=>(
                     <div key={item.id}>
                     {item.title}
                 
                  </div>
            )
                )}
        </div>
    )
}

export default Viewtodo
