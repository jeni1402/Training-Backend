const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

// Temporary storage (acts like a database)
const users = [];

// ---------------- REGISTER ----------------
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.json({
            message: "User already exists"
        });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    users.push({
        username,
        password: hashedPassword
    });

    res.json({
        message: "User registered successfully",
        users
    });
});

// ---------------- LOGIN ----------------
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Find user
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.json({
            message: "User not found"
        });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        res.json({
            message: "Login Successful"
        });
    } else {
        res.json({
            message: "Invalid Password"
        });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});