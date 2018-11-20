const express = require('express');
const cors = require('cors');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');

const port = process.env.PORT || 8080;

const app = express();

// Express Middleware
app.use(parser.json());
app.use(cors());
app.use(morgan('dev'));
// End of Middleware

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Server connected on', port);
});
