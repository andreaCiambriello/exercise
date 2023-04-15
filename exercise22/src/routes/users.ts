import { Router } from "express";
import prisma from "../lib/prisma/client";

import { validate, userSchema, UserData } from "../lib/middleware/validation";

import { checkAuthorization } from "../lib/middleware/passport";

import { initMulterMiddleware } from "../lib/middleware/multer";

const upload = initMulterMiddleware();

const router = Router();

router.get("/", async (request, response) => {
    const users = await prisma.user.findMany();

    response.json(users);
});

router.get("/:id(\\d+)", async (request, response, next) => {
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

router.post("/", checkAuthorization, validate({ body: userSchema }), async (request, response) => {
    const userData: UserData = request.body;
    const username = request.user?.username as string;

    const user = await prisma.user.create({
        data: {
            ...userData,
            createdBy: username,
            updatedBy: username,
        }
    });

    response.status(201).json(user);
});

router.put("/:id(\\d+)", checkAuthorization, validate({ body: userSchema }), async (request, response, next) => {
    const userData: UserData = request.body;
    const userId = Number(request.params.id);
    const username = request.user?.username as string;

    try {
        const user = await prisma.user.update({
            where: { id: userId },
            data: {
                ...userData,
                updatedBy: username,
            }
        });

        response.status(200).json(user);
    } catch (error) {
        response.status(404);
        next(`Cannot PUT /users/${userId}`);
    }
});

router.delete("/:id(\\d+)", checkAuthorization, async (request, response, next) => {
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

router.post("/:id(\\d+)/photo",
    checkAuthorization,
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

export default router;