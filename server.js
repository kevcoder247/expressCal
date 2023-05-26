const express = require('express');
const app = express();
const PORT = 3000;

app.get('/:num1/:num2', (req, res) => {
  const firstNum = parseInt(req.params.num1);
  const secondNum = parseInt(req.params.num2);
  const sum = firstNum + secondNum;
  console.log(sum)
  res.send(`<h1>${sum}</h1>`)
  
})

app.get('/somerout', (req, res) => {
  console.log('req.query:', req.query)
  res.send('someroute accessed')
}) 


app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
})

