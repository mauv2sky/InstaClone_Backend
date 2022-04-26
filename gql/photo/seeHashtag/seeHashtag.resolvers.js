import { hash } from 'bcrypt';
import client from '../../../client';

export default {
    Query: {
        seeHashtag: async (_, { hashtag }) => {
            let hashTag = await client.hashtag.findUnique({
                where: {
                    hashtag,
                },
            });

            if (!hashTag) {
                return {
                    ok: false,
                    error: 'hashtag not exist.',
                };
            }

            return {
                ok: true,
                hashTag,
            };
        },
    },
};
