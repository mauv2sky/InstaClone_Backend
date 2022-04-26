import client from '../../../client';

export default {
    Query: {
        seePhoto: (_, { id }) => {
            let photo = client.photo.findUnique({
                where: {
                    id,
                },
            });

            if (!photo) {
                return {
                    ok: false,
                    error: 'Photo not found.',
                };
            }

            return {
                ok: true,
                photo,
            };
        },
    },
};
