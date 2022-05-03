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
                    error: 'No results were found for your search.',
                };
            }

            return {
                ok: true,
                hashTag,
            };
        },
    },
};
