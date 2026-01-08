import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

const processed = new Set();

export function webhookHandler(req: Request, res: Response) {
  const id = req.headers['x-event-id'] as string || uuid();
  if (processed.has(id)) return res.sendStatus(200);

  processed.add(id);
  res.sendStatus(200);
}