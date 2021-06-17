import jwt from "jsonwebtoken"
import client from "../../client";

export const getUser = async (token) => {
    try {
        if (!token) {
            return null;
        }
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        const loggedInUser = await client.user.findUnique({ where: { id } });
        if (loggedInUser) {
            return loggedInUser;
        } else {
            return null;
        }
    } catch {
        return null;
    }
}

export const protectedResolver = (ourResolver) => (root, args, context, info) => {
    if (!context.loggedInUser) {
        const query = info.operation.operation === "query";
        if (query) {
            return null;
        } else {
            return {
                ok: false,
                error: "Please log in to perform this action.",
            };
        }
    }
    return ourResolver(root, args, context, info);
}