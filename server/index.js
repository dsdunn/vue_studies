const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const mongo = require('mongoose');

const schema = require('./schema');

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongo.connect('student:password@mongodb://db:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongo.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema, graphiql: true
}));

// app.use('/graphql_api', (req, res) => {
//   console.log(req.body);
//   res.json("you hit the endpoint");
// })

app.listen(port, () => {
  console.log('Server running at port ' + port)
})