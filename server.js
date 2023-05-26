const express = require('express');
const app = express();
const PORT = 3000;

app.get("/calcquery/:num1/:num2", (req, res) => {
  const firstNum = parseInt(req.params.num1);
  const secondNum = parseInt(req.params.num2);
  const operator = req.query.operation;
  //console.log(operator);
  // console.log('req.params', req.params)
  // console.log(typeof secondNum);
  if(operator === 'add'){
    const sum = firstNum + secondNum;
    console.log(operator)
    res.send(`Total sum is ${sum}`)
  }else if(operator === 'subtract'){
    const sub = firstNum - secondNum; 
    console.log(operator)
    res.send(`The Total of your subtraction is ${sub}`)
  }else if(operator === 'multiply'){
    const product = firstNum * secondNum;
    res.send(`The product is ${product}`);
  }else if(operator === 'divide'){
    const division = firstNum / secondNum;
    res.send(`The result of your division is ${division}`)
  }else if(operator === 'exponent'){
    const exponent = firstNum ** secondNum;
    res.send(`The result of your exponent is ${exponent}`)
  }else{
    res.send(`No operation`)
  }

})


app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
})

