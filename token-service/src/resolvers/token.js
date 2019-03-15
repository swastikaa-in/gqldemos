import jwt from 'jsonwebtoken';
import { AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server';
import _ from 'lodash';

const createToken = async (user, secret, expiresIn) => {
    const { id, email, username, roles } = user;
    return await jwt.sign({ id, email, username, roles }, secret, {
        expiresIn,
    });
};

export default {
    Mutation: {
        signIn: async (
            parent,
            { login, password },
            { models, secret },
        ) => {
            const users = Object.values(models.users);
            const pos = _.findIndex(users, { 'username': login, 'password': password });
            if (pos == -1) {
                throw new UserInputError(
                    'Invalid Username/Password. Access Denied',
                );
            }
            const user = users[pos];
            return { token: createToken(user, secret, '30m') };
        },

    }
};