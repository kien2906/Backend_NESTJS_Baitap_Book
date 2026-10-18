import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller.js';
import { BookService } from './book.service.js';

describe('AppController', () => {
  let appController: BookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();

    appController = app.get<BookController>(BookController);
  });

  
});
