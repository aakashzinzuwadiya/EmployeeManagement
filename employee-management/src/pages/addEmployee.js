import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import { Button, Box, TextField } from "@mui/material";

import { addEmployee } from "../redux/actions";

const AddEmployee = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    dateofbirth: "",
  });

  const [error, setError] = useState("");

  const { firstname, lastname, email, mobilenumber, dateofbirth } = state;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setError("");
    let { name, value} = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!firstname || !lastname || !email || !mobilenumber || !dateofbirth) {
        setError("Please provide all the input fields");
      } else {
        dispatch(addEmployee(state));
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
          style={{width:"200px", marginTop: "10px"}}
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
          label="First Name"
          variant="standard"
          name="firstname"
          value={firstname}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          name="lastname"
          value={lastname}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          value={email}
          type="email"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          name="mobilenumber"
          value={mobilenumber}
          type="number"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Date of Birth"
          variant="standard"
          name="dateofbirth"
          value={dateofbirth}
          type="date"
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

export default AddEmployee;
