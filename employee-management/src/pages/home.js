import React, {useEffect} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useSelector, useDispatch} from "react-redux";
import { deleteEmployee, loadEmployees } from "../redux/actions";
import { Button} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory} from "react-router-dom";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.data);

  const handleDelete = (id) => {
     if(window.confirm("Are you sure you want to delete this employee?")) {
       dispatch(deleteEmployee(id));
     }
  };

  useEffect(() => {
    dispatch(loadEmployees());
  }, []);

  return (
    <div>
      <div style={{margin: "10px", textAlign: "right"}}>
        <Button variant="contained" onClick={() => history.push('/addEmployee')}>Add New Employee</Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Mobile Number</StyledTableCell>
              <StyledTableCell align="center">Date of Birth</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row" align="center">{user.firstname}</StyledTableCell>
                <StyledTableCell align="center">{user.lastname}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.mobilenumber}</StyledTableCell>
                <StyledTableCell align="center">{user.dateofbirth}</StyledTableCell>
                <StyledTableCell align="center">
                    <IconButton aria-label="delete">
                      <DeleteIcon color="primary" onClick={() => handleDelete(user.id)}/>
                    </IconButton>
                    <IconButton aria-label="edit">
                      <EditIcon color="primary" onClick={() => history.push(`/updateEmployee/${user.id}`)}/>
                    </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
