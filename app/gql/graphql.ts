import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigFloat: { input: any; output: any };
  BigInt: { input: any; output: any };
  Cursor: { input: any; output: any };
  Datetime: { input: any; output: any };
  UUID: { input: any; output: any };
};

export type Athlete = Node & {
  __typename?: 'Athlete';
  bronzeMedals?: Maybe<Scalars['Int']['output']>;
  /** The full first name of the athlete. */
  fullFirstName?: Maybe<Scalars['String']['output']>;
  /** The full last name of the athlete. */
  fullLastName?: Maybe<Scalars['String']['output']>;
  /** The full name of the athlete. */
  fullName?: Maybe<Scalars['String']['output']>;
  goldMedals?: Maybe<Scalars['Int']['output']>;
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `OlympiadAthlete`. */
  olympiadAthletes: OlympiadAthletesConnection;
  otherNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  silverMedals?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  totalMedals?: Maybe<Scalars['Int']['output']>;
  /** The used first name of the athlete. */
  usedFirstName?: Maybe<Scalars['String']['output']>;
  /** The used last name of the athlete. */
  usedLastName?: Maybe<Scalars['String']['output']>;
  /** The used name of the athlete. */
  usedName?: Maybe<Scalars['String']['output']>;
};

export type AthleteMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

export type AthleteOlympiadAthletesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadAthleteCondition>;
  filter?: InputMaybe<OlympiadAthleteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadAthletesOrderBy>>;
};

/** A condition to be used against `Athlete` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AthleteCondition = {
  /** Checks for equality with the object’s `bronzeMedals` field. */
  bronzeMedals?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `fullFirstName` field. */
  fullFirstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fullLastName` field. */
  fullLastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `goldMedals` field. */
  goldMedals?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `otherNames` field. */
  otherNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Checks for equality with the object’s `silverMedals` field. */
  silverMedals?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `totalMedals` field. */
  totalMedals?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `usedFirstName` field. */
  usedFirstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `usedLastName` field. */
  usedLastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `usedName` field. */
  usedName?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Athlete` object types. All fields are combined with a logical ‘and.’ */
export type AthleteFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AthleteFilter>>;
  /** Filter by the object’s `bronzeMedals` field. */
  bronzeMedals?: InputMaybe<IntFilter>;
  /** Filter by the object’s `fullFirstName` field. */
  fullFirstName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fullLastName` field. */
  fullLastName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fullName` field. */
  fullName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `goldMedals` field. */
  goldMedals?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AthleteFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AthleteFilter>>;
  /** Filter by the object’s `otherNames` field. */
  otherNames?: InputMaybe<StringListFilter>;
  /** Filter by the object’s `silverMedals` field. */
  silverMedals?: InputMaybe<IntFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `totalMedals` field. */
  totalMedals?: InputMaybe<IntFilter>;
  /** Filter by the object’s `usedFirstName` field. */
  usedFirstName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `usedLastName` field. */
  usedLastName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `usedName` field. */
  usedName?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Athlete` */
export type AthleteInput = {
  bronzeMedals?: InputMaybe<Scalars['Int']['input']>;
  /** The full first name of the athlete. */
  fullFirstName?: InputMaybe<Scalars['String']['input']>;
  /** The full last name of the athlete. */
  fullLastName?: InputMaybe<Scalars['String']['input']>;
  /** The full name of the athlete. */
  fullName?: InputMaybe<Scalars['String']['input']>;
  goldMedals?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  otherNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  silverMedals?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  totalMedals?: InputMaybe<Scalars['Int']['input']>;
  /** The used first name of the athlete. */
  usedFirstName?: InputMaybe<Scalars['String']['input']>;
  /** The used last name of the athlete. */
  usedLastName?: InputMaybe<Scalars['String']['input']>;
  /** The used name of the athlete. */
  usedName?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Athlete`. Fields that are set will be updated. */
export type AthletePatch = {
  bronzeMedals?: InputMaybe<Scalars['Int']['input']>;
  /** The full first name of the athlete. */
  fullFirstName?: InputMaybe<Scalars['String']['input']>;
  /** The full last name of the athlete. */
  fullLastName?: InputMaybe<Scalars['String']['input']>;
  /** The full name of the athlete. */
  fullName?: InputMaybe<Scalars['String']['input']>;
  goldMedals?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  otherNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  silverMedals?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  totalMedals?: InputMaybe<Scalars['Int']['input']>;
  /** The used first name of the athlete. */
  usedFirstName?: InputMaybe<Scalars['String']['input']>;
  /** The used last name of the athlete. */
  usedLastName?: InputMaybe<Scalars['String']['input']>;
  /** The used name of the athlete. */
  usedName?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Athlete` values. */
export type AthletesConnection = {
  __typename?: 'AthletesConnection';
  /** A list of edges which contains the `Athlete` and cursor to aid in pagination. */
  edges: Array<AthletesEdge>;
  /** A list of `Athlete` objects. */
  nodes: Array<Maybe<Athlete>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Athlete` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Athlete` edge in the connection. */
export type AthletesEdge = {
  __typename?: 'AthletesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Athlete` at the end of the edge. */
  node?: Maybe<Athlete>;
};

/** Methods to use when ordering `Athlete`. */
export enum AthletesOrderBy {
  BronzeMedalsAsc = 'BRONZE_MEDALS_ASC',
  BronzeMedalsDesc = 'BRONZE_MEDALS_DESC',
  FullFirstNameAsc = 'FULL_FIRST_NAME_ASC',
  FullFirstNameDesc = 'FULL_FIRST_NAME_DESC',
  FullLastNameAsc = 'FULL_LAST_NAME_ASC',
  FullLastNameDesc = 'FULL_LAST_NAME_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  GoldMedalsAsc = 'GOLD_MEDALS_ASC',
  GoldMedalsDesc = 'GOLD_MEDALS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MedalsByAthleteIdCountAsc = 'MEDALS_BY_ATHLETE_ID__COUNT_ASC',
  MedalsByAthleteIdCountDesc = 'MEDALS_BY_ATHLETE_ID__COUNT_DESC',
  Natural = 'NATURAL',
  OlympiadAthletesByAthleteIdCountAsc = 'OLYMPIAD_ATHLETES_BY_ATHLETE_ID__COUNT_ASC',
  OlympiadAthletesByAthleteIdCountDesc = 'OLYMPIAD_ATHLETES_BY_ATHLETE_ID__COUNT_DESC',
  OtherNamesAsc = 'OTHER_NAMES_ASC',
  OtherNamesDesc = 'OTHER_NAMES_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SilverMedalsAsc = 'SILVER_MEDALS_ASC',
  SilverMedalsDesc = 'SILVER_MEDALS_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  TotalMedalsAsc = 'TOTAL_MEDALS_ASC',
  TotalMedalsDesc = 'TOTAL_MEDALS_DESC',
  UsedFirstNameAsc = 'USED_FIRST_NAME_ASC',
  UsedFirstNameDesc = 'USED_FIRST_NAME_DESC',
  UsedLastNameAsc = 'USED_LAST_NAME_ASC',
  UsedLastNameDesc = 'USED_LAST_NAME_DESC',
  UsedNameAsc = 'USED_NAME_ASC',
  UsedNameDesc = 'USED_NAME_DESC'
}

export type AuthenticateInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthenticatePayload = {
  __typename?: 'AuthenticatePayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** A connection to a list of `City` values. */
export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  /** A list of edges which contains the `City` and cursor to aid in pagination. */
  edges: Array<CitiesEdge>;
  /** A list of `City` objects. */
  nodes: Array<Maybe<City>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `City` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `City` edge in the connection. */
export type CitiesEdge = {
  __typename?: 'CitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `City` at the end of the edge. */
  node?: Maybe<City>;
};

/** Methods to use when ordering `City`. */
export enum CitiesOrderBy {
  CountryByCountryIdIdAsc = 'COUNTRY_BY_COUNTRY_ID__ID_ASC',
  CountryByCountryIdIdDesc = 'COUNTRY_BY_COUNTRY_ID__ID_DESC',
  CountryByCountryIdNameAsc = 'COUNTRY_BY_COUNTRY_ID__NAME_ASC',
  CountryByCountryIdNameDesc = 'COUNTRY_BY_COUNTRY_ID__NAME_DESC',
  CountryByCountryIdNocsAsc = 'COUNTRY_BY_COUNTRY_ID__NOCS_ASC',
  CountryByCountryIdNocsDesc = 'COUNTRY_BY_COUNTRY_ID__NOCS_DESC',
  CountryByCountryIdRegionIdAsc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_ASC',
  CountryByCountryIdRegionIdDesc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_DESC',
  CountryByCountryIdSlugAsc = 'COUNTRY_BY_COUNTRY_ID__SLUG_ASC',
  CountryByCountryIdSlugDesc = 'COUNTRY_BY_COUNTRY_ID__SLUG_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  FormerNameAsc = 'FORMER_NAME_ASC',
  FormerNameDesc = 'FORMER_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OlympiadsByCityIdCountAsc = 'OLYMPIADS_BY_CITY_ID__COUNT_ASC',
  OlympiadsByCityIdCountDesc = 'OLYMPIADS_BY_CITY_ID__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC'
}

/** Cities that hosted an olympiad. */
export type City = Node & {
  __typename?: 'City';
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  /** The foreign key from the country that hosted the olympiad. */
  countryId: Scalars['UUID']['output'];
  firstOlympiad?: Maybe<Scalars['Int']['output']>;
  formerName?: Maybe<Scalars['String']['output']>;
  /** The primary key for the city. */
  id: Scalars['UUID']['output'];
  /** The name of the city. */
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Olympiad`. */
  olympiads: OlympiadsConnection;
  slug?: Maybe<Scalars['String']['output']>;
};

/** Cities that hosted an olympiad. */
export type CityOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadCondition>;
  filter?: InputMaybe<OlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadsOrderBy>>;
};

/** A condition to be used against `City` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CityCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `formerName` field. */
  formerName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `City` object types. All fields are combined with a logical ‘and.’ */
export type CityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CityFilter>>;
  /** Filter by the object’s `countryId` field. */
  countryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `firstOlympiad` field. */
  firstOlympiad?: InputMaybe<IntFilter>;
  /** Filter by the object’s `formerName` field. */
  formerName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CityFilter>>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `City` */
export type CityInput = {
  /** The foreign key from the country that hosted the olympiad. */
  countryId: Scalars['UUID']['input'];
  formerName?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the city. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** The name of the city. */
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `City`. Fields that are set will be updated. */
export type CityPatch = {
  /** The foreign key from the country that hosted the olympiad. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  formerName?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the city. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** The name of the city. */
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Country` values. */
export type CountriesConnection = {
  __typename?: 'CountriesConnection';
  /** A list of edges which contains the `Country` and cursor to aid in pagination. */
  edges: Array<CountriesEdge>;
  /** A list of `Country` objects. */
  nodes: Array<Maybe<Country>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Country` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Country` edge in the connection. */
export type CountriesEdge = {
  __typename?: 'CountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Country` at the end of the edge. */
  node?: Maybe<Country>;
};

/** Methods to use when ordering `Country`. */
export enum CountriesOrderBy {
  CitiesByCountryIdCountAsc = 'CITIES_BY_COUNTRY_ID__COUNT_ASC',
  CitiesByCountryIdCountDesc = 'CITIES_BY_COUNTRY_ID__COUNT_DESC',
  FlagsByCountryIdCountAsc = 'FLAGS_BY_COUNTRY_ID__COUNT_ASC',
  FlagsByCountryIdCountDesc = 'FLAGS_BY_COUNTRY_ID__COUNT_DESC',
  GroupMedalsByBadCountryNegativeCountAsc = 'GROUP_MEDALS_BY_BAD_COUNTRY_NEGATIVE__COUNT_ASC',
  GroupMedalsByBadCountryNegativeCountDesc = 'GROUP_MEDALS_BY_BAD_COUNTRY_NEGATIVE__COUNT_DESC',
  GroupMedalsByBadCountryPositiveCountAsc = 'GROUP_MEDALS_BY_BAD_COUNTRY_POSITIVE__COUNT_ASC',
  GroupMedalsByBadCountryPositiveCountDesc = 'GROUP_MEDALS_BY_BAD_COUNTRY_POSITIVE__COUNT_DESC',
  GroupMedalsByGoodCountryNegativeCountAsc = 'GROUP_MEDALS_BY_GOOD_COUNTRY_NEGATIVE__COUNT_ASC',
  GroupMedalsByGoodCountryNegativeCountDesc = 'GROUP_MEDALS_BY_GOOD_COUNTRY_NEGATIVE__COUNT_DESC',
  GroupMedalsByGoodCountryPositiveCountAsc = 'GROUP_MEDALS_BY_GOOD_COUNTRY_POSITIVE__COUNT_ASC',
  GroupMedalsByGoodCountryPositiveCountDesc = 'GROUP_MEDALS_BY_GOOD_COUNTRY_POSITIVE__COUNT_DESC',
  GroupOlympiadsByBadCountryIdCountAsc = 'GROUP_OLYMPIADS_BY_BAD_COUNTRY_ID__COUNT_ASC',
  GroupOlympiadsByBadCountryIdCountDesc = 'GROUP_OLYMPIADS_BY_BAD_COUNTRY_ID__COUNT_DESC',
  GroupOlympiadsByGoodCountryIdCountAsc = 'GROUP_OLYMPIADS_BY_GOOD_COUNTRY_ID__COUNT_ASC',
  GroupOlympiadsByGoodCountryIdCountDesc = 'GROUP_OLYMPIADS_BY_GOOD_COUNTRY_ID__COUNT_DESC',
  GroupOlympiadsBySuggestedCountryIdCountAsc = 'GROUP_OLYMPIADS_BY_SUGGESTED_COUNTRY_ID__COUNT_ASC',
  GroupOlympiadsBySuggestedCountryIdCountDesc = 'GROUP_OLYMPIADS_BY_SUGGESTED_COUNTRY_ID__COUNT_DESC',
  GroupOlympiadCountriesByCountryIdCountAsc = 'GROUP_OLYMPIAD_COUNTRIES_BY_COUNTRY_ID__COUNT_ASC',
  GroupOlympiadCountriesByCountryIdCountDesc = 'GROUP_OLYMPIAD_COUNTRIES_BY_COUNTRY_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MedalsByCountryIdCountAsc = 'MEDALS_BY_COUNTRY_ID__COUNT_ASC',
  MedalsByCountryIdCountDesc = 'MEDALS_BY_COUNTRY_ID__COUNT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NocsAsc = 'NOCS_ASC',
  NocsDesc = 'NOCS_DESC',
  OlympiadCountriesByCountryIdCountAsc = 'OLYMPIAD_COUNTRIES_BY_COUNTRY_ID__COUNT_ASC',
  OlympiadCountriesByCountryIdCountDesc = 'OLYMPIAD_COUNTRIES_BY_COUNTRY_ID__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RegionByRegionIdIdAsc = 'REGION_BY_REGION_ID__ID_ASC',
  RegionByRegionIdIdDesc = 'REGION_BY_REGION_ID__ID_DESC',
  RegionByRegionIdNameAsc = 'REGION_BY_REGION_ID__NAME_ASC',
  RegionByRegionIdNameDesc = 'REGION_BY_REGION_ID__NAME_DESC',
  RegionByRegionIdSlugAsc = 'REGION_BY_REGION_ID__SLUG_ASC',
  RegionByRegionIdSlugDesc = 'REGION_BY_REGION_ID__SLUG_DESC',
  RegionIdAsc = 'REGION_ID_ASC',
  RegionIdDesc = 'REGION_ID_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC'
}

export type Country = Node & {
  __typename?: 'Country';
  /** Reads and enables pagination through a set of `City`. */
  cities: CitiesConnection;
  flagByTimestamp?: Maybe<Flag>;
  /** Reads and enables pagination through a set of `Flag`. */
  flags: FlagsConnection;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedalsByBadCountryNegative: GroupMedalsConnection;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedalsByBadCountryPositive: GroupMedalsConnection;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedalsByGoodCountryNegative: GroupMedalsConnection;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedalsByGoodCountryPositive: GroupMedalsConnection;
  /** Reads and enables pagination through a set of `GroupOlympiadCountry`. */
  groupOlympiadCountries: GroupOlympiadCountriesConnection;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiadsByBadCountryId: GroupOlympiadsConnection;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiadsByGoodCountryId: GroupOlympiadsConnection;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiadsBySuggestedCountryId: GroupOlympiadsConnection;
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** Reads and enables pagination through a set of `Medal`. */
  medalsByOlympiad: MedalsConnection;
  name?: Maybe<Scalars['String']['output']>;
  nocs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `OlympiadCountry`. */
  olympiadCountries: OlympiadCountriesConnection;
  /** Reads a single `Region` that is related to this `Country`. */
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['UUID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type CountryCitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CityCondition>;
  filter?: InputMaybe<CityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

export type CountryFlagByTimestampArgs = {
  dateTimestamp?: InputMaybe<DatetimeRangeInput>;
};

export type CountryFlagsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FlagCondition>;
  filter?: InputMaybe<FlagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FlagsOrderBy>>;
};

export type CountryGroupMedalsByBadCountryNegativeArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

export type CountryGroupMedalsByBadCountryPositiveArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

export type CountryGroupMedalsByGoodCountryNegativeArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

export type CountryGroupMedalsByGoodCountryPositiveArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

export type CountryGroupOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

export type CountryGroupOlympiadsByBadCountryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

export type CountryGroupOlympiadsByGoodCountryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

export type CountryGroupOlympiadsBySuggestedCountryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

export type CountryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

export type CountryMedalsByOlympiadArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  olympiadSlug?: InputMaybe<Scalars['String']['input']>;
};

export type CountryOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

/** A condition to be used against `Country` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CountryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nocs` field. */
  nocs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Country` object types. All fields are combined with a logical ‘and.’ */
export type CountryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CountryFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nocs` field. */
  nocs?: InputMaybe<StringListFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CountryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CountryFilter>>;
  /** Filter by the object’s `regionId` field. */
  regionId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Country` */
export type CountryInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nocs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regionId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Country`. Fields that are set will be updated. */
export type CountryPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nocs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regionId?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `Athlete` mutation. */
export type CreateAthleteInput = {
  /** The `Athlete` to be created by this mutation. */
  athlete: AthleteInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Athlete` mutation. */
export type CreateAthletePayload = {
  __typename?: 'CreateAthletePayload';
  /** The `Athlete` that was created by this mutation. */
  athlete?: Maybe<Athlete>;
  /** An edge for our `Athlete`. May be used by Relay 1. */
  athleteEdge?: Maybe<AthletesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Athlete` mutation. */
export type CreateAthletePayloadAthleteEdgeArgs = {
  orderBy?: InputMaybe<Array<AthletesOrderBy>>;
};

/** All input for the create `City` mutation. */
export type CreateCityInput = {
  /** The `City` to be created by this mutation. */
  city: CityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `City` mutation. */
export type CreateCityPayload = {
  __typename?: 'CreateCityPayload';
  /** The `City` that was created by this mutation. */
  city?: Maybe<City>;
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `City` mutation. */
export type CreateCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** All input for the create `Country` mutation. */
export type CreateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Country` to be created by this mutation. */
  country: CountryInput;
};

/** The output of our create `Country` mutation. */
export type CreateCountryPayload = {
  __typename?: 'CreateCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Country` that was created by this mutation. */
  country?: Maybe<Country>;
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Country`. */
  region?: Maybe<Region>;
};

/** The output of our create `Country` mutation. */
export type CreateCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Event` to be created by this mutation. */
  event: EventInput;
};

/** The output of our create `Event` mutation. */
export type CreateEventPayload = {
  __typename?: 'CreateEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Event` that was created by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Sport` that is related to this `Event`. */
  sport?: Maybe<Sport>;
};

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the create `Flag` mutation. */
export type CreateFlagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Flag` to be created by this mutation. */
  flag: FlagInput;
};

/** The output of our create `Flag` mutation. */
export type CreateFlagPayload = {
  __typename?: 'CreateFlagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `Flag`. */
  country?: Maybe<Country>;
  /** The `Flag` that was created by this mutation. */
  flag?: Maybe<Flag>;
  /** An edge for our `Flag`. May be used by Relay 1. */
  flagEdge?: Maybe<FlagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Flag` mutation. */
export type CreateFlagPayloadFlagEdgeArgs = {
  orderBy?: InputMaybe<Array<FlagsOrderBy>>;
};

/** All input for the create `Group` mutation. */
export type CreateGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Group` to be created by this mutation. */
  group: GroupInput;
};

/** All input for the create `GroupMedal` mutation. */
export type CreateGroupMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `GroupMedal` to be created by this mutation. */
  groupMedal: GroupMedalInput;
};

/** The output of our create `GroupMedal` mutation. */
export type CreateGroupMedalPayload = {
  __typename?: 'CreateGroupMedalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryPositive?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryPositive?: Maybe<Country>;
  /** Reads a single `Group` that is related to this `GroupMedal`. */
  group?: Maybe<Group>;
  /** The `GroupMedal` that was created by this mutation. */
  groupMedal?: Maybe<GroupMedal>;
  /** An edge for our `GroupMedal`. May be used by Relay 1. */
  groupMedalEdge?: Maybe<GroupMedalsEdge>;
  /** Reads a single `Medal` that is related to this `GroupMedal`. */
  medal?: Maybe<Medal>;
  /** Reads a single `Player` that is related to this `GroupMedal`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `GroupMedal` mutation. */
export type CreateGroupMedalPayloadGroupMedalEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

/** All input for the create `GroupOlympiadCountry` mutation. */
export type CreateGroupOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `GroupOlympiadCountry` to be created by this mutation. */
  groupOlympiadCountry: GroupOlympiadCountryInput;
};

/** The output of our create `GroupOlympiadCountry` mutation. */
export type CreateGroupOlympiadCountryPayload = {
  __typename?: 'CreateGroupOlympiadCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupOlympiadCountry`. */
  country?: Maybe<Country>;
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadCountry`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** The `GroupOlympiadCountry` that was created by this mutation. */
  groupOlympiadCountry?: Maybe<GroupOlympiadCountry>;
  /** An edge for our `GroupOlympiadCountry`. May be used by Relay 1. */
  groupOlympiadCountryEdge?: Maybe<GroupOlympiadCountriesEdge>;
  /** Reads a single `Player` that is related to this `GroupOlympiadCountry`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `GroupOlympiadCountry` mutation. */
export type CreateGroupOlympiadCountryPayloadGroupOlympiadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

/** All input for the create `GroupOlympiad` mutation. */
export type CreateGroupOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `GroupOlympiad` to be created by this mutation. */
  groupOlympiad: GroupOlympiadInput;
};

/** The output of our create `GroupOlympiad` mutation. */
export type CreateGroupOlympiadPayload = {
  __typename?: 'CreateGroupOlympiadPayload';
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  badCountry?: Maybe<Country>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Player` that is related to this `GroupOlympiad`. */
  commissioner?: Maybe<Player>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  goodCountry?: Maybe<Country>;
  /** Reads a single `Group` that is related to this `GroupOlympiad`. */
  group?: Maybe<Group>;
  /** The `GroupOlympiad` that was created by this mutation. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** An edge for our `GroupOlympiad`. May be used by Relay 1. */
  groupOlympiadEdge?: Maybe<GroupOlympiadsEdge>;
  /** Reads a single `Olympiad` that is related to this `GroupOlympiad`. */
  olympiad?: Maybe<Olympiad>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  suggestedCountry?: Maybe<Country>;
};

/** The output of our create `GroupOlympiad` mutation. */
export type CreateGroupOlympiadPayloadGroupOlympiadEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

/** All input for the create `GroupOlympiadPlayer` mutation. */
export type CreateGroupOlympiadPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `GroupOlympiadPlayer` to be created by this mutation. */
  groupOlympiadPlayer: GroupOlympiadPlayerInput;
};

/** The output of our create `GroupOlympiadPlayer` mutation. */
export type CreateGroupOlympiadPlayerPayload = {
  __typename?: 'CreateGroupOlympiadPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadPlayer`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** The `GroupOlympiadPlayer` that was created by this mutation. */
  groupOlympiadPlayer?: Maybe<GroupOlympiadPlayer>;
  /** An edge for our `GroupOlympiadPlayer`. May be used by Relay 1. */
  groupOlympiadPlayerEdge?: Maybe<GroupOlympiadPlayersEdge>;
  /** Reads a single `GroupPlayer` that is related to this `GroupOlympiadPlayer`. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `GroupOlympiadPlayer` mutation. */
export type CreateGroupOlympiadPlayerPayloadGroupOlympiadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/** The output of our create `Group` mutation. */
export type CreateGroupPayload = {
  __typename?: 'CreateGroupPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Player` that is related to this `Group`. */
  commissioner?: Maybe<Player>;
  /** The `Group` that was created by this mutation. */
  group?: Maybe<Group>;
  /** An edge for our `Group`. May be used by Relay 1. */
  groupEdge?: Maybe<GroupsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Group` mutation. */
export type CreateGroupPayloadGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
};

/** All input for the create `GroupPlayer` mutation. */
export type CreateGroupPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `GroupPlayer` to be created by this mutation. */
  groupPlayer: GroupPlayerInput;
};

/** The output of our create `GroupPlayer` mutation. */
export type CreateGroupPlayerPayload = {
  __typename?: 'CreateGroupPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Group` that is related to this `GroupPlayer`. */
  group?: Maybe<Group>;
  /** The `GroupPlayer` that was created by this mutation. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** An edge for our `GroupPlayer`. May be used by Relay 1. */
  groupPlayerEdge?: Maybe<GroupPlayersEdge>;
  /** Reads a single `Player` that is related to this `GroupPlayer`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `GroupPlayer` mutation. */
export type CreateGroupPlayerPayloadGroupPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};

/** All input for the create `MedalClass` mutation. */
export type CreateMedalClassInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `MedalClass` to be created by this mutation. */
  medalClass: MedalClassInput;
};

/** The output of our create `MedalClass` mutation. */
export type CreateMedalClassPayload = {
  __typename?: 'CreateMedalClassPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MedalClass` that was created by this mutation. */
  medalClass?: Maybe<MedalClass>;
  /** An edge for our `MedalClass`. May be used by Relay 1. */
  medalClassEdge?: Maybe<MedalClassesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `MedalClass` mutation. */
export type CreateMedalClassPayloadMedalClassEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalClassesOrderBy>>;
};

/** All input for the create `Medal` mutation. */
export type CreateMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Medal` to be created by this mutation. */
  medal: MedalInput;
};

/** The output of our create `Medal` mutation. */
export type CreateMedalPayload = {
  __typename?: 'CreateMedalPayload';
  /** Reads a single `Athlete` that is related to this `Medal`. */
  athlete?: Maybe<Athlete>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `Medal`. */
  country?: Maybe<Country>;
  /** The `Medal` that was created by this mutation. */
  medal?: Maybe<Medal>;
  /** Reads a single `MedalClass` that is related to this `Medal`. */
  medalClassByMedalClass?: Maybe<MedalClass>;
  /** An edge for our `Medal`. May be used by Relay 1. */
  medalEdge?: Maybe<MedalsEdge>;
  /** Reads a single `MedalTeam` that is related to this `Medal`. */
  medalTeam?: Maybe<MedalTeam>;
  /** Reads a single `OlympiadEvent` that is related to this `Medal`. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Medal` mutation. */
export type CreateMedalPayloadMedalEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/** All input for the create `MedalTeam` mutation. */
export type CreateMedalTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `MedalTeam` to be created by this mutation. */
  medalTeam: MedalTeamInput;
};

/** The output of our create `MedalTeam` mutation. */
export type CreateMedalTeamPayload = {
  __typename?: 'CreateMedalTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MedalTeam` that was created by this mutation. */
  medalTeam?: Maybe<MedalTeam>;
  /** An edge for our `MedalTeam`. May be used by Relay 1. */
  medalTeamEdge?: Maybe<MedalTeamsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `MedalTeam` mutation. */
export type CreateMedalTeamPayloadMedalTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalTeamsOrderBy>>;
};

/** All input for the create `OlympiadAthlete` mutation. */
export type CreateOlympiadAthleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OlympiadAthlete` to be created by this mutation. */
  olympiadAthlete: OlympiadAthleteInput;
};

/** The output of our create `OlympiadAthlete` mutation. */
export type CreateOlympiadAthletePayload = {
  __typename?: 'CreateOlympiadAthletePayload';
  /** Reads a single `Athlete` that is related to this `OlympiadAthlete`. */
  athlete?: Maybe<Athlete>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadAthlete`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadAthlete` that was created by this mutation. */
  olympiadAthlete?: Maybe<OlympiadAthlete>;
  /** An edge for our `OlympiadAthlete`. May be used by Relay 1. */
  olympiadAthleteEdge?: Maybe<OlympiadAthletesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `OlympiadAthlete` mutation. */
export type CreateOlympiadAthletePayloadOlympiadAthleteEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadAthletesOrderBy>>;
};

/** All input for the create `OlympiadCountry` mutation. */
export type CreateOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OlympiadCountry` to be created by this mutation. */
  olympiadCountry: OlympiadCountryInput;
};

/** The output of our create `OlympiadCountry` mutation. */
export type CreateOlympiadCountryPayload = {
  __typename?: 'CreateOlympiadCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `OlympiadCountry`. */
  country?: Maybe<Country>;
  /** Reads a single `Olympiad` that is related to this `OlympiadCountry`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadCountry` that was created by this mutation. */
  olympiadCountry?: Maybe<OlympiadCountry>;
  /** An edge for our `OlympiadCountry`. May be used by Relay 1. */
  olympiadCountryEdge?: Maybe<OlympiadCountriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `OlympiadCountry`. */
  region?: Maybe<Region>;
};

/** The output of our create `OlympiadCountry` mutation. */
export type CreateOlympiadCountryPayloadOlympiadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

/** All input for the create `OlympiadEvent` mutation. */
export type CreateOlympiadEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OlympiadEvent` to be created by this mutation. */
  olympiadEvent: OlympiadEventInput;
};

/** The output of our create `OlympiadEvent` mutation. */
export type CreateOlympiadEventPayload = {
  __typename?: 'CreateOlympiadEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Event` that is related to this `OlympiadEvent`. */
  event?: Maybe<Event>;
  /** Reads a single `Olympiad` that is related to this `OlympiadEvent`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadEvent` that was created by this mutation. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** An edge for our `OlympiadEvent`. May be used by Relay 1. */
  olympiadEventEdge?: Maybe<OlympiadEventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `OlympiadEvent` mutation. */
export type CreateOlympiadEventPayloadOlympiadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};

/** All input for the create `Olympiad` mutation. */
export type CreateOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Olympiad` to be created by this mutation. */
  olympiad: OlympiadInput;
};

/** The output of our create `Olympiad` mutation. */
export type CreateOlympiadPayload = {
  __typename?: 'CreateOlympiadPayload';
  /** Reads a single `City` that is related to this `Olympiad`. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Olympiad` that was created by this mutation. */
  olympiad?: Maybe<Olympiad>;
  /** An edge for our `Olympiad`. May be used by Relay 1. */
  olympiadEdge?: Maybe<OlympiadsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Olympiad` mutation. */
export type CreateOlympiadPayloadOlympiadEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadsOrderBy>>;
};

/** All input for the create `OlympiadRegionSetting` mutation. */
export type CreateOlympiadRegionSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OlympiadRegionSetting` to be created by this mutation. */
  olympiadRegionSetting: OlympiadRegionSettingInput;
};

