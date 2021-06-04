import client from "../../../client";
import { protectedResolver } from "../users.utils";

export default {
    Mutation: {
        unFollowUser: protectedResolver(async (_, {userName}, {loggedInUser}) => {
            const ok = client.user.findUnique(userName);
            if(!ok){
                return {
                    ok: false,
                    error: "That user does not exist."
                };
            }
            await client.user.update({
                where: {
                    id: loggedInUser.id
                },
                data: {
                    following: {
                        disconnect: {
                            userName
                        }
                    }
                }
            });
            return {
                ok: true
            }
        })
    }
}