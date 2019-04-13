let customers = {
  1: {
    custno: '1',
    fname: 'sridhar',
    lname:'balasubramanian',
    email:'sridharb.in@gmail.com$'
  },
  2: {
    custno: '2',
    fname: 'red',
    lname:'forman',
    email:'rforman@mail.com'
  },
  3: {
    custno: '3',
    fname: 'archie',
    lname:'punjabi',
    email:'apunjabi@mail.com'
  }
};

let orders = {
  1: {
    orderno: '1',
    orderdescription: 'demo order',
    orderdate:'01/01/2019',
    orderamount:'5000',
    orderstatus:'COMPLETED',
    custno:'1'
  },
  2: {
    orderno: '2',
    orderdescription: 'mouse order',
    orderdate:'02/02/2019',
    orderamount:'6000',
    orderstatus:'COMPLETED',
    custno:'2'
  },
  3: {
    orderno: '3',
    orderdescription: 'keyboard order',
    orderdate:'03/03/2019',
    orderamount:'7000',
    orderstatus:'COMPLETED',
    custno:'3'
  },
};

export default {
  customers,
  orders
};