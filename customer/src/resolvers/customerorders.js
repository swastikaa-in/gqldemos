export default {
    Query: {
        getCustomers: (parent, {  }, { models, me }) => {
            console.log(Object.values(models.customers));
            return Object.values(models.customers);
        }
    },
    orders: (parent, {  }, { models, me }) => {
            console.log(Object.values(models.orders));
            return Object.values(models.orders);
         }

};