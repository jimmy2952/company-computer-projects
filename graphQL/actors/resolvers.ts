import { books } from '../data'
import { Book } from '../model/bookModel'

const resolvers = {
  Query: {
    books: function(root: any, args: any, context: any, info: any) {
      return books;
    },
    book: (root: any, args: any, context: any, info: any) => books.find(e => e.id === args.id)
  },
  Book: {
    id: (parent: Book) => parent.id,
    title: (parent: Book) => parent.title,
    pages: (parent: Book) => parent.pages,
    chapters: (parent: Book) => parent.chapters
  }
};