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
import useSWR from "swr";

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



  const usersApi = "https://odko.ilearn.mn/v1";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error, mutate } = useSWR(usersApi, fetcher);

  let lengthArr ;
  for(let i=0; i < data?.length; i++){
    lengthArr =data.length
  }


  console.log(lengthArr)

  function handerAdd(e) {
    e.preventDefault();
    // console.log(e.target.task.value);
    axios
      .post(`https://odko.ilearn.mn/v1`, {
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
        <div >
           <div>
           <h4 className={styles.header1}>My ToDo List  <span className={styles.sp}>0/{lengthArr && lengthArr}</span></h4>
           </div>
         <div className={styles.box}>

         <Box
          component="form"
           
      
           noValidate
           autoComplete="off"
          >
   
         {
          data && data.map((list1,i)=>{
            return  <div className={styles.flex}><TextField key={i} id="standard-basic"  defaultValue={list1.todoList
            } variant="standard"  sx={{
              '& > :not(style)': { m: 1, width: '39ch' }
             }}/><div className={styles.flex1}><ModeEditIcon/><DeleteIcon/></div></div>
          })
         }
         </Box>

         <Box  component="form" onSubmit={handerAdd}>
       
          <TextField  variant="standard"  label ="what's next?" sx={{
            '& > :not(style)': { m: 1,width: '39ch' }, marginBottom:"20px",
           }} name="task"/><br/>
           <button variant="contained" className={styles.btn}>Add task</button>
        </Box>
        
         </div>
      </div>
      <div>
      
   
    </div>
    </div>

  )
}
