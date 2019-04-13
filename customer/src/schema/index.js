import { gql } from 'apollo-server-express';

import customerSchema from './customer';
import orderSchema from './order';
import customerOrderSchema from './customerorders';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, customerSchema,orderSchema,customerOrderSchema];