import { createResolver } from 'apollo-resolvers';
import { createError, isInstance } from 'apollo-errors';
import { ForbiddenError } from 'apollo-server';

const baseResolver = createResolver(
  null,
  (root, args, context, error) => isInstance(error) ? error : new UnknownError()
);



const users = baseResolver.createResolver(
  (parent, args, { models, me } ) => {
         console.log('Inside userResolver: users');
         return Object.values(models.users);
  }
);

export default {
  Query: {
    users
  }
};
