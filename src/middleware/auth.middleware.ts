import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
interface AuthRequest extends Request {
  user?: string;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: AuthRequest, res: Response, next: NextFunction) {
    const username = req.headers['x-name'];

    if (typeof username !== 'string' || !username.trim()) {
      throw new UnauthorizedException('User is required');
    }

    req.user = username.trim();
    next();
  }
}
