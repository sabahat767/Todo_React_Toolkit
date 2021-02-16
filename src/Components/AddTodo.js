import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Viewtodo from './Viewtodo'
import { addtodo } from '../store/slicer/todoSlice'
import {fetchApi_data} from '../store/slicer/ReduxToolkit_Thunk_Slice'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { v4 as uuidv4 } from 'uuid'
import { Card } from '@material-ui/core'
import bg from './images/bg.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 345,
      marginTop:'10px',
      margin:'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  
function AddTodo() {
    const dispatch = useDispatch()
    //const [task, settask] = useState({})
    const [title, settitle] = useState()
    const handleChange = (e) => {
        settitle(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(addtodo(title))//pori state bhejwai
        console.log('title....',title)
        e.target.value='';
  

    }
    const classes = useStyles();

    return (
        <div>
               <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={bg}
          title="background"
        />
        <CardContent>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
      
    <TextField  size="small"  label="Enter Task To do" type='text' name='title' onChange={handleChange}/>

        </Grid>
        <Grid item xs={12}>
        
        <Button variant="contained"  type='submit' style={{backgroundColor:'#C58E4C'}}>Add</Button>
       
        </Grid>
        </Grid>
                
                {/* <button type='submit' onClick={()=>dispatch(fetchApi_data()) } >APi</button> */}
            </form>
            <Viewtodo />
        </CardContent>
      </CardActionArea>
     
    </Card>

            
        </div>
    )
}

export default AddTodo
