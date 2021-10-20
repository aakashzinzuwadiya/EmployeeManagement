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

const employeeUpdated = () => ({
    type: types.UPDATE_EMPLOYEE
});

const getEmployeeById = (user) => ({
    type: types.GET_EMPLOYEE,
    payload: user
});

const leaveAdded = () => ({
    type: types.ADD_LEAVE
});

const getLeaves = (leaves) => ({
    type: types.GET_LEAVES,
    payload: leaves
});

const leaveDeleted = () => ({
    type: types.DELETE_LEAVE
});

export const loadEmployees = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/user`)
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
        axios.delete(`${process.env.REACT_APP_API}/user/${id}`)
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
        axios.post(`${process.env.REACT_APP_API}/user`, user)
        .then(() => {
            dispatch(employeeAdded());
            dispatch(loadEmployees());
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const updateEmployee = (user) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/user/${user.id}`, user)
        .then(() => {
            dispatch(employeeUpdated());
            dispatch(loadEmployees());
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const getEmployee = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/user/${id}`)
        .then((resp) => {
            dispatch(getEmployeeById(resp.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const loadLeaves = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/leaves`)
        .then((resp) => {
            dispatch(getLeaves(resp.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const addLeave = (leave) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}/leaves`, leave)
        .then(() => {
            dispatch(leaveAdded());
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const deleteLeave = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/leaves/${id}`)
        .then(() => {
            dispatch(leaveDeleted());
            dispatch(loadLeaves()); 
        })
        .catch(error => {
            console.log(error);
        })
    }
}