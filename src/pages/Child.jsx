import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,Box  } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteUser } from './Slice';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



function Child() {
  const data = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const handledelete=(id)=>{

    dispatch(deleteUser({id}))
  }
 


  return (
    <>
    <Box sx={{textAlign:"center"}} >
      <Typography variant='h2'  >Table Data</Typography>
    </Box>

    <Box>
      <Button onClick={()=>navigate("/create")} sx={{mb:1}} variant="contained" color="success">Create +</Button>
    </Box>


<TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="right">Frist Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fristname}</StyledTableCell>
              <StyledTableCell align="right">{row.lastname}</StyledTableCell>
              <StyledTableCell align="right">

              <Button onClick={()=>handledelete(row.id)} variant="outlined" startIcon={<DeleteIcon />}>
             
        Delete
      </Button>
      <Button sx={{mx:2}} variant="outlined">     
      <Link  style={{textDecoration:"none"}}  to={`/updatedata/${row.id}`} component="button"
 
>
      edit</Link> <EditIcon/>   </Button>
   

      

      
     
              </StyledTableCell>
       
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </>
  )
}

export default Child
