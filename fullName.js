import express from 'express';
const app = express();

function isInt(val) {

}


app.get('/', (req, res) => {
  const longFio = req.query.fullname
  var ff = longFio.split(" ")
  // const fio = longFio.match(regex);
  if(ff.length <= 3) {
    switch (ff.length) {
      case 3:
        return res.json(ff[2]+" " + ff[0].substr(0,1) + ". " + ff[1].substr(0,1)+".");
        break;
      case 2:
        return res.json(ff[1]+" " + ff[0].substr(0,1) + ".");
        break;
      case 1:
        return res.json(ff[0]);
        break;
      default:

    }

  } else {
    return res.json("Invalid fullname");
  }

});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
