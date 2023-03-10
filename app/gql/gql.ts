/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'fragment CityOlympiad on Olympiad {\n  id\n  year\n  olympiadType\n}\n\nquery GetCity($slug: String!, $now: Datetime!) {\n  cityBySlug(slug: $slug) {\n    id\n    name\n    slug\n    country {\n      name\n      flagByTimestamp(\n        dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n      ) {\n        png\n      }\n    }\n    olympiads(orderBy: YEAR_ASC) {\n      nodes {\n        ...CityOlympiad\n      }\n    }\n  }\n}':
    types.CityOlympiadFragmentDoc,
  'query GetFlags($visitedCountries: [String!], $now: Datetime!) {\n  countries(filter: {name: {in: $visitedCountries}}) {\n    nodes {\n      name\n      flagByTimestamp(\n        dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n      ) {\n        png\n      }\n    }\n  }\n}':
    types.GetFlagsDocument,
  'query GetOlympiads($now: Datetime!) {\n  olympiads(orderBy: YEAR_ASC) {\n    nodes {\n      id\n      year\n      olympiadType\n      city {\n        id\n        name\n        slug\n        country {\n          name\n          flagByTimestamp(\n            dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n          ) {\n            png\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetOlympiadsDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment CityOlympiad on Olympiad {\n  id\n  year\n  olympiadType\n}\n\nquery GetCity($slug: String!, $now: Datetime!) {\n  cityBySlug(slug: $slug) {\n    id\n    name\n    slug\n    country {\n      name\n      flagByTimestamp(\n        dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n      ) {\n        png\n      }\n    }\n    olympiads(orderBy: YEAR_ASC) {\n      nodes {\n        ...CityOlympiad\n      }\n    }\n  }\n}'
): typeof documents['fragment CityOlympiad on Olympiad {\n  id\n  year\n  olympiadType\n}\n\nquery GetCity($slug: String!, $now: Datetime!) {\n  cityBySlug(slug: $slug) {\n    id\n    name\n    slug\n    country {\n      name\n      flagByTimestamp(\n        dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n      ) {\n        png\n      }\n    }\n    olympiads(orderBy: YEAR_ASC) {\n      nodes {\n        ...CityOlympiad\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetFlags($visitedCountries: [String!], $now: Datetime!) {\n  countries(filter: {name: {in: $visitedCountries}}) {\n    nodes {\n      name\n      flagByTimestamp(\n        dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n      ) {\n        png\n      }\n    }\n  }\n}'
): typeof documents['query GetFlags($visitedCountries: [String!], $now: Datetime!) {\n  countries(filter: {name: {in: $visitedCountries}}) {\n    nodes {\n      name\n      flagByTimestamp(\n        dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n      ) {\n        png\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetOlympiads($now: Datetime!) {\n  olympiads(orderBy: YEAR_ASC) {\n    nodes {\n      id\n      year\n      olympiadType\n      city {\n        id\n        name\n        slug\n        country {\n          name\n          flagByTimestamp(\n            dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n          ) {\n            png\n          }\n        }\n      }\n    }\n  }\n}'
): typeof documents['query GetOlympiads($now: Datetime!) {\n  olympiads(orderBy: YEAR_ASC) {\n    nodes {\n      id\n      year\n      olympiadType\n      city {\n        id\n        name\n        slug\n        country {\n          name\n          flagByTimestamp(\n            dateTimestamp: {start: {value: $now, inclusive: true}, end: {value: $now, inclusive: true}}\n          ) {\n            png\n          }\n        }\n      }\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
