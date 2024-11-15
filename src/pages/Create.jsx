import * as React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField,Button } from '@mui/material';
import { addUser } from './Slice';
import { useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function ServerModal() {
  const dispatch= useDispatch()
  const rootRef = React.useRef(null);
  const data = useSelector((state)=>state.user)

  const navigate = useNavigate()
  const [fristname,setFristname]=useState("")
  const [lastname,setLastname]=useState("")
  const handlesubmit=()=>{
    if(fristname!==""&&lastname!==""){
    dispatch(addUser({id:data.length - 1,fristname,lastname}))
    navigate("/")
    }
  }



  return (
    
    <Box
      sx={{
        height:"100vh",
        flexGrow: 1,
        minWidth:"100%",
        transform: 'translateZ(0)',
        bgcolor:"primary.main"
      }}
      ref={rootRef}
    > 
 
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={(theme) => ({
            position: 'relative',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            p: 4,
          })}
        >
          <Typography id="server-modal-title" variant="h6" component="h2">
            Add New User
          </Typography>
          <TextField onChange={(e)=>setFristname(e.target.value)} sx={{my:2,width:"350px"}} id="outlined-basic" label="Frist Name" variant="outlined" />
          <TextField onChange={(e)=>setLastname(e.target.value)} sx={{my:2,width:"350px"}} id="outlined-basic" label="Last Name" variant="outlined" />
          <Box  sx={{textAlign:"center"}}>
          <Button onClick={()=>handlesubmit()} variant="outlined">Submit</Button>
          
          </Box>
     
        </Box>
      </Modal>
    </Box>
  );
}