/** The output of our create `OlympiadRegionSetting` mutation. */
export type CreateOlympiadRegionSettingPayload = {
  __typename?: 'CreateOlympiadRegionSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadRegionSetting`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadRegionSetting` that was created by this mutation. */
  olympiadRegionSetting?: Maybe<OlympiadRegionSetting>;
  /** An edge for our `OlympiadRegionSetting`. May be used by Relay 1. */
  olympiadRegionSettingEdge?: Maybe<OlympiadRegionSettingsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `OlympiadRegionSetting`. */
  region?: Maybe<Region>;
};

/** The output of our create `OlympiadRegionSetting` mutation. */
export type CreateOlympiadRegionSettingPayloadOlympiadRegionSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};

/** All input for the create `OlympiadSport` mutation. */
export type CreateOlympiadSportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `OlympiadSport` to be created by this mutation. */
  olympiadSport: OlympiadSportInput;
};

/** The output of our create `OlympiadSport` mutation. */
export type CreateOlympiadSportPayload = {
  __typename?: 'CreateOlympiadSportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadSport`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadSport` that was created by this mutation. */
  olympiadSport?: Maybe<OlympiadSport>;
  /** An edge for our `OlympiadSport`. May be used by Relay 1. */
  olympiadSportEdge?: Maybe<OlympiadSportsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Sport` that is related to this `OlympiadSport`. */
  sport?: Maybe<Sport>;
};

/** The output of our create `OlympiadSport` mutation. */
export type CreateOlympiadSportPayloadOlympiadSportEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};

/** All input for the create `Player` mutation. */
export type CreatePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Player` to be created by this mutation. */
  player: PlayerInput;
};

/** The output of our create `Player` mutation. */
export type CreatePlayerPayload = {
  __typename?: 'CreatePlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Player` that was created by this mutation. */
  player?: Maybe<Player>;
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Player` mutation. */
export type CreatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
};

/** All input for the create `Region` mutation. */
export type CreateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Region` to be created by this mutation. */
  region: RegionInput;
};

/** The output of our create `Region` mutation. */
export type CreateRegionPayload = {
  __typename?: 'CreateRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Region` that was created by this mutation. */
  region?: Maybe<Region>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};

/** The output of our create `Region` mutation. */
export type CreateRegionPayloadRegionEdgeArgs = {
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** All input for the create `Sport` mutation. */
export type CreateSportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Sport` to be created by this mutation. */
  sport: SportInput;
};

/** The output of our create `Sport` mutation. */
export type CreateSportPayload = {
  __typename?: 'CreateSportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Sport` that was created by this mutation. */
  sport?: Maybe<Sport>;
  /** An edge for our `Sport`. May be used by Relay 1. */
  sportEdge?: Maybe<SportsEdge>;
};

/** The output of our create `Sport` mutation. */
export type CreateSportPayloadSportEdgeArgs = {
  orderBy?: InputMaybe<Array<SportsOrderBy>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

/** A range of `Datetime`. */
export type DatetimeRange = {
  __typename?: 'DatetimeRange';
  /** The ending bound of our range. */
  end?: Maybe<DatetimeRangeBound>;
  /** The starting bound of our range. */
  start?: Maybe<DatetimeRangeBound>;
};

/** The value at one end of a range. A range can either include this value, or not. */
export type DatetimeRangeBound = {
  __typename?: 'DatetimeRangeBound';
  /** Whether or not the value of this bound is included in the range. */
  inclusive: Scalars['Boolean']['output'];
  /** The value at one end of our range. */
  value: Scalars['Datetime']['output'];
};

/** The value at one end of a range. A range can either include this value, or not. */
export type DatetimeRangeBoundInput = {
  /** Whether or not the value of this bound is included in the range. */
  inclusive: Scalars['Boolean']['input'];
  /** The value at one end of our range. */
  value: Scalars['Datetime']['input'];
};

/** A filter to be used against DatetimeRange fields. All fields are combined with a logical ‘and.’ */
export type DatetimeRangeFilter = {
  /** Adjacent to the specified range. */
  adjacentTo?: InputMaybe<DatetimeRangeInput>;
  /** Contained by the specified range. */
  containedBy?: InputMaybe<DatetimeRangeInput>;
  /** Contains the specified range. */
  contains?: InputMaybe<DatetimeRangeInput>;
  /** Contains the specified value. */
  containsElement?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<DatetimeRangeInput>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<DatetimeRangeInput>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<DatetimeRangeInput>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<DatetimeRangeInput>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<DatetimeRangeInput>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<DatetimeRangeInput>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<DatetimeRangeInput>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<DatetimeRangeInput>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<DatetimeRangeInput>;
  /** Does not extend left of the specified range. */
  notExtendsLeftOf?: InputMaybe<DatetimeRangeInput>;
  /** Does not extend right of the specified range. */
  notExtendsRightOf?: InputMaybe<DatetimeRangeInput>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<DatetimeRangeInput>>;
  /** Overlaps the specified range. */
  overlaps?: InputMaybe<DatetimeRangeInput>;
  /** Strictly left of the specified range. */
  strictlyLeftOf?: InputMaybe<DatetimeRangeInput>;
  /** Strictly right of the specified range. */
  strictlyRightOf?: InputMaybe<DatetimeRangeInput>;
};

/** A range of `Datetime`. */
export type DatetimeRangeInput = {
  /** The ending bound of our range. */
  end?: InputMaybe<DatetimeRangeBoundInput>;
  /** The starting bound of our range. */
  start?: InputMaybe<DatetimeRangeBoundInput>;
};

/** All input for the `deleteAthleteByNodeId` mutation. */
export type DeleteAthleteByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Athlete` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteAthleteBySlug` mutation. */
export type DeleteAthleteBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

/** All input for the `deleteAthlete` mutation. */
export type DeleteAthleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Athlete` mutation. */
export type DeleteAthletePayload = {
  __typename?: 'DeleteAthletePayload';
  /** The `Athlete` that was deleted by this mutation. */
  athlete?: Maybe<Athlete>;
  /** An edge for our `Athlete`. May be used by Relay 1. */
  athleteEdge?: Maybe<AthletesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAthleteNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Athlete` mutation. */
export type DeleteAthletePayloadAthleteEdgeArgs = {
  orderBy?: InputMaybe<Array<AthletesOrderBy>>;
};

/** All input for the `deleteCityByNodeId` mutation. */
export type DeleteCityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `City` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteCityBySlug` mutation. */
export type DeleteCityBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

/** All input for the `deleteCity` mutation. */
export type DeleteCityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the city. */
  id: Scalars['UUID']['input'];
};

/** The output of our delete `City` mutation. */
export type DeleteCityPayload = {
  __typename?: 'DeleteCityPayload';
  /** The `City` that was deleted by this mutation. */
  city?: Maybe<City>;
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  deletedCityNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `City` mutation. */
export type DeleteCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** All input for the `deleteCountryByNodeId` mutation. */
export type DeleteCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Country` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteCountryBySlug` mutation. */
export type DeleteCountryBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

/** All input for the `deleteCountry` mutation. */
export type DeleteCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Country` mutation. */
export type DeleteCountryPayload = {
  __typename?: 'DeleteCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Country` that was deleted by this mutation. */
  country?: Maybe<Country>;
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>;
  deletedCountryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Country`. */
  region?: Maybe<Region>;
};

/** The output of our delete `Country` mutation. */
export type DeleteCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** All input for the `deleteEventByFullSlug` mutation. */
export type DeleteEventByFullSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fullSlug: Scalars['String']['input'];
};

/** All input for the `deleteEventByNodeId` mutation. */
export type DeleteEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the event. */
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedEventNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Event` that was deleted by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Sport` that is related to this `Event`. */
  sport?: Maybe<Sport>;
};

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `deleteFlagByNodeId` mutation. */
export type DeleteFlagByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Flag` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteFlag` mutation. */
export type DeleteFlagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the flag. */
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Flag` mutation. */
export type DeleteFlagPayload = {
  __typename?: 'DeleteFlagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `Flag`. */
  country?: Maybe<Country>;
  deletedFlagNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Flag` that was deleted by this mutation. */
  flag?: Maybe<Flag>;
  /** An edge for our `Flag`. May be used by Relay 1. */
  flagEdge?: Maybe<FlagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Flag` mutation. */
export type DeleteFlagPayloadFlagEdgeArgs = {
  orderBy?: InputMaybe<Array<FlagsOrderBy>>;
};

/** All input for the `deleteGroupByName` mutation. */
export type DeleteGroupByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteGroupByNodeId` mutation. */
export type DeleteGroupByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Group` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteGroup` mutation. */
export type DeleteGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteGroupMedalByNodeId` mutation. */
export type DeleteGroupMedalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupMedal` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteGroupMedal` mutation. */
export type DeleteGroupMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  medalId: Scalars['UUID']['input'];
};

/** The output of our delete `GroupMedal` mutation. */
export type DeleteGroupMedalPayload = {
  __typename?: 'DeleteGroupMedalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryPositive?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryPositive?: Maybe<Country>;
  deletedGroupMedalNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Group` that is related to this `GroupMedal`. */
  group?: Maybe<Group>;
  /** The `GroupMedal` that was deleted by this mutation. */
  groupMedal?: Maybe<GroupMedal>;
  /** An edge for our `GroupMedal`. May be used by Relay 1. */
  groupMedalEdge?: Maybe<GroupMedalsEdge>;
  /** Reads a single `Medal` that is related to this `GroupMedal`. */
  medal?: Maybe<Medal>;
  /** Reads a single `Player` that is related to this `GroupMedal`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `GroupMedal` mutation. */
export type DeleteGroupMedalPayloadGroupMedalEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

/** All input for the `deleteGroupOlympiadByNodeId` mutation. */
export type DeleteGroupOlympiadByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiad` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteGroupOlympiadCountryByNodeId` mutation. */
export type DeleteGroupOlympiadCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiadCountry` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteGroupOlympiadCountry` mutation. */
export type DeleteGroupOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId: Scalars['UUID']['input'];
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The output of our delete `GroupOlympiadCountry` mutation. */
export type DeleteGroupOlympiadCountryPayload = {
  __typename?: 'DeleteGroupOlympiadCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupOlympiadCountry`. */
  country?: Maybe<Country>;
  deletedGroupOlympiadCountryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadCountry`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** The `GroupOlympiadCountry` that was deleted by this mutation. */
  groupOlympiadCountry?: Maybe<GroupOlympiadCountry>;
  /** An edge for our `GroupOlympiadCountry`. May be used by Relay 1. */
  groupOlympiadCountryEdge?: Maybe<GroupOlympiadCountriesEdge>;
  /** Reads a single `Player` that is related to this `GroupOlympiadCountry`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `GroupOlympiadCountry` mutation. */
export type DeleteGroupOlympiadCountryPayloadGroupOlympiadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

/** All input for the `deleteGroupOlympiad` mutation. */
export type DeleteGroupOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The output of our delete `GroupOlympiad` mutation. */
export type DeleteGroupOlympiadPayload = {
  __typename?: 'DeleteGroupOlympiadPayload';
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  badCountry?: Maybe<Country>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Player` that is related to this `GroupOlympiad`. */
  commissioner?: Maybe<Player>;
  deletedGroupOlympiadNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  goodCountry?: Maybe<Country>;
  /** Reads a single `Group` that is related to this `GroupOlympiad`. */
  group?: Maybe<Group>;
  /** The `GroupOlympiad` that was deleted by this mutation. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** An edge for our `GroupOlympiad`. May be used by Relay 1. */
  groupOlympiadEdge?: Maybe<GroupOlympiadsEdge>;
  /** Reads a single `Olympiad` that is related to this `GroupOlympiad`. */
  olympiad?: Maybe<Olympiad>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  suggestedCountry?: Maybe<Country>;
};

/** The output of our delete `GroupOlympiad` mutation. */
export type DeleteGroupOlympiadPayloadGroupOlympiadEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

/** All input for the `deleteGroupOlympiadPlayerByNodeId` mutation. */
export type DeleteGroupOlympiadPlayerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiadPlayer` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteGroupOlympiadPlayer` mutation. */
export type DeleteGroupOlympiadPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};

/** The output of our delete `GroupOlympiadPlayer` mutation. */
export type DeleteGroupOlympiadPlayerPayload = {
  __typename?: 'DeleteGroupOlympiadPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedGroupOlympiadPlayerNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadPlayer`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** The `GroupOlympiadPlayer` that was deleted by this mutation. */
  groupOlympiadPlayer?: Maybe<GroupOlympiadPlayer>;
  /** An edge for our `GroupOlympiadPlayer`. May be used by Relay 1. */
  groupOlympiadPlayerEdge?: Maybe<GroupOlympiadPlayersEdge>;
  /** Reads a single `GroupPlayer` that is related to this `GroupOlympiadPlayer`. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `GroupOlympiadPlayer` mutation. */
export type DeleteGroupOlympiadPlayerPayloadGroupOlympiadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/** The output of our delete `Group` mutation. */
export type DeleteGroupPayload = {
  __typename?: 'DeleteGroupPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Player` that is related to this `Group`. */
  commissioner?: Maybe<Player>;
  deletedGroupNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Group` that was deleted by this mutation. */
  group?: Maybe<Group>;
  /** An edge for our `Group`. May be used by Relay 1. */
  groupEdge?: Maybe<GroupsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Group` mutation. */
export type DeleteGroupPayloadGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
};

/** All input for the `deleteGroupPlayerByNodeId` mutation. */
export type DeleteGroupPlayerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupPlayer` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteGroupPlayer` mutation. */
export type DeleteGroupPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};

/** The output of our delete `GroupPlayer` mutation. */
export type DeleteGroupPlayerPayload = {
  __typename?: 'DeleteGroupPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedGroupPlayerNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Group` that is related to this `GroupPlayer`. */
  group?: Maybe<Group>;
  /** The `GroupPlayer` that was deleted by this mutation. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** An edge for our `GroupPlayer`. May be used by Relay 1. */
  groupPlayerEdge?: Maybe<GroupPlayersEdge>;
  /** Reads a single `Player` that is related to this `GroupPlayer`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `GroupPlayer` mutation. */
export type DeleteGroupPlayerPayloadGroupPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};

/** All input for the `deleteMedalByNodeId` mutation. */
export type DeleteMedalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Medal` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteMedalClassByNodeId` mutation. */
export type DeleteMedalClassByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `MedalClass` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteMedalClass` mutation. */
export type DeleteMedalClassInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  medalRank: Scalars['Int']['input'];
};

/** The output of our delete `MedalClass` mutation. */
export type DeleteMedalClassPayload = {
  __typename?: 'DeleteMedalClassPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMedalClassNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `MedalClass` that was deleted by this mutation. */
  medalClass?: Maybe<MedalClass>;
  /** An edge for our `MedalClass`. May be used by Relay 1. */
  medalClassEdge?: Maybe<MedalClassesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `MedalClass` mutation. */
export type DeleteMedalClassPayloadMedalClassEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalClassesOrderBy>>;
};

/** All input for the `deleteMedal` mutation. */
export type DeleteMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the medal. */
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Medal` mutation. */
export type DeleteMedalPayload = {
  __typename?: 'DeleteMedalPayload';
  /** Reads a single `Athlete` that is related to this `Medal`. */
  athlete?: Maybe<Athlete>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `Medal`. */
  country?: Maybe<Country>;
  deletedMedalNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Medal` that was deleted by this mutation. */
  medal?: Maybe<Medal>;
  /** Reads a single `MedalClass` that is related to this `Medal`. */
  medalClassByMedalClass?: Maybe<MedalClass>;
  /** An edge for our `Medal`. May be used by Relay 1. */
  medalEdge?: Maybe<MedalsEdge>;
  /** Reads a single `MedalTeam` that is related to this `Medal`. */
  medalTeam?: Maybe<MedalTeam>;
  /** Reads a single `OlympiadEvent` that is related to this `Medal`. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Medal` mutation. */
export type DeleteMedalPayloadMedalEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/** All input for the `deleteMedalTeamByNodeId` mutation. */
export type DeleteMedalTeamByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `MedalTeam` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteMedalTeam` mutation. */
export type DeleteMedalTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `MedalTeam` mutation. */
export type DeleteMedalTeamPayload = {
  __typename?: 'DeleteMedalTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMedalTeamNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `MedalTeam` that was deleted by this mutation. */
  medalTeam?: Maybe<MedalTeam>;
  /** An edge for our `MedalTeam`. May be used by Relay 1. */
  medalTeamEdge?: Maybe<MedalTeamsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `MedalTeam` mutation. */
export type DeleteMedalTeamPayloadMedalTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalTeamsOrderBy>>;
};

/** All input for the `deleteOlympiadAthleteByNodeId` mutation. */
export type DeleteOlympiadAthleteByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadAthlete` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOlympiadAthlete` mutation. */
export type DeleteOlympiadAthleteInput = {
  athleteId: Scalars['UUID']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  olympiadId: Scalars['UUID']['input'];
};

/** The output of our delete `OlympiadAthlete` mutation. */
export type DeleteOlympiadAthletePayload = {
  __typename?: 'DeleteOlympiadAthletePayload';
  /** Reads a single `Athlete` that is related to this `OlympiadAthlete`. */
  athlete?: Maybe<Athlete>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOlympiadAthleteNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadAthlete`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadAthlete` that was deleted by this mutation. */
  olympiadAthlete?: Maybe<OlympiadAthlete>;
  /** An edge for our `OlympiadAthlete`. May be used by Relay 1. */
  olympiadAthleteEdge?: Maybe<OlympiadAthletesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `OlympiadAthlete` mutation. */
export type DeleteOlympiadAthletePayloadOlympiadAthleteEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadAthletesOrderBy>>;
};

/** All input for the `deleteOlympiadByNodeId` mutation. */
export type DeleteOlympiadByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Olympiad` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOlympiadBySlug` mutation. */
export type DeleteOlympiadBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

/** All input for the `deleteOlympiadCountryByNodeId` mutation. */
export type DeleteOlympiadCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadCountry` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOlympiadCountry` mutation. */
export type DeleteOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The output of our delete `OlympiadCountry` mutation. */
export type DeleteOlympiadCountryPayload = {
  __typename?: 'DeleteOlympiadCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `OlympiadCountry`. */
  country?: Maybe<Country>;
  deletedOlympiadCountryNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadCountry`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadCountry` that was deleted by this mutation. */
  olympiadCountry?: Maybe<OlympiadCountry>;
  /** An edge for our `OlympiadCountry`. May be used by Relay 1. */
  olympiadCountryEdge?: Maybe<OlympiadCountriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `OlympiadCountry`. */
  region?: Maybe<Region>;
};

/** The output of our delete `OlympiadCountry` mutation. */
export type DeleteOlympiadCountryPayloadOlympiadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

/** All input for the `deleteOlympiadEventByNodeId` mutation. */
export type DeleteOlympiadEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadEvent` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOlympiadEvent` mutation. */
export type DeleteOlympiadEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `OlympiadEvent` mutation. */
export type DeleteOlympiadEventPayload = {
  __typename?: 'DeleteOlympiadEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOlympiadEventNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Event` that is related to this `OlympiadEvent`. */
  event?: Maybe<Event>;
  /** Reads a single `Olympiad` that is related to this `OlympiadEvent`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadEvent` that was deleted by this mutation. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** An edge for our `OlympiadEvent`. May be used by Relay 1. */
  olympiadEventEdge?: Maybe<OlympiadEventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `OlympiadEvent` mutation. */
export type DeleteOlympiadEventPayloadOlympiadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};

/** All input for the `deleteOlympiad` mutation. */
export type DeleteOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the olympiad. */
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Olympiad` mutation. */
export type DeleteOlympiadPayload = {
  __typename?: 'DeleteOlympiadPayload';
  /** Reads a single `City` that is related to this `Olympiad`. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOlympiadNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Olympiad` that was deleted by this mutation. */
  olympiad?: Maybe<Olympiad>;
  /** An edge for our `Olympiad`. May be used by Relay 1. */
  olympiadEdge?: Maybe<OlympiadsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Olympiad` mutation. */
export type DeleteOlympiadPayloadOlympiadEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadsOrderBy>>;
};

/** All input for the `deleteOlympiadRegionSettingByNodeId` mutation. */
export type DeleteOlympiadRegionSettingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadRegionSetting` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOlympiadRegionSetting` mutation. */
export type DeleteOlympiadRegionSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  olympiadId: Scalars['UUID']['input'];
  regionId: Scalars['UUID']['input'];
};

/** The output of our delete `OlympiadRegionSetting` mutation. */
export type DeleteOlympiadRegionSettingPayload = {
  __typename?: 'DeleteOlympiadRegionSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOlympiadRegionSettingNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadRegionSetting`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadRegionSetting` that was deleted by this mutation. */
  olympiadRegionSetting?: Maybe<OlympiadRegionSetting>;
  /** An edge for our `OlympiadRegionSetting`. May be used by Relay 1. */
  olympiadRegionSettingEdge?: Maybe<OlympiadRegionSettingsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `OlympiadRegionSetting`. */
  region?: Maybe<Region>;
};

/** The output of our delete `OlympiadRegionSetting` mutation. */
export type DeleteOlympiadRegionSettingPayloadOlympiadRegionSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};

/** All input for the `deleteOlympiadSportByNodeId` mutation. */
export type DeleteOlympiadSportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadSport` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteOlympiadSport` mutation. */
export type DeleteOlympiadSportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  olympiadId: Scalars['UUID']['input'];
  sportId: Scalars['UUID']['input'];
};

/** The output of our delete `OlympiadSport` mutation. */
export type DeleteOlympiadSportPayload = {
  __typename?: 'DeleteOlympiadSportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOlympiadSportNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadSport`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadSport` that was deleted by this mutation. */
  olympiadSport?: Maybe<OlympiadSport>;
  /** An edge for our `OlympiadSport`. May be used by Relay 1. */
  olympiadSportEdge?: Maybe<OlympiadSportsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Sport` that is related to this `OlympiadSport`. */
  sport?: Maybe<Sport>;
};

/** The output of our delete `OlympiadSport` mutation. */
export type DeleteOlympiadSportPayloadOlympiadSportEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};

/** All input for the `deletePlayerByNodeId` mutation. */
export type DeletePlayerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Player` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deletePlayerBySlug` mutation. */
export type DeletePlayerBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

/** All input for the `deletePlayerByUsername` mutation. */
export type DeletePlayerByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The username of the player. */
  username: Scalars['String']['input'];
};

/** All input for the `deletePlayer` mutation. */
export type DeletePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the player. */
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Player` mutation. */
export type DeletePlayerPayload = {
  __typename?: 'DeletePlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPlayerNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Player` that was deleted by this mutation. */
  player?: Maybe<Player>;
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Player` mutation. */
export type DeletePlayerPayloadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
};

/** All input for the `deleteRegionByName` mutation. */
export type DeleteRegionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteRegionByNodeId` mutation. */
export type DeleteRegionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Region` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteRegionBySlug` mutation. */
export type DeleteRegionBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

/** All input for the `deleteRegion` mutation. */
export type DeleteRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Region` mutation. */
export type DeleteRegionPayload = {
  __typename?: 'DeleteRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRegionNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Region` that was deleted by this mutation. */
  region?: Maybe<Region>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};

/** The output of our delete `Region` mutation. */
export type DeleteRegionPayloadRegionEdgeArgs = {
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** All input for the `deleteSportByName` mutation. */
export type DeleteSportByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the sport. */
  name: Scalars['String']['input'];
};

/** All input for the `deleteSportByNodeId` mutation. */
export type DeleteSportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Sport` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteSportBySlug` mutation. */
export type DeleteSportBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The slug for the sport. */
  slug: Scalars['String']['input'];
};

/** All input for the `deleteSport` mutation. */
export type DeleteSportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the sport. */
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Sport` mutation. */
export type DeleteSportPayload = {
  __typename?: 'DeleteSportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedSportNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Sport` that was deleted by this mutation. */
  sport?: Maybe<Sport>;
  /** An edge for our `Sport`. May be used by Relay 1. */
  sportEdge?: Maybe<SportsEdge>;
};

/** The output of our delete `Sport` mutation. */
export type DeleteSportPayloadSportEdgeArgs = {
  orderBy?: InputMaybe<Array<SportsOrderBy>>;
};

/** All input for the `deleteUserAuthenticatorByNodeId` mutation. */
export type DeleteUserAuthenticatorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserAuthenticator` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** All input for the `deleteUserAuthenticator` mutation. */
export type DeleteUserAuthenticatorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  credentialId: Scalars['String']['input'];
};

/** The output of our delete `UserAuthenticator` mutation. */
export type DeleteUserAuthenticatorPayload = {
  __typename?: 'DeleteUserAuthenticatorPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserAuthenticatorNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Player` that is related to this `UserAuthenticator`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserAuthenticator` that was deleted by this mutation. */
  userAuthenticator?: Maybe<UserAuthenticator>;
  /** An edge for our `UserAuthenticator`. May be used by Relay 1. */
  userAuthenticatorEdge?: Maybe<UserAuthenticatorsEdge>;
};

/** The output of our delete `UserAuthenticator` mutation. */
export type DeleteUserAuthenticatorPayloadUserAuthenticatorEdgeArgs = {
  orderBy?: InputMaybe<Array<UserAuthenticatorsOrderBy>>;
};

/** All input for the `draftCountry` mutation. */
export type DraftCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryid?: InputMaybe<Scalars['UUID']['input']>;
  groupid?: InputMaybe<Scalars['UUID']['input']>;
  olympiadid?: InputMaybe<Scalars['UUID']['input']>;
  suggestedcountryid?: InputMaybe<Scalars['UUID']['input']>;
};

/** The output of our `draftCountry` mutation. */
export type DraftCountryPayload = {
  __typename?: 'DraftCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupOlympiadCountry`. */
  country?: Maybe<Country>;
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadCountry`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  groupOlympiadCountry?: Maybe<GroupOlympiadCountry>;
  /** An edge for our `GroupOlympiadCountry`. May be used by Relay 1. */
  groupOlympiadCountryEdge?: Maybe<GroupOlympiadCountriesEdge>;
  /** Reads a single `Player` that is related to this `GroupOlympiadCountry`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our `draftCountry` mutation. */
export type DraftCountryPayloadGroupOlympiadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

export type DraftPausedPayload = {
  __typename?: 'DraftPausedPayload';
  paused?: Maybe<Scalars['Boolean']['output']>;
  secondsLeft?: Maybe<Scalars['Int']['output']>;
};

export type DraftSubscriptionPayload = {
  __typename?: 'DraftSubscriptionPayload';
  event?: Maybe<Scalars['String']['output']>;
  group?: Maybe<GroupOlympiad>;
};

export type EmailInfo = {
  __typename?: 'EmailInfo';
  code?: Maybe<Scalars['Int']['output']>;
  playerId?: Maybe<Scalars['UUID']['output']>;
  userType?: Maybe<Scalars['String']['output']>;
};

/** Specific events that are part of a sport. */
export type Event = Node & {
  __typename?: 'Event';
  fullSlug?: Maybe<Scalars['String']['output']>;
  /** The primary key for the event. */
  id: Scalars['UUID']['output'];
  /** The name of the event. */
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  olympiadEvents: OlympiadEventsConnection;
  /** The slug for the event. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Sport` that is related to this `Event`. */
  sport?: Maybe<Sport>;
  /** The foreign key for the sport the event belongs to. */
  sportId: Scalars['UUID']['output'];
  team?: Maybe<Scalars['Boolean']['output']>;
};

/** Specific events that are part of a sport. */
export type EventOlympiadEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadEventCondition>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `fullSlug` field. */
  fullSlug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `sportId` field. */
  sportId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `team` field. */
  team?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to be used against `Event` object types. All fields are combined with a logical ‘and.’ */
export type EventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `fullSlug` field. */
  fullSlug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `sportId` field. */
  sportId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `team` field. */
  team?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `Event` */
export type EventInput = {
  fullSlug?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the event. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** The name of the event. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug for the event. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The foreign key for the sport the event belongs to. */
  sportId: Scalars['UUID']['input'];
  team?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  fullSlug?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the event. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** The name of the event. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug for the event. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The foreign key for the sport the event belongs to. */
  sportId?: InputMaybe<Scalars['UUID']['input']>;
  team?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of `Event` values. */
export type EventsConnection = {
  __typename?: 'EventsConnection';
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventsEdge>;
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: 'EventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>;
};

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
  FullSlugAsc = 'FULL_SLUG_ASC',
  FullSlugDesc = 'FULL_SLUG_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OlympiadEventsByEventIdCountAsc = 'OLYMPIAD_EVENTS_BY_EVENT_ID__COUNT_ASC',
  OlympiadEventsByEventIdCountDesc = 'OLYMPIAD_EVENTS_BY_EVENT_ID__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  SportBySportIdIdAsc = 'SPORT_BY_SPORT_ID__ID_ASC',
  SportBySportIdIdDesc = 'SPORT_BY_SPORT_ID__ID_DESC',
  SportBySportIdNameAsc = 'SPORT_BY_SPORT_ID__NAME_ASC',
  SportBySportIdNameDesc = 'SPORT_BY_SPORT_ID__NAME_DESC',
  SportBySportIdSlugAsc = 'SPORT_BY_SPORT_ID__SLUG_ASC',
  SportBySportIdSlugDesc = 'SPORT_BY_SPORT_ID__SLUG_DESC',
  SportIdAsc = 'SPORT_ID_ASC',
  SportIdDesc = 'SPORT_ID_DESC',
  TeamAsc = 'TEAM_ASC',
  TeamDesc = 'TEAM_DESC'
}

/** An instance of a country's flag during a period of time. */
export type Flag = Node & {
  __typename?: 'Flag';
  /** Reads a single `Country` that is related to this `Flag`. */
  country?: Maybe<Country>;
  /** The foreign key id from the country the flag represents. */
  countryId: Scalars['UUID']['output'];
  dates?: Maybe<DatetimeRange>;
  /** The primary key for the flag. */
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  png?: Maybe<Scalars['String']['output']>;
  /** The url to the svg of the flag image. */
  svg?: Maybe<Scalars['String']['output']>;
  /** A range of years the flag was used for the country. */
  years?: Maybe<IntRange>;
};

/** A condition to be used against `Flag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FlagCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `dates` field. */
  dates?: InputMaybe<DatetimeRangeInput>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `png` field. */
  png?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `svg` field. */
  svg?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `years` field. */
  years?: InputMaybe<IntRangeInput>;
};

/** A filter to be used against `Flag` object types. All fields are combined with a logical ‘and.’ */
export type FlagFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<FlagFilter>>;
  /** Filter by the object’s `countryId` field. */
  countryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `dates` field. */
  dates?: InputMaybe<DatetimeRangeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<FlagFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<FlagFilter>>;
  /** Filter by the object’s `png` field. */
  png?: InputMaybe<StringFilter>;
  /** Filter by the object’s `svg` field. */
  svg?: InputMaybe<StringFilter>;
  /** Filter by the object’s `years` field. */
  years?: InputMaybe<IntRangeFilter>;
};

/** An input for mutations affecting `Flag` */
export type FlagInput = {
  /** The foreign key id from the country the flag represents. */
  countryId: Scalars['UUID']['input'];
  dates?: InputMaybe<DatetimeRangeInput>;
  /** The primary key for the flag. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  png?: InputMaybe<Scalars['String']['input']>;
  /** The url to the svg of the flag image. */
  svg?: InputMaybe<Scalars['String']['input']>;
  /** A range of years the flag was used for the country. */
  years?: InputMaybe<IntRangeInput>;
};

/** Represents an update to a `Flag`. Fields that are set will be updated. */
export type FlagPatch = {
  /** The foreign key id from the country the flag represents. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  dates?: InputMaybe<DatetimeRangeInput>;
  /** The primary key for the flag. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  png?: InputMaybe<Scalars['String']['input']>;
  /** The url to the svg of the flag image. */
  svg?: InputMaybe<Scalars['String']['input']>;
  /** A range of years the flag was used for the country. */
  years?: InputMaybe<IntRangeInput>;
};

