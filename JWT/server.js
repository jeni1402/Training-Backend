const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const SECRET_KEY = "mysecretkey";

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (
    username === "admin" &&
    password === "123"
  ) {
    const token = jwt.sign(
      { username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login Success",
      token,
    });
  }

  res.status(401).json({
    message: "Invalid Credentials",
  });
});

// Middleware
function verifyToken(req, res, next) {
  const token =
    req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Token Required",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      SECRET_KEY
    );

    req.user = decoded;

    next();
  } catch {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
}

// Protected Route
app.get(
  "/profile",
  verifyToken,
  (req, res) => {
    res.json({
      message: "Welcome",
      user: req.user,
    });
  }
);

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});