import { Request, Response } from "express";

export const deleteUser = () => {
  return (req: Request, res: Response) => {
    res.status(200).json({});
  };
};
