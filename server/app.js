const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cors-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect('mongodb://Layla:biang_515@ds163054.mlab.com:63054/gql-react');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true 
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})