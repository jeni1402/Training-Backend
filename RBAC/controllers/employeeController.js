// controllers/employeeController.js

export const getEmployees = (req, res) => {

    res.json({
        message: "Employee List",
        loginUser: req.user
    });

};

export const deleteEmployee = (req, res) => {

    res.json({
        message: `Employee ${req.params.id} Deleted`,
        loginUser: req.user
    });

};

export const applyLeave = (req, res) => {

    res.json({
        message: "Leave Applied",
        loginUser: req.user
    });

};