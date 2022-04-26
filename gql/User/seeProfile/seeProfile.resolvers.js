import client from '../../../client';

export default {
  Query: {
    seeProfile: async (_, { userName }) => {
      const user = await client.user.findUnique({
        where: {
          userName,
        },
      });
      if (!user) {
        return {
          ok: false,
          error: 'User not found.',
        };
      }
      return {
        ok: true,
        user,
      };
    },
  },
};
