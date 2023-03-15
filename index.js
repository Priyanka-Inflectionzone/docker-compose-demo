const express = require('express');
//require('express-async-errors');
const sequelize = require('./database');
const User = require('./user.model');

const app = express(); 

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Users Service at ${port}`);
});

app.post('/user', async (req, res) => {
  let { name, email } = req.body;
  await User.create({ name, email}); 
  res.send('User created successfully');
  
});

app.get('/user', async (req, res) => {
  let { id } = req.body;

  const user = await User.findOne({ where: { id } });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  } 
  else {
    return res.json(user);
  }

  
});

sequelize.sync({alter : true});
