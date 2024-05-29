import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type BaleStock {
    id: ID
    millname:  String
    entity: String
    stockdate: String
    stockqty: Int
}

    type BaleTransactions {
        id: ID 
        millname: String
        entity: String
        dateassigned: String
        qtyassigned: Int
    }

    type ApiKey {
    id: ID!
    key: String!
    clientName: String!
    createdAt: String!
    revokedAt: String
  }
  
  type Query {
    users: [User]
    user(id: ID!): User
    balestocks: [BaleStock]
    balestockdate(stockdate: String): [BaleStock]
    baleassigned(dateassigned:String, entity: String):[BaleTransactions]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    addstock(millname: String, entity:String, stockdate:String, stockqty:Int):BaleStock
    addtransaction(millname: String, entity:String, dateassigned:String, qtyassigned:Int):BaleTransactions
    generateApiKey(clientName: String!): ApiKey
    revokeApiKey(key: String!): ApiKey

  }

  type AuthPayload {
    token: String
  }


`;

