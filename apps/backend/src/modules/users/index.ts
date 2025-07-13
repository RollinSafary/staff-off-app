import { Router } from "express";
import { createUser } from "./controllers/create.js";
import { getAllUsers } from "./controllers/getAll.js";
import { getUserById } from "./controllers/getById.js";
import { updateUser } from "./controllers/update.js";
import { deleteUser } from "./controllers/delete.js";
import { createAppForModule } from "../../utils/app-creator.js";

const usersRouter = Router();

// Wire routes with imported handlers
usersRouter.post("/", createUser());
usersRouter.get("/", getAllUsers());
usersRouter.get("/:id", getUserById());
usersRouter.put("/:id", updateUser());
usersRouter.delete("/:id", deleteUser());

export default createAppForModule(usersRouter);
