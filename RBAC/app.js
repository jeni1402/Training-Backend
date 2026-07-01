import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

/*
Dummy Login API

Admin:
{
   "email":"admin@gmail.com"
}

HR:
{
   "email":"hr@gmail.com"
}

Employee:
{
   "email":"employee@gmail.com"
}
*/

app.post("/login", (req, res) => {

    const { email } = req.body;

    let user;

    if (email === "admin@gmail.com") {

        user = {
            id: 1,
            name: "Admin",
            role: "admin"
        };

    } else if (email === "hr@gmail.com") {

        user = {
            id: 2,
            name: "HR",
            role: "hr"
        };

    } else {

        user = {
            id: 3,
            name: "Employee",
            role: "employee"
        };

    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });

    res.json({
        message: "Login Successful",
        token
    });

});

app.get("/", (req, res) => {
    res.send("RBAC Server is Working");
});

app.use("/api", employeeRoutes);

app.use((req, res, next) => {
    console.log("Request:", req.method, req.url);
    next();
});

app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
});
