export default {
    Query: {
        customers: (parent, args, { models, me }) => {
            return Object.values(models.customers);
        },
        customer: (parent, { custno }, { models, me }) => {
           //console.log('received custno:' + custno);
            return models.customers[custno];
        }
    }
};