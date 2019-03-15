import uuidv4 from 'uuid/v4';
import { AuthenticationError ,ForbiddenError
} from 'apollo-server';

import { baseResolver } from './baseResolver';


/*export const messages = baseResolver.createResolver(
  (parent, args, { me,models } ) => {
                      console.log('me.id:' + me.id);
            return Object.values(models.messages).filter(
                message => message.userId === me.id,
            );
        }
);*/


//export const message = baseResolver.createResolver(
export const message= function (parent, { id },  { me, models }){
		const retValue = Object.values(models.messages).filter(
		message => ((message.userId === me.id) && (message.id == id)),);
   return retValue[0];
    }
//);


export const user = function  (message, args, { models })  {
            return models.users[message.userId];
}

export const messages=function (parent, args, { me,models } )  {
                      console.log('WTF: me.id:' + me.id);
            return Object.values(models.messages).filter(
                message => message.userId === me.id,
            );
        }

export default {
  Query: {
    messages,
	message
  },
  Message: {
	  user
  }
};
