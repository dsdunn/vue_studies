const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const mongo = require('mongoose');

const schema = require('./schema');

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongo.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongo.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphiql', graphqlHTTP({
  schema, graphiql: true
}));

app.listen(port, () => {
  console.log('Server running at port ' + port)
})