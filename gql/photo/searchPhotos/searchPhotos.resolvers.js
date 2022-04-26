import client from '../../../client';

export default {
    Query: {
        searchPhotos: (_, { keyword }) => {
            let photos = client.photo.findMany({
                where: {
                    caption: {
                        startsWith: keyword,
                    },
                },
            });

            if (!photos) {
                return {
                    ok: false,
                    error: 'No search results found.',
                };
            }

            return {
                ok: true,
                photos,
            };
        },
    },
};
