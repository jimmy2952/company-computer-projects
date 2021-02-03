const { ApolloServer, gql } = require('apollo-server');

// 這是一個（示範的）books 的 collection，我們可以透過 GraphQL server 來 query。
// 在更複雜的例子，我們會從像是 REST API 或資料庫等既有的 data soruce 取得資料。
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// Type definitions 定義資料的「形狀」，
// 並指定從 GraphQL server 獲取的方式。
const typeDefs = gql`
  # GraphQL 的註解使用 hash（#）符號來定義

  # 「Book」型別可以使用其他的型別宣告
  type Book {
    title: String
    author: String
  }

  # 「Query」型別是所有 GraphQL 查詢的 root。
  # （「Mutation」會在稍後介紹）
  type Query {
    books: [Book]
  }
`;

// Resolvers 定義從 schema 獲取 type 的方式，
// 我們從上面的「books」array 回傳所有的書。
const resolvers = {
  Query: {
    books: () => books,
  },
};

// 基本上來說，ApolloServer 可以透過傳入 type definitions（typeDefs）
// 及 resolvers 來管理獲取這些資料的型別。
const server = new ApolloServer({ typeDefs, resolvers });

// `listen` method 啟動 web-server。現有的 apps 可以
// 使用 middleware options，我們將在晚點討論。
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});