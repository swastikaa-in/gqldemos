import { expect } from 'chai';


//import userResolver from '../resolvers/userresolver'
import messageResolver from '../resolvers/messageresolver'


describe('Get Messages', () => {
  describe('messages: messages', () => {
    it('Returns List of Messages', async () => {
    	const expectedResult = {
    			"data": {
    			    "getBookOfBusinessSummary": {
    			      "data": [
    			        {
    			          "clientId": "12345",
    			          "clientName": "ABC"
    			        },
    			        {
    			          "clientId": "12345",
    			          "clientName": "XYZ"
    			        }
    			      ]
    			    }
    			  }
    	      };

			  
			  const obj = {
								  parent: null,
								  args: null,
								  {
									  models:"est",
									  me:"test"
								  }
    };
	   console.log(messageResolver);
	   console.log('Before Testing function');
      const result = messageResolver.messages(obj);
      expect(result.data).to.eql(expectedResult);
    });
    
   
	
	
  });
});