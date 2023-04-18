const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');



const  typeDefs  = require("./graphql/typeDefs");
const   resolvers  = require("./graphql/resolvers");


const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});
 


const MONGO_URI = 'mongodb://localhost:27017';
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db Connected`);
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
    
  })
  .catch(err => {
    console.log(err.message);

  });




