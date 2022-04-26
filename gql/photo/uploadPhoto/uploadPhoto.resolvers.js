import client from '../../../client';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectedResolver } from '../../user/users.utils';
import { processHashtags } from '../photo.utils';

export default {
    Mutation: {
        uploadPhoto: protectedResolver(async (_, { file, caption }, { loggedInUser }) => {
            let hashtagObj = [];
            if (caption) {
                hashtagObj = processHashtags(caption);
            }
            const fileUrl = await uploadToS3(file, loggedInUser.id, 'uploads');
            let photo = client.photo.create({
                data: {
                    file: fileUrl,
                    caption,
                    user: {
                        connect: {
                            id: loggedInUser.id,
                        },
                    },
                    ...(hashtagObj.length > 0 && {
                        hashtags: {
                            connectOrCreate: hashtagObj,
                        },
                    }),
                },
            });
            if (!photo) {
                return {
                    ok: false,
                    error: "Photo couldn't upload.",
                };
            }

            return {
                ok: true,
                photo,
            };
        }),
    },
};
