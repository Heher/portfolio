import { GraphQLClient } from 'graphql-request';
import { getSdk } from '~/gql/graphql';

const client = new GraphQLClient(process.env.API_ENDPOINT || '');
const sdk = getSdk(client);

export function getGQLClient() {
  return sdk;
}
