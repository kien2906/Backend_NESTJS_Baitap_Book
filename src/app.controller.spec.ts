import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './book.controller.js';
import { AppService } from './book.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  
});
