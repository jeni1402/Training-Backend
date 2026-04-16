// get all
app.get('/users', (req, res) => {
  res.json(users);
});

// get bt id
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// post 
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// update
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  res.json(user);
});

// delete
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send("User deleted");
});

