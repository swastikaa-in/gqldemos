import jwt from 'jsonwebtoken';
import { AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server';
import _ from 'lodash';
import { createError } from 'apollo-errors';

import { baseResolver } from './baseResolver';


const createToken = async (user, secret, expiresIn) => {
    const { id, email, username, roles } = user;
    return await jwt.sign({ id, email, username, roles }, secret, {
        expiresIn,
    });
};

export const users = baseResolver.createResolver(
//export const users = function getUsers
  (parent, args, { models, me }) => {
         console.log('Inside userResolver: users');
            const curRoles = me.roles;
            if (curRoles.indexOf('ADMIN') == -1) {
                throw new ForbiddenError('Access Denied(403).');
            }
            return Object.values(models.users);
        }
);
export const user = baseResolver.createResolver(
 (parent, { id }, { models, me }) => {
           console.log('Inside userResolver: user');
            const curRoles = me.roles;
            if (curRoles.indexOf('ADMIN') == -1) {
                throw new ForbiddenError('Access Denied for Resource - 403');
            }
            return models.users[id];
        }
);

export const myself = baseResolver.createResolver(
 (parent, args, { me }) => {
	 console.log('Inside userResolver: myself');
           return me;
        }
);

export const messages = baseResolver.createResolver(
 (user, args, { models }) => {
		console.log('Inside userResolver messages');
		
            return Object.values(models.messages).filter(
                message => message.userId === user.id,
            );
        }
);



console.log('Inside userresolver:: users::' + messages);

export default {
  Query: {
    users,
	user,
	myself
  },
  User: {
	  messages
  }
};

