import { Request, Response } from "express";

export const getAllUsers = () => {
  return (req: Request, res: Response) => {
    res.status(200).json({});
  };
};
