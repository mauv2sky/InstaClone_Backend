import client from '../../../client';

export default {
  Query: {
    seeFollowings: async (_, { userName, lastId }) => {
      const ok = client.user.findUnique({
        where: { userName },
        select: { id: true },
      });

      if (!ok) {
        return {
          ok: false,
          error: 'User not found.',
        };
      }
      // use cursor based pagination
      const followings = await client.user.findUnique({ where: { userName } }).following({
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      });

      return {
        ok: true,
        followings,
      };
    },
  },
};
