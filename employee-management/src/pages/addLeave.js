import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import { Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

import { addLeave } from "../redux/actions";

const AddLeave = () => {
  const [state, setState] = useState({
    leavename: "",
  });

  const [error, setError] = useState("");

  const {leavename} = state;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setError("");
    let { name, value} = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!leavename) {
        setError("Please provide all the input fields");
      } else {
        dispatch(addLeave(state));
        history.push("/");
        setError("");
      }
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
          style={{ width: "200px", marginTop: "10px" }}
        >
          Back
        </Button>
      </div>
      <h1>Add New Employee</h1>
      {error && <h3 style={{color: "red"}}>{error}</h3>}
      <Box
        component="form"
        sx={{
          marginLeft: 65,
          width: 300,
          height: 300,
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Leave Name"
          variant="standard"
          name="leavename"
          value={leavename || ''}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" type="submit" style={{width:"200px", marginTop: "10px", marginLeft: "130px"}}>
          Save
        </Button>
      </Box>
    </div>
  );
};

export default AddLeave;
