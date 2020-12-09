const gql = require("graphql-tag");

const typeDefs = gql`
    type Reviews {
        name: String
        time: String
        text: String
        rating: Float
    }

    type Query {
        reviews(location: String!, language: String!): [Reviews]
    }
`;

module.exports = {
  typeDefs
};
