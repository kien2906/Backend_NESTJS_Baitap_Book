import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { BookService } from '../book.service.js';
import { Request } from 'express';
interface AuthRequest extends Request {
  user?: string;
}

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(private readonly bookService: BookService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    const username = request.user;

    if (!username) {
      throw new UnauthorizedException('User is required');
    }

    const id = Number(request.params.id);

    const book = await this.bookService.getListId(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    if (book.author !== username) {
      throw new ForbiddenException('You are not the author');
    }
    return true;
  }
}
