const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.sendFile(`${base}/login.html`);
  });

  app.get('/register', (req, res) => {
    res.sendFile(`${base}/REGISTER.html`);
  });


  app.get('/add-spots', (req, res) => {
    res.sendFile(`${base}/admin-add.html`);
  });
  app.get('/spots', (req, res) => {
    res.sendFile(`${base}/spots.html`);
  });
  app.get('/users', (req, res) => {
    res.sendFile(`${base}/users.html`);
  });
  app.get('/vehicles', (req, res) => {
    res.sendFile(`${base}/vehicles.html`);
  });


  app.get('/sendcommand', (req, res) => {
    res.sendFile(`${base}/send-command.html`);
  });
  app.get('/payments', (req, res) => {
    res.sendFile(`${base}/pay.html`);
  });
  
  app.get('/*', (req, res) => {
    res.sendFile(`${base}/404.html`);
  });

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });