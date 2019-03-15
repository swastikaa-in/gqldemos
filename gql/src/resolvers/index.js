//import userResolvers from './user';
//import messageResolvers from './message';

//export default [userResolvers, messageResolvers];

import userResolvers from './userresolver';
import messageResolvers from './messageresolver';


console.log('userResolvers:' + userResolvers);
console.log('messageResolvers:' + messageResolvers);
export default [userResolvers, messageResolvers];