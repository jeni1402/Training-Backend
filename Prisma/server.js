import express from "express";
import prisma from "./prismaClient.js";
const app =express();
app.use (express.json());

/*
CREATE USER
*/
app.post("/users", async (req, res) => {
  const user = await prisma.user.create({
    data: req.body
  });

  res.json(user);
});

/*
GET ALL USERS
*/
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

/*
GET USER BY ID
*/
app.get("/users/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });

  res.json(user);
});

/*
UPDATE USER
*/
app.put("/users/:id", async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: Number(req.params.id)
    },
    data: req.body
  });

  res.json(user);
});

/*
DELETE USER
*/
app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: Number(req.params.id)
    }
  });

  res.json({
    message: "User Deleted"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});