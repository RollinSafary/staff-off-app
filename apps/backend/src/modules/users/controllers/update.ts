import { Request, Response } from "express";

export const updateUser = () => {
  return (req: Request, res: Response) => {
    res.status(200).json({});
  };
};
