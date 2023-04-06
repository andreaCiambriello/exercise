import supertest from "supertest";

import { prismaMock } from "../lib/prisma/client.mock";

import app from "../app";

const request = supertest(app);

describe("GET /users", () => {
    test("Valid request", async() => {
        const users = [
            { id: 123, name: "Andrea" },
            { id: 456, name: "Luca" }
        ];

        // @ts-ignore
        prismaMock.user.findMany.mockResolvedValue(users);

        const response = await request
            .get("/users")
            .expect(200)
            .expect("Content-Type", /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");

        expect(response.body).toEqual(users);
    });
});

describe("GET /user/:id", () => {
    test("Valid request", async() => {
        const user = {
            id: 123, name: "Andrea"
        };

        // @ts-ignore
        prismaMock.user.findUnique.mockResolvedValue(user);

        const response = await request
            .get("/users/123")
            .expect(200)
            .expect("Content-Type", /application\/json/)

        expect(response.body).toEqual(user);
    });

    test("User does not exist", async () => {
        // @ts-ignore
        prismaMock.user.findUnique.mockResolvedValue(null);

        const response = await request
            .get("/users/147")
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot GET /users/147");
    });

    test("Invalid user ID", async () => {
        const response = await request
            .get("/users/asdf")
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot GET /users/asdf");
    });
});

describe("POST /users", () => {
    test("Valid request", async() => {
        const user = {
            id: 101, name: "Pippo"
        };

        // @ts-ignore
        prismaMock.user.create.mockResolvedValue(user);

        const response = await request
            .post("/users")
            .send(user)
            .expect(201)
            .expect("Content-Type", /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");

        expect(response.body).toEqual(user);
    });

    test("Invalid request", async() => {
        const user = {
            id: 789
        };

        const response = await request
            .post("/users")
            .send(user)
            .expect(422)
            .expect("Content-Type", /application\/json/)

        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array)
            }
        });
    });
});

describe("PUT /users/:id", () => {
    test("Valid request", async() => {
        const user = {
            id: 456, name: "Giorgio"
        };

        // @ts-ignore
        prismaMock.user.update.mockResolvedValue(user);

        const response = await request
            .put("/users/456")
            .send(user)
            .expect(200)
            .expect("Content-Type", /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");

        expect(response.body).toEqual(user);
    });

    test("Invalid request", async() => {
        const user = {
            id: 101
        };

        const response = await request
            .put("/users/101")
            .send(user)
            .expect(422)
            .expect("Content-Type", /application\/json/)

        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array)
            }
        });
    });

    test("User does not exist", async () => {
        // @ts-ignore
        prismaMock.user.update.mockRejectedValue(new Error("Error"));

        const response = await request
            .put("/users/147")
            .send({
                id: 147, name: "Giorgio"
            })
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot PUT /users/147");
    });

    test("Invalid user ID", async () => {
        const response = await request
            .put("/users/asdf")
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot PUT /users/asdf");
    });
});

describe("DELETE /user/:id", () => {
    test("Valid request", async() => {
        const response = await request
            .delete("/users/123")
            .expect(204)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");

        expect(response.text).toEqual("");
    });

    test("User does not exist", async () => {
        // @ts-ignore
        prismaMock.user.delete.mockRejectedValue(new Error("Error"));

        const response = await request
            .delete("/users/147")
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot DELETE /users/147");
    });

    test("Invalid user ID", async () => {
        const response = await request
            .delete("/users/asdf")
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot DELETE /users/asdf");
    });
});

describe("POST /users/:id/photo", () => {
    test("Valid request with PNG file upload", async () => {
        await request
            .post("/users/123/photo")
            .attach("photo", "test-fixtures/photos/image.png")
            .expect(201)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080");
    });

    test("Invalid user ID", async () => {
        const response = await request
            .post("/users/asdf/photo")
            .expect(404)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Cannot POST /users/asdf/photo");
    });

    test("Invalid request with no file upload", async () => {
        const response = await request
            .post("/users/147/photo")
            .expect(400)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("No photo file uploaded.");
    });
});

// const user = {
//     id: 789, name: "Marco"
// };