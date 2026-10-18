import { Injectable } from '@nestjs/common';
import { Book } from './book.interface.js';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      description: 'Sách hướng dẫn viết code sạch',
    },
    {
      id: 2,
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      description: 'Sách phát triển kỹ năng lập trình',
    },
    {
      id: 3,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      description: 'Sách về các mẫu thiết kế phần mềm',
    },
    {
      id: 4,
      title: 'JavaScript The Good Parts',
      author: 'Douglas Crockford',
      description: 'Kiến thức về JavaScript',
    },
  ];

  getListBook(): Book[] {
    return this.books;
  }

  addListBook(book: Book) {
    return this.books.push(book);
  }
  getListId(id: number) {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new NotFoundException(`${id} not found`);
    }

    return book;
  }

  deleteBook(id: number) {
    const book = this.books.find((b) => b.id === id);

    if (!book) {
      return 'Not found';
    }
    this.books = this.books.filter((b) => b.id !== id);
    return {
      message: 'Delete book successfully',
    };
  }

  updateBook(id: number, book: Book) {
    const checkBooks = this.books.find((b) => b.id === id);

    if (!checkBooks) {
      throw new NotFoundException(`${id} Not found `);
    }

    this.books = this.books.map((p) => (p.id === id ? { ...p, ...book } : p));

    return {
      message: 'Update successfully',
      data: this.books,
    };
  }
}
