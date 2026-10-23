import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service.js';
import type { Book } from './book.interface.js';
import { AuthorGuard } from './guards/author.guard.js';
@Controller('books')
export class BookController {
  constructor(private readonly appService: BookService) {}

  @Get()
  getListBook() {
    return this.appService.getListBook();
  }

  @Post()
  addBook(@Body() book: Book) {
    return this.appService.addListBook(book);
  }

  @Get(':id')
  getBookId(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getListId(id);
  }

  @Delete(':id')
  @UseGuards(AuthorGuard)
  deleteBook(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteBook(id);
  }

  @Put(':id')
  @UseGuards(AuthorGuard)
  updateBook(@Param('id', ParseIntPipe) id: number, @Body() book: Book) {
    return this.appService.updateBook(id, book);
  }
}