export type FlagUrlResponse = {
  __typename?: 'FlagUrlResponse';
  png?: Maybe<Scalars['String']['output']>;
  svg?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of `Flag` values. */
export type FlagsConnection = {
  __typename?: 'FlagsConnection';
  /** A list of edges which contains the `Flag` and cursor to aid in pagination. */
  edges: Array<FlagsEdge>;
  /** A list of `Flag` objects. */
  nodes: Array<Maybe<Flag>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Flag` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Flag` edge in the connection. */
export type FlagsEdge = {
  __typename?: 'FlagsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Flag` at the end of the edge. */
  node?: Maybe<Flag>;
};

/** Methods to use when ordering `Flag`. */
export enum FlagsOrderBy {
  CountryByCountryIdIdAsc = 'COUNTRY_BY_COUNTRY_ID__ID_ASC',
  CountryByCountryIdIdDesc = 'COUNTRY_BY_COUNTRY_ID__ID_DESC',
  CountryByCountryIdNameAsc = 'COUNTRY_BY_COUNTRY_ID__NAME_ASC',
  CountryByCountryIdNameDesc = 'COUNTRY_BY_COUNTRY_ID__NAME_DESC',
  CountryByCountryIdNocsAsc = 'COUNTRY_BY_COUNTRY_ID__NOCS_ASC',
  CountryByCountryIdNocsDesc = 'COUNTRY_BY_COUNTRY_ID__NOCS_DESC',
  CountryByCountryIdRegionIdAsc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_ASC',
  CountryByCountryIdRegionIdDesc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_DESC',
  CountryByCountryIdSlugAsc = 'COUNTRY_BY_COUNTRY_ID__SLUG_ASC',
  CountryByCountryIdSlugDesc = 'COUNTRY_BY_COUNTRY_ID__SLUG_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  DatesAsc = 'DATES_ASC',
  DatesDesc = 'DATES_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PngAsc = 'PNG_ASC',
  PngDesc = 'PNG_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SvgAsc = 'SVG_ASC',
  SvgDesc = 'SVG_DESC',
  YearsAsc = 'YEARS_ASC',
  YearsDesc = 'YEARS_DESC'
}

export type ForceAutodraftPayload = {
  __typename?: 'ForceAutodraftPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Group = Node & {
  __typename?: 'Group';
  /** Reads a single `Player` that is related to this `Group`. */
  commissioner?: Maybe<Player>;
  commissionerId?: Maybe<Scalars['UUID']['output']>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedals: GroupMedalsConnection;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiads: GroupOlympiadsConnection;
  /** Reads and enables pagination through a set of `GroupPlayer`. */
  groupPlayers: GroupPlayersConnection;
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

export type GroupGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

export type GroupGroupOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

export type GroupGroupPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupPlayerCondition>;
  filter?: InputMaybe<GroupPlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};

/** A condition to be used against `Group` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GroupCondition = {
  /** Checks for equality with the object’s `commissionerId` field. */
  commissionerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Group` object types. All fields are combined with a logical ‘and.’ */
export type GroupFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GroupFilter>>;
  /** Filter by the object’s `commissionerId` field. */
  commissionerId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GroupFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GroupFilter>>;
};

/** An input for mutations affecting `Group` */
export type GroupInput = {
  commissionerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GroupMedal = Node & {
  __typename?: 'GroupMedal';
  badCountryNegative?: Maybe<Scalars['UUID']['output']>;
  badCountryPositive?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryPositive?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryPositive?: Maybe<Country>;
  goodCountryNegative?: Maybe<Scalars['UUID']['output']>;
  goodCountryPositive?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Group` that is related to this `GroupMedal`. */
  group?: Maybe<Group>;
  groupId: Scalars['UUID']['output'];
  /** Reads a single `Medal` that is related to this `GroupMedal`. */
  medal?: Maybe<Medal>;
  medalId: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Player` that is related to this `GroupMedal`. */
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['UUID']['output']>;
  score?: Maybe<Scalars['BigFloat']['output']>;
};

/**
 * A condition to be used against `GroupMedal` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GroupMedalCondition = {
  /** Checks for equality with the object’s `badCountryNegative` field. */
  badCountryNegative?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `badCountryPositive` field. */
  badCountryPositive?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `goodCountryNegative` field. */
  goodCountryNegative?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `goodCountryPositive` field. */
  goodCountryPositive?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `medalId` field. */
  medalId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `score` field. */
  score?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** A filter to be used against `GroupMedal` object types. All fields are combined with a logical ‘and.’ */
export type GroupMedalFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GroupMedalFilter>>;
  /** Filter by the object’s `badCountryNegative` field. */
  badCountryNegative?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `badCountryPositive` field. */
  badCountryPositive?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `goodCountryNegative` field. */
  goodCountryNegative?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `goodCountryPositive` field. */
  goodCountryPositive?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `groupId` field. */
  groupId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `medalId` field. */
  medalId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GroupMedalFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GroupMedalFilter>>;
  /** Filter by the object’s `playerId` field. */
  playerId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `score` field. */
  score?: InputMaybe<BigFloatFilter>;
};

/** An input for mutations affecting `GroupMedal` */
export type GroupMedalInput = {
  badCountryNegative?: InputMaybe<Scalars['UUID']['input']>;
  badCountryPositive?: InputMaybe<Scalars['UUID']['input']>;
  goodCountryNegative?: InputMaybe<Scalars['UUID']['input']>;
  goodCountryPositive?: InputMaybe<Scalars['UUID']['input']>;
  groupId: Scalars['UUID']['input'];
  medalId: Scalars['UUID']['input'];
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  score?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Represents an update to a `GroupMedal`. Fields that are set will be updated. */
export type GroupMedalPatch = {
  badCountryNegative?: InputMaybe<Scalars['UUID']['input']>;
  badCountryPositive?: InputMaybe<Scalars['UUID']['input']>;
  goodCountryNegative?: InputMaybe<Scalars['UUID']['input']>;
  goodCountryPositive?: InputMaybe<Scalars['UUID']['input']>;
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  medalId?: InputMaybe<Scalars['UUID']['input']>;
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  score?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** A connection to a list of `GroupMedal` values. */
export type GroupMedalsConnection = {
  __typename?: 'GroupMedalsConnection';
  /** A list of edges which contains the `GroupMedal` and cursor to aid in pagination. */
  edges: Array<GroupMedalsEdge>;
  /** A list of `GroupMedal` objects. */
  nodes: Array<Maybe<GroupMedal>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GroupMedal` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GroupMedal` edge in the connection. */
export type GroupMedalsEdge = {
  __typename?: 'GroupMedalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GroupMedal` at the end of the edge. */
  node?: Maybe<GroupMedal>;
};

/** Methods to use when ordering `GroupMedal`. */
export enum GroupMedalsOrderBy {
  BadCountryNegativeAsc = 'BAD_COUNTRY_NEGATIVE_ASC',
  BadCountryNegativeDesc = 'BAD_COUNTRY_NEGATIVE_DESC',
  BadCountryPositiveAsc = 'BAD_COUNTRY_POSITIVE_ASC',
  BadCountryPositiveDesc = 'BAD_COUNTRY_POSITIVE_DESC',
  CountryByBadCountryNegativeIdAsc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__ID_ASC',
  CountryByBadCountryNegativeIdDesc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__ID_DESC',
  CountryByBadCountryNegativeNameAsc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__NAME_ASC',
  CountryByBadCountryNegativeNameDesc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__NAME_DESC',
  CountryByBadCountryNegativeNocsAsc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__NOCS_ASC',
  CountryByBadCountryNegativeNocsDesc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__NOCS_DESC',
  CountryByBadCountryNegativeRegionIdAsc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__REGION_ID_ASC',
  CountryByBadCountryNegativeRegionIdDesc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__REGION_ID_DESC',
  CountryByBadCountryNegativeSlugAsc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__SLUG_ASC',
  CountryByBadCountryNegativeSlugDesc = 'COUNTRY_BY_BAD_COUNTRY_NEGATIVE__SLUG_DESC',
  CountryByBadCountryPositiveIdAsc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__ID_ASC',
  CountryByBadCountryPositiveIdDesc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__ID_DESC',
  CountryByBadCountryPositiveNameAsc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__NAME_ASC',
  CountryByBadCountryPositiveNameDesc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__NAME_DESC',
  CountryByBadCountryPositiveNocsAsc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__NOCS_ASC',
  CountryByBadCountryPositiveNocsDesc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__NOCS_DESC',
  CountryByBadCountryPositiveRegionIdAsc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__REGION_ID_ASC',
  CountryByBadCountryPositiveRegionIdDesc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__REGION_ID_DESC',
  CountryByBadCountryPositiveSlugAsc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__SLUG_ASC',
  CountryByBadCountryPositiveSlugDesc = 'COUNTRY_BY_BAD_COUNTRY_POSITIVE__SLUG_DESC',
  CountryByGoodCountryNegativeIdAsc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__ID_ASC',
  CountryByGoodCountryNegativeIdDesc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__ID_DESC',
  CountryByGoodCountryNegativeNameAsc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__NAME_ASC',
  CountryByGoodCountryNegativeNameDesc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__NAME_DESC',
  CountryByGoodCountryNegativeNocsAsc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__NOCS_ASC',
  CountryByGoodCountryNegativeNocsDesc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__NOCS_DESC',
  CountryByGoodCountryNegativeRegionIdAsc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__REGION_ID_ASC',
  CountryByGoodCountryNegativeRegionIdDesc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__REGION_ID_DESC',
  CountryByGoodCountryNegativeSlugAsc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__SLUG_ASC',
  CountryByGoodCountryNegativeSlugDesc = 'COUNTRY_BY_GOOD_COUNTRY_NEGATIVE__SLUG_DESC',
  CountryByGoodCountryPositiveIdAsc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__ID_ASC',
  CountryByGoodCountryPositiveIdDesc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__ID_DESC',
  CountryByGoodCountryPositiveNameAsc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__NAME_ASC',
  CountryByGoodCountryPositiveNameDesc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__NAME_DESC',
  CountryByGoodCountryPositiveNocsAsc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__NOCS_ASC',
  CountryByGoodCountryPositiveNocsDesc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__NOCS_DESC',
  CountryByGoodCountryPositiveRegionIdAsc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__REGION_ID_ASC',
  CountryByGoodCountryPositiveRegionIdDesc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__REGION_ID_DESC',
  CountryByGoodCountryPositiveSlugAsc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__SLUG_ASC',
  CountryByGoodCountryPositiveSlugDesc = 'COUNTRY_BY_GOOD_COUNTRY_POSITIVE__SLUG_DESC',
  GoodCountryNegativeAsc = 'GOOD_COUNTRY_NEGATIVE_ASC',
  GoodCountryNegativeDesc = 'GOOD_COUNTRY_NEGATIVE_DESC',
  GoodCountryPositiveAsc = 'GOOD_COUNTRY_POSITIVE_ASC',
  GoodCountryPositiveDesc = 'GOOD_COUNTRY_POSITIVE_DESC',
  GroupByGroupIdCommissionerIdAsc = 'GROUP_BY_GROUP_ID__COMMISSIONER_ID_ASC',
  GroupByGroupIdCommissionerIdDesc = 'GROUP_BY_GROUP_ID__COMMISSIONER_ID_DESC',
  GroupByGroupIdIdAsc = 'GROUP_BY_GROUP_ID__ID_ASC',
  GroupByGroupIdIdDesc = 'GROUP_BY_GROUP_ID__ID_DESC',
  GroupByGroupIdNameAsc = 'GROUP_BY_GROUP_ID__NAME_ASC',
  GroupByGroupIdNameDesc = 'GROUP_BY_GROUP_ID__NAME_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  MedalByMedalIdAthleteIdAsc = 'MEDAL_BY_MEDAL_ID__ATHLETE_ID_ASC',
  MedalByMedalIdAthleteIdDesc = 'MEDAL_BY_MEDAL_ID__ATHLETE_ID_DESC',
  MedalByMedalIdCountryIdAsc = 'MEDAL_BY_MEDAL_ID__COUNTRY_ID_ASC',
  MedalByMedalIdCountryIdDesc = 'MEDAL_BY_MEDAL_ID__COUNTRY_ID_DESC',
  MedalByMedalIdIdAsc = 'MEDAL_BY_MEDAL_ID__ID_ASC',
  MedalByMedalIdIdDesc = 'MEDAL_BY_MEDAL_ID__ID_DESC',
  MedalByMedalIdMedalClassAsc = 'MEDAL_BY_MEDAL_ID__MEDAL_CLASS_ASC',
  MedalByMedalIdMedalClassDesc = 'MEDAL_BY_MEDAL_ID__MEDAL_CLASS_DESC',
  MedalByMedalIdMedalTeamIdAsc = 'MEDAL_BY_MEDAL_ID__MEDAL_TEAM_ID_ASC',
  MedalByMedalIdMedalTeamIdDesc = 'MEDAL_BY_MEDAL_ID__MEDAL_TEAM_ID_DESC',
  MedalByMedalIdMedalTypeAsc = 'MEDAL_BY_MEDAL_ID__MEDAL_TYPE_ASC',
  MedalByMedalIdMedalTypeDesc = 'MEDAL_BY_MEDAL_ID__MEDAL_TYPE_DESC',
  MedalByMedalIdOlympiadEventIdAsc = 'MEDAL_BY_MEDAL_ID__OLYMPIAD_EVENT_ID_ASC',
  MedalByMedalIdOlympiadEventIdDesc = 'MEDAL_BY_MEDAL_ID__OLYMPIAD_EVENT_ID_DESC',
  MedalByMedalIdVerifiedAsc = 'MEDAL_BY_MEDAL_ID__VERIFIED_ASC',
  MedalByMedalIdVerifiedDesc = 'MEDAL_BY_MEDAL_ID__VERIFIED_DESC',
  MedalIdAsc = 'MEDAL_ID_ASC',
  MedalIdDesc = 'MEDAL_ID_DESC',
  Natural = 'NATURAL',
  PlayerByPlayerIdIdAsc = 'PLAYER_BY_PLAYER_ID__ID_ASC',
  PlayerByPlayerIdIdDesc = 'PLAYER_BY_PLAYER_ID__ID_DESC',
  PlayerByPlayerIdSlugAsc = 'PLAYER_BY_PLAYER_ID__SLUG_ASC',
  PlayerByPlayerIdSlugDesc = 'PLAYER_BY_PLAYER_ID__SLUG_DESC',
  PlayerByPlayerIdUsernameAsc = 'PLAYER_BY_PLAYER_ID__USERNAME_ASC',
  PlayerByPlayerIdUsernameDesc = 'PLAYER_BY_PLAYER_ID__USERNAME_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ScoreAsc = 'SCORE_ASC',
  ScoreDesc = 'SCORE_DESC'
}

export type GroupOlympiad = Node & {
  __typename?: 'GroupOlympiad';
  autodraftEnd?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  badCountry?: Maybe<Country>;
  badCountryId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Player` that is related to this `GroupOlympiad`. */
  commissioner?: Maybe<Player>;
  commissionerId?: Maybe<Scalars['UUID']['output']>;
  draftPaused?: Maybe<DraftPausedPayload>;
  drafted?: Maybe<Scalars['Boolean']['output']>;
  draftingplayer?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  goodCountry?: Maybe<Country>;
  goodCountryId?: Maybe<Scalars['UUID']['output']>;
  /** Reads a single `Group` that is related to this `GroupOlympiad`. */
  group?: Maybe<Group>;
  groupId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `GroupOlympiadCountry`. */
  groupOlympiadCountriesByGroupIdAndOlympiadId: GroupOlympiadCountriesConnection;
  /** Reads and enables pagination through a set of `GroupOlympiadPlayer`. */
  groupOlympiadPlayersByGroupIdAndOlympiadId: GroupOlympiadPlayersConnection;
  locked?: Maybe<Scalars['Boolean']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Olympiad` that is related to this `GroupOlympiad`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID']['output'];
  playerorder?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  roundnum?: Maybe<Scalars['Int']['output']>;
  subscriptionId: Scalars['UUID']['output'];
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  suggestedCountry?: Maybe<Country>;
  suggestedCountryId?: Maybe<Scalars['UUID']['output']>;
};

export type GroupOlympiadGroupOlympiadCountriesByGroupIdAndOlympiadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

export type GroupOlympiadGroupOlympiadPlayersByGroupIdAndOlympiadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadPlayerCondition>;
  filter?: InputMaybe<GroupOlympiadPlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/**
 * A condition to be used against `GroupOlympiad` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GroupOlympiadCondition = {
  /** Checks for equality with the object’s `badCountryId` field. */
  badCountryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `commissionerId` field. */
  commissionerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `drafted` field. */
  drafted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `draftingplayer` field. */
  draftingplayer?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `goodCountryId` field. */
  goodCountryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `locked` field. */
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `playerorder` field. */
  playerorder?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Checks for equality with the object’s `roundnum` field. */
  roundnum?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `subscriptionId` field. */
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `suggestedCountryId` field. */
  suggestedCountryId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `GroupOlympiadCountry` values. */
export type GroupOlympiadCountriesConnection = {
  __typename?: 'GroupOlympiadCountriesConnection';
  /** A list of edges which contains the `GroupOlympiadCountry` and cursor to aid in pagination. */
  edges: Array<GroupOlympiadCountriesEdge>;
  /** A list of `GroupOlympiadCountry` objects. */
  nodes: Array<Maybe<GroupOlympiadCountry>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GroupOlympiadCountry` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GroupOlympiadCountry` edge in the connection. */
export type GroupOlympiadCountriesEdge = {
  __typename?: 'GroupOlympiadCountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GroupOlympiadCountry` at the end of the edge. */
  node?: Maybe<GroupOlympiadCountry>;
};

/** Methods to use when ordering `GroupOlympiadCountry`. */
export enum GroupOlympiadCountriesOrderBy {
  CountryByCountryIdIdAsc = 'COUNTRY_BY_COUNTRY_ID__ID_ASC',
  CountryByCountryIdIdDesc = 'COUNTRY_BY_COUNTRY_ID__ID_DESC',
  CountryByCountryIdNameAsc = 'COUNTRY_BY_COUNTRY_ID__NAME_ASC',
  CountryByCountryIdNameDesc = 'COUNTRY_BY_COUNTRY_ID__NAME_DESC',
  CountryByCountryIdNocsAsc = 'COUNTRY_BY_COUNTRY_ID__NOCS_ASC',
  CountryByCountryIdNocsDesc = 'COUNTRY_BY_COUNTRY_ID__NOCS_DESC',
  CountryByCountryIdRegionIdAsc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_ASC',
  CountryByCountryIdRegionIdDesc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_DESC',
  CountryByCountryIdSlugAsc = 'COUNTRY_BY_COUNTRY_ID__SLUG_ASC',
  CountryByCountryIdSlugDesc = 'COUNTRY_BY_COUNTRY_ID__SLUG_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdBadCountryIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__BAD_COUNTRY_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdBadCountryIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__BAD_COUNTRY_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdCommissionerIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__COMMISSIONER_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdCommissionerIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__COMMISSIONER_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftedAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTED_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftedDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTED_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftingplayerAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTINGPLAYER_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftingplayerDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTINGPLAYER_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdGoodCountryIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GOOD_COUNTRY_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdGoodCountryIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GOOD_COUNTRY_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdGroupIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GROUP_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdGroupIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GROUP_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdLockedAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__LOCKED_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdLockedDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__LOCKED_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdOlympiadIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__OLYMPIAD_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdOlympiadIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__OLYMPIAD_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdPlayerorderAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__PLAYERORDER_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdPlayerorderDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__PLAYERORDER_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdRoundnumAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__ROUNDNUM_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdRoundnumDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__ROUNDNUM_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdSubscriptionIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUBSCRIPTION_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdSubscriptionIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUBSCRIPTION_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdSuggestedCountryIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUGGESTED_COUNTRY_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdSuggestedCountryIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUGGESTED_COUNTRY_ID_DESC',
  Natural = 'NATURAL',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PlayerByPlayerIdIdAsc = 'PLAYER_BY_PLAYER_ID__ID_ASC',
  PlayerByPlayerIdIdDesc = 'PLAYER_BY_PLAYER_ID__ID_DESC',
  PlayerByPlayerIdSlugAsc = 'PLAYER_BY_PLAYER_ID__SLUG_ASC',
  PlayerByPlayerIdSlugDesc = 'PLAYER_BY_PLAYER_ID__SLUG_DESC',
  PlayerByPlayerIdUsernameAsc = 'PLAYER_BY_PLAYER_ID__USERNAME_ASC',
  PlayerByPlayerIdUsernameDesc = 'PLAYER_BY_PLAYER_ID__USERNAME_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoundnumAsc = 'ROUNDNUM_ASC',
  RoundnumDesc = 'ROUNDNUM_DESC'
}

export type GroupOlympiadCountry = Node & {
  __typename?: 'GroupOlympiadCountry';
  /** Reads a single `Country` that is related to this `GroupOlympiadCountry`. */
  country?: Maybe<Country>;
  countryId: Scalars['UUID']['output'];
  groupId: Scalars['UUID']['output'];
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadCountry`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  olympiadCountry?: Maybe<OlympiadCountry>;
  olympiadId: Scalars['UUID']['output'];
  /** Reads a single `Player` that is related to this `GroupOlympiadCountry`. */
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['UUID']['output']>;
  roundnum?: Maybe<Scalars['Int']['output']>;
};

export type GroupOlympiadCountryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * A condition to be used against `GroupOlympiadCountry` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GroupOlympiadCountryCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `roundnum` field. */
  roundnum?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `GroupOlympiadCountry` object types. All fields are combined with a logical ‘and.’ */
export type GroupOlympiadCountryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GroupOlympiadCountryFilter>>;
  /** Filter by the object’s `countryId` field. */
  countryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `groupId` field. */
  groupId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GroupOlympiadCountryFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GroupOlympiadCountryFilter>>;
  /** Filter by the object’s `playerId` field. */
  playerId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `roundnum` field. */
  roundnum?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `GroupOlympiadCountry` */
export type GroupOlympiadCountryInput = {
  countryId: Scalars['UUID']['input'];
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  roundnum?: InputMaybe<Scalars['Int']['input']>;
};

/** Represents an update to a `GroupOlympiadCountry`. Fields that are set will be updated. */
export type GroupOlympiadCountryPatch = {
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  roundnum?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `GroupOlympiad` object types. All fields are combined with a logical ‘and.’ */
export type GroupOlympiadFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GroupOlympiadFilter>>;
  /** Filter by the object’s `badCountryId` field. */
  badCountryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `commissionerId` field. */
  commissionerId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `drafted` field. */
  drafted?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `draftingplayer` field. */
  draftingplayer?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `goodCountryId` field. */
  goodCountryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `groupId` field. */
  groupId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `locked` field. */
  locked?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GroupOlympiadFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GroupOlympiadFilter>>;
  /** Filter by the object’s `playerorder` field. */
  playerorder?: InputMaybe<UuidListFilter>;
  /** Filter by the object’s `roundnum` field. */
  roundnum?: InputMaybe<IntFilter>;
  /** Filter by the object’s `subscriptionId` field. */
  subscriptionId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `suggestedCountryId` field. */
  suggestedCountryId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GroupOlympiad` */
export type GroupOlympiadInput = {
  badCountryId?: InputMaybe<Scalars['UUID']['input']>;
  commissionerId?: InputMaybe<Scalars['UUID']['input']>;
  drafted?: InputMaybe<Scalars['Boolean']['input']>;
  draftingplayer?: InputMaybe<Scalars['UUID']['input']>;
  goodCountryId?: InputMaybe<Scalars['UUID']['input']>;
  groupId: Scalars['UUID']['input'];
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  olympiadId: Scalars['UUID']['input'];
  playerorder?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  roundnum?: InputMaybe<Scalars['Int']['input']>;
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  suggestedCountryId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Represents an update to a `GroupOlympiad`. Fields that are set will be updated. */
export type GroupOlympiadPatch = {
  badCountryId?: InputMaybe<Scalars['UUID']['input']>;
  commissionerId?: InputMaybe<Scalars['UUID']['input']>;
  drafted?: InputMaybe<Scalars['Boolean']['input']>;
  draftingplayer?: InputMaybe<Scalars['UUID']['input']>;
  goodCountryId?: InputMaybe<Scalars['UUID']['input']>;
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  playerorder?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  roundnum?: InputMaybe<Scalars['Int']['input']>;
  subscriptionId?: InputMaybe<Scalars['UUID']['input']>;
  suggestedCountryId?: InputMaybe<Scalars['UUID']['input']>;
};

export type GroupOlympiadPlayer = Node & {
  __typename?: 'GroupOlympiadPlayer';
  color?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['UUID']['output'];
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadPlayer`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** Reads a single `GroupPlayer` that is related to this `GroupOlympiadPlayer`. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  olympiadId: Scalars['UUID']['output'];
  playerId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `GroupOlympiadPlayer` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GroupOlympiadPlayerCondition = {
  /** Checks for equality with the object’s `color` field. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `GroupOlympiadPlayer` object types. All fields are combined with a logical ‘and.’ */
export type GroupOlympiadPlayerFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GroupOlympiadPlayerFilter>>;
  /** Filter by the object’s `color` field. */
  color?: InputMaybe<StringFilter>;
  /** Filter by the object’s `groupId` field. */
  groupId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GroupOlympiadPlayerFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GroupOlympiadPlayerFilter>>;
  /** Filter by the object’s `playerId` field. */
  playerId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GroupOlympiadPlayer` */
export type GroupOlympiadPlayerInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};

/** Represents an update to a `GroupOlympiadPlayer`. Fields that are set will be updated. */
export type GroupOlympiadPlayerPatch = {
  color?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  playerId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `GroupOlympiadPlayer` values. */
export type GroupOlympiadPlayersConnection = {
  __typename?: 'GroupOlympiadPlayersConnection';
  /** A list of edges which contains the `GroupOlympiadPlayer` and cursor to aid in pagination. */
  edges: Array<GroupOlympiadPlayersEdge>;
  /** A list of `GroupOlympiadPlayer` objects. */
  nodes: Array<Maybe<GroupOlympiadPlayer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GroupOlympiadPlayer` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GroupOlympiadPlayer` edge in the connection. */
export type GroupOlympiadPlayersEdge = {
  __typename?: 'GroupOlympiadPlayersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GroupOlympiadPlayer` at the end of the edge. */
  node?: Maybe<GroupOlympiadPlayer>;
};

/** Methods to use when ordering `GroupOlympiadPlayer`. */
export enum GroupOlympiadPlayersOrderBy {
  ColorAsc = 'COLOR_ASC',
  ColorDesc = 'COLOR_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdBadCountryIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__BAD_COUNTRY_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdBadCountryIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__BAD_COUNTRY_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdCommissionerIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__COMMISSIONER_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdCommissionerIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__COMMISSIONER_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftedAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTED_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftedDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTED_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftingplayerAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTINGPLAYER_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdDraftingplayerDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__DRAFTINGPLAYER_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdGoodCountryIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GOOD_COUNTRY_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdGoodCountryIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GOOD_COUNTRY_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdGroupIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GROUP_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdGroupIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__GROUP_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdLockedAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__LOCKED_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdLockedDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__LOCKED_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdOlympiadIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__OLYMPIAD_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdOlympiadIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__OLYMPIAD_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdPlayerorderAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__PLAYERORDER_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdPlayerorderDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__PLAYERORDER_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdRoundnumAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__ROUNDNUM_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdRoundnumDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__ROUNDNUM_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdSubscriptionIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUBSCRIPTION_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdSubscriptionIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUBSCRIPTION_ID_DESC',
  GroupOlympiadByGroupIdAndOlympiadIdSuggestedCountryIdAsc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUGGESTED_COUNTRY_ID_ASC',
  GroupOlympiadByGroupIdAndOlympiadIdSuggestedCountryIdDesc = 'GROUP_OLYMPIAD_BY_GROUP_ID_AND_OLYMPIAD_ID__SUGGESTED_COUNTRY_ID_DESC',
  GroupPlayerByGroupIdAndPlayerIdGroupIdAsc = 'GROUP_PLAYER_BY_GROUP_ID_AND_PLAYER_ID__GROUP_ID_ASC',
  GroupPlayerByGroupIdAndPlayerIdGroupIdDesc = 'GROUP_PLAYER_BY_GROUP_ID_AND_PLAYER_ID__GROUP_ID_DESC',
  GroupPlayerByGroupIdAndPlayerIdPlayerIdAsc = 'GROUP_PLAYER_BY_GROUP_ID_AND_PLAYER_ID__PLAYER_ID_ASC',
  GroupPlayerByGroupIdAndPlayerIdPlayerIdDesc = 'GROUP_PLAYER_BY_GROUP_ID_AND_PLAYER_ID__PLAYER_ID_DESC',
  Natural = 'NATURAL',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `GroupOlympiad` values. */
export type GroupOlympiadsConnection = {
  __typename?: 'GroupOlympiadsConnection';
  /** A list of edges which contains the `GroupOlympiad` and cursor to aid in pagination. */
  edges: Array<GroupOlympiadsEdge>;
  /** A list of `GroupOlympiad` objects. */
  nodes: Array<Maybe<GroupOlympiad>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GroupOlympiad` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GroupOlympiad` edge in the connection. */
export type GroupOlympiadsEdge = {
  __typename?: 'GroupOlympiadsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GroupOlympiad` at the end of the edge. */
  node?: Maybe<GroupOlympiad>;
};

/** Methods to use when ordering `GroupOlympiad`. */
export enum GroupOlympiadsOrderBy {
  BadCountryIdAsc = 'BAD_COUNTRY_ID_ASC',
  BadCountryIdDesc = 'BAD_COUNTRY_ID_DESC',
  CommissionerIdAsc = 'COMMISSIONER_ID_ASC',
  CommissionerIdDesc = 'COMMISSIONER_ID_DESC',
  CountryByBadCountryIdIdAsc = 'COUNTRY_BY_BAD_COUNTRY_ID__ID_ASC',
  CountryByBadCountryIdIdDesc = 'COUNTRY_BY_BAD_COUNTRY_ID__ID_DESC',
  CountryByBadCountryIdNameAsc = 'COUNTRY_BY_BAD_COUNTRY_ID__NAME_ASC',
  CountryByBadCountryIdNameDesc = 'COUNTRY_BY_BAD_COUNTRY_ID__NAME_DESC',
  CountryByBadCountryIdNocsAsc = 'COUNTRY_BY_BAD_COUNTRY_ID__NOCS_ASC',
  CountryByBadCountryIdNocsDesc = 'COUNTRY_BY_BAD_COUNTRY_ID__NOCS_DESC',
  CountryByBadCountryIdRegionIdAsc = 'COUNTRY_BY_BAD_COUNTRY_ID__REGION_ID_ASC',
  CountryByBadCountryIdRegionIdDesc = 'COUNTRY_BY_BAD_COUNTRY_ID__REGION_ID_DESC',
  CountryByBadCountryIdSlugAsc = 'COUNTRY_BY_BAD_COUNTRY_ID__SLUG_ASC',
  CountryByBadCountryIdSlugDesc = 'COUNTRY_BY_BAD_COUNTRY_ID__SLUG_DESC',
  CountryByGoodCountryIdIdAsc = 'COUNTRY_BY_GOOD_COUNTRY_ID__ID_ASC',
  CountryByGoodCountryIdIdDesc = 'COUNTRY_BY_GOOD_COUNTRY_ID__ID_DESC',
  CountryByGoodCountryIdNameAsc = 'COUNTRY_BY_GOOD_COUNTRY_ID__NAME_ASC',
  CountryByGoodCountryIdNameDesc = 'COUNTRY_BY_GOOD_COUNTRY_ID__NAME_DESC',
  CountryByGoodCountryIdNocsAsc = 'COUNTRY_BY_GOOD_COUNTRY_ID__NOCS_ASC',
  CountryByGoodCountryIdNocsDesc = 'COUNTRY_BY_GOOD_COUNTRY_ID__NOCS_DESC',
  CountryByGoodCountryIdRegionIdAsc = 'COUNTRY_BY_GOOD_COUNTRY_ID__REGION_ID_ASC',
  CountryByGoodCountryIdRegionIdDesc = 'COUNTRY_BY_GOOD_COUNTRY_ID__REGION_ID_DESC',
  CountryByGoodCountryIdSlugAsc = 'COUNTRY_BY_GOOD_COUNTRY_ID__SLUG_ASC',
  CountryByGoodCountryIdSlugDesc = 'COUNTRY_BY_GOOD_COUNTRY_ID__SLUG_DESC',
  CountryBySuggestedCountryIdIdAsc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__ID_ASC',
  CountryBySuggestedCountryIdIdDesc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__ID_DESC',
  CountryBySuggestedCountryIdNameAsc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__NAME_ASC',
  CountryBySuggestedCountryIdNameDesc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__NAME_DESC',
  CountryBySuggestedCountryIdNocsAsc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__NOCS_ASC',
  CountryBySuggestedCountryIdNocsDesc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__NOCS_DESC',
  CountryBySuggestedCountryIdRegionIdAsc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__REGION_ID_ASC',
  CountryBySuggestedCountryIdRegionIdDesc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__REGION_ID_DESC',
  CountryBySuggestedCountryIdSlugAsc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__SLUG_ASC',
  CountryBySuggestedCountryIdSlugDesc = 'COUNTRY_BY_SUGGESTED_COUNTRY_ID__SLUG_DESC',
  DraftedAsc = 'DRAFTED_ASC',
  DraftedDesc = 'DRAFTED_DESC',
  DraftingplayerAsc = 'DRAFTINGPLAYER_ASC',
  DraftingplayerDesc = 'DRAFTINGPLAYER_DESC',
  GoodCountryIdAsc = 'GOOD_COUNTRY_ID_ASC',
  GoodCountryIdDesc = 'GOOD_COUNTRY_ID_DESC',
  GroupByGroupIdCommissionerIdAsc = 'GROUP_BY_GROUP_ID__COMMISSIONER_ID_ASC',
  GroupByGroupIdCommissionerIdDesc = 'GROUP_BY_GROUP_ID__COMMISSIONER_ID_DESC',
  GroupByGroupIdIdAsc = 'GROUP_BY_GROUP_ID__ID_ASC',
  GroupByGroupIdIdDesc = 'GROUP_BY_GROUP_ID__ID_DESC',
  GroupByGroupIdNameAsc = 'GROUP_BY_GROUP_ID__NAME_ASC',
  GroupByGroupIdNameDesc = 'GROUP_BY_GROUP_ID__NAME_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  GroupOlympiadCountriesByGroupIdAndOlympiadIdCountAsc = 'GROUP_OLYMPIAD_COUNTRIES_BY_GROUP_ID_AND_OLYMPIAD_ID__COUNT_ASC',
  GroupOlympiadCountriesByGroupIdAndOlympiadIdCountDesc = 'GROUP_OLYMPIAD_COUNTRIES_BY_GROUP_ID_AND_OLYMPIAD_ID__COUNT_DESC',
  GroupOlympiadPlayersByGroupIdAndOlympiadIdCountAsc = 'GROUP_OLYMPIAD_PLAYERS_BY_GROUP_ID_AND_OLYMPIAD_ID__COUNT_ASC',
  GroupOlympiadPlayersByGroupIdAndOlympiadIdCountDesc = 'GROUP_OLYMPIAD_PLAYERS_BY_GROUP_ID_AND_OLYMPIAD_ID__COUNT_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  Natural = 'NATURAL',
  OlympiadByOlympiadIdCityIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_ASC',
  OlympiadByOlympiadIdCityIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_DESC',
  OlympiadByOlympiadIdDatesAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_ASC',
  OlympiadByOlympiadIdDatesDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_DESC',
  OlympiadByOlympiadIdIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_ASC',
  OlympiadByOlympiadIdIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_DESC',
  OlympiadByOlympiadIdOlympiadTypeAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_ASC',
  OlympiadByOlympiadIdOlympiadTypeDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_DESC',
  OlympiadByOlympiadIdRealOlympiadAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_ASC',
  OlympiadByOlympiadIdRealOlympiadDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_DESC',
  OlympiadByOlympiadIdSlugAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_ASC',
  OlympiadByOlympiadIdSlugDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_DESC',
  OlympiadByOlympiadIdYearAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_ASC',
  OlympiadByOlympiadIdYearDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_DESC',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PlayerorderAsc = 'PLAYERORDER_ASC',
  PlayerorderDesc = 'PLAYERORDER_DESC',
  PlayerByCommissionerIdIdAsc = 'PLAYER_BY_COMMISSIONER_ID__ID_ASC',
  PlayerByCommissionerIdIdDesc = 'PLAYER_BY_COMMISSIONER_ID__ID_DESC',
  PlayerByCommissionerIdSlugAsc = 'PLAYER_BY_COMMISSIONER_ID__SLUG_ASC',
  PlayerByCommissionerIdSlugDesc = 'PLAYER_BY_COMMISSIONER_ID__SLUG_DESC',
  PlayerByCommissionerIdUsernameAsc = 'PLAYER_BY_COMMISSIONER_ID__USERNAME_ASC',
  PlayerByCommissionerIdUsernameDesc = 'PLAYER_BY_COMMISSIONER_ID__USERNAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoundnumAsc = 'ROUNDNUM_ASC',
  RoundnumDesc = 'ROUNDNUM_DESC',
  SubscriptionIdAsc = 'SUBSCRIPTION_ID_ASC',
  SubscriptionIdDesc = 'SUBSCRIPTION_ID_DESC',
  SuggestedCountryIdAsc = 'SUGGESTED_COUNTRY_ID_ASC',
  SuggestedCountryIdDesc = 'SUGGESTED_COUNTRY_ID_DESC'
}

/** Represents an update to a `Group`. Fields that are set will be updated. */
export type GroupPatch = {
  commissionerId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GroupPlayer = Node & {
  __typename?: 'GroupPlayer';
  /** Reads a single `Group` that is related to this `GroupPlayer`. */
  group?: Maybe<Group>;
  groupId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `GroupOlympiadPlayer`. */
  groupOlympiadPlayersByGroupIdAndPlayerId: GroupOlympiadPlayersConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Player` that is related to this `GroupPlayer`. */
  player?: Maybe<Player>;
  playerId: Scalars['UUID']['output'];
};

export type GroupPlayerGroupOlympiadPlayersByGroupIdAndPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadPlayerCondition>;
  filter?: InputMaybe<GroupOlympiadPlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/**
 * A condition to be used against `GroupPlayer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GroupPlayerCondition = {
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `GroupPlayer` object types. All fields are combined with a logical ‘and.’ */
export type GroupPlayerFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GroupPlayerFilter>>;
  /** Filter by the object’s `groupId` field. */
  groupId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GroupPlayerFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GroupPlayerFilter>>;
  /** Filter by the object’s `playerId` field. */
  playerId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GroupPlayer` */
export type GroupPlayerInput = {
  groupId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};

/** Represents an update to a `GroupPlayer`. Fields that are set will be updated. */
export type GroupPlayerPatch = {
  groupId?: InputMaybe<Scalars['UUID']['input']>;
  playerId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `GroupPlayer` values. */
export type GroupPlayersConnection = {
  __typename?: 'GroupPlayersConnection';
  /** A list of edges which contains the `GroupPlayer` and cursor to aid in pagination. */
  edges: Array<GroupPlayersEdge>;
  /** A list of `GroupPlayer` objects. */
  nodes: Array<Maybe<GroupPlayer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GroupPlayer` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `GroupPlayer` edge in the connection. */
export type GroupPlayersEdge = {
  __typename?: 'GroupPlayersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `GroupPlayer` at the end of the edge. */
  node?: Maybe<GroupPlayer>;
};

/** Methods to use when ordering `GroupPlayer`. */
export enum GroupPlayersOrderBy {
  GroupByGroupIdCommissionerIdAsc = 'GROUP_BY_GROUP_ID__COMMISSIONER_ID_ASC',
  GroupByGroupIdCommissionerIdDesc = 'GROUP_BY_GROUP_ID__COMMISSIONER_ID_DESC',
  GroupByGroupIdIdAsc = 'GROUP_BY_GROUP_ID__ID_ASC',
  GroupByGroupIdIdDesc = 'GROUP_BY_GROUP_ID__ID_DESC',
  GroupByGroupIdNameAsc = 'GROUP_BY_GROUP_ID__NAME_ASC',
  GroupByGroupIdNameDesc = 'GROUP_BY_GROUP_ID__NAME_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  GroupOlympiadPlayersByGroupIdAndPlayerIdCountAsc = 'GROUP_OLYMPIAD_PLAYERS_BY_GROUP_ID_AND_PLAYER_ID__COUNT_ASC',
  GroupOlympiadPlayersByGroupIdAndPlayerIdCountDesc = 'GROUP_OLYMPIAD_PLAYERS_BY_GROUP_ID_AND_PLAYER_ID__COUNT_DESC',
  Natural = 'NATURAL',
  PlayerByPlayerIdIdAsc = 'PLAYER_BY_PLAYER_ID__ID_ASC',
  PlayerByPlayerIdIdDesc = 'PLAYER_BY_PLAYER_ID__ID_DESC',
  PlayerByPlayerIdSlugAsc = 'PLAYER_BY_PLAYER_ID__SLUG_ASC',
  PlayerByPlayerIdSlugDesc = 'PLAYER_BY_PLAYER_ID__SLUG_DESC',
  PlayerByPlayerIdUsernameAsc = 'PLAYER_BY_PLAYER_ID__USERNAME_ASC',
  PlayerByPlayerIdUsernameDesc = 'PLAYER_BY_PLAYER_ID__USERNAME_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Group` values. */
export type GroupsConnection = {
  __typename?: 'GroupsConnection';
  /** A list of edges which contains the `Group` and cursor to aid in pagination. */
  edges: Array<GroupsEdge>;
  /** A list of `Group` objects. */
  nodes: Array<Maybe<Group>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Group` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Group` edge in the connection. */
export type GroupsEdge = {
  __typename?: 'GroupsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Group` at the end of the edge. */
  node?: Maybe<Group>;
};

/** Methods to use when ordering `Group`. */
export enum GroupsOrderBy {
  CommissionerIdAsc = 'COMMISSIONER_ID_ASC',
  CommissionerIdDesc = 'COMMISSIONER_ID_DESC',
  GroupMedalsByGroupIdCountAsc = 'GROUP_MEDALS_BY_GROUP_ID__COUNT_ASC',
  GroupMedalsByGroupIdCountDesc = 'GROUP_MEDALS_BY_GROUP_ID__COUNT_DESC',
  GroupOlympiadsByGroupIdCountAsc = 'GROUP_OLYMPIADS_BY_GROUP_ID__COUNT_ASC',
  GroupOlympiadsByGroupIdCountDesc = 'GROUP_OLYMPIADS_BY_GROUP_ID__COUNT_DESC',
  GroupPlayersByGroupIdCountAsc = 'GROUP_PLAYERS_BY_GROUP_ID__COUNT_ASC',
  GroupPlayersByGroupIdCountDesc = 'GROUP_PLAYERS_BY_GROUP_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PlayerByCommissionerIdIdAsc = 'PLAYER_BY_COMMISSIONER_ID__ID_ASC',
  PlayerByCommissionerIdIdDesc = 'PLAYER_BY_COMMISSIONER_ID__ID_DESC',
  PlayerByCommissionerIdSlugAsc = 'PLAYER_BY_COMMISSIONER_ID__SLUG_ASC',
  PlayerByCommissionerIdSlugDesc = 'PLAYER_BY_COMMISSIONER_ID__SLUG_DESC',
  PlayerByCommissionerIdUsernameAsc = 'PLAYER_BY_COMMISSIONER_ID__USERNAME_ASC',
  PlayerByCommissionerIdUsernameDesc = 'PLAYER_BY_COMMISSIONER_ID__USERNAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** A range of `Int`. */
export type IntRange = {
  __typename?: 'IntRange';
  /** The ending bound of our range. */
  end?: Maybe<IntRangeBound>;
  /** The starting bound of our range. */
  start?: Maybe<IntRangeBound>;
};

/** The value at one end of a range. A range can either include this value, or not. */
export type IntRangeBound = {
  __typename?: 'IntRangeBound';
  /** Whether or not the value of this bound is included in the range. */
  inclusive: Scalars['Boolean']['output'];
  /** The value at one end of our range. */
  value: Scalars['Int']['output'];
};

/** The value at one end of a range. A range can either include this value, or not. */
export type IntRangeBoundInput = {
  /** Whether or not the value of this bound is included in the range. */
  inclusive: Scalars['Boolean']['input'];
  /** The value at one end of our range. */
  value: Scalars['Int']['input'];
};

/** A filter to be used against IntRange fields. All fields are combined with a logical ‘and.’ */
export type IntRangeFilter = {
  /** Adjacent to the specified range. */
  adjacentTo?: InputMaybe<IntRangeInput>;
  /** Contained by the specified range. */
  containedBy?: InputMaybe<IntRangeInput>;
  /** Contains the specified range. */
  contains?: InputMaybe<IntRangeInput>;
  /** Contains the specified value. */
  containsElement?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<IntRangeInput>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<IntRangeInput>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<IntRangeInput>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<IntRangeInput>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<IntRangeInput>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<IntRangeInput>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<IntRangeInput>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<IntRangeInput>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<IntRangeInput>;
  /** Does not extend left of the specified range. */
  notExtendsLeftOf?: InputMaybe<IntRangeInput>;
  /** Does not extend right of the specified range. */
  notExtendsRightOf?: InputMaybe<IntRangeInput>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<IntRangeInput>>;
  /** Overlaps the specified range. */
  overlaps?: InputMaybe<IntRangeInput>;
  /** Strictly left of the specified range. */
  strictlyLeftOf?: InputMaybe<IntRangeInput>;
  /** Strictly right of the specified range. */
  strictlyRightOf?: InputMaybe<IntRangeInput>;
};

/** A range of `Int`. */
export type IntRangeInput = {
  /** The ending bound of our range. */
  end?: InputMaybe<IntRangeBoundInput>;
  /** The starting bound of our range. */
  start?: InputMaybe<IntRangeBoundInput>;
};

export type Invitation = {
  __typename?: 'Invitation';
  groupId?: Maybe<Scalars['String']['output']>;
};

export type InvitationPayload = {
  __typename?: 'InvitationPayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  emailInfo?: Maybe<EmailInfo>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** A medal awarded at an olympiad. */
export type Medal = Node & {
  __typename?: 'Medal';
  /** Reads a single `Athlete` that is related to this `Medal`. */
  athlete?: Maybe<Athlete>;
  /** The foreign key for the athlete that won the medal. */
  athleteId: Scalars['UUID']['output'];
  /** Reads a single `Country` that is related to this `Medal`. */
  country?: Maybe<Country>;
  /** The foreign key for the country the medal was awarded to. */
  countryId: Scalars['UUID']['output'];
  flag?: Maybe<Flag>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedals: GroupMedalsConnection;
  /** The primary key for the medal. */
  id: Scalars['UUID']['output'];
  medalClass?: Maybe<Scalars['Int']['output']>;
  /** Reads a single `MedalClass` that is related to this `Medal`. */
  medalClassByMedalClass?: Maybe<MedalClass>;
  /** Reads a single `MedalTeam` that is related to this `Medal`. */
  medalTeam?: Maybe<MedalTeam>;
  medalTeamId?: Maybe<Scalars['UUID']['output']>;
  /** The type of medal. */
  medalType?: Maybe<Medaltype>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `OlympiadEvent` that is related to this `Medal`. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** The foreign key for the olympiad event the medal was awarded at. */
  olympiadEventId: Scalars['UUID']['output'];
  playerMedalByGroup?: Maybe<GroupMedal>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  playerMedals: GroupMedalsConnection;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

/** A medal awarded at an olympiad. */
export type MedalGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

/** A medal awarded at an olympiad. */
export type MedalPlayerMedalByGroupArgs = {
  selectedGroupId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A medal awarded at an olympiad. */
export type MedalPlayerMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type MedalClass = Node & {
  __typename?: 'MedalClass';
  medalRank: Scalars['Int']['output'];
  medalType?: Maybe<Medaltype>;
  /** Reads and enables pagination through a set of `Medal`. */
  medalsByMedalClass: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

export type MedalClassMedalsByMedalClassArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/**
 * A condition to be used against `MedalClass` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MedalClassCondition = {
  /** Checks for equality with the object’s `medalRank` field. */
  medalRank?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `medalType` field. */
  medalType?: InputMaybe<Medaltype>;
};

/** A filter to be used against `MedalClass` object types. All fields are combined with a logical ‘and.’ */
export type MedalClassFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MedalClassFilter>>;
  /** Filter by the object’s `medalRank` field. */
  medalRank?: InputMaybe<IntFilter>;
  /** Filter by the object’s `medalType` field. */
  medalType?: InputMaybe<MedaltypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MedalClassFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MedalClassFilter>>;
};

/** An input for mutations affecting `MedalClass` */
export type MedalClassInput = {
  medalRank: Scalars['Int']['input'];
  medalType?: InputMaybe<Medaltype>;
};

/** Represents an update to a `MedalClass`. Fields that are set will be updated. */
export type MedalClassPatch = {
  medalRank?: InputMaybe<Scalars['Int']['input']>;
  medalType?: InputMaybe<Medaltype>;
};

/** A connection to a list of `MedalClass` values. */
export type MedalClassesConnection = {
  __typename?: 'MedalClassesConnection';
  /** A list of edges which contains the `MedalClass` and cursor to aid in pagination. */
  edges: Array<MedalClassesEdge>;
  /** A list of `MedalClass` objects. */
  nodes: Array<Maybe<MedalClass>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MedalClass` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `MedalClass` edge in the connection. */
export type MedalClassesEdge = {
  __typename?: 'MedalClassesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MedalClass` at the end of the edge. */
  node?: Maybe<MedalClass>;
};

/** Methods to use when ordering `MedalClass`. */
export enum MedalClassesOrderBy {
  MedalsByMedalClassCountAsc = 'MEDALS_BY_MEDAL_CLASS__COUNT_ASC',
  MedalsByMedalClassCountDesc = 'MEDALS_BY_MEDAL_CLASS__COUNT_DESC',
  MedalRankAsc = 'MEDAL_RANK_ASC',
  MedalRankDesc = 'MEDAL_RANK_DESC',
  MedalTypeAsc = 'MEDAL_TYPE_ASC',
  MedalTypeDesc = 'MEDAL_TYPE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Medal` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MedalCondition = {
  /** Checks for equality with the object’s `athleteId` field. */
  athleteId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `medalClass` field. */
  medalClass?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `medalTeamId` field. */
  medalTeamId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `medalType` field. */
  medalType?: InputMaybe<Medaltype>;
  /** Checks for equality with the object’s `olympiadEventId` field. */
  olympiadEventId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `verified` field. */
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to be used against `Medal` object types. All fields are combined with a logical ‘and.’ */
export type MedalFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MedalFilter>>;
  /** Filter by the object’s `athleteId` field. */
  athleteId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `countryId` field. */
  countryId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `medalClass` field. */
  medalClass?: InputMaybe<IntFilter>;
  /** Filter by the object’s `medalTeamId` field. */
  medalTeamId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `medalType` field. */
  medalType?: InputMaybe<MedaltypeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MedalFilter>;
  /** Filter by the object’s `olympiadEventId` field. */
  olympiadEventId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MedalFilter>>;
  /** Filter by the object’s `verified` field. */
  verified?: InputMaybe<BooleanFilter>;
};

/** An input for mutations affecting `Medal` */
export type MedalInput = {
  /** The foreign key for the athlete that won the medal. */
  athleteId: Scalars['UUID']['input'];
  /** The foreign key for the country the medal was awarded to. */
  countryId: Scalars['UUID']['input'];
  /** The primary key for the medal. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  medalClass?: InputMaybe<Scalars['Int']['input']>;
  medalTeamId?: InputMaybe<Scalars['UUID']['input']>;
  /** The type of medal. */
  medalType?: InputMaybe<Medaltype>;
  /** The foreign key for the olympiad event the medal was awarded at. */
  olympiadEventId: Scalars['UUID']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents an update to a `Medal`. Fields that are set will be updated. */
export type MedalPatch = {
  /** The foreign key for the athlete that won the medal. */
  athleteId?: InputMaybe<Scalars['UUID']['input']>;
  /** The foreign key for the country the medal was awarded to. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  /** The primary key for the medal. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  medalClass?: InputMaybe<Scalars['Int']['input']>;
  medalTeamId?: InputMaybe<Scalars['UUID']['input']>;
  /** The type of medal. */
  medalType?: InputMaybe<Medaltype>;
  /** The foreign key for the olympiad event the medal was awarded at. */
  olympiadEventId?: InputMaybe<Scalars['UUID']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MedalTeam = Node & {
  __typename?: 'MedalTeam';
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

export type MedalTeamMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/**
 * A condition to be used against `MedalTeam` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MedalTeamCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `MedalTeam` object types. All fields are combined with a logical ‘and.’ */
export type MedalTeamFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MedalTeamFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MedalTeamFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MedalTeamFilter>>;
};

/** An input for mutations affecting `MedalTeam` */
export type MedalTeamInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `MedalTeam`. Fields that are set will be updated. */
export type MedalTeamPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `MedalTeam` values. */
export type MedalTeamsConnection = {
  __typename?: 'MedalTeamsConnection';
  /** A list of edges which contains the `MedalTeam` and cursor to aid in pagination. */
  edges: Array<MedalTeamsEdge>;
  /** A list of `MedalTeam` objects. */
  nodes: Array<Maybe<MedalTeam>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MedalTeam` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `MedalTeam` edge in the connection. */
export type MedalTeamsEdge = {
  __typename?: 'MedalTeamsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MedalTeam` at the end of the edge. */
  node?: Maybe<MedalTeam>;
};

/** Methods to use when ordering `MedalTeam`. */
export enum MedalTeamsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MedalsByMedalTeamIdCountAsc = 'MEDALS_BY_MEDAL_TEAM_ID__COUNT_ASC',
  MedalsByMedalTeamIdCountDesc = 'MEDALS_BY_MEDAL_TEAM_ID__COUNT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Medal` values. */
export type MedalsConnection = {
  __typename?: 'MedalsConnection';
  /** A list of edges which contains the `Medal` and cursor to aid in pagination. */
  edges: Array<MedalsEdge>;
  /** A list of `Medal` objects. */
  nodes: Array<Maybe<Medal>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Medal` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Medal` edge in the connection. */
export type MedalsEdge = {
  __typename?: 'MedalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Medal` at the end of the edge. */
  node?: Maybe<Medal>;
};

/** Methods to use when ordering `Medal`. */
export enum MedalsOrderBy {
  AthleteByAthleteIdBronzeMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__BRONZE_MEDALS_ASC',
  AthleteByAthleteIdBronzeMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__BRONZE_MEDALS_DESC',
  AthleteByAthleteIdFullFirstNameAsc = 'ATHLETE_BY_ATHLETE_ID__FULL_FIRST_NAME_ASC',
  AthleteByAthleteIdFullFirstNameDesc = 'ATHLETE_BY_ATHLETE_ID__FULL_FIRST_NAME_DESC',
  AthleteByAthleteIdFullLastNameAsc = 'ATHLETE_BY_ATHLETE_ID__FULL_LAST_NAME_ASC',
  AthleteByAthleteIdFullLastNameDesc = 'ATHLETE_BY_ATHLETE_ID__FULL_LAST_NAME_DESC',
  AthleteByAthleteIdFullNameAsc = 'ATHLETE_BY_ATHLETE_ID__FULL_NAME_ASC',
  AthleteByAthleteIdFullNameDesc = 'ATHLETE_BY_ATHLETE_ID__FULL_NAME_DESC',
  AthleteByAthleteIdGoldMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__GOLD_MEDALS_ASC',
  AthleteByAthleteIdGoldMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__GOLD_MEDALS_DESC',
  AthleteByAthleteIdIdAsc = 'ATHLETE_BY_ATHLETE_ID__ID_ASC',
  AthleteByAthleteIdIdDesc = 'ATHLETE_BY_ATHLETE_ID__ID_DESC',
  AthleteByAthleteIdOtherNamesAsc = 'ATHLETE_BY_ATHLETE_ID__OTHER_NAMES_ASC',
  AthleteByAthleteIdOtherNamesDesc = 'ATHLETE_BY_ATHLETE_ID__OTHER_NAMES_DESC',
  AthleteByAthleteIdSilverMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__SILVER_MEDALS_ASC',
  AthleteByAthleteIdSilverMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__SILVER_MEDALS_DESC',
  AthleteByAthleteIdSlugAsc = 'ATHLETE_BY_ATHLETE_ID__SLUG_ASC',
  AthleteByAthleteIdSlugDesc = 'ATHLETE_BY_ATHLETE_ID__SLUG_DESC',
  AthleteByAthleteIdTotalMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__TOTAL_MEDALS_ASC',
  AthleteByAthleteIdTotalMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__TOTAL_MEDALS_DESC',
  AthleteByAthleteIdUsedFirstNameAsc = 'ATHLETE_BY_ATHLETE_ID__USED_FIRST_NAME_ASC',
  AthleteByAthleteIdUsedFirstNameDesc = 'ATHLETE_BY_ATHLETE_ID__USED_FIRST_NAME_DESC',
  AthleteByAthleteIdUsedLastNameAsc = 'ATHLETE_BY_ATHLETE_ID__USED_LAST_NAME_ASC',
  AthleteByAthleteIdUsedLastNameDesc = 'ATHLETE_BY_ATHLETE_ID__USED_LAST_NAME_DESC',
  AthleteByAthleteIdUsedNameAsc = 'ATHLETE_BY_ATHLETE_ID__USED_NAME_ASC',
  AthleteByAthleteIdUsedNameDesc = 'ATHLETE_BY_ATHLETE_ID__USED_NAME_DESC',
  AthleteIdAsc = 'ATHLETE_ID_ASC',
  AthleteIdDesc = 'ATHLETE_ID_DESC',
  CountryByCountryIdIdAsc = 'COUNTRY_BY_COUNTRY_ID__ID_ASC',
  CountryByCountryIdIdDesc = 'COUNTRY_BY_COUNTRY_ID__ID_DESC',
  CountryByCountryIdNameAsc = 'COUNTRY_BY_COUNTRY_ID__NAME_ASC',
  CountryByCountryIdNameDesc = 'COUNTRY_BY_COUNTRY_ID__NAME_DESC',
  CountryByCountryIdNocsAsc = 'COUNTRY_BY_COUNTRY_ID__NOCS_ASC',
  CountryByCountryIdNocsDesc = 'COUNTRY_BY_COUNTRY_ID__NOCS_DESC',
  CountryByCountryIdRegionIdAsc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_ASC',
  CountryByCountryIdRegionIdDesc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_DESC',
  CountryByCountryIdSlugAsc = 'COUNTRY_BY_COUNTRY_ID__SLUG_ASC',
  CountryByCountryIdSlugDesc = 'COUNTRY_BY_COUNTRY_ID__SLUG_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  GroupMedalsByMedalIdCountAsc = 'GROUP_MEDALS_BY_MEDAL_ID__COUNT_ASC',
  GroupMedalsByMedalIdCountDesc = 'GROUP_MEDALS_BY_MEDAL_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MedalClassAsc = 'MEDAL_CLASS_ASC',
  MedalClassByMedalClassMedalRankAsc = 'MEDAL_CLASS_BY_MEDAL_CLASS__MEDAL_RANK_ASC',
  MedalClassByMedalClassMedalRankDesc = 'MEDAL_CLASS_BY_MEDAL_CLASS__MEDAL_RANK_DESC',
  MedalClassByMedalClassMedalTypeAsc = 'MEDAL_CLASS_BY_MEDAL_CLASS__MEDAL_TYPE_ASC',
  MedalClassByMedalClassMedalTypeDesc = 'MEDAL_CLASS_BY_MEDAL_CLASS__MEDAL_TYPE_DESC',
  MedalClassDesc = 'MEDAL_CLASS_DESC',
  MedalTeamByMedalTeamIdIdAsc = 'MEDAL_TEAM_BY_MEDAL_TEAM_ID__ID_ASC',
  MedalTeamByMedalTeamIdIdDesc = 'MEDAL_TEAM_BY_MEDAL_TEAM_ID__ID_DESC',
  MedalTeamByMedalTeamIdNameAsc = 'MEDAL_TEAM_BY_MEDAL_TEAM_ID__NAME_ASC',
  MedalTeamByMedalTeamIdNameDesc = 'MEDAL_TEAM_BY_MEDAL_TEAM_ID__NAME_DESC',
  MedalTeamIdAsc = 'MEDAL_TEAM_ID_ASC',
  MedalTeamIdDesc = 'MEDAL_TEAM_ID_DESC',
  MedalTypeAsc = 'MEDAL_TYPE_ASC',
  MedalTypeDesc = 'MEDAL_TYPE_DESC',
  Natural = 'NATURAL',
  OlympiadEventByOlympiadEventIdDatetimeAsc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__DATETIME_ASC',
  OlympiadEventByOlympiadEventIdDatetimeDesc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__DATETIME_DESC',
  OlympiadEventByOlympiadEventIdDateStringAsc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__DATE_STRING_ASC',
  OlympiadEventByOlympiadEventIdDateStringDesc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__DATE_STRING_DESC',
  OlympiadEventByOlympiadEventIdEventIdAsc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__EVENT_ID_ASC',
  OlympiadEventByOlympiadEventIdEventIdDesc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__EVENT_ID_DESC',
  OlympiadEventByOlympiadEventIdIdAsc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__ID_ASC',
  OlympiadEventByOlympiadEventIdIdDesc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__ID_DESC',
  OlympiadEventByOlympiadEventIdOlympiadIdAsc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__OLYMPIAD_ID_ASC',
  OlympiadEventByOlympiadEventIdOlympiadIdDesc = 'OLYMPIAD_EVENT_BY_OLYMPIAD_EVENT_ID__OLYMPIAD_ID_DESC',
  OlympiadEventIdAsc = 'OLYMPIAD_EVENT_ID_ASC',
  OlympiadEventIdDesc = 'OLYMPIAD_EVENT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VerifiedAsc = 'VERIFIED_ASC',
  VerifiedDesc = 'VERIFIED_DESC'
}

export enum Medaltype {
  Bronze = 'BRONZE',
  Gold = 'GOLD',
  Silver = 'SILVER'
}

/** A filter to be used against Medaltype fields. All fields are combined with a logical ‘and.’ */
export type MedaltypeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Medaltype>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Medaltype>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Medaltype>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Medaltype>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Medaltype>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Medaltype>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Medaltype>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Medaltype>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Medaltype>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Medaltype>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  authenticate?: Maybe<AuthenticatePayload>;
  /** Creates a single `Athlete`. */
  createAthlete?: Maybe<CreateAthletePayload>;
  /** Creates a single `City`. */
  createCity?: Maybe<CreateCityPayload>;
  /** Creates a single `Country`. */
  createCountry?: Maybe<CreateCountryPayload>;
  /** Creates a single `Event`. */
  createEvent?: Maybe<CreateEventPayload>;
  /** Creates a single `Flag`. */
  createFlag?: Maybe<CreateFlagPayload>;
  /** Creates a single `Group`. */
  createGroup?: Maybe<CreateGroupPayload>;
  /** Creates a single `GroupMedal`. */
  createGroupMedal?: Maybe<CreateGroupMedalPayload>;
  /** Creates a single `GroupOlympiad`. */
  createGroupOlympiad?: Maybe<CreateGroupOlympiadPayload>;
  /** Creates a single `GroupOlympiadCountry`. */
  createGroupOlympiadCountry?: Maybe<CreateGroupOlympiadCountryPayload>;
  createGroupOlympiadGame?: Maybe<Scalars['Boolean']['output']>;
  /** Creates a single `GroupOlympiadPlayer`. */
  createGroupOlympiadPlayer?: Maybe<CreateGroupOlympiadPlayerPayload>;
  /** Creates a single `GroupPlayer`. */
  createGroupPlayer?: Maybe<CreateGroupPlayerPayload>;
  /** Creates a single `Medal`. */
  createMedal?: Maybe<CreateMedalPayload>;
  /** Creates a single `MedalClass`. */
  createMedalClass?: Maybe<CreateMedalClassPayload>;
  /** Creates a single `MedalTeam`. */
  createMedalTeam?: Maybe<CreateMedalTeamPayload>;
  /** Creates a single `Olympiad`. */
  createOlympiad?: Maybe<CreateOlympiadPayload>;
  /** Creates a single `OlympiadAthlete`. */
  createOlympiadAthlete?: Maybe<CreateOlympiadAthletePayload>;
  /** Creates a single `OlympiadCountry`. */
  createOlympiadCountry?: Maybe<CreateOlympiadCountryPayload>;
  /** Creates a single `OlympiadEvent`. */
  createOlympiadEvent?: Maybe<CreateOlympiadEventPayload>;
  /** Creates a single `OlympiadRegionSetting`. */
  createOlympiadRegionSetting?: Maybe<CreateOlympiadRegionSettingPayload>;
  /** Creates a single `OlympiadSport`. */
  createOlympiadSport?: Maybe<CreateOlympiadSportPayload>;
  /** Creates a single `Player`. */
  createPlayer?: Maybe<CreatePlayerPayload>;
  /** Creates a single `Region`. */
  createRegion?: Maybe<CreateRegionPayload>;
  /** Creates a single `Sport`. */
  createSport?: Maybe<CreateSportPayload>;
  /** Deletes a single `Athlete` using a unique key. */
  deleteAthlete?: Maybe<DeleteAthletePayload>;
  /** Deletes a single `Athlete` using its globally unique id. */
  deleteAthleteByNodeId?: Maybe<DeleteAthletePayload>;
  /** Deletes a single `Athlete` using a unique key. */
  deleteAthleteBySlug?: Maybe<DeleteAthletePayload>;
  /** Deletes a single `City` using a unique key. */
  deleteCity?: Maybe<DeleteCityPayload>;
  /** Deletes a single `City` using its globally unique id. */
  deleteCityByNodeId?: Maybe<DeleteCityPayload>;
  /** Deletes a single `City` using a unique key. */
  deleteCityBySlug?: Maybe<DeleteCityPayload>;
  /** Deletes a single `Country` using a unique key. */
  deleteCountry?: Maybe<DeleteCountryPayload>;
  /** Deletes a single `Country` using its globally unique id. */
  deleteCountryByNodeId?: Maybe<DeleteCountryPayload>;
  /** Deletes a single `Country` using a unique key. */
  deleteCountryBySlug?: Maybe<DeleteCountryPayload>;
  /** Deletes a single `Event` using a unique key. */
  deleteEvent?: Maybe<DeleteEventPayload>;
  /** Deletes a single `Event` using a unique key. */
  deleteEventByFullSlug?: Maybe<DeleteEventPayload>;
  /** Deletes a single `Event` using its globally unique id. */
  deleteEventByNodeId?: Maybe<DeleteEventPayload>;
  /** Deletes a single `Flag` using a unique key. */
  deleteFlag?: Maybe<DeleteFlagPayload>;
  /** Deletes a single `Flag` using its globally unique id. */
  deleteFlagByNodeId?: Maybe<DeleteFlagPayload>;
  /** Deletes a single `Group` using a unique key. */
  deleteGroup?: Maybe<DeleteGroupPayload>;
  /** Deletes a single `Group` using a unique key. */
  deleteGroupByName?: Maybe<DeleteGroupPayload>;
  /** Deletes a single `Group` using its globally unique id. */
  deleteGroupByNodeId?: Maybe<DeleteGroupPayload>;
  /** Deletes a single `GroupMedal` using a unique key. */
  deleteGroupMedal?: Maybe<DeleteGroupMedalPayload>;
  /** Deletes a single `GroupMedal` using its globally unique id. */
  deleteGroupMedalByNodeId?: Maybe<DeleteGroupMedalPayload>;
  /** Deletes a single `GroupOlympiad` using a unique key. */
  deleteGroupOlympiad?: Maybe<DeleteGroupOlympiadPayload>;
  /** Deletes a single `GroupOlympiad` using its globally unique id. */
  deleteGroupOlympiadByNodeId?: Maybe<DeleteGroupOlympiadPayload>;
  /** Deletes a single `GroupOlympiadCountry` using a unique key. */
  deleteGroupOlympiadCountry?: Maybe<DeleteGroupOlympiadCountryPayload>;
  /** Deletes a single `GroupOlympiadCountry` using its globally unique id. */
  deleteGroupOlympiadCountryByNodeId?: Maybe<DeleteGroupOlympiadCountryPayload>;
  /** Deletes a single `GroupOlympiadPlayer` using a unique key. */
  deleteGroupOlympiadPlayer?: Maybe<DeleteGroupOlympiadPlayerPayload>;
  /** Deletes a single `GroupOlympiadPlayer` using its globally unique id. */
  deleteGroupOlympiadPlayerByNodeId?: Maybe<DeleteGroupOlympiadPlayerPayload>;
  /** Deletes a single `GroupPlayer` using a unique key. */
  deleteGroupPlayer?: Maybe<DeleteGroupPlayerPayload>;
  /** Deletes a single `GroupPlayer` using its globally unique id. */
  deleteGroupPlayerByNodeId?: Maybe<DeleteGroupPlayerPayload>;
  /** Deletes a single `Medal` using a unique key. */
  deleteMedal?: Maybe<DeleteMedalPayload>;
  /** Deletes a single `Medal` using its globally unique id. */
  deleteMedalByNodeId?: Maybe<DeleteMedalPayload>;
  /** Deletes a single `MedalClass` using a unique key. */
  deleteMedalClass?: Maybe<DeleteMedalClassPayload>;
  /** Deletes a single `MedalClass` using its globally unique id. */
  deleteMedalClassByNodeId?: Maybe<DeleteMedalClassPayload>;
  /** Deletes a single `MedalTeam` using a unique key. */
  deleteMedalTeam?: Maybe<DeleteMedalTeamPayload>;
  /** Deletes a single `MedalTeam` using its globally unique id. */
  deleteMedalTeamByNodeId?: Maybe<DeleteMedalTeamPayload>;
  /** Deletes a single `Olympiad` using a unique key. */
  deleteOlympiad?: Maybe<DeleteOlympiadPayload>;
  /** Deletes a single `OlympiadAthlete` using a unique key. */
  deleteOlympiadAthlete?: Maybe<DeleteOlympiadAthletePayload>;
  /** Deletes a single `OlympiadAthlete` using its globally unique id. */
  deleteOlympiadAthleteByNodeId?: Maybe<DeleteOlympiadAthletePayload>;
  /** Deletes a single `Olympiad` using its globally unique id. */
  deleteOlympiadByNodeId?: Maybe<DeleteOlympiadPayload>;
  /** Deletes a single `Olympiad` using a unique key. */
  deleteOlympiadBySlug?: Maybe<DeleteOlympiadPayload>;
  /** Deletes a single `OlympiadCountry` using a unique key. */
  deleteOlympiadCountry?: Maybe<DeleteOlympiadCountryPayload>;
  /** Deletes a single `OlympiadCountry` using its globally unique id. */
  deleteOlympiadCountryByNodeId?: Maybe<DeleteOlympiadCountryPayload>;
  /** Deletes a single `OlympiadEvent` using a unique key. */
  deleteOlympiadEvent?: Maybe<DeleteOlympiadEventPayload>;
  /** Deletes a single `OlympiadEvent` using its globally unique id. */
  deleteOlympiadEventByNodeId?: Maybe<DeleteOlympiadEventPayload>;
  /** Deletes a single `OlympiadRegionSetting` using a unique key. */
  deleteOlympiadRegionSetting?: Maybe<DeleteOlympiadRegionSettingPayload>;
  /** Deletes a single `OlympiadRegionSetting` using its globally unique id. */
  deleteOlympiadRegionSettingByNodeId?: Maybe<DeleteOlympiadRegionSettingPayload>;
  /** Deletes a single `OlympiadSport` using a unique key. */
  deleteOlympiadSport?: Maybe<DeleteOlympiadSportPayload>;
  /** Deletes a single `OlympiadSport` using its globally unique id. */
  deleteOlympiadSportByNodeId?: Maybe<DeleteOlympiadSportPayload>;
  /** Deletes a single `Player` using a unique key. */
  deletePlayer?: Maybe<DeletePlayerPayload>;
  /** Deletes a single `Player` using its globally unique id. */
  deletePlayerByNodeId?: Maybe<DeletePlayerPayload>;
  /** Deletes a single `Player` using a unique key. */
  deletePlayerBySlug?: Maybe<DeletePlayerPayload>;
  /** Deletes a single `Player` using a unique key. */
  deletePlayerByUsername?: Maybe<DeletePlayerPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegion?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegionByName?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using its globally unique id. */
  deleteRegionByNodeId?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegionBySlug?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Sport` using a unique key. */
  deleteSport?: Maybe<DeleteSportPayload>;
  /** Deletes a single `Sport` using a unique key. */
  deleteSportByName?: Maybe<DeleteSportPayload>;
  /** Deletes a single `Sport` using its globally unique id. */
  deleteSportByNodeId?: Maybe<DeleteSportPayload>;
  /** Deletes a single `Sport` using a unique key. */
  deleteSportBySlug?: Maybe<DeleteSportPayload>;
  /** Deletes a single `UserAuthenticator` using a unique key. */
  deleteUserAuthenticator?: Maybe<DeleteUserAuthenticatorPayload>;
  /** Deletes a single `UserAuthenticator` using its globally unique id. */
  deleteUserAuthenticatorByNodeId?: Maybe<DeleteUserAuthenticatorPayload>;
  draftCountry?: Maybe<DraftCountryPayload>;
  draftCountryAndResetClock?: Maybe<Scalars['Boolean']['output']>;
  forceAutodraft?: Maybe<ForceAutodraftPayload>;
  inviteUser?: Maybe<InvitationPayload>;
  lockDraft?: Maybe<Scalars['Boolean']['output']>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  makeCommissioner?: Maybe<Scalars['Boolean']['output']>;
  /** Registers a single user and creates an account. */
  registerPlayer?: Maybe<RegisterPlayerPayload>;
  requestPasswordReset?: Maybe<RequestPayload>;
  resetDraft?: Maybe<ResetDraftPayload>;
  resetPassword?: Maybe<ResetPayload>;
  scoreGroupOlympiad?: Maybe<ScoringPayload>;
  scoreOlympiad?: Maybe<ScoringPayload>;
  startDraft?: Maybe<StartDraftPayload>;
  toggleDraft?: Maybe<ToggleDraftPayload>;
  /** Updates a single `Athlete` using a unique key and a patch. */
  updateAthlete?: Maybe<UpdateAthletePayload>;
  /** Updates a single `Athlete` using its globally unique id and a patch. */
  updateAthleteByNodeId?: Maybe<UpdateAthletePayload>;
  /** Updates a single `Athlete` using a unique key and a patch. */
  updateAthleteBySlug?: Maybe<UpdateAthletePayload>;
  /** Updates a single `City` using a unique key and a patch. */
  updateCity?: Maybe<UpdateCityPayload>;
  /** Updates a single `City` using its globally unique id and a patch. */
  updateCityByNodeId?: Maybe<UpdateCityPayload>;
  /** Updates a single `City` using a unique key and a patch. */
  updateCityBySlug?: Maybe<UpdateCityPayload>;
  /** Updates a single `Country` using a unique key and a patch. */
  updateCountry?: Maybe<UpdateCountryPayload>;
  /** Updates a single `Country` using its globally unique id and a patch. */
  updateCountryByNodeId?: Maybe<UpdateCountryPayload>;
  /** Updates a single `Country` using a unique key and a patch. */
  updateCountryBySlug?: Maybe<UpdateCountryPayload>;
  /** Updates a single `Event` using a unique key and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>;
  /** Updates a single `Event` using a unique key and a patch. */
  updateEventByFullSlug?: Maybe<UpdateEventPayload>;
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEventByNodeId?: Maybe<UpdateEventPayload>;
  /** Updates a single `Flag` using a unique key and a patch. */
  updateFlag?: Maybe<UpdateFlagPayload>;
  /** Updates a single `Flag` using its globally unique id and a patch. */
  updateFlagByNodeId?: Maybe<UpdateFlagPayload>;
  /** Updates a single `Group` using a unique key and a patch. */
  updateGroup?: Maybe<UpdateGroupPayload>;
  /** Updates a single `Group` using a unique key and a patch. */
  updateGroupByName?: Maybe<UpdateGroupPayload>;
  /** Updates a single `Group` using its globally unique id and a patch. */
  updateGroupByNodeId?: Maybe<UpdateGroupPayload>;
  /** Updates a single `GroupMedal` using a unique key and a patch. */
  updateGroupMedal?: Maybe<UpdateGroupMedalPayload>;
  /** Updates a single `GroupMedal` using its globally unique id and a patch. */
  updateGroupMedalByNodeId?: Maybe<UpdateGroupMedalPayload>;
  /** Updates a single `GroupOlympiad` using a unique key and a patch. */
  updateGroupOlympiad?: Maybe<UpdateGroupOlympiadPayload>;
  /** Updates a single `GroupOlympiad` using its globally unique id and a patch. */
  updateGroupOlympiadByNodeId?: Maybe<UpdateGroupOlympiadPayload>;
  /** Updates a single `GroupOlympiadCountry` using a unique key and a patch. */
  updateGroupOlympiadCountry?: Maybe<UpdateGroupOlympiadCountryPayload>;
  /** Updates a single `GroupOlympiadCountry` using its globally unique id and a patch. */
  updateGroupOlympiadCountryByNodeId?: Maybe<UpdateGroupOlympiadCountryPayload>;
  /** Updates a single `GroupOlympiadPlayer` using a unique key and a patch. */
  updateGroupOlympiadPlayer?: Maybe<UpdateGroupOlympiadPlayerPayload>;
  /** Updates a single `GroupOlympiadPlayer` using its globally unique id and a patch. */
  updateGroupOlympiadPlayerByNodeId?: Maybe<UpdateGroupOlympiadPlayerPayload>;
  /** Updates a single `GroupPlayer` using a unique key and a patch. */
  updateGroupPlayer?: Maybe<UpdateGroupPlayerPayload>;
  /** Updates a single `GroupPlayer` using its globally unique id and a patch. */
  updateGroupPlayerByNodeId?: Maybe<UpdateGroupPlayerPayload>;
  /** Updates a single `Medal` using a unique key and a patch. */
  updateMedal?: Maybe<UpdateMedalPayload>;
  /** Updates a single `Medal` using its globally unique id and a patch. */
  updateMedalByNodeId?: Maybe<UpdateMedalPayload>;
  /** Updates a single `MedalClass` using a unique key and a patch. */
  updateMedalClass?: Maybe<UpdateMedalClassPayload>;
  /** Updates a single `MedalClass` using its globally unique id and a patch. */
  updateMedalClassByNodeId?: Maybe<UpdateMedalClassPayload>;
  /** Updates a single `MedalTeam` using a unique key and a patch. */
  updateMedalTeam?: Maybe<UpdateMedalTeamPayload>;
  /** Updates a single `MedalTeam` using its globally unique id and a patch. */
  updateMedalTeamByNodeId?: Maybe<UpdateMedalTeamPayload>;
  /** Updates a single `Olympiad` using a unique key and a patch. */
  updateOlympiad?: Maybe<UpdateOlympiadPayload>;
  /** Updates a single `OlympiadAthlete` using a unique key and a patch. */
  updateOlympiadAthlete?: Maybe<UpdateOlympiadAthletePayload>;
  /** Updates a single `OlympiadAthlete` using its globally unique id and a patch. */
  updateOlympiadAthleteByNodeId?: Maybe<UpdateOlympiadAthletePayload>;
  /** Updates a single `Olympiad` using its globally unique id and a patch. */
  updateOlympiadByNodeId?: Maybe<UpdateOlympiadPayload>;
  /** Updates a single `Olympiad` using a unique key and a patch. */
  updateOlympiadBySlug?: Maybe<UpdateOlympiadPayload>;
  /** Updates a single `OlympiadCountry` using a unique key and a patch. */
  updateOlympiadCountry?: Maybe<UpdateOlympiadCountryPayload>;
  /** Updates a single `OlympiadCountry` using its globally unique id and a patch. */
  updateOlympiadCountryByNodeId?: Maybe<UpdateOlympiadCountryPayload>;
  /** Updates a single `OlympiadEvent` using a unique key and a patch. */
  updateOlympiadEvent?: Maybe<UpdateOlympiadEventPayload>;
  /** Updates a single `OlympiadEvent` using its globally unique id and a patch. */
  updateOlympiadEventByNodeId?: Maybe<UpdateOlympiadEventPayload>;
  /** Updates a single `OlympiadRegionSetting` using a unique key and a patch. */
  updateOlympiadRegionSetting?: Maybe<UpdateOlympiadRegionSettingPayload>;
  /** Updates a single `OlympiadRegionSetting` using its globally unique id and a patch. */
  updateOlympiadRegionSettingByNodeId?: Maybe<UpdateOlympiadRegionSettingPayload>;
  /** Updates a single `OlympiadSport` using a unique key and a patch. */
  updateOlympiadSport?: Maybe<UpdateOlympiadSportPayload>;
  /** Updates a single `OlympiadSport` using its globally unique id and a patch. */
  updateOlympiadSportByNodeId?: Maybe<UpdateOlympiadSportPayload>;
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayer?: Maybe<UpdatePlayerPayload>;
  /** Updates a single `Player` using its globally unique id and a patch. */
  updatePlayerByNodeId?: Maybe<UpdatePlayerPayload>;
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerBySlug?: Maybe<UpdatePlayerPayload>;
  /** Updates a single `Player` using a unique key and a patch. */
  updatePlayerByUsername?: Maybe<UpdatePlayerPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegion?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegionByName?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using its globally unique id and a patch. */
  updateRegionByNodeId?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegionBySlug?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Sport` using a unique key and a patch. */
  updateSport?: Maybe<UpdateSportPayload>;
  /** Updates a single `Sport` using a unique key and a patch. */
  updateSportByName?: Maybe<UpdateSportPayload>;
  /** Updates a single `Sport` using its globally unique id and a patch. */
  updateSportByNodeId?: Maybe<UpdateSportPayload>;
  /** Updates a single `Sport` using a unique key and a patch. */
  updateSportBySlug?: Maybe<UpdateSportPayload>;
  upsertGroupMedal?: Maybe<UpsertGroupMedalPayload>;
  verifyInvite?: Maybe<InvitationPayload>;
  verifyLoggedInInvite?: Maybe<InvitationPayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAthleteArgs = {
  input: CreateAthleteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCityArgs = {
  input: CreateCityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFlagArgs = {
  input: CreateFlagInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroupMedalArgs = {
  input: CreateGroupMedalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroupOlympiadArgs = {
  input: CreateGroupOlympiadInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroupOlympiadCountryArgs = {
  input: CreateGroupOlympiadCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroupOlympiadGameArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroupOlympiadPlayerArgs = {
  input: CreateGroupOlympiadPlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGroupPlayerArgs = {
  input: CreateGroupPlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMedalArgs = {
  input: CreateMedalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMedalClassArgs = {
  input: CreateMedalClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMedalTeamArgs = {
  input: CreateMedalTeamInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadArgs = {
  input: CreateOlympiadInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadAthleteArgs = {
  input: CreateOlympiadAthleteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadCountryArgs = {
  input: CreateOlympiadCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadEventArgs = {
  input: CreateOlympiadEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadRegionSettingArgs = {
  input: CreateOlympiadRegionSettingInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadSportArgs = {
  input: CreateOlympiadSportInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePlayerArgs = {
  input: CreatePlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRegionArgs = {
  input: CreateRegionInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSportArgs = {
  input: CreateSportInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAthleteArgs = {
  input: DeleteAthleteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAthleteByNodeIdArgs = {
  input: DeleteAthleteByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAthleteBySlugArgs = {
  input: DeleteAthleteBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityArgs = {
  input: DeleteCityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityByNodeIdArgs = {
  input: DeleteCityByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityBySlugArgs = {
  input: DeleteCityBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryArgs = {
  input: DeleteCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryByNodeIdArgs = {
  input: DeleteCountryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryBySlugArgs = {
  input: DeleteCountryBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventArgs = {
  input: DeleteEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByFullSlugArgs = {
  input: DeleteEventByFullSlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByNodeIdArgs = {
  input: DeleteEventByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlagArgs = {
  input: DeleteFlagInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlagByNodeIdArgs = {
  input: DeleteFlagByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupArgs = {
  input: DeleteGroupInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupByNameArgs = {
  input: DeleteGroupByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupByNodeIdArgs = {
  input: DeleteGroupByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupMedalArgs = {
  input: DeleteGroupMedalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupMedalByNodeIdArgs = {
  input: DeleteGroupMedalByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupOlympiadArgs = {
  input: DeleteGroupOlympiadInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupOlympiadByNodeIdArgs = {
  input: DeleteGroupOlympiadByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupOlympiadCountryArgs = {
  input: DeleteGroupOlympiadCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupOlympiadCountryByNodeIdArgs = {
  input: DeleteGroupOlympiadCountryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupOlympiadPlayerArgs = {
  input: DeleteGroupOlympiadPlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupOlympiadPlayerByNodeIdArgs = {
  input: DeleteGroupOlympiadPlayerByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupPlayerArgs = {
  input: DeleteGroupPlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupPlayerByNodeIdArgs = {
  input: DeleteGroupPlayerByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMedalArgs = {
  input: DeleteMedalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMedalByNodeIdArgs = {
  input: DeleteMedalByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMedalClassArgs = {
  input: DeleteMedalClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMedalClassByNodeIdArgs = {
  input: DeleteMedalClassByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMedalTeamArgs = {
  input: DeleteMedalTeamInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMedalTeamByNodeIdArgs = {
  input: DeleteMedalTeamByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadArgs = {
  input: DeleteOlympiadInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadAthleteArgs = {
  input: DeleteOlympiadAthleteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadAthleteByNodeIdArgs = {
  input: DeleteOlympiadAthleteByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadByNodeIdArgs = {
  input: DeleteOlympiadByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadBySlugArgs = {
  input: DeleteOlympiadBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadCountryArgs = {
  input: DeleteOlympiadCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadCountryByNodeIdArgs = {
  input: DeleteOlympiadCountryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadEventArgs = {
  input: DeleteOlympiadEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadEventByNodeIdArgs = {
  input: DeleteOlympiadEventByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadRegionSettingArgs = {
  input: DeleteOlympiadRegionSettingInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadRegionSettingByNodeIdArgs = {
  input: DeleteOlympiadRegionSettingByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadSportArgs = {
  input: DeleteOlympiadSportInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadSportByNodeIdArgs = {
  input: DeleteOlympiadSportByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerArgs = {
  input: DeletePlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerByNodeIdArgs = {
  input: DeletePlayerByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerBySlugArgs = {
  input: DeletePlayerBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlayerByUsernameArgs = {
  input: DeletePlayerByUsernameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionArgs = {
  input: DeleteRegionInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionByNameArgs = {
  input: DeleteRegionByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionByNodeIdArgs = {
  input: DeleteRegionByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionBySlugArgs = {
  input: DeleteRegionBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSportArgs = {
  input: DeleteSportInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSportByNameArgs = {
  input: DeleteSportByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSportByNodeIdArgs = {
  input: DeleteSportByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSportBySlugArgs = {
  input: DeleteSportBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAuthenticatorArgs = {
  input: DeleteUserAuthenticatorInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAuthenticatorByNodeIdArgs = {
  input: DeleteUserAuthenticatorByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDraftCountryArgs = {
  input: DraftCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDraftCountryAndResetClockArgs = {
  countryId: Scalars['UUID']['input'];
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationForceAutodraftArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationInviteUserArgs = {
  email: Scalars['String']['input'];
  groupId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationLockDraftArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationMakeCommissionerArgs = {
  isCommissioner: Scalars['Boolean']['input'];
  playerId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterPlayerArgs = {
  input: RegisterPlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationResetDraftArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  resetKey: Scalars['String']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationScoreGroupOlympiadArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationScoreOlympiadArgs = {
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationStartDraftArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationToggleDraftArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAthleteArgs = {
  input: UpdateAthleteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAthleteByNodeIdArgs = {
  input: UpdateAthleteByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAthleteBySlugArgs = {
  input: UpdateAthleteBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityArgs = {
  input: UpdateCityInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityByNodeIdArgs = {
  input: UpdateCityByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityBySlugArgs = {
  input: UpdateCityBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryByNodeIdArgs = {
  input: UpdateCountryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryBySlugArgs = {
  input: UpdateCountryBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByFullSlugArgs = {
  input: UpdateEventByFullSlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByNodeIdArgs = {
  input: UpdateEventByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlagArgs = {
  input: UpdateFlagInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlagByNodeIdArgs = {
  input: UpdateFlagByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupByNameArgs = {
  input: UpdateGroupByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupByNodeIdArgs = {
  input: UpdateGroupByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupMedalArgs = {
  input: UpdateGroupMedalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupMedalByNodeIdArgs = {
  input: UpdateGroupMedalByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupOlympiadArgs = {
  input: UpdateGroupOlympiadInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupOlympiadByNodeIdArgs = {
  input: UpdateGroupOlympiadByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupOlympiadCountryArgs = {
  input: UpdateGroupOlympiadCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupOlympiadCountryByNodeIdArgs = {
  input: UpdateGroupOlympiadCountryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupOlympiadPlayerArgs = {
  input: UpdateGroupOlympiadPlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupOlympiadPlayerByNodeIdArgs = {
  input: UpdateGroupOlympiadPlayerByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupPlayerArgs = {
  input: UpdateGroupPlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupPlayerByNodeIdArgs = {
  input: UpdateGroupPlayerByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMedalArgs = {
  input: UpdateMedalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMedalByNodeIdArgs = {
  input: UpdateMedalByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMedalClassArgs = {
  input: UpdateMedalClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMedalClassByNodeIdArgs = {
  input: UpdateMedalClassByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMedalTeamArgs = {
  input: UpdateMedalTeamInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMedalTeamByNodeIdArgs = {
  input: UpdateMedalTeamByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadArgs = {
  input: UpdateOlympiadInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadAthleteArgs = {
  input: UpdateOlympiadAthleteInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadAthleteByNodeIdArgs = {
  input: UpdateOlympiadAthleteByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadByNodeIdArgs = {
  input: UpdateOlympiadByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadBySlugArgs = {
  input: UpdateOlympiadBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadCountryArgs = {
  input: UpdateOlympiadCountryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadCountryByNodeIdArgs = {
  input: UpdateOlympiadCountryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadEventArgs = {
  input: UpdateOlympiadEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadEventByNodeIdArgs = {
  input: UpdateOlympiadEventByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadRegionSettingArgs = {
  input: UpdateOlympiadRegionSettingInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadRegionSettingByNodeIdArgs = {
  input: UpdateOlympiadRegionSettingByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadSportArgs = {
  input: UpdateOlympiadSportInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadSportByNodeIdArgs = {
  input: UpdateOlympiadSportByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerArgs = {
  input: UpdatePlayerInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerByNodeIdArgs = {
  input: UpdatePlayerByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerBySlugArgs = {
  input: UpdatePlayerBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlayerByUsernameArgs = {
  input: UpdatePlayerByUsernameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionArgs = {
  input: UpdateRegionInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionByNameArgs = {
  input: UpdateRegionByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionByNodeIdArgs = {
  input: UpdateRegionByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionBySlugArgs = {
  input: UpdateRegionBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSportArgs = {
  input: UpdateSportInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSportByNameArgs = {
  input: UpdateSportByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSportByNodeIdArgs = {
  input: UpdateSportByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSportBySlugArgs = {
  input: UpdateSportBySlugInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertGroupMedalArgs = {
  input: UpsertGroupMedalInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationVerifyInviteArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  groupId: Scalars['UUID']['input'];
  password: Scalars['String']['input'];
  playerId: Scalars['UUID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationVerifyLoggedInInviteArgs = {
  code: Scalars['String']['input'];
  groupId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Olympiads that have existed. */
export type Olympiad = Node & {
  __typename?: 'Olympiad';
  /** Reads a single `City` that is related to this `Olympiad`. */
  city?: Maybe<City>;
  /** The foreign key from the city that hosted the olympiad. */
  cityId?: Maybe<Scalars['UUID']['output']>;
  dates?: Maybe<DatetimeRange>;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiads: GroupOlympiadsConnection;
  /** The primary key for the olympiad. */
  id: Scalars['UUID']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `OlympiadAthlete`. */
  olympiadAthletes: OlympiadAthletesConnection;
  /** Reads and enables pagination through a set of `OlympiadCountry`. */
  olympiadCountries: OlympiadCountriesConnection;
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  olympiadEvents: OlympiadEventsConnection;
  /** Reads and enables pagination through a set of `OlympiadRegionSetting`. */
  olympiadRegionSettings: OlympiadRegionSettingsConnection;
  /** Reads and enables pagination through a set of `OlympiadSport`. */
  olympiadSports: OlympiadSportsConnection;
  /** Whether the Olympiad was summer or winter. */
  olympiadType?: Maybe<Olympiadtype>;
  randomMedal?: Maybe<Medal>;
  realOlympiad: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Sport`. */
  sports: SportsConnection;
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  upcomingEvents: OlympiadEventsConnection;
  /** The year the Olympiad took place. */
  year: Scalars['Int']['output'];
};

/** Olympiads that have existed. */
export type OlympiadGroupOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

/** Olympiads that have existed. */
export type OlympiadOlympiadAthletesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadAthleteCondition>;
  filter?: InputMaybe<OlympiadAthleteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadAthletesOrderBy>>;
};

/** Olympiads that have existed. */
export type OlympiadOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

/** Olympiads that have existed. */
export type OlympiadOlympiadEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadEventCondition>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};

/** Olympiads that have existed. */
export type OlympiadOlympiadRegionSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadRegionSettingCondition>;
  filter?: InputMaybe<OlympiadRegionSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};

/** Olympiads that have existed. */
export type OlympiadOlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadSportCondition>;
  filter?: InputMaybe<OlympiadSportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};

/** Olympiads that have existed. */
export type OlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Olympiads that have existed. */
export type OlympiadUpcomingEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type OlympiadAthlete = Node & {
  __typename?: 'OlympiadAthlete';
  /** Reads a single `Athlete` that is related to this `OlympiadAthlete`. */
  athlete?: Maybe<Athlete>;
  athleteId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Olympiad` that is related to this `OlympiadAthlete`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID']['output'];
};

export type OlympiadAthleteMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * A condition to be used against `OlympiadAthlete` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OlympiadAthleteCondition = {
  /** Checks for equality with the object’s `athleteId` field. */
  athleteId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `OlympiadAthlete` object types. All fields are combined with a logical ‘and.’ */
export type OlympiadAthleteFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OlympiadAthleteFilter>>;
  /** Filter by the object’s `athleteId` field. */
  athleteId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OlympiadAthleteFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OlympiadAthleteFilter>>;
};

/** An input for mutations affecting `OlympiadAthlete` */
export type OlympiadAthleteInput = {
  athleteId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** Represents an update to a `OlympiadAthlete`. Fields that are set will be updated. */
export type OlympiadAthletePatch = {
  athleteId?: InputMaybe<Scalars['UUID']['input']>;
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `OlympiadAthlete` values. */
export type OlympiadAthletesConnection = {
  __typename?: 'OlympiadAthletesConnection';
  /** A list of edges which contains the `OlympiadAthlete` and cursor to aid in pagination. */
  edges: Array<OlympiadAthletesEdge>;
  /** A list of `OlympiadAthlete` objects. */
  nodes: Array<Maybe<OlympiadAthlete>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OlympiadAthlete` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `OlympiadAthlete` edge in the connection. */
export type OlympiadAthletesEdge = {
  __typename?: 'OlympiadAthletesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `OlympiadAthlete` at the end of the edge. */
  node?: Maybe<OlympiadAthlete>;
};

/** Methods to use when ordering `OlympiadAthlete`. */
export enum OlympiadAthletesOrderBy {
  AthleteByAthleteIdBronzeMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__BRONZE_MEDALS_ASC',
  AthleteByAthleteIdBronzeMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__BRONZE_MEDALS_DESC',
  AthleteByAthleteIdFullFirstNameAsc = 'ATHLETE_BY_ATHLETE_ID__FULL_FIRST_NAME_ASC',
  AthleteByAthleteIdFullFirstNameDesc = 'ATHLETE_BY_ATHLETE_ID__FULL_FIRST_NAME_DESC',
  AthleteByAthleteIdFullLastNameAsc = 'ATHLETE_BY_ATHLETE_ID__FULL_LAST_NAME_ASC',
  AthleteByAthleteIdFullLastNameDesc = 'ATHLETE_BY_ATHLETE_ID__FULL_LAST_NAME_DESC',
  AthleteByAthleteIdFullNameAsc = 'ATHLETE_BY_ATHLETE_ID__FULL_NAME_ASC',
  AthleteByAthleteIdFullNameDesc = 'ATHLETE_BY_ATHLETE_ID__FULL_NAME_DESC',
  AthleteByAthleteIdGoldMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__GOLD_MEDALS_ASC',
  AthleteByAthleteIdGoldMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__GOLD_MEDALS_DESC',
  AthleteByAthleteIdIdAsc = 'ATHLETE_BY_ATHLETE_ID__ID_ASC',
  AthleteByAthleteIdIdDesc = 'ATHLETE_BY_ATHLETE_ID__ID_DESC',
  AthleteByAthleteIdOtherNamesAsc = 'ATHLETE_BY_ATHLETE_ID__OTHER_NAMES_ASC',
  AthleteByAthleteIdOtherNamesDesc = 'ATHLETE_BY_ATHLETE_ID__OTHER_NAMES_DESC',
  AthleteByAthleteIdSilverMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__SILVER_MEDALS_ASC',
  AthleteByAthleteIdSilverMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__SILVER_MEDALS_DESC',
  AthleteByAthleteIdSlugAsc = 'ATHLETE_BY_ATHLETE_ID__SLUG_ASC',
  AthleteByAthleteIdSlugDesc = 'ATHLETE_BY_ATHLETE_ID__SLUG_DESC',
  AthleteByAthleteIdTotalMedalsAsc = 'ATHLETE_BY_ATHLETE_ID__TOTAL_MEDALS_ASC',
  AthleteByAthleteIdTotalMedalsDesc = 'ATHLETE_BY_ATHLETE_ID__TOTAL_MEDALS_DESC',
  AthleteByAthleteIdUsedFirstNameAsc = 'ATHLETE_BY_ATHLETE_ID__USED_FIRST_NAME_ASC',
  AthleteByAthleteIdUsedFirstNameDesc = 'ATHLETE_BY_ATHLETE_ID__USED_FIRST_NAME_DESC',
  AthleteByAthleteIdUsedLastNameAsc = 'ATHLETE_BY_ATHLETE_ID__USED_LAST_NAME_ASC',
  AthleteByAthleteIdUsedLastNameDesc = 'ATHLETE_BY_ATHLETE_ID__USED_LAST_NAME_DESC',
  AthleteByAthleteIdUsedNameAsc = 'ATHLETE_BY_ATHLETE_ID__USED_NAME_ASC',
  AthleteByAthleteIdUsedNameDesc = 'ATHLETE_BY_ATHLETE_ID__USED_NAME_DESC',
  AthleteIdAsc = 'ATHLETE_ID_ASC',
  AthleteIdDesc = 'ATHLETE_ID_DESC',
  Natural = 'NATURAL',
  OlympiadByOlympiadIdCityIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_ASC',
  OlympiadByOlympiadIdCityIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_DESC',
  OlympiadByOlympiadIdDatesAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_ASC',
  OlympiadByOlympiadIdDatesDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_DESC',
  OlympiadByOlympiadIdIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_ASC',
  OlympiadByOlympiadIdIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_DESC',
  OlympiadByOlympiadIdOlympiadTypeAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_ASC',
  OlympiadByOlympiadIdOlympiadTypeDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_DESC',
  OlympiadByOlympiadIdRealOlympiadAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_ASC',
  OlympiadByOlympiadIdRealOlympiadDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_DESC',
  OlympiadByOlympiadIdSlugAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_ASC',
  OlympiadByOlympiadIdSlugDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_DESC',
  OlympiadByOlympiadIdYearAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_ASC',
  OlympiadByOlympiadIdYearDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_DESC',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `Olympiad` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type OlympiadCondition = {
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `dates` field. */
  dates?: InputMaybe<DatetimeRangeInput>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `olympiadType` field. */
  olympiadType?: InputMaybe<Olympiadtype>;
  /** Checks for equality with the object’s `realOlympiad` field. */
  realOlympiad?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `year` field. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `OlympiadCountry` values. */
export type OlympiadCountriesConnection = {
  __typename?: 'OlympiadCountriesConnection';
  /** A list of edges which contains the `OlympiadCountry` and cursor to aid in pagination. */
  edges: Array<OlympiadCountriesEdge>;
  /** A list of `OlympiadCountry` objects. */
  nodes: Array<Maybe<OlympiadCountry>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OlympiadCountry` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `OlympiadCountry` edge in the connection. */
export type OlympiadCountriesEdge = {
  __typename?: 'OlympiadCountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `OlympiadCountry` at the end of the edge. */
  node?: Maybe<OlympiadCountry>;
};

/** Methods to use when ordering `OlympiadCountry`. */
export enum OlympiadCountriesOrderBy {
  CountryByCountryIdIdAsc = 'COUNTRY_BY_COUNTRY_ID__ID_ASC',
  CountryByCountryIdIdDesc = 'COUNTRY_BY_COUNTRY_ID__ID_DESC',
  CountryByCountryIdNameAsc = 'COUNTRY_BY_COUNTRY_ID__NAME_ASC',
  CountryByCountryIdNameDesc = 'COUNTRY_BY_COUNTRY_ID__NAME_DESC',
  CountryByCountryIdNocsAsc = 'COUNTRY_BY_COUNTRY_ID__NOCS_ASC',
  CountryByCountryIdNocsDesc = 'COUNTRY_BY_COUNTRY_ID__NOCS_DESC',
  CountryByCountryIdRegionIdAsc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_ASC',
  CountryByCountryIdRegionIdDesc = 'COUNTRY_BY_COUNTRY_ID__REGION_ID_DESC',
  CountryByCountryIdSlugAsc = 'COUNTRY_BY_COUNTRY_ID__SLUG_ASC',
  CountryByCountryIdSlugDesc = 'COUNTRY_BY_COUNTRY_ID__SLUG_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  Natural = 'NATURAL',
  OlympiadByOlympiadIdCityIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_ASC',
  OlympiadByOlympiadIdCityIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_DESC',
  OlympiadByOlympiadIdDatesAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_ASC',
  OlympiadByOlympiadIdDatesDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_DESC',
  OlympiadByOlympiadIdIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_ASC',
  OlympiadByOlympiadIdIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_DESC',
  OlympiadByOlympiadIdOlympiadTypeAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_ASC',
  OlympiadByOlympiadIdOlympiadTypeDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_DESC',
  OlympiadByOlympiadIdRealOlympiadAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_ASC',
  OlympiadByOlympiadIdRealOlympiadDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_DESC',
  OlympiadByOlympiadIdSlugAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_ASC',
  OlympiadByOlympiadIdSlugDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_DESC',
  OlympiadByOlympiadIdYearAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_ASC',
  OlympiadByOlympiadIdYearDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_DESC',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RegionByRegionIdIdAsc = 'REGION_BY_REGION_ID__ID_ASC',
  RegionByRegionIdIdDesc = 'REGION_BY_REGION_ID__ID_DESC',
  RegionByRegionIdNameAsc = 'REGION_BY_REGION_ID__NAME_ASC',
  RegionByRegionIdNameDesc = 'REGION_BY_REGION_ID__NAME_DESC',
  RegionByRegionIdSlugAsc = 'REGION_BY_REGION_ID__SLUG_ASC',
  RegionByRegionIdSlugDesc = 'REGION_BY_REGION_ID__SLUG_DESC',
  RegionIdAsc = 'REGION_ID_ASC',
  RegionIdDesc = 'REGION_ID_DESC'
}

export type OlympiadCountry = Node & {
  __typename?: 'OlympiadCountry';
  /** Reads a single `Country` that is related to this `OlympiadCountry`. */
  country?: Maybe<Country>;
  countryId: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Olympiad` that is related to this `OlympiadCountry`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID']['output'];
  /** Reads a single `Region` that is related to this `OlympiadCountry`. */
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['UUID']['output']>;
};

export type OlympiadCountryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * A condition to be used against `OlympiadCountry` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OlympiadCountryCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `OlympiadCountry` object types. All fields are combined with a logical ‘and.’ */
export type OlympiadCountryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OlympiadCountryFilter>>;
  /** Filter by the object’s `countryId` field. */
  countryId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OlympiadCountryFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OlympiadCountryFilter>>;
  /** Filter by the object’s `regionId` field. */
  regionId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `OlympiadCountry` */
export type OlympiadCountryInput = {
  countryId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  regionId?: InputMaybe<Scalars['UUID']['input']>;
};

/** Represents an update to a `OlympiadCountry`. Fields that are set will be updated. */
export type OlympiadCountryPatch = {
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  regionId?: InputMaybe<Scalars['UUID']['input']>;
};

export type OlympiadEvent = Node & {
  __typename?: 'OlympiadEvent';
  dateString?: Maybe<Scalars['String']['output']>;
  datetime: Scalars['Datetime']['output'];
  /** Reads a single `Event` that is related to this `OlympiadEvent`. */
  event?: Maybe<Event>;
  eventId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Olympiad` that is related to this `OlympiadEvent`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID']['output'];
};

export type OlympiadEventMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/**
 * A condition to be used against `OlympiadEvent` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OlympiadEventCondition = {
  /** Checks for equality with the object’s `dateString` field. */
  dateString?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `datetime` field. */
  datetime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `OlympiadEvent` object types. All fields are combined with a logical ‘and.’ */
export type OlympiadEventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OlympiadEventFilter>>;
  /** Filter by the object’s `dateString` field. */
  dateString?: InputMaybe<StringFilter>;
  /** Filter by the object’s `datetime` field. */
  datetime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OlympiadEventFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OlympiadEventFilter>>;
};

/** An input for mutations affecting `OlympiadEvent` */
export type OlympiadEventInput = {
  dateString?: InputMaybe<Scalars['String']['input']>;
  datetime?: InputMaybe<Scalars['Datetime']['input']>;
  eventId: Scalars['UUID']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  olympiadId: Scalars['UUID']['input'];
};

/** Represents an update to a `OlympiadEvent`. Fields that are set will be updated. */
export type OlympiadEventPatch = {
  dateString?: InputMaybe<Scalars['String']['input']>;
  datetime?: InputMaybe<Scalars['Datetime']['input']>;
  eventId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `OlympiadEvent` values. */
export type OlympiadEventsConnection = {
  __typename?: 'OlympiadEventsConnection';
  /** A list of edges which contains the `OlympiadEvent` and cursor to aid in pagination. */
  edges: Array<OlympiadEventsEdge>;
  /** A list of `OlympiadEvent` objects. */
  nodes: Array<Maybe<OlympiadEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OlympiadEvent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `OlympiadEvent` edge in the connection. */
export type OlympiadEventsEdge = {
  __typename?: 'OlympiadEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `OlympiadEvent` at the end of the edge. */
  node?: Maybe<OlympiadEvent>;
};

/** Methods to use when ordering `OlympiadEvent`. */
export enum OlympiadEventsOrderBy {
  DatetimeAsc = 'DATETIME_ASC',
  DatetimeDesc = 'DATETIME_DESC',
  DateStringAsc = 'DATE_STRING_ASC',
  DateStringDesc = 'DATE_STRING_DESC',
  EventByEventIdFullSlugAsc = 'EVENT_BY_EVENT_ID__FULL_SLUG_ASC',
  EventByEventIdFullSlugDesc = 'EVENT_BY_EVENT_ID__FULL_SLUG_DESC',
  EventByEventIdIdAsc = 'EVENT_BY_EVENT_ID__ID_ASC',
  EventByEventIdIdDesc = 'EVENT_BY_EVENT_ID__ID_DESC',
  EventByEventIdNameAsc = 'EVENT_BY_EVENT_ID__NAME_ASC',
  EventByEventIdNameDesc = 'EVENT_BY_EVENT_ID__NAME_DESC',
  EventByEventIdSlugAsc = 'EVENT_BY_EVENT_ID__SLUG_ASC',
  EventByEventIdSlugDesc = 'EVENT_BY_EVENT_ID__SLUG_DESC',
  EventByEventIdSportIdAsc = 'EVENT_BY_EVENT_ID__SPORT_ID_ASC',
  EventByEventIdSportIdDesc = 'EVENT_BY_EVENT_ID__SPORT_ID_DESC',
  EventByEventIdTeamAsc = 'EVENT_BY_EVENT_ID__TEAM_ASC',
  EventByEventIdTeamDesc = 'EVENT_BY_EVENT_ID__TEAM_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MedalsByOlympiadEventIdCountAsc = 'MEDALS_BY_OLYMPIAD_EVENT_ID__COUNT_ASC',
  MedalsByOlympiadEventIdCountDesc = 'MEDALS_BY_OLYMPIAD_EVENT_ID__COUNT_DESC',
  Natural = 'NATURAL',
  OlympiadByOlympiadIdCityIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_ASC',
  OlympiadByOlympiadIdCityIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_DESC',
  OlympiadByOlympiadIdDatesAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_ASC',
  OlympiadByOlympiadIdDatesDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_DESC',
  OlympiadByOlympiadIdIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_ASC',
  OlympiadByOlympiadIdIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_DESC',
  OlympiadByOlympiadIdOlympiadTypeAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_ASC',
  OlympiadByOlympiadIdOlympiadTypeDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_DESC',
  OlympiadByOlympiadIdRealOlympiadAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_ASC',
  OlympiadByOlympiadIdRealOlympiadDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_DESC',
  OlympiadByOlympiadIdSlugAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_ASC',
  OlympiadByOlympiadIdSlugDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_DESC',
  OlympiadByOlympiadIdYearAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_ASC',
  OlympiadByOlympiadIdYearDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_DESC',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against `Olympiad` object types. All fields are combined with a logical ‘and.’ */
export type OlympiadFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OlympiadFilter>>;
  /** Filter by the object’s `cityId` field. */
  cityId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `dates` field. */
  dates?: InputMaybe<DatetimeRangeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OlympiadFilter>;
  /** Filter by the object’s `olympiadType` field. */
  olympiadType?: InputMaybe<OlympiadtypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OlympiadFilter>>;
  /** Filter by the object’s `realOlympiad` field. */
  realOlympiad?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `year` field. */
  year?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `Olympiad` */
export type OlympiadInput = {
  /** The foreign key from the city that hosted the olympiad. */
  cityId?: InputMaybe<Scalars['UUID']['input']>;
  dates?: InputMaybe<DatetimeRangeInput>;
  /** The primary key for the olympiad. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Whether the Olympiad was summer or winter. */
  olympiadType?: InputMaybe<Olympiadtype>;
  realOlympiad?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The year the Olympiad took place. */
  year: Scalars['Int']['input'];
};

/** Represents an update to a `Olympiad`. Fields that are set will be updated. */
export type OlympiadPatch = {
  /** The foreign key from the city that hosted the olympiad. */
  cityId?: InputMaybe<Scalars['UUID']['input']>;
  dates?: InputMaybe<DatetimeRangeInput>;
  /** The primary key for the olympiad. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Whether the Olympiad was summer or winter. */
  olympiadType?: InputMaybe<Olympiadtype>;
  realOlympiad?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The year the Olympiad took place. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type OlympiadRegionSetting = Node & {
  __typename?: 'OlympiadRegionSetting';
  amount: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Olympiad` that is related to this `OlympiadRegionSetting`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID']['output'];
  /** Reads a single `Region` that is related to this `OlympiadRegionSetting`. */
  region?: Maybe<Region>;
  regionId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `OlympiadRegionSetting` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type OlympiadRegionSettingCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `OlympiadRegionSetting` object types. All fields are combined with a logical ‘and.’ */
export type OlympiadRegionSettingFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OlympiadRegionSettingFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<OlympiadRegionSettingFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OlympiadRegionSettingFilter>>;
  /** Filter by the object’s `regionId` field. */
  regionId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `OlympiadRegionSetting` */
export type OlympiadRegionSettingInput = {
  amount: Scalars['Int']['input'];
  olympiadId: Scalars['UUID']['input'];
  regionId: Scalars['UUID']['input'];
};

/** Represents an update to a `OlympiadRegionSetting`. Fields that are set will be updated. */
export type OlympiadRegionSettingPatch = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  regionId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `OlympiadRegionSetting` values. */
export type OlympiadRegionSettingsConnection = {
  __typename?: 'OlympiadRegionSettingsConnection';
  /** A list of edges which contains the `OlympiadRegionSetting` and cursor to aid in pagination. */
  edges: Array<OlympiadRegionSettingsEdge>;
  /** A list of `OlympiadRegionSetting` objects. */
  nodes: Array<Maybe<OlympiadRegionSetting>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OlympiadRegionSetting` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `OlympiadRegionSetting` edge in the connection. */
export type OlympiadRegionSettingsEdge = {
  __typename?: 'OlympiadRegionSettingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `OlympiadRegionSetting` at the end of the edge. */
  node?: Maybe<OlympiadRegionSetting>;
};

/** Methods to use when ordering `OlympiadRegionSetting`. */
export enum OlympiadRegionSettingsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  Natural = 'NATURAL',
  OlympiadByOlympiadIdCityIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_ASC',
  OlympiadByOlympiadIdCityIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_DESC',
  OlympiadByOlympiadIdDatesAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_ASC',
  OlympiadByOlympiadIdDatesDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_DESC',
  OlympiadByOlympiadIdIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_ASC',
  OlympiadByOlympiadIdIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_DESC',
  OlympiadByOlympiadIdOlympiadTypeAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_ASC',
  OlympiadByOlympiadIdOlympiadTypeDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_DESC',
  OlympiadByOlympiadIdRealOlympiadAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_ASC',
  OlympiadByOlympiadIdRealOlympiadDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_DESC',
  OlympiadByOlympiadIdSlugAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_ASC',
  OlympiadByOlympiadIdSlugDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_DESC',
  OlympiadByOlympiadIdYearAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_ASC',
  OlympiadByOlympiadIdYearDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_DESC',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RegionByRegionIdIdAsc = 'REGION_BY_REGION_ID__ID_ASC',
  RegionByRegionIdIdDesc = 'REGION_BY_REGION_ID__ID_DESC',
  RegionByRegionIdNameAsc = 'REGION_BY_REGION_ID__NAME_ASC',
  RegionByRegionIdNameDesc = 'REGION_BY_REGION_ID__NAME_DESC',
  RegionByRegionIdSlugAsc = 'REGION_BY_REGION_ID__SLUG_ASC',
  RegionByRegionIdSlugDesc = 'REGION_BY_REGION_ID__SLUG_DESC',
  RegionIdAsc = 'REGION_ID_ASC',
  RegionIdDesc = 'REGION_ID_DESC'
}

export type OlympiadSport = Node & {
  __typename?: 'OlympiadSport';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Olympiad` that is related to this `OlympiadSport`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID']['output'];
  /** Reads a single `Sport` that is related to this `OlympiadSport`. */
  sport?: Maybe<Sport>;
  sportId: Scalars['UUID']['output'];
};

/**
 * A condition to be used against `OlympiadSport` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OlympiadSportCondition = {
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `sportId` field. */
  sportId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A filter to be used against `OlympiadSport` object types. All fields are combined with a logical ‘and.’ */
export type OlympiadSportFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OlympiadSportFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<OlympiadSportFilter>;
  /** Filter by the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<UuidFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OlympiadSportFilter>>;
  /** Filter by the object’s `sportId` field. */
  sportId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `OlympiadSport` */
export type OlympiadSportInput = {
  olympiadId: Scalars['UUID']['input'];
  sportId: Scalars['UUID']['input'];
};

/** Represents an update to a `OlympiadSport`. Fields that are set will be updated. */
export type OlympiadSportPatch = {
  olympiadId?: InputMaybe<Scalars['UUID']['input']>;
  sportId?: InputMaybe<Scalars['UUID']['input']>;
};

/** A connection to a list of `OlympiadSport` values. */
export type OlympiadSportsConnection = {
  __typename?: 'OlympiadSportsConnection';
  /** A list of edges which contains the `OlympiadSport` and cursor to aid in pagination. */
  edges: Array<OlympiadSportsEdge>;
  /** A list of `OlympiadSport` objects. */
  nodes: Array<Maybe<OlympiadSport>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OlympiadSport` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `OlympiadSport` edge in the connection. */
export type OlympiadSportsEdge = {
  __typename?: 'OlympiadSportsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `OlympiadSport` at the end of the edge. */
  node?: Maybe<OlympiadSport>;
};

/** Methods to use when ordering `OlympiadSport`. */
export enum OlympiadSportsOrderBy {
  Natural = 'NATURAL',
  OlympiadByOlympiadIdCityIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_ASC',
  OlympiadByOlympiadIdCityIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__CITY_ID_DESC',
  OlympiadByOlympiadIdDatesAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_ASC',
  OlympiadByOlympiadIdDatesDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__DATES_DESC',
  OlympiadByOlympiadIdIdAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_ASC',
  OlympiadByOlympiadIdIdDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__ID_DESC',
  OlympiadByOlympiadIdOlympiadTypeAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_ASC',
  OlympiadByOlympiadIdOlympiadTypeDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__OLYMPIAD_TYPE_DESC',
  OlympiadByOlympiadIdRealOlympiadAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_ASC',
  OlympiadByOlympiadIdRealOlympiadDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__REAL_OLYMPIAD_DESC',
  OlympiadByOlympiadIdSlugAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_ASC',
  OlympiadByOlympiadIdSlugDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__SLUG_DESC',
  OlympiadByOlympiadIdYearAsc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_ASC',
  OlympiadByOlympiadIdYearDesc = 'OLYMPIAD_BY_OLYMPIAD_ID__YEAR_DESC',
  OlympiadIdAsc = 'OLYMPIAD_ID_ASC',
  OlympiadIdDesc = 'OLYMPIAD_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SportBySportIdIdAsc = 'SPORT_BY_SPORT_ID__ID_ASC',
  SportBySportIdIdDesc = 'SPORT_BY_SPORT_ID__ID_DESC',
  SportBySportIdNameAsc = 'SPORT_BY_SPORT_ID__NAME_ASC',
  SportBySportIdNameDesc = 'SPORT_BY_SPORT_ID__NAME_DESC',
  SportBySportIdSlugAsc = 'SPORT_BY_SPORT_ID__SLUG_ASC',
  SportBySportIdSlugDesc = 'SPORT_BY_SPORT_ID__SLUG_DESC',
  SportIdAsc = 'SPORT_ID_ASC',
  SportIdDesc = 'SPORT_ID_DESC'
}

/** A connection to a list of `Olympiad` values. */
export type OlympiadsConnection = {
  __typename?: 'OlympiadsConnection';
  /** A list of edges which contains the `Olympiad` and cursor to aid in pagination. */
  edges: Array<OlympiadsEdge>;
  /** A list of `Olympiad` objects. */
  nodes: Array<Maybe<Olympiad>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Olympiad` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Olympiad` edge in the connection. */
export type OlympiadsEdge = {
  __typename?: 'OlympiadsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Olympiad` at the end of the edge. */
  node?: Maybe<Olympiad>;
};

/** Methods to use when ordering `Olympiad`. */
export enum OlympiadsOrderBy {
  CityByCityIdCountryIdAsc = 'CITY_BY_CITY_ID__COUNTRY_ID_ASC',
  CityByCityIdCountryIdDesc = 'CITY_BY_CITY_ID__COUNTRY_ID_DESC',
  CityByCityIdFormerNameAsc = 'CITY_BY_CITY_ID__FORMER_NAME_ASC',
  CityByCityIdFormerNameDesc = 'CITY_BY_CITY_ID__FORMER_NAME_DESC',
  CityByCityIdIdAsc = 'CITY_BY_CITY_ID__ID_ASC',
  CityByCityIdIdDesc = 'CITY_BY_CITY_ID__ID_DESC',
  CityByCityIdNameAsc = 'CITY_BY_CITY_ID__NAME_ASC',
  CityByCityIdNameDesc = 'CITY_BY_CITY_ID__NAME_DESC',
  CityByCityIdSlugAsc = 'CITY_BY_CITY_ID__SLUG_ASC',
  CityByCityIdSlugDesc = 'CITY_BY_CITY_ID__SLUG_DESC',
  CityIdAsc = 'CITY_ID_ASC',
  CityIdDesc = 'CITY_ID_DESC',
  DatesAsc = 'DATES_ASC',
  DatesDesc = 'DATES_DESC',
  GroupOlympiadsByOlympiadIdCountAsc = 'GROUP_OLYMPIADS_BY_OLYMPIAD_ID__COUNT_ASC',
  GroupOlympiadsByOlympiadIdCountDesc = 'GROUP_OLYMPIADS_BY_OLYMPIAD_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OlympiadAthletesByOlympiadIdCountAsc = 'OLYMPIAD_ATHLETES_BY_OLYMPIAD_ID__COUNT_ASC',
  OlympiadAthletesByOlympiadIdCountDesc = 'OLYMPIAD_ATHLETES_BY_OLYMPIAD_ID__COUNT_DESC',
  OlympiadCountriesByOlympiadIdCountAsc = 'OLYMPIAD_COUNTRIES_BY_OLYMPIAD_ID__COUNT_ASC',
  OlympiadCountriesByOlympiadIdCountDesc = 'OLYMPIAD_COUNTRIES_BY_OLYMPIAD_ID__COUNT_DESC',
  OlympiadEventsByOlympiadIdCountAsc = 'OLYMPIAD_EVENTS_BY_OLYMPIAD_ID__COUNT_ASC',
  OlympiadEventsByOlympiadIdCountDesc = 'OLYMPIAD_EVENTS_BY_OLYMPIAD_ID__COUNT_DESC',
  OlympiadRegionSettingsByOlympiadIdCountAsc = 'OLYMPIAD_REGION_SETTINGS_BY_OLYMPIAD_ID__COUNT_ASC',
  OlympiadRegionSettingsByOlympiadIdCountDesc = 'OLYMPIAD_REGION_SETTINGS_BY_OLYMPIAD_ID__COUNT_DESC',
  OlympiadSportsByOlympiadIdCountAsc = 'OLYMPIAD_SPORTS_BY_OLYMPIAD_ID__COUNT_ASC',
  OlympiadSportsByOlympiadIdCountDesc = 'OLYMPIAD_SPORTS_BY_OLYMPIAD_ID__COUNT_DESC',
  OlympiadTypeAsc = 'OLYMPIAD_TYPE_ASC',
  OlympiadTypeDesc = 'OLYMPIAD_TYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RealOlympiadAsc = 'REAL_OLYMPIAD_ASC',
  RealOlympiadDesc = 'REAL_OLYMPIAD_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC'
}

export enum Olympiadtype {
  Summer = 'SUMMER',
  Winter = 'WINTER'
}

/** A filter to be used against Olympiadtype fields. All fields are combined with a logical ‘and.’ */
export type OlympiadtypeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Olympiadtype>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Olympiadtype>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Olympiadtype>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Olympiadtype>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Olympiadtype>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Olympiadtype>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Olympiadtype>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Olympiadtype>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Olympiadtype>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Olympiadtype>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** Players who are playing games. */
export type Player = Node & {
  __typename?: 'Player';
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedals: GroupMedalsConnection;
  /** Reads and enables pagination through a set of `GroupOlympiadCountry`. */
  groupOlympiadCountries: GroupOlympiadCountriesConnection;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiadsByCommissionerId: GroupOlympiadsConnection;
  /** Reads and enables pagination through a set of `GroupPlayer`. */
  groupPlayers: GroupPlayersConnection;
  /** Reads and enables pagination through a set of `Group`. */
  groupsByCommissionerId: GroupsConnection;
  /** The primary key for the player. */
  id: Scalars['UUID']['output'];
  invitations?: Maybe<Array<Maybe<Invitation>>>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  isCommissioner?: Maybe<Scalars['Boolean']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `UserAuthenticator`. */
  userAuthenticators: UserAuthenticatorsConnection;
  /** The username of the player. */
  username?: Maybe<Scalars['String']['output']>;
};

/** Players who are playing games. */
export type PlayerGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

/** Players who are playing games. */
export type PlayerGroupOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

/** Players who are playing games. */
export type PlayerGroupOlympiadsByCommissionerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

/** Players who are playing games. */
export type PlayerGroupPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupPlayerCondition>;
  filter?: InputMaybe<GroupPlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};

/** Players who are playing games. */
export type PlayerGroupsByCommissionerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupCondition>;
  filter?: InputMaybe<GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
};

/** Players who are playing games. */
export type PlayerUserAuthenticatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserAuthenticatorCondition>;
  filter?: InputMaybe<UserAuthenticatorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserAuthenticatorsOrderBy>>;
};

/** A condition to be used against `Player` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PlayerCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Player` object types. All fields are combined with a logical ‘and.’ */
export type PlayerFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PlayerFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `isAdmin` field. */
  isAdmin?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isCommissioner` field. */
  isCommissioner?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PlayerFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PlayerFilter>>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `username` field. */
  username?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Player` */
export type PlayerInput = {
  /** The primary key for the player. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The username of the player. */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Player`. Fields that are set will be updated. */
export type PlayerPatch = {
  /** The primary key for the player. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The username of the player. */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Player` values. */
export type PlayersConnection = {
  __typename?: 'PlayersConnection';
  /** A list of edges which contains the `Player` and cursor to aid in pagination. */
  edges: Array<PlayersEdge>;
  /** A list of `Player` objects. */
  nodes: Array<Maybe<Player>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Player` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Player` edge in the connection. */
export type PlayersEdge = {
  __typename?: 'PlayersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Player` at the end of the edge. */
  node?: Maybe<Player>;
};

/** Methods to use when ordering `Player`. */
export enum PlayersOrderBy {
  GroupsByCommissionerIdCountAsc = 'GROUPS_BY_COMMISSIONER_ID__COUNT_ASC',
  GroupsByCommissionerIdCountDesc = 'GROUPS_BY_COMMISSIONER_ID__COUNT_DESC',
  GroupMedalsByPlayerIdCountAsc = 'GROUP_MEDALS_BY_PLAYER_ID__COUNT_ASC',
  GroupMedalsByPlayerIdCountDesc = 'GROUP_MEDALS_BY_PLAYER_ID__COUNT_DESC',
  GroupOlympiadsByCommissionerIdCountAsc = 'GROUP_OLYMPIADS_BY_COMMISSIONER_ID__COUNT_ASC',
  GroupOlympiadsByCommissionerIdCountDesc = 'GROUP_OLYMPIADS_BY_COMMISSIONER_ID__COUNT_DESC',
  GroupOlympiadCountriesByPlayerIdCountAsc = 'GROUP_OLYMPIAD_COUNTRIES_BY_PLAYER_ID__COUNT_ASC',
  GroupOlympiadCountriesByPlayerIdCountDesc = 'GROUP_OLYMPIAD_COUNTRIES_BY_PLAYER_ID__COUNT_DESC',
  GroupPlayersByPlayerIdCountAsc = 'GROUP_PLAYERS_BY_PLAYER_ID__COUNT_ASC',
  GroupPlayersByPlayerIdCountDesc = 'GROUP_PLAYERS_BY_PLAYER_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  UserAuthenticatorsByPlayerIdCountAsc = 'USER_AUTHENTICATORS_BY_PLAYER_ID__COUNT_ASC',
  UserAuthenticatorsByPlayerIdCountDesc = 'USER_AUTHENTICATORS_BY_PLAYER_ID__COUNT_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  athlete?: Maybe<Athlete>;
  /** Reads a single `Athlete` using its globally unique `ID`. */
  athleteByNodeId?: Maybe<Athlete>;
  athleteBySlug?: Maybe<Athlete>;
  /** Reads and enables pagination through a set of `Athlete`. */
  athletes?: Maybe<AthletesConnection>;
  /** Reads and enables pagination through a set of `Athlete`. */
  athletesByCountry?: Maybe<AthletesConnection>;
  /** Reads and enables pagination through a set of `City`. */
  cities?: Maybe<CitiesConnection>;
  city?: Maybe<City>;
  /** Reads a single `City` using its globally unique `ID`. */
  cityByNodeId?: Maybe<City>;
  cityBySlug?: Maybe<City>;
  /** Reads and enables pagination through a set of `Country`. */
  countries?: Maybe<CountriesConnection>;
  country?: Maybe<Country>;
  /** Reads a single `Country` using its globally unique `ID`. */
  countryByNodeId?: Maybe<Country>;
  countryBySlug?: Maybe<Country>;
  countryFlagsByTimestamp?: Maybe<FlagUrlResponse>;
  countryFlagsByYear?: Maybe<FlagUrlResponse>;
  /** Gets the player who was identified by our JWT. */
  currentPlayer?: Maybe<Player>;
  currentPlayerId?: Maybe<Scalars['UUID']['output']>;
  event?: Maybe<Event>;
  eventByFullSlug?: Maybe<Event>;
  /** Reads a single `Event` using its globally unique `ID`. */
  eventByNodeId?: Maybe<Event>;
  /** Reads and enables pagination through a set of `Event`. */
  events?: Maybe<EventsConnection>;
  /** Reads and enables pagination through a set of `Event`. */
  eventsBySportSlug?: Maybe<EventsConnection>;
  flag?: Maybe<Flag>;
  /** Reads a single `Flag` using its globally unique `ID`. */
  flagByNodeId?: Maybe<Flag>;
  /** Reads and enables pagination through a set of `Flag`. */
  flags?: Maybe<FlagsConnection>;
  getMedalWinners?: Maybe<WinnersPayload>;
  group?: Maybe<Group>;
  groupByName?: Maybe<Group>;
  /** Reads a single `Group` using its globally unique `ID`. */
  groupByNodeId?: Maybe<Group>;
  groupMedal?: Maybe<GroupMedal>;
  /** Reads a single `GroupMedal` using its globally unique `ID`. */
  groupMedalByNodeId?: Maybe<GroupMedal>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedals?: Maybe<GroupMedalsConnection>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedalsByDate?: Maybe<GroupMedalsConnection>;
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** Reads a single `GroupOlympiad` using its globally unique `ID`. */
  groupOlympiadByNodeId?: Maybe<GroupOlympiad>;
  /** Reads and enables pagination through a set of `GroupOlympiadCountry`. */
  groupOlympiadCountries?: Maybe<GroupOlympiadCountriesConnection>;
  groupOlympiadCountry?: Maybe<GroupOlympiadCountry>;
  /** Reads a single `GroupOlympiadCountry` using its globally unique `ID`. */
  groupOlympiadCountryByNodeId?: Maybe<GroupOlympiadCountry>;
  groupOlympiadPlayer?: Maybe<GroupOlympiadPlayer>;
  /** Reads a single `GroupOlympiadPlayer` using its globally unique `ID`. */
  groupOlympiadPlayerByNodeId?: Maybe<GroupOlympiadPlayer>;
  /** Reads and enables pagination through a set of `GroupOlympiadPlayer`. */
  groupOlympiadPlayers?: Maybe<GroupOlympiadPlayersConnection>;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiads?: Maybe<GroupOlympiadsConnection>;
  groupPlayer?: Maybe<GroupPlayer>;
  /** Reads a single `GroupPlayer` using its globally unique `ID`. */
  groupPlayerByNodeId?: Maybe<GroupPlayer>;
  /** Reads and enables pagination through a set of `GroupPlayer`. */
  groupPlayers?: Maybe<GroupPlayersConnection>;
  /** Reads and enables pagination through a set of `Group`. */
  groups?: Maybe<GroupsConnection>;
  medal?: Maybe<Medal>;
  /** Reads a single `Medal` using its globally unique `ID`. */
  medalByNodeId?: Maybe<Medal>;
  medalClass?: Maybe<MedalClass>;
  /** Reads a single `MedalClass` using its globally unique `ID`. */
  medalClassByNodeId?: Maybe<MedalClass>;
  /** Reads and enables pagination through a set of `MedalClass`. */
  medalClasses?: Maybe<MedalClassesConnection>;
  medalTeam?: Maybe<MedalTeam>;
  /** Reads a single `MedalTeam` using its globally unique `ID`. */
  medalTeamByNodeId?: Maybe<MedalTeam>;
  /** Reads and enables pagination through a set of `MedalTeam`. */
  medalTeams?: Maybe<MedalTeamsConnection>;
  /** Reads and enables pagination through a set of `Medal`. */
  medals?: Maybe<MedalsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  olympiad?: Maybe<Olympiad>;
  olympiadAthlete?: Maybe<OlympiadAthlete>;
  /** Reads a single `OlympiadAthlete` using its globally unique `ID`. */
  olympiadAthleteByNodeId?: Maybe<OlympiadAthlete>;
  /** Reads and enables pagination through a set of `OlympiadAthlete`. */
  olympiadAthletes?: Maybe<OlympiadAthletesConnection>;
  /** Reads a single `Olympiad` using its globally unique `ID`. */
  olympiadByNodeId?: Maybe<Olympiad>;
  olympiadBySlug?: Maybe<Olympiad>;
  /** Reads and enables pagination through a set of `OlympiadCountry`. */
  olympiadCountries?: Maybe<OlympiadCountriesConnection>;
  olympiadCountry?: Maybe<OlympiadCountry>;
  /** Reads a single `OlympiadCountry` using its globally unique `ID`. */
  olympiadCountryByNodeId?: Maybe<OlympiadCountry>;
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** Reads a single `OlympiadEvent` using its globally unique `ID`. */
  olympiadEventByNodeId?: Maybe<OlympiadEvent>;
  olympiadEventBySlugs?: Maybe<OlympiadEvent>;
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  olympiadEvents?: Maybe<OlympiadEventsConnection>;
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  olympiadEventsByDate?: Maybe<OlympiadEventsConnection>;
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  olympiadEventsBySlugs?: Maybe<OlympiadEventsConnection>;
  /** Reads and enables pagination through a set of `Medal`. */
  olympiadMedalsBySlug?: Maybe<MedalsConnection>;
  olympiadRegionSetting?: Maybe<OlympiadRegionSetting>;
  /** Reads a single `OlympiadRegionSetting` using its globally unique `ID`. */
  olympiadRegionSettingByNodeId?: Maybe<OlympiadRegionSetting>;
  /** Reads and enables pagination through a set of `OlympiadRegionSetting`. */
  olympiadRegionSettings?: Maybe<OlympiadRegionSettingsConnection>;
  olympiadSport?: Maybe<OlympiadSport>;
  /** Reads a single `OlympiadSport` using its globally unique `ID`. */
  olympiadSportByNodeId?: Maybe<OlympiadSport>;
  /** Reads and enables pagination through a set of `OlympiadSport`. */
  olympiadSports?: Maybe<OlympiadSportsConnection>;
  /** Reads and enables pagination through a set of `Olympiad`. */
  olympiads?: Maybe<OlympiadsConnection>;
  player?: Maybe<Player>;
  /** Reads a single `Player` using its globally unique `ID`. */
  playerByNodeId?: Maybe<Player>;
  playerBySlug?: Maybe<Player>;
  playerByUsername?: Maybe<Player>;
  /** Reads and enables pagination through a set of `Player`. */
  players?: Maybe<PlayersConnection>;
  playersInGroups?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  randomMedal?: Maybe<Medal>;
  region?: Maybe<Region>;
  regionByName?: Maybe<Region>;
  /** Reads a single `Region` using its globally unique `ID`. */
  regionByNodeId?: Maybe<Region>;
  regionBySlug?: Maybe<Region>;
  /** Reads and enables pagination through a set of `Region`. */
  regions?: Maybe<RegionsConnection>;
  sport?: Maybe<Sport>;
  sportByName?: Maybe<Sport>;
  /** Reads a single `Sport` using its globally unique `ID`. */
  sportByNodeId?: Maybe<Sport>;
  sportBySlug?: Maybe<Sport>;
  /** Reads and enables pagination through a set of `Sport`. */
  sports?: Maybe<SportsConnection>;
  userAuthenticator?: Maybe<UserAuthenticator>;
  /** Reads a single `UserAuthenticator` using its globally unique `ID`. */
  userAuthenticatorByNodeId?: Maybe<UserAuthenticator>;
  /** Reads and enables pagination through a set of `UserAuthenticator`. */
  userAuthenticators?: Maybe<UserAuthenticatorsConnection>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAthleteArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAthleteByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAthleteBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryAthletesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AthleteCondition>;
  filter?: InputMaybe<AthleteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AthletesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAthletesByCountryArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AthleteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AthletesOrderBy>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CityCondition>;
  filter?: InputMaybe<CityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCityArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCityByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCityBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CountryCondition>;
  filter?: InputMaybe<CountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCountryArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCountryByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCountryBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCountryFlagsByTimestampArgs = {
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  olympiadDates?: InputMaybe<DatetimeRangeInput>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCountryFlagsByYearArgs = {
  countryId?: InputMaybe<Scalars['UUID']['input']>;
  olympiadYear?: InputMaybe<Scalars['Int']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventByFullSlugArgs = {
  fullSlug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryEventsBySportSlugArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sportSlug?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryFlagArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryFlagByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryFlagsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FlagCondition>;
  filter?: InputMaybe<FlagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FlagsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupByNameArgs = {
  name: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalArgs = {
  groupId: Scalars['UUID']['input'];
  medalId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalsByDateArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupid?: InputMaybe<Scalars['UUID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  olympiaddate?: InputMaybe<Scalars['Datetime']['input']>;
  olympiadid?: InputMaybe<Scalars['UUID']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadCountryArgs = {
  countryId: Scalars['UUID']['input'];
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadCountryByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadPlayerArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadPlayerByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadPlayerCondition>;
  filter?: InputMaybe<GroupOlympiadPlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupPlayerArgs = {
  groupId: Scalars['UUID']['input'];
  playerId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupPlayerByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupPlayerCondition>;
  filter?: InputMaybe<GroupPlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<GroupCondition>;
  filter?: InputMaybe<GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalClassArgs = {
  medalRank: Scalars['Int']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalClassByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalClassesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalClassCondition>;
  filter?: InputMaybe<MedalClassFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalClassesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalTeamArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalTeamByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalTeamCondition>;
  filter?: InputMaybe<MedalTeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalTeamsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadAthleteArgs = {
  athleteId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadAthleteByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadAthletesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadAthleteCondition>;
  filter?: InputMaybe<OlympiadAthleteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadAthletesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadCountryArgs = {
  countryId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadCountryByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventBySlugsArgs = {
  eventSlug?: InputMaybe<Scalars['String']['input']>;
  olympiadSlug?: InputMaybe<Scalars['String']['input']>;
  sportSlug?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadEventCondition>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventsByDateArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  olympiaddate?: InputMaybe<Scalars['Datetime']['input']>;
  olympiadslug?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventsBySlugsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  olympiadSlug?: InputMaybe<Scalars['String']['input']>;
  sportSlug?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadMedalsBySlugArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  olympiadslug?: InputMaybe<Scalars['String']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadRegionSettingArgs = {
  olympiadId: Scalars['UUID']['input'];
  regionId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadRegionSettingByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadRegionSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadRegionSettingCondition>;
  filter?: InputMaybe<OlympiadRegionSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadSportArgs = {
  olympiadId: Scalars['UUID']['input'];
  sportId: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadSportByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadSportCondition>;
  filter?: InputMaybe<OlympiadSportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadCondition>;
  filter?: InputMaybe<OlympiadFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPlayerArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlayerBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlayerByUsernameArgs = {
  username: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlayerCondition>;
  filter?: InputMaybe<PlayerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryRegionArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRegionByNameArgs = {
  name: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRegionByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRegionBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RegionCondition>;
  filter?: InputMaybe<RegionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerySportArgs = {
  id: Scalars['UUID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QuerySportByNameArgs = {
  name: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QuerySportByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QuerySportBySlugArgs = {
  slug: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QuerySportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<SportCondition>;
  filter?: InputMaybe<SportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SportsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAuthenticatorArgs = {
  credentialId: Scalars['String']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAuthenticatorByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAuthenticatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserAuthenticatorCondition>;
  filter?: InputMaybe<UserAuthenticatorFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserAuthenticatorsOrderBy>>;
};

export type Region = Node & {
  __typename?: 'Region';
  /** Reads and enables pagination through a set of `Country`. */
  countries: CountriesConnection;
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `OlympiadCountry`. */
  olympiadCountries: OlympiadCountriesConnection;
  /** Reads and enables pagination through a set of `OlympiadRegionSetting`. */
  olympiadRegionSettings: OlympiadRegionSettingsConnection;
  slug?: Maybe<Scalars['String']['output']>;
};

export type RegionCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CountryCondition>;
  filter?: InputMaybe<CountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

export type RegionOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

export type RegionOlympiadRegionSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadRegionSettingCondition>;
  filter?: InputMaybe<OlympiadRegionSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};

/** A condition to be used against `Region` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RegionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Region` object types. All fields are combined with a logical ‘and.’ */
export type RegionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RegionFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RegionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RegionFilter>>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Region` */
export type RegionInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Region`. Fields that are set will be updated. */
export type RegionPatch = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Region` values. */
export type RegionsConnection = {
  __typename?: 'RegionsConnection';
  /** A list of edges which contains the `Region` and cursor to aid in pagination. */
  edges: Array<RegionsEdge>;
  /** A list of `Region` objects. */
  nodes: Array<Maybe<Region>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Region` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Region` edge in the connection. */
export type RegionsEdge = {
  __typename?: 'RegionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Region` at the end of the edge. */
  node?: Maybe<Region>;
};

/** Methods to use when ordering `Region`. */
export enum RegionsOrderBy {
  CountriesByRegionIdCountAsc = 'COUNTRIES_BY_REGION_ID__COUNT_ASC',
  CountriesByRegionIdCountDesc = 'COUNTRIES_BY_REGION_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OlympiadCountriesByRegionIdCountAsc = 'OLYMPIAD_COUNTRIES_BY_REGION_ID__COUNT_ASC',
  OlympiadCountriesByRegionIdCountDesc = 'OLYMPIAD_COUNTRIES_BY_REGION_ID__COUNT_DESC',
  OlympiadRegionSettingsByRegionIdCountAsc = 'OLYMPIAD_REGION_SETTINGS_BY_REGION_ID__COUNT_ASC',
  OlympiadRegionSettingsByRegionIdCountDesc = 'OLYMPIAD_REGION_SETTINGS_BY_REGION_ID__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC'
}

/** All input for the `registerPlayer` mutation. */
export type RegisterPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** The output of our `registerPlayer` mutation. */
export type RegisterPlayerPayload = {
  __typename?: 'RegisterPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  player?: Maybe<Player>;
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our `registerPlayer` mutation. */
export type RegisterPlayerPayloadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
};

export type RequestPayload = {
  __typename?: 'RequestPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ResetDraftPayload = {
  __typename?: 'ResetDraftPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ResetPayload = {
  __typename?: 'ResetPayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ScoringPayload = {
  __typename?: 'ScoringPayload';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Sports that took place at an olympiad. */
export type Sport = Node & {
  __typename?: 'Sport';
  /** Reads and enables pagination through a set of `Event`. */
  events: EventsConnection;
  /** The primary key for the sport. */
  id: Scalars['UUID']['output'];
  /** The name of the sport. */
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `OlympiadSport`. */
  olympiadSports: OlympiadSportsConnection;
  /** The slug for the sport. */
  slug?: Maybe<Scalars['String']['output']>;
};

/** Sports that took place at an olympiad. */
export type SportEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** Sports that took place at an olympiad. */
export type SportOlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OlympiadSportCondition>;
  filter?: InputMaybe<OlympiadSportFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};

/** A condition to be used against `Sport` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SportCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Sport` object types. All fields are combined with a logical ‘and.’ */
export type SportFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SportFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SportFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SportFilter>>;
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Sport` */
export type SportInput = {
  /** The primary key for the sport. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** The name of the sport. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug for the sport. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Sport`. Fields that are set will be updated. */
export type SportPatch = {
  /** The primary key for the sport. */
  id?: InputMaybe<Scalars['UUID']['input']>;
  /** The name of the sport. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The slug for the sport. */
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Sport` values. */
export type SportsConnection = {
  __typename?: 'SportsConnection';
  /** A list of edges which contains the `Sport` and cursor to aid in pagination. */
  edges: Array<SportsEdge>;
  /** A list of `Sport` objects. */
  nodes: Array<Maybe<Sport>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Sport` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Sport` edge in the connection. */
export type SportsEdge = {
  __typename?: 'SportsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Sport` at the end of the edge. */
  node?: Maybe<Sport>;
};

/** Methods to use when ordering `Sport`. */
export enum SportsOrderBy {
  EventsBySportIdCountAsc = 'EVENTS_BY_SPORT_ID__COUNT_ASC',
  EventsBySportIdCountDesc = 'EVENTS_BY_SPORT_ID__COUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OlympiadSportsBySportIdCountAsc = 'OLYMPIAD_SPORTS_BY_SPORT_ID__COUNT_ASC',
  OlympiadSportsBySportIdCountDesc = 'OLYMPIAD_SPORTS_BY_SPORT_ID__COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC'
}

export type StartDraftPayload = {
  __typename?: 'StartDraftPayload';
  timerEnd?: Maybe<Scalars['String']['output']>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Contained by the specified list of values. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  countryDrafted?: Maybe<DraftSubscriptionPayload>;
};

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionCountryDraftedArgs = {
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
};

export type ToggleDraftPayload = {
  __typename?: 'ToggleDraftPayload';
  draftPaused?: Maybe<Scalars['Boolean']['output']>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

/** A filter to be used against UUID List fields. All fields are combined with a logical ‘and.’ */
export type UuidListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: InputMaybe<Scalars['UUID']['input']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: InputMaybe<Scalars['UUID']['input']>;
  /** Contained by the specified list of values. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

/** All input for the `updateAthleteByNodeId` mutation. */
export type UpdateAthleteByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Athlete` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Athlete` being updated. */
  patch: AthletePatch;
};

/** All input for the `updateAthleteBySlug` mutation. */
export type UpdateAthleteBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Athlete` being updated. */
  patch: AthletePatch;
  slug: Scalars['String']['input'];
};

/** All input for the `updateAthlete` mutation. */
export type UpdateAthleteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Athlete` being updated. */
  patch: AthletePatch;
};

/** The output of our update `Athlete` mutation. */
export type UpdateAthletePayload = {
  __typename?: 'UpdateAthletePayload';
  /** The `Athlete` that was updated by this mutation. */
  athlete?: Maybe<Athlete>;
  /** An edge for our `Athlete`. May be used by Relay 1. */
  athleteEdge?: Maybe<AthletesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Athlete` mutation. */
export type UpdateAthletePayloadAthleteEdgeArgs = {
  orderBy?: InputMaybe<Array<AthletesOrderBy>>;
};

/** All input for the `updateCityByNodeId` mutation. */
export type UpdateCityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `City` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `City` being updated. */
  patch: CityPatch;
};

/** All input for the `updateCityBySlug` mutation. */
export type UpdateCityBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `City` being updated. */
  patch: CityPatch;
  slug: Scalars['String']['input'];
};

/** All input for the `updateCity` mutation. */
export type UpdateCityInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the city. */
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `City` being updated. */
  patch: CityPatch;
};

/** The output of our update `City` mutation. */
export type UpdateCityPayload = {
  __typename?: 'UpdateCityPayload';
  /** The `City` that was updated by this mutation. */
  city?: Maybe<City>;
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `City` mutation. */
export type UpdateCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};

/** All input for the `updateCountryByNodeId` mutation. */
export type UpdateCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Country` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Country` being updated. */
  patch: CountryPatch;
};

/** All input for the `updateCountryBySlug` mutation. */
export type UpdateCountryBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Country` being updated. */
  patch: CountryPatch;
  slug: Scalars['String']['input'];
};

/** All input for the `updateCountry` mutation. */
export type UpdateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Country` being updated. */
  patch: CountryPatch;
};

/** The output of our update `Country` mutation. */
export type UpdateCountryPayload = {
  __typename?: 'UpdateCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Country` that was updated by this mutation. */
  country?: Maybe<Country>;
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Country`. */
  region?: Maybe<Region>;
};

/** The output of our update `Country` mutation. */
export type UpdateCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** All input for the `updateEventByFullSlug` mutation. */
export type UpdateEventByFullSlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fullSlug: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** All input for the `updateEventByNodeId` mutation. */
export type UpdateEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the event. */
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Event` that was updated by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Sport` that is related to this `Event`. */
  sport?: Maybe<Sport>;
};

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `updateFlagByNodeId` mutation. */
export type UpdateFlagByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Flag` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Flag` being updated. */
  patch: FlagPatch;
};

/** All input for the `updateFlag` mutation. */
export type UpdateFlagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the flag. */
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Flag` being updated. */
  patch: FlagPatch;
};

/** The output of our update `Flag` mutation. */
export type UpdateFlagPayload = {
  __typename?: 'UpdateFlagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `Flag`. */
  country?: Maybe<Country>;
  /** The `Flag` that was updated by this mutation. */
  flag?: Maybe<Flag>;
  /** An edge for our `Flag`. May be used by Relay 1. */
  flagEdge?: Maybe<FlagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Flag` mutation. */
export type UpdateFlagPayloadFlagEdgeArgs = {
  orderBy?: InputMaybe<Array<FlagsOrderBy>>;
};

/** All input for the `updateGroupByName` mutation. */
export type UpdateGroupByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Group` being updated. */
  patch: GroupPatch;
};

/** All input for the `updateGroupByNodeId` mutation. */
export type UpdateGroupByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Group` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Group` being updated. */
  patch: GroupPatch;
};

/** All input for the `updateGroup` mutation. */
export type UpdateGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Group` being updated. */
  patch: GroupPatch;
};

/** All input for the `updateGroupMedalByNodeId` mutation. */
export type UpdateGroupMedalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupMedal` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `GroupMedal` being updated. */
  patch: GroupMedalPatch;
};

/** All input for the `updateGroupMedal` mutation. */
export type UpdateGroupMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  medalId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `GroupMedal` being updated. */
  patch: GroupMedalPatch;
};

/** The output of our update `GroupMedal` mutation. */
export type UpdateGroupMedalPayload = {
  __typename?: 'UpdateGroupMedalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryPositive?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryPositive?: Maybe<Country>;
  /** Reads a single `Group` that is related to this `GroupMedal`. */
  group?: Maybe<Group>;
  /** The `GroupMedal` that was updated by this mutation. */
  groupMedal?: Maybe<GroupMedal>;
  /** An edge for our `GroupMedal`. May be used by Relay 1. */
  groupMedalEdge?: Maybe<GroupMedalsEdge>;
  /** Reads a single `Medal` that is related to this `GroupMedal`. */
  medal?: Maybe<Medal>;
  /** Reads a single `Player` that is related to this `GroupMedal`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `GroupMedal` mutation. */
export type UpdateGroupMedalPayloadGroupMedalEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

/** All input for the `updateGroupOlympiadByNodeId` mutation. */
export type UpdateGroupOlympiadByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiad` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `GroupOlympiad` being updated. */
  patch: GroupOlympiadPatch;
};

/** All input for the `updateGroupOlympiadCountryByNodeId` mutation. */
export type UpdateGroupOlympiadCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiadCountry` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `GroupOlympiadCountry` being updated. */
  patch: GroupOlympiadCountryPatch;
};

/** All input for the `updateGroupOlympiadCountry` mutation. */
export type UpdateGroupOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId: Scalars['UUID']['input'];
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `GroupOlympiadCountry` being updated. */
  patch: GroupOlympiadCountryPatch;
};

/** The output of our update `GroupOlympiadCountry` mutation. */
export type UpdateGroupOlympiadCountryPayload = {
  __typename?: 'UpdateGroupOlympiadCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupOlympiadCountry`. */
  country?: Maybe<Country>;
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadCountry`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** The `GroupOlympiadCountry` that was updated by this mutation. */
  groupOlympiadCountry?: Maybe<GroupOlympiadCountry>;
  /** An edge for our `GroupOlympiadCountry`. May be used by Relay 1. */
  groupOlympiadCountryEdge?: Maybe<GroupOlympiadCountriesEdge>;
  /** Reads a single `Player` that is related to this `GroupOlympiadCountry`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `GroupOlympiadCountry` mutation. */
export type UpdateGroupOlympiadCountryPayloadGroupOlympiadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};

/** All input for the `updateGroupOlympiad` mutation. */
export type UpdateGroupOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `GroupOlympiad` being updated. */
  patch: GroupOlympiadPatch;
};

/** The output of our update `GroupOlympiad` mutation. */
export type UpdateGroupOlympiadPayload = {
  __typename?: 'UpdateGroupOlympiadPayload';
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  badCountry?: Maybe<Country>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Player` that is related to this `GroupOlympiad`. */
  commissioner?: Maybe<Player>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  goodCountry?: Maybe<Country>;
  /** Reads a single `Group` that is related to this `GroupOlympiad`. */
  group?: Maybe<Group>;
  /** The `GroupOlympiad` that was updated by this mutation. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** An edge for our `GroupOlympiad`. May be used by Relay 1. */
  groupOlympiadEdge?: Maybe<GroupOlympiadsEdge>;
  /** Reads a single `Olympiad` that is related to this `GroupOlympiad`. */
  olympiad?: Maybe<Olympiad>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  suggestedCountry?: Maybe<Country>;
};

/** The output of our update `GroupOlympiad` mutation. */
export type UpdateGroupOlympiadPayloadGroupOlympiadEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};

/** All input for the `updateGroupOlympiadPlayerByNodeId` mutation. */
export type UpdateGroupOlympiadPlayerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiadPlayer` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `GroupOlympiadPlayer` being updated. */
  patch: GroupOlympiadPlayerPatch;
};

/** All input for the `updateGroupOlympiadPlayer` mutation. */
export type UpdateGroupOlympiadPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `GroupOlympiadPlayer` being updated. */
  patch: GroupOlympiadPlayerPatch;
  playerId: Scalars['UUID']['input'];
};

/** The output of our update `GroupOlympiadPlayer` mutation. */
export type UpdateGroupOlympiadPlayerPayload = {
  __typename?: 'UpdateGroupOlympiadPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadPlayer`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** The `GroupOlympiadPlayer` that was updated by this mutation. */
  groupOlympiadPlayer?: Maybe<GroupOlympiadPlayer>;
  /** An edge for our `GroupOlympiadPlayer`. May be used by Relay 1. */
  groupOlympiadPlayerEdge?: Maybe<GroupOlympiadPlayersEdge>;
  /** Reads a single `GroupPlayer` that is related to this `GroupOlympiadPlayer`. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `GroupOlympiadPlayer` mutation. */
export type UpdateGroupOlympiadPlayerPayloadGroupOlympiadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/** The output of our update `Group` mutation. */
export type UpdateGroupPayload = {
  __typename?: 'UpdateGroupPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Player` that is related to this `Group`. */
  commissioner?: Maybe<Player>;
  /** The `Group` that was updated by this mutation. */
  group?: Maybe<Group>;
  /** An edge for our `Group`. May be used by Relay 1. */
  groupEdge?: Maybe<GroupsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Group` mutation. */
export type UpdateGroupPayloadGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
};

/** All input for the `updateGroupPlayerByNodeId` mutation. */
export type UpdateGroupPlayerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `GroupPlayer` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `GroupPlayer` being updated. */
  patch: GroupPlayerPatch;
};

/** All input for the `updateGroupPlayer` mutation. */
export type UpdateGroupPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `GroupPlayer` being updated. */
  patch: GroupPlayerPatch;
  playerId: Scalars['UUID']['input'];
};

/** The output of our update `GroupPlayer` mutation. */
export type UpdateGroupPlayerPayload = {
  __typename?: 'UpdateGroupPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Group` that is related to this `GroupPlayer`. */
  group?: Maybe<Group>;
  /** The `GroupPlayer` that was updated by this mutation. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** An edge for our `GroupPlayer`. May be used by Relay 1. */
  groupPlayerEdge?: Maybe<GroupPlayersEdge>;
  /** Reads a single `Player` that is related to this `GroupPlayer`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `GroupPlayer` mutation. */
export type UpdateGroupPlayerPayloadGroupPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};

/** All input for the `updateMedalByNodeId` mutation. */
export type UpdateMedalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Medal` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Medal` being updated. */
  patch: MedalPatch;
};

/** All input for the `updateMedalClassByNodeId` mutation. */
export type UpdateMedalClassByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `MedalClass` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `MedalClass` being updated. */
  patch: MedalClassPatch;
};

/** All input for the `updateMedalClass` mutation. */
export type UpdateMedalClassInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  medalRank: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `MedalClass` being updated. */
  patch: MedalClassPatch;
};

/** The output of our update `MedalClass` mutation. */
export type UpdateMedalClassPayload = {
  __typename?: 'UpdateMedalClassPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MedalClass` that was updated by this mutation. */
  medalClass?: Maybe<MedalClass>;
  /** An edge for our `MedalClass`. May be used by Relay 1. */
  medalClassEdge?: Maybe<MedalClassesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `MedalClass` mutation. */
export type UpdateMedalClassPayloadMedalClassEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalClassesOrderBy>>;
};

/** All input for the `updateMedal` mutation. */
export type UpdateMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the medal. */
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Medal` being updated. */
  patch: MedalPatch;
};

/** The output of our update `Medal` mutation. */
export type UpdateMedalPayload = {
  __typename?: 'UpdateMedalPayload';
  /** Reads a single `Athlete` that is related to this `Medal`. */
  athlete?: Maybe<Athlete>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `Medal`. */
  country?: Maybe<Country>;
  /** The `Medal` that was updated by this mutation. */
  medal?: Maybe<Medal>;
  /** Reads a single `MedalClass` that is related to this `Medal`. */
  medalClassByMedalClass?: Maybe<MedalClass>;
  /** An edge for our `Medal`. May be used by Relay 1. */
  medalEdge?: Maybe<MedalsEdge>;
  /** Reads a single `MedalTeam` that is related to this `Medal`. */
  medalTeam?: Maybe<MedalTeam>;
  /** Reads a single `OlympiadEvent` that is related to this `Medal`. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Medal` mutation. */
export type UpdateMedalPayloadMedalEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/** All input for the `updateMedalTeamByNodeId` mutation. */
export type UpdateMedalTeamByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `MedalTeam` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `MedalTeam` being updated. */
  patch: MedalTeamPatch;
};

/** All input for the `updateMedalTeam` mutation. */
export type UpdateMedalTeamInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `MedalTeam` being updated. */
  patch: MedalTeamPatch;
};

/** The output of our update `MedalTeam` mutation. */
export type UpdateMedalTeamPayload = {
  __typename?: 'UpdateMedalTeamPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `MedalTeam` that was updated by this mutation. */
  medalTeam?: Maybe<MedalTeam>;
  /** An edge for our `MedalTeam`. May be used by Relay 1. */
  medalTeamEdge?: Maybe<MedalTeamsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `MedalTeam` mutation. */
export type UpdateMedalTeamPayloadMedalTeamEdgeArgs = {
  orderBy?: InputMaybe<Array<MedalTeamsOrderBy>>;
};

/** All input for the `updateOlympiadAthleteByNodeId` mutation. */
export type UpdateOlympiadAthleteByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadAthlete` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OlympiadAthlete` being updated. */
  patch: OlympiadAthletePatch;
};

/** All input for the `updateOlympiadAthlete` mutation. */
export type UpdateOlympiadAthleteInput = {
  athleteId: Scalars['UUID']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  olympiadId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `OlympiadAthlete` being updated. */
  patch: OlympiadAthletePatch;
};

/** The output of our update `OlympiadAthlete` mutation. */
export type UpdateOlympiadAthletePayload = {
  __typename?: 'UpdateOlympiadAthletePayload';
  /** Reads a single `Athlete` that is related to this `OlympiadAthlete`. */
  athlete?: Maybe<Athlete>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadAthlete`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadAthlete` that was updated by this mutation. */
  olympiadAthlete?: Maybe<OlympiadAthlete>;
  /** An edge for our `OlympiadAthlete`. May be used by Relay 1. */
  olympiadAthleteEdge?: Maybe<OlympiadAthletesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `OlympiadAthlete` mutation. */
export type UpdateOlympiadAthletePayloadOlympiadAthleteEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadAthletesOrderBy>>;
};

/** All input for the `updateOlympiadByNodeId` mutation. */
export type UpdateOlympiadByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Olympiad` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Olympiad` being updated. */
  patch: OlympiadPatch;
};

/** All input for the `updateOlympiadBySlug` mutation. */
export type UpdateOlympiadBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Olympiad` being updated. */
  patch: OlympiadPatch;
  slug: Scalars['String']['input'];
};

/** All input for the `updateOlympiadCountryByNodeId` mutation. */
export type UpdateOlympiadCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadCountry` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OlympiadCountry` being updated. */
  patch: OlympiadCountryPatch;
};

/** All input for the `updateOlympiadCountry` mutation. */
export type UpdateOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId: Scalars['UUID']['input'];
  olympiadId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `OlympiadCountry` being updated. */
  patch: OlympiadCountryPatch;
};

/** The output of our update `OlympiadCountry` mutation. */
export type UpdateOlympiadCountryPayload = {
  __typename?: 'UpdateOlympiadCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `OlympiadCountry`. */
  country?: Maybe<Country>;
  /** Reads a single `Olympiad` that is related to this `OlympiadCountry`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadCountry` that was updated by this mutation. */
  olympiadCountry?: Maybe<OlympiadCountry>;
  /** An edge for our `OlympiadCountry`. May be used by Relay 1. */
  olympiadCountryEdge?: Maybe<OlympiadCountriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `OlympiadCountry`. */
  region?: Maybe<Region>;
};

/** The output of our update `OlympiadCountry` mutation. */
export type UpdateOlympiadCountryPayloadOlympiadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

/** All input for the `updateOlympiadEventByNodeId` mutation. */
export type UpdateOlympiadEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadEvent` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OlympiadEvent` being updated. */
  patch: OlympiadEventPatch;
};

/** All input for the `updateOlympiadEvent` mutation. */
export type UpdateOlympiadEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `OlympiadEvent` being updated. */
  patch: OlympiadEventPatch;
};

/** The output of our update `OlympiadEvent` mutation. */
export type UpdateOlympiadEventPayload = {
  __typename?: 'UpdateOlympiadEventPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Event` that is related to this `OlympiadEvent`. */
  event?: Maybe<Event>;
  /** Reads a single `Olympiad` that is related to this `OlympiadEvent`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadEvent` that was updated by this mutation. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** An edge for our `OlympiadEvent`. May be used by Relay 1. */
  olympiadEventEdge?: Maybe<OlympiadEventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `OlympiadEvent` mutation. */
export type UpdateOlympiadEventPayloadOlympiadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};

/** All input for the `updateOlympiad` mutation. */
export type UpdateOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the olympiad. */
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Olympiad` being updated. */
  patch: OlympiadPatch;
};

/** The output of our update `Olympiad` mutation. */
export type UpdateOlympiadPayload = {
  __typename?: 'UpdateOlympiadPayload';
  /** Reads a single `City` that is related to this `Olympiad`. */
  city?: Maybe<City>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Olympiad` that was updated by this mutation. */
  olympiad?: Maybe<Olympiad>;
  /** An edge for our `Olympiad`. May be used by Relay 1. */
  olympiadEdge?: Maybe<OlympiadsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Olympiad` mutation. */
export type UpdateOlympiadPayloadOlympiadEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadsOrderBy>>;
};

/** All input for the `updateOlympiadRegionSettingByNodeId` mutation. */
export type UpdateOlympiadRegionSettingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadRegionSetting` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OlympiadRegionSetting` being updated. */
  patch: OlympiadRegionSettingPatch;
};

/** All input for the `updateOlympiadRegionSetting` mutation. */
export type UpdateOlympiadRegionSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  olympiadId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `OlympiadRegionSetting` being updated. */
  patch: OlympiadRegionSettingPatch;
  regionId: Scalars['UUID']['input'];
};

/** The output of our update `OlympiadRegionSetting` mutation. */
export type UpdateOlympiadRegionSettingPayload = {
  __typename?: 'UpdateOlympiadRegionSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadRegionSetting`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadRegionSetting` that was updated by this mutation. */
  olympiadRegionSetting?: Maybe<OlympiadRegionSetting>;
  /** An edge for our `OlympiadRegionSetting`. May be used by Relay 1. */
  olympiadRegionSettingEdge?: Maybe<OlympiadRegionSettingsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `OlympiadRegionSetting`. */
  region?: Maybe<Region>;
};

/** The output of our update `OlympiadRegionSetting` mutation. */
export type UpdateOlympiadRegionSettingPayloadOlympiadRegionSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};

/** All input for the `updateOlympiadSportByNodeId` mutation. */
export type UpdateOlympiadSportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `OlympiadSport` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `OlympiadSport` being updated. */
  patch: OlympiadSportPatch;
};

/** All input for the `updateOlympiadSport` mutation. */
export type UpdateOlympiadSportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  olympiadId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `OlympiadSport` being updated. */
  patch: OlympiadSportPatch;
  sportId: Scalars['UUID']['input'];
};

/** The output of our update `OlympiadSport` mutation. */
export type UpdateOlympiadSportPayload = {
  __typename?: 'UpdateOlympiadSportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Olympiad` that is related to this `OlympiadSport`. */
  olympiad?: Maybe<Olympiad>;
  /** The `OlympiadSport` that was updated by this mutation. */
  olympiadSport?: Maybe<OlympiadSport>;
  /** An edge for our `OlympiadSport`. May be used by Relay 1. */
  olympiadSportEdge?: Maybe<OlympiadSportsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Sport` that is related to this `OlympiadSport`. */
  sport?: Maybe<Sport>;
};

/** The output of our update `OlympiadSport` mutation. */
export type UpdateOlympiadSportPayloadOlympiadSportEdgeArgs = {
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};

/** All input for the `updatePlayerByNodeId` mutation. */
export type UpdatePlayerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Player` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Player` being updated. */
  patch: PlayerPatch;
};

/** All input for the `updatePlayerBySlug` mutation. */
export type UpdatePlayerBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Player` being updated. */
  patch: PlayerPatch;
  slug: Scalars['String']['input'];
};

/** All input for the `updatePlayerByUsername` mutation. */
export type UpdatePlayerByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Player` being updated. */
  patch: PlayerPatch;
  /** The username of the player. */
  username: Scalars['String']['input'];
};

/** All input for the `updatePlayer` mutation. */
export type UpdatePlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the player. */
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Player` being updated. */
  patch: PlayerPatch;
};

/** The output of our update `Player` mutation. */
export type UpdatePlayerPayload = {
  __typename?: 'UpdatePlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Player` that was updated by this mutation. */
  player?: Maybe<Player>;
  /** An edge for our `Player`. May be used by Relay 1. */
  playerEdge?: Maybe<PlayersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Player` mutation. */
export type UpdatePlayerPayloadPlayerEdgeArgs = {
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
};

/** All input for the `updateRegionByName` mutation. */
export type UpdateRegionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
};

/** All input for the `updateRegionByNodeId` mutation. */
export type UpdateRegionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Region` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
};

/** All input for the `updateRegionBySlug` mutation. */
export type UpdateRegionBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
  slug: Scalars['String']['input'];
};

/** All input for the `updateRegion` mutation. */
export type UpdateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
};

/** The output of our update `Region` mutation. */
export type UpdateRegionPayload = {
  __typename?: 'UpdateRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Region` that was updated by this mutation. */
  region?: Maybe<Region>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};

/** The output of our update `Region` mutation. */
export type UpdateRegionPayloadRegionEdgeArgs = {
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** All input for the `updateSportByName` mutation. */
export type UpdateSportByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the sport. */
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Sport` being updated. */
  patch: SportPatch;
};

/** All input for the `updateSportByNodeId` mutation. */
export type UpdateSportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Sport` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Sport` being updated. */
  patch: SportPatch;
};

/** All input for the `updateSportBySlug` mutation. */
export type UpdateSportBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Sport` being updated. */
  patch: SportPatch;
  /** The slug for the sport. */
  slug: Scalars['String']['input'];
};

/** All input for the `updateSport` mutation. */
export type UpdateSportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary key for the sport. */
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Sport` being updated. */
  patch: SportPatch;
};

/** The output of our update `Sport` mutation. */
export type UpdateSportPayload = {
  __typename?: 'UpdateSportPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Sport` that was updated by this mutation. */
  sport?: Maybe<Sport>;
  /** An edge for our `Sport`. May be used by Relay 1. */
  sportEdge?: Maybe<SportsEdge>;
};

/** The output of our update `Sport` mutation. */
export type UpdateSportPayloadSportEdgeArgs = {
  orderBy?: InputMaybe<Array<SportsOrderBy>>;
};

/** All input for the `upsertGroupMedal` mutation. */
export type UpsertGroupMedalInput = {
  badcountrynegative?: InputMaybe<Scalars['UUID']['input']>;
  badcountrypositive?: InputMaybe<Scalars['UUID']['input']>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  goodcountrynegative?: InputMaybe<Scalars['UUID']['input']>;
  goodcountrypositive?: InputMaybe<Scalars['UUID']['input']>;
  groupid?: InputMaybe<Scalars['UUID']['input']>;
  medalid?: InputMaybe<Scalars['UUID']['input']>;
  newscore?: InputMaybe<Scalars['BigFloat']['input']>;
  playerid?: InputMaybe<Scalars['UUID']['input']>;
};

/** The output of our `upsertGroupMedal` mutation. */
export type UpsertGroupMedalPayload = {
  __typename?: 'UpsertGroupMedalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryPositive?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryPositive?: Maybe<Country>;
  /** Reads a single `Group` that is related to this `GroupMedal`. */
  group?: Maybe<Group>;
  groupMedal?: Maybe<GroupMedal>;
  /** An edge for our `GroupMedal`. May be used by Relay 1. */
  groupMedalEdge?: Maybe<GroupMedalsEdge>;
  /** Reads a single `Medal` that is related to this `GroupMedal`. */
  medal?: Maybe<Medal>;
  /** Reads a single `Player` that is related to this `GroupMedal`. */
  player?: Maybe<Player>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our `upsertGroupMedal` mutation. */
export type UpsertGroupMedalPayloadGroupMedalEdgeArgs = {
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};

export type UserAuthenticator = Node & {
  __typename?: 'UserAuthenticator';
  counter?: Maybe<Scalars['BigInt']['output']>;
  credentialBackedUp?: Maybe<Scalars['Boolean']['output']>;
  credentialDeviceType?: Maybe<Scalars['String']['output']>;
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  os: Scalars['String']['output'];
  /** Reads a single `Player` that is related to this `UserAuthenticator`. */
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['UUID']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `UserAuthenticator` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type UserAuthenticatorCondition = {
  /** Checks for equality with the object’s `counter` field. */
  counter?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `credentialBackedUp` field. */
  credentialBackedUp?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `credentialDeviceType` field. */
  credentialDeviceType?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `credentialId` field. */
  credentialId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `credentialPublicKey` field. */
  credentialPublicKey?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `icon` field. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `os` field. */
  os?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `transports` field. */
  transports?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `UserAuthenticator` object types. All fields are combined with a logical ‘and.’ */
export type UserAuthenticatorFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserAuthenticatorFilter>>;
  /** Filter by the object’s `counter` field. */
  counter?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `credentialBackedUp` field. */
  credentialBackedUp?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `credentialDeviceType` field. */
  credentialDeviceType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `credentialId` field. */
  credentialId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `credentialPublicKey` field. */
  credentialPublicKey?: InputMaybe<StringFilter>;
  /** Filter by the object’s `icon` field. */
  icon?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserAuthenticatorFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserAuthenticatorFilter>>;
  /** Filter by the object’s `os` field. */
  os?: InputMaybe<StringFilter>;
  /** Filter by the object’s `playerId` field. */
  playerId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `transports` field. */
  transports?: InputMaybe<StringFilter>;
};

/** A connection to a list of `UserAuthenticator` values. */
export type UserAuthenticatorsConnection = {
  __typename?: 'UserAuthenticatorsConnection';
  /** A list of edges which contains the `UserAuthenticator` and cursor to aid in pagination. */
  edges: Array<UserAuthenticatorsEdge>;
  /** A list of `UserAuthenticator` objects. */
  nodes: Array<Maybe<UserAuthenticator>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserAuthenticator` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `UserAuthenticator` edge in the connection. */
export type UserAuthenticatorsEdge = {
  __typename?: 'UserAuthenticatorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `UserAuthenticator` at the end of the edge. */
  node?: Maybe<UserAuthenticator>;
};

/** Methods to use when ordering `UserAuthenticator`. */
export enum UserAuthenticatorsOrderBy {
  CounterAsc = 'COUNTER_ASC',
  CounterDesc = 'COUNTER_DESC',
  CredentialBackedUpAsc = 'CREDENTIAL_BACKED_UP_ASC',
  CredentialBackedUpDesc = 'CREDENTIAL_BACKED_UP_DESC',
  CredentialDeviceTypeAsc = 'CREDENTIAL_DEVICE_TYPE_ASC',
  CredentialDeviceTypeDesc = 'CREDENTIAL_DEVICE_TYPE_DESC',
  CredentialIdAsc = 'CREDENTIAL_ID_ASC',
  CredentialIdDesc = 'CREDENTIAL_ID_DESC',
  CredentialPublicKeyAsc = 'CREDENTIAL_PUBLIC_KEY_ASC',
  CredentialPublicKeyDesc = 'CREDENTIAL_PUBLIC_KEY_DESC',
  IconAsc = 'ICON_ASC',
  IconDesc = 'ICON_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OsAsc = 'OS_ASC',
  OsDesc = 'OS_DESC',
  PlayerByPlayerIdIdAsc = 'PLAYER_BY_PLAYER_ID__ID_ASC',
  PlayerByPlayerIdIdDesc = 'PLAYER_BY_PLAYER_ID__ID_DESC',
  PlayerByPlayerIdSlugAsc = 'PLAYER_BY_PLAYER_ID__SLUG_ASC',
  PlayerByPlayerIdSlugDesc = 'PLAYER_BY_PLAYER_ID__SLUG_DESC',
  PlayerByPlayerIdUsernameAsc = 'PLAYER_BY_PLAYER_ID__USERNAME_ASC',
  PlayerByPlayerIdUsernameDesc = 'PLAYER_BY_PLAYER_ID__USERNAME_DESC',
  PlayerIdAsc = 'PLAYER_ID_ASC',
  PlayerIdDesc = 'PLAYER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TransportsAsc = 'TRANSPORTS_ASC',
  TransportsDesc = 'TRANSPORTS_DESC'
}

export type Winner = {
  __typename?: 'Winner';
  careerMedals?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  genderEvent?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  medalClass?: Maybe<Scalars['Int']['output']>;
  sport?: Maybe<Scalars['String']['output']>;
};

export type WinnersPayload = {
  __typename?: 'WinnersPayload';
  winners?: Maybe<Array<Maybe<Winner>>>;
};

export type CityOlympiadFragment = {
  __typename?: 'Olympiad';
  id: any;
  year: number;
  olympiadType?: Olympiadtype | null;
};

export type CityFieldsFragment = {
  __typename?: 'City';
  id: any;
  name?: string | null;
  slug?: string | null;
  firstOlympiad?: number | null;
  country?: {
    __typename?: 'Country';
    name?: string | null;
    flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
  } | null;
  olympiads: {
    __typename?: 'OlympiadsConnection';
    nodes: Array<{ __typename?: 'Olympiad'; id: any; year: number; olympiadType?: Olympiadtype | null } | null>;
  };
};

export type GetCityQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  now: Scalars['Datetime']['input'];
}>;

export type GetCityQuery = {
  __typename?: 'Query';
  cityBySlug?: {
    __typename?: 'City';
    id: any;
    name?: string | null;
    slug?: string | null;
    firstOlympiad?: number | null;
    country?: {
      __typename?: 'Country';
      name?: string | null;
      flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
    } | null;
    olympiads: {
      __typename?: 'OlympiadsConnection';
      nodes: Array<{ __typename?: 'Olympiad'; id: any; year: number; olympiadType?: Olympiadtype | null } | null>;
    };
  } | null;
};

export type GetCitiesQueryVariables = Exact<{
  now: Scalars['Datetime']['input'];
}>;

export type GetCitiesQuery = {
  __typename?: 'Query';
  cities?: {
    __typename?: 'CitiesConnection';
    nodes: Array<{
      __typename?: 'City';
      id: any;
      name?: string | null;
      slug?: string | null;
      firstOlympiad?: number | null;
      country?: {
        __typename?: 'Country';
        name?: string | null;
        flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
      } | null;
      olympiads: {
        __typename?: 'OlympiadsConnection';
        nodes: Array<{ __typename?: 'Olympiad'; id: any; year: number; olympiadType?: Olympiadtype | null } | null>;
      };
    } | null>;
  } | null;
};

export type GetOlympicDataQueryVariables = Exact<{
  now: Scalars['Datetime']['input'];
}>;

export type GetOlympicDataQuery = {
  __typename?: 'Query';
  olympiads?: {
    __typename?: 'OlympiadsConnection';
    nodes: Array<{
      __typename?: 'Olympiad';
      id: any;
      year: number;
      olympiadType?: Olympiadtype | null;
      city?: {
        __typename?: 'City';
        id: any;
        name?: string | null;
        slug?: string | null;
        country?: {
          __typename?: 'Country';
          name?: string | null;
          flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
        } | null;
      } | null;
    } | null>;
  } | null;
  cities?: {
    __typename?: 'CitiesConnection';
    nodes: Array<{
      __typename?: 'City';
      id: any;
      name?: string | null;
      slug?: string | null;
      firstOlympiad?: number | null;
      country?: {
        __typename?: 'Country';
        name?: string | null;
        flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
      } | null;
      olympiads: {
        __typename?: 'OlympiadsConnection';
        nodes: Array<{ __typename?: 'Olympiad'; id: any; year: number; olympiadType?: Olympiadtype | null } | null>;
      };
    } | null>;
  } | null;
};

export type GetFlagsQueryVariables = Exact<{
  visitedCountries?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  now: Scalars['Datetime']['input'];
}>;

export type GetFlagsQuery = {
  __typename?: 'Query';
  countries?: {
    __typename?: 'CountriesConnection';
    nodes: Array<{
      __typename?: 'Country';
      name?: string | null;
      flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
    } | null>;
  } | null;
};

export type OlympiadFieldsCityFragment = {
  __typename?: 'City';
  id: any;
  name?: string | null;
  slug?: string | null;
  country?: {
    __typename?: 'Country';
    name?: string | null;
    flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
  } | null;
};

export type OlympiadFieldsFragment = {
  __typename?: 'Olympiad';
  id: any;
  year: number;
  olympiadType?: Olympiadtype | null;
  city?: {
    __typename?: 'City';
    id: any;
    name?: string | null;
    slug?: string | null;
    country?: {
      __typename?: 'Country';
      name?: string | null;
      flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
    } | null;
  } | null;
};

export type GetOlympiadsQueryVariables = Exact<{
  now: Scalars['Datetime']['input'];
}>;

export type GetOlympiadsQuery = {
  __typename?: 'Query';
  olympiads?: {
    __typename?: 'OlympiadsConnection';
    nodes: Array<{
      __typename?: 'Olympiad';
      id: any;
      year: number;
      olympiadType?: Olympiadtype | null;
      city?: {
        __typename?: 'City';
        id: any;
        name?: string | null;
        slug?: string | null;
        country?: {
          __typename?: 'Country';
          name?: string | null;
          flagByTimestamp?: { __typename?: 'Flag'; png?: string | null } | null;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export const CityOlympiadFragmentDoc = gql`
  fragment CityOlympiad on Olympiad {
    id
    year
    olympiadType
  }
`;
export const CityFieldsFragmentDoc = gql`
  fragment CityFields on City {
    id
    name
    slug
    firstOlympiad
    country {
      name
      flagByTimestamp(
        dateTimestamp: { start: { value: $now, inclusive: true }, end: { value: $now, inclusive: true } }
      ) {
        png
      }
    }
    olympiads(orderBy: YEAR_ASC, condition: { realOlympiad: true }) {
      nodes {
        ...CityOlympiad
      }
    }
  }
  ${CityOlympiadFragmentDoc}
`;
export const OlympiadFieldsCityFragmentDoc = gql`
  fragment OlympiadFieldsCity on City {
    id
    name
    slug
    country {
      name
      flagByTimestamp(
        dateTimestamp: { start: { value: $now, inclusive: true }, end: { value: $now, inclusive: true } }
      ) {
        png
      }
    }
  }
`;
export const OlympiadFieldsFragmentDoc = gql`
  fragment OlympiadFields on Olympiad {
    id
    year
    olympiadType
    city {
      ...OlympiadFieldsCity
    }
  }
  ${OlympiadFieldsCityFragmentDoc}
`;
export const GetCityDocument = gql`
  query GetCity($slug: String!, $now: Datetime!) {
    cityBySlug(slug: $slug) {
      ...CityFields
    }
  }
  ${CityFieldsFragmentDoc}
`;
export const GetCitiesDocument = gql`
  query GetCities($now: Datetime!) {
    cities {
      nodes {
        ...CityFields
      }
    }
  }
  ${CityFieldsFragmentDoc}
`;
export const GetOlympicDataDocument = gql`
  query GetOlympicData($now: Datetime!) {
    olympiads(orderBy: YEAR_ASC) {
      nodes {
        ...OlympiadFields
      }
    }
    cities {
      nodes {
        ...CityFields
      }
    }
  }
  ${OlympiadFieldsFragmentDoc}
  ${CityFieldsFragmentDoc}
`;
export const GetFlagsDocument = gql`
  query GetFlags($visitedCountries: [String!], $now: Datetime!) {
    countries(filter: { name: { in: $visitedCountries } }) {
      nodes {
        name
        flagByTimestamp(
          dateTimestamp: { start: { value: $now, inclusive: true }, end: { value: $now, inclusive: true } }
        ) {
          png
        }
      }
    }
  }
`;
export const GetOlympiadsDocument = gql`
  query GetOlympiads($now: Datetime!) {
    olympiads(orderBy: YEAR_ASC) {
      nodes {
        ...OlympiadFields
      }
    }
  }
  ${OlympiadFieldsFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetCityDocumentString = print(GetCityDocument);
const GetCitiesDocumentString = print(GetCitiesDocument);
const GetOlympicDataDocumentString = print(GetOlympicDataDocument);
const GetFlagsDocumentString = print(GetFlagsDocument);
const GetOlympiadsDocumentString = print(GetOlympiadsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetCity(
      variables: GetCityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetCityQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetCityQuery>(GetCityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'GetCity',
        'query'
      );
    },
    GetCities(
      variables: GetCitiesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetCitiesQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetCitiesQuery>(GetCitiesDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'GetCities',
        'query'
      );
    },
    GetOlympicData(
      variables: GetOlympicDataQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetOlympicDataQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetOlympicDataQuery>(GetOlympicDataDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'GetOlympicData',
        'query'
      );
    },
    GetFlags(
      variables: GetFlagsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetFlagsQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetFlagsQuery>(GetFlagsDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'GetFlags',
        'query'
      );
    },
    GetOlympiads(
      variables: GetOlympiadsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<{ data: GetOlympiadsQuery; extensions?: any; headers: Dom.Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<GetOlympiadsQuery>(GetOlympiadsDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'GetOlympiads',
        'query'
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
