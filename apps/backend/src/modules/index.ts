import { onRequest } from "firebase-functions/https";
import { default as usersApp } from "./users/index.js";

export const users = onRequest(usersApp);
