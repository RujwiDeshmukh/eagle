const { ApolloServer, gql } = require("apollo-server");

const projects = [
  {
    id: 1,
    name: "Project 1",
    poc: "POC 1",
    pocEmail: "a@b.com",
    pocPhone: "1234567890",
    url: "www.google.com",
    startDate: "01/01/2020",
    renewDate: "01/01/2022",
    notes: ["Payment Received on 11/01/2021", "Deployed at linode"],
  },
];

const typeDefs = gql`
  type Project {
    name: String
    poc: String
    pocEmail: String
    pocPhone: String
    url: String
    startDate: String
    renewDate: String
    notes: [String]
  }
  type Query {
    projects: [Project]
  }
`;

const resolvers = {
  Query: {
    projects: () => projects,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
