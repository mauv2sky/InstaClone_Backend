import client from '../../../client';
import { deleteFromS3 } from '../../shared/shared.utils';
import { protectedResolver } from '../../user/users.utils';
import { PrismaDelete } from '@paljs/plugins';

export default {
    Mutation: {
        deletePhoto: protectedResolver(async (_, { id }, { loggedInUser }) => {
            const photo = await client.photo.findUnique({
                where: {
                    id,
                },
                select: {
                    userId: true,
                    file: true,
                },
            });
            if (!photo) {
                return {
                    ok: false,
                    error: 'photo not found.',
                };
            } else if (photo.userId !== loggedInUser.id) {
                return {
                    ok: false,
                    error: 'Not authorized.',
                };
            } else {
                const data = await deleteFromS3(photo.file);

                const prismaDelete = new PrismaDelete(client);
                await prismaDelete.onDelete({
                    model: 'Photo',
                    where: { id },
                    deleteParent: true,
                });

                return {
                    ok: true,
                };
            }
        }),
    },
};
