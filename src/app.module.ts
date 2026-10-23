import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BookController } from './book.controller.js';
import { BookService } from './book.service.js';
import { AuthMiddleware } from './middleware/auth.middleware.js';
import { AuthorGuard } from './guards/author.guard.js';
@Module({
  controllers: [BookController],
  providers: [BookService,AuthorGuard],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      {
        path: 'books/:id',
        method: RequestMethod.PUT,
      },
      {
        path: 'books/:id',
        method: RequestMethod.DELETE,
      },
    );
  }
}
