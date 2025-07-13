import { Request, Response } from "express";

export const getUserById = () => {
  return (req: Request, res: Response) => {
    res.status(200).json({});
  };
};
