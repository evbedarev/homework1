import express from 'express';
const app = express();

function isInt(val) {
if(isNaN(Number(val))) {
  return 0;
} else {
  return Number(val);
}
}


app.get('/', (req, res) => {
  // const c = req.query.a+reg.query.b;
  const a = isInt(req.query.a);
  const b = isInt(req.query.b);
  const c = a + b;
  return res.json('Вывод: ' + c);
  // res.json({
  //   Вывод: c+'',
  // });
});



app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
