const jwt = require('jsonwebtoken');

const { BadRequest } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest('Provide username and password')
  }

  const id = new Date().getDate();


  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '1d' })

  res.status(200).json({ message: 'User is authorized', token })
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({ data: `Hello ${req.user.username}.`, secret: `Your lucky number is ${luckyNumber}` });
}


module.exports = {
  login,
  dashboard
}
