import express from "express";
import "express-async-errors";
import { validationErrorMiddleware } from "./lib/middleware/validation";
import { initCorsMiddleware } from "./lib/middleware/cors";

import usersRoutes from "./routes/users";

const app = express();

app.use(express.json());

app.use(initCorsMiddleware());

app.use("/users", usersRoutes);

app.use(validationErrorMiddleware);

export default app;