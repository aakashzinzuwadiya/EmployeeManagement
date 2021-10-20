import React, { useEffect } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { loadLeaves, deleteLeave } from "../redux/actions";

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

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShowLeaves = ({ open = false, handleClose }) => {
  const dispatch = useDispatch();
  const { leaves } = useSelector((state) => state.data);
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this leave?")) {
      dispatch(deleteLeave(id));
    }
  };

  useEffect(() => {
    dispatch(loadLeaves());
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            List of Leaves
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ height: 100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Leave Name</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaves &&
                  leaves.map((leave) => (
                    <StyledTableRow key={leave.id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {leave.leavename}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <IconButton aria-label="delete">
                          <DeleteIcon
                            color="primary"
                            onClick={() => handleDelete(leave.id)}
                          />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            onClick={handleClose}
          >
            {" "}
            Close{" "}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ShowLeaves;
