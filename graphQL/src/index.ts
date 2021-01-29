const typeDefs = `
  type Book {
    id: Int!
    title: String!
    pages: Int
    chapters: Int
  }

  type Query {
    books: [Book!]
    book(id: Int!): Book
  }
`;