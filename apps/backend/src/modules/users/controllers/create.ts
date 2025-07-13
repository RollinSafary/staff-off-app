import { Request, Response } from "express";

export const createUser = () => {
  return (req: Request, res: Response) => {
    res.status(201).json({});
  };
};
