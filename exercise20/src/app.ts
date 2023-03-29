import express from "express";
import "express-async-errors";
import cors from "cors";
import prisma from "./lib/prisma/client";

import { validate, userSchema, UserData, validationErrorMiddleware } from "./lib/validation";

import { initMulterMiddleware } from "./lib/middleware/multer";

const upload = initMulterMiddleware();

const corsOptions = {
    origin: "http://localhost:8080"
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.get("/users", async (request, response) => {
    const users = await prisma.user.findMany();

    response.json(users);
});

app.get("/users/:id(\\d+)", async (request, response, next) => {
    const userId = Number(request.params.id);

    const user = await prisma.user.findUnique({
        where: { id: userId}
    });

    if (!user) {
        response.status(404);
        return next(`Cannot GET /users/${userId}`);
    }

    response.json(user);
});

app.post("/users", validate({ body: userSchema }), async (request, response) => {
    const userData: UserData = request.body;

    const user = await prisma.user.create({
        data: userData
    });

    response.status(201).json(user);
});

app.put("/users/:id(\\d+)", validate({ body: userSchema }), async (request, response, next) => {
    const userData: UserData = request.body;
    const userId = Number(request.params.id);

    try {
        const user = await prisma.user.update({
            where: { id: userId },
            data: userData
        });

        response.status(200).json(user);
    } catch (error) {
        response.status(404);
        next(`Cannot PUT /users/${userId}`);
    }
});

app.delete("/users/:id(\\d+)", async (request, response, next) => {
    const userId = Number(request.params.id);

    try {
        await prisma.user.delete({
            where: { id: userId }
        });

        response.status(204).end();
    } catch (error) {
        response.status(404);
        next(`Cannot DELETE /users/${userId}`);
    }
});

app.post("/users/:id(\\d+)/photo",
    upload.single("photo"),
    async (request, response, next) => {

        if(!request.file) {
            response.status(400);
            return next("No photo file uploaded.");
        }

        const photoFilename = request.file.filename;

        response.status(201).json({ photoFilename });
    }
);

app.use(validationErrorMiddleware);

export default app;