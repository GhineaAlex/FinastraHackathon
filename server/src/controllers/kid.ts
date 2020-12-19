import { Request, Response } from 'express';

export const getKid = (req: Request, res: Response) => {
  res.send(req.user);
};
