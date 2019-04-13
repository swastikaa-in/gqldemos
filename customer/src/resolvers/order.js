export default {
    Query: {
        orders: (parent, {  }, { models, me }) => {
            return Object.values(models.orders);
        },
        order: (parent, { orderno}, { models, me }) => {
            return models.orders[orderno];
        },
        ordersByCustno: (parent, { custno }, { models, me }) => {
            console.log(Object.values(models.orders));
            return Object.values(models.orders).filter(
                order => order.custno=== custno
            );
        }
    }
};