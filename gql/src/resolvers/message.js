import uuidv4 from 'uuid/v4';
import { AuthenticationError ,ForbiddenError
} from 'apollo-server';

export default {
    Query: {
        messages: (parent, args, { me,models } ) => {
                      console.log('me.id:' + me.id);
            return Object.values(models.messages).filter(
                message => message.userId === me.id,
            );
			
			
        },
        message: (parent, { id },  { me, models }) => {
          
			const retValue = Object.values(models.messages).filter(
                message => ((message.userId === me.id) && (message.id == id)),
            );

            return retValue[0];
           
            
				
            

        },
    },

    Mutation: {
        createMessage: (parent, { text }, { me, models }) => {
           
            const id = uuidv4();
            const message = {
                id,
                text,
                userId: me.id,
            };
            console.log(message);
            models.messages[id] = message;
            models.users[me.id].messageIds.push(id);

            return message;
        },

        deleteMessage: (parent, { id }, { models }) => {
            const { [id]: message, ...otherMessages } = models.messages;

            if (!message) {
                return false;
            }

            models.messages = otherMessages;

            return true;
        },
    },

    Message: {
        user: (message, args, { models }) => {
            return models.users[message.userId];
        },
    },
};