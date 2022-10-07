import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { border } from '@mui/system';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [list, setList]=   React.useState()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  React.useEffect(()=>{
  axios
  .get(`http://localhost:3000/v1`,)
  .then((res) => setList(res.data.data))
  .catch((err) => console.log(err));
  },[])

  function handlerAdd(){
   console.log("hi")
    
  }


  function handerAdd(e) {
    e.preventDefault();
    // console.log(e.target.task.value);
    axios
      .post(`http://localhost:3000/v1`, {
        todoList: e.target.task.value,
       
      })
      .then((res) => {
        if(res.status===200){
          alert("add task")
          setOpen(false)
        }
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className={styles.container}>
      <div className={styles.box}>
             <h4 className={styles.header1}>My ToDo List </h4>
         <div>

         <Box
          component="form"
           sx={{
            '& > :not(style)': { m: 1, width: '90%' }, marginBottom:"20px", border:"none"
           }}
      
           noValidate
           autoComplete="off"
          >
   
         {
          list && list.map((list1,i)=>{
            return  <div className={styles.flex}><TextField key={i} id="standard-basic" label={i+1} defaultValue={list1.todoList
            } variant="standard" /><div><ModeEditIcon/><DeleteIcon/></div></div>
          })
         }
         </Box>
         <Button onClick={handleOpen} variant="contained" sx={{marginLeft:"130px", position:"absolute" ,marginTop:'-5px',  backgroundColor:"black"}}>Add task</Button>
         </div>
      </div>
      <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handerAdd}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ToDo List
          </Typography>
          <TextField  variant="standard"  sx={{
            '& > :not(style)': { m: 1, width: '100%' }
           }} name="task"/><br/>
           <button className={styles.btn}>Add task</button>
        </Box>
      </Modal>
    </div>
    </div>

  )
}
