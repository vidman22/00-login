
require('dotenv').load();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const graphqlHTTP = require('express-graphql');
const port = process.env.PORT || 3001;
const root = require('./graphql/psqlreducers');
const schema  = require('./graphql/typeDefs');

const decoded = require('./checkJWT');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , global = namespace.shift()
      , formParam = global;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/graphql', cors(), graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql:true
  }));


app.listen(port, function(){
  console.log('Server started!');
});