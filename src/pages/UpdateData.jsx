import * as React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector  } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatedata } from "./Slice";
export default function ServerModal() {
  
  const navigate = useNavigate()
  const rootRef = React.useRef(null);
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.user)
  const {id} = useParams()
  const existingUser= data.filter(f=>f.id==id)
  const {fristname,lastname}=existingUser[0]
  const [updatefristname,setFristname]=useState(fristname)
  const [updatelastname, setLastname]=useState(lastname)


  const handleupdatedata=()=>{
      dispatch(updatedata({id:id,fristname:updatefristname,lastname:updatelastname}))
      navigate("/")
      
  }

  return (
    <Box
      sx={{
        height: "100vh",
        flexGrow: 1,
        minWidth: "100%",
        transform: "translateZ(0)",
        bgcolor: "primary.main",
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
          display: "flex",
          p: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={(theme) => ({
            position: "relative",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            p: 4,
          })}
        >
          <Typography id="server-modal-title" variant="h6" component="h2">
            Update User
          </Typography>
          <TextField
            value={updatefristname}
            sx={{ my: 2, width: "350px" }}
            id="outlined-basic"
            label="Frist Name"
            variant="outlined"
            onChange={(e)=>setFristname(e.target.value)}
          />
          <TextField
          value={updatelastname}
            sx={{ my: 2, width: "350px" }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(e)=>setLastname(e.target.value)}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button onClick={()=>handleupdatedata()} variant="outlined">Update</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
