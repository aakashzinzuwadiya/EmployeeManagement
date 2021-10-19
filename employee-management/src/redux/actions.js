import * as types from "./actionType";
import axios from "axios";

const getEmployees = (users) => ({
    type: types.GET_EMPLOYEES,
    payload: users,
});

const employeeDeleted = () => ({
    type: types.DELETE_EMPLOYEE
});

const employeeAdded = () => ({
    type: types.ADD_EMPLOYEE
});

const getEmployeeById = (user) => ({
    type: types.GET_EMPLOYEE,
    payload: user
});

export const loadEmployees = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            dispatch(getEmployees(resp.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const deleteEmployee = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then(() => {
            dispatch(employeeDeleted());
            dispatch(loadEmployees());
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const addEmployee = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user)
        .then(() => {
            dispatch(employeeAdded());
            dispatch(loadEmployees());
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const getEmployee = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            dispatch(getEmployeeById(resp.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}