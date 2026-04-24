const express = require('express');
const { scopePerRequest } = require('awilix-express');

const routes = require('./src/infra/http/routes');
const container = require('./src/infra/config/register');

const app = express();
const port = 3000;

app.use(express.json());
app.use(scopePerRequest(container));
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
