import express from 'express';
const app = express();

function canonize(url) {
  const str = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
  const username = url.match(str);
  return username;
}

app.get('/', (req, res) => {
  try {
    const un = canonize(req.query.username);
    return res.json(un[5]);
  } catch (e) { 
      return res.json('Invalid username');
  }

});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
