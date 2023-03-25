import express from "express";
import "express-async-errors";
import prisma from "./lib/prisma/client";

import { validate, userSchema, UserData, validationErrorMiddleware } from "./lib/validation";

const app = express();

app.use(express.json());

app.get("/users", async (request, response) => {
    const users = await prisma.user.findMany();

    response.json(users);
});

app.post("/users", validate({ body: userSchema }), async (request, response) => {
    const userData: UserData = request.body;

    const user = await prisma.user.create({
        data: userData
    });

    response.status(201).json(user);
});

app.use(validationErrorMiddleware);

export default app;