import { NextFunction, Request, Response } from 'express';
import { ApiKeyService } from '../service/ApiKeyService';

interface AuthRequest extends Request {
  apiKey?: string;
}

export const apiKeyMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'] as string;

  if (apiKey && await ApiKeyService.validateKey(apiKey)) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};
