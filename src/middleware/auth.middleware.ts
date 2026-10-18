import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { BookService } from '../book.service.js';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly appService: BookService) {}
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      throw new UnauthorizedException();
    }

    const name = req.body.name;

    const books = this.appService.getListId(Number(req.params.id));

    if (books.author !== name) {
      throw new ForbiddenException('Bạn không phải tác giả');
    }
    next();
  }
}
