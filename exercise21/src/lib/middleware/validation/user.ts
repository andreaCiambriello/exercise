import { Static, Type } from "@sinclair/typebox";

export const userSchema = Type.Object({
    id: Type.Integer(),
    name: Type.String(),
}, { additionalProperties: false});

export type UserData = Static<typeof userSchema>