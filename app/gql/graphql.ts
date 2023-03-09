/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export type Athlete = Node & {
  __typename?: 'Athlete';
  bronzeMedals?: Maybe<Scalars['Int']>;
  /** The full first name of the athlete. */
  fullFirstName?: Maybe<Scalars['String']>;
  /** The full last name of the athlete. */
  fullLastName?: Maybe<Scalars['String']>;
  /** The full name of the athlete. */
  fullName?: Maybe<Scalars['String']>;
  goldMedals?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  otherNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  silverMedals?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  totalMedals?: Maybe<Scalars['Int']>;
  /** The used first name of the athlete. */
  usedFirstName?: Maybe<Scalars['String']>;
  /** The used last name of the athlete. */
  usedLastName?: Maybe<Scalars['String']>;
  /** The used name of the athlete. */
  usedName?: Maybe<Scalars['String']>;
};


export type AthleteMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/** A condition to be used against `Athlete` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AthleteCondition = {
  /** Checks for equality with the object’s `bronzeMedals` field. */
  bronzeMedals?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `fullFirstName` field. */
  fullFirstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fullLastName` field. */
  fullLastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `goldMedals` field. */
  goldMedals?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `otherNames` field. */
  otherNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `silverMedals` field. */
  silverMedals?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `totalMedals` field. */
  totalMedals?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `usedFirstName` field. */
  usedFirstName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `usedLastName` field. */
  usedLastName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `usedName` field. */
  usedName?: InputMaybe<Scalars['String']>;
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
  totalCount: Scalars['Int'];
};

/** A `Athlete` edge in the connection. */
export type AthletesEdge = {
  __typename?: 'AthletesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
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
  totalCount: Scalars['Int'];
};

/** A `City` edge in the connection. */
export type CitiesEdge = {
  __typename?: 'CitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  countryId: Scalars['UUID'];
  /** The primary key for the city. */
  id: Scalars['UUID'];
  /** The name of the city. */
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Olympiad`. */
  olympiads: OlympiadsConnection;
  slug?: Maybe<Scalars['String']>;
};


/** Cities that hosted an olympiad. */
export type CityOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadCondition>;
  filter?: InputMaybe<OlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadsOrderBy>>;
};

/** A condition to be used against `City` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CityCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `City` object types. All fields are combined with a logical ‘and.’ */
export type CityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CityFilter>>;
  /** Filter by the object’s `countryId` field. */
  countryId?: InputMaybe<UuidFilter>;
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
  totalCount: Scalars['Int'];
};

/** A `Country` edge in the connection. */
export type CountriesEdge = {
  __typename?: 'CountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** Reads and enables pagination through a set of `Medal`. */
  medalsByOlympiad: MedalsConnection;
  name?: Maybe<Scalars['String']>;
  nocs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `OlympiadCountry`. */
  olympiadCountries: OlympiadCountriesConnection;
  /** Reads a single `Region` that is related to this `Country`. */
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['UUID']>;
  slug?: Maybe<Scalars['String']>;
};


export type CountryCitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CityCondition>;
  filter?: InputMaybe<CityFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};


export type CountryFlagByTimestampArgs = {
  dateTimestamp?: InputMaybe<DatetimeRangeInput>;
};


export type CountryFlagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FlagCondition>;
  filter?: InputMaybe<FlagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FlagsOrderBy>>;
};


export type CountryGroupMedalsByBadCountryNegativeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


export type CountryGroupMedalsByBadCountryPositiveArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


export type CountryGroupMedalsByGoodCountryNegativeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


export type CountryGroupMedalsByGoodCountryPositiveArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


export type CountryGroupOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};


export type CountryGroupOlympiadsByBadCountryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};


export type CountryGroupOlympiadsByGoodCountryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};


export type CountryGroupOlympiadsBySuggestedCountryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};


export type CountryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};


export type CountryMedalsByOlympiadArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  olympiadSlug?: InputMaybe<Scalars['String']>;
};


export type CountryOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};

/** A condition to be used against `Country` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CountryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `nocs` field. */
  nocs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
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

/** All input for the create `GroupMedal` mutation. */
export type CreateGroupMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the create `GroupOlympiad` mutation. */
export type CreateGroupOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the create `OlympiadCountry` mutation. */
export type CreateOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the create `OlympiadRegionSetting` mutation. */
export type CreateOlympiadRegionSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the create `Region` mutation. */
export type CreateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
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
  inclusive: Scalars['Boolean'];
  /** The value at one end of our range. */
  value: Scalars['Datetime'];
};

/** The value at one end of a range. A range can either include this value, or not. */
export type DatetimeRangeBoundInput = {
  /** Whether or not the value of this bound is included in the range. */
  inclusive: Scalars['Boolean'];
  /** The value at one end of our range. */
  value: Scalars['Datetime'];
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
  containsElement?: InputMaybe<Scalars['Datetime']>;
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
  isNull?: InputMaybe<Scalars['Boolean']>;
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

/** All input for the `deleteGroupMedalByNodeId` mutation. */
export type DeleteGroupMedalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GroupMedal` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGroupMedal` mutation. */
export type DeleteGroupMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  medalId: Scalars['UUID'];
};

/** The output of our delete `GroupMedal` mutation. */
export type DeleteGroupMedalPayload = {
  __typename?: 'DeleteGroupMedalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryPositive?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryPositive?: Maybe<Country>;
  deletedGroupMedalNodeId?: Maybe<Scalars['ID']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiad` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGroupOlympiad` mutation. */
export type DeleteGroupOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
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
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Player` that is related to this `GroupOlympiad`. */
  commissioner?: Maybe<Player>;
  deletedGroupOlympiadNodeId?: Maybe<Scalars['ID']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiadPlayer` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGroupOlympiadPlayer` mutation. */
export type DeleteGroupOlympiadPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
  playerId: Scalars['UUID'];
};

/** The output of our delete `GroupOlympiadPlayer` mutation. */
export type DeleteGroupOlympiadPlayerPayload = {
  __typename?: 'DeleteGroupOlympiadPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGroupOlympiadPlayerNodeId?: Maybe<Scalars['ID']>;
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

/** All input for the `deleteOlympiadCountryByNodeId` mutation. */
export type DeleteOlympiadCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OlympiadCountry` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteOlympiadCountry` mutation. */
export type DeleteOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  countryId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
};

/** The output of our delete `OlympiadCountry` mutation. */
export type DeleteOlympiadCountryPayload = {
  __typename?: 'DeleteOlympiadCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Country` that is related to this `OlympiadCountry`. */
  country?: Maybe<Country>;
  deletedOlympiadCountryNodeId?: Maybe<Scalars['ID']>;
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

/** All input for the `deleteOlympiadRegionSettingByNodeId` mutation. */
export type DeleteOlympiadRegionSettingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OlympiadRegionSetting` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteOlympiadRegionSetting` mutation. */
export type DeleteOlympiadRegionSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  olympiadId: Scalars['UUID'];
  regionId: Scalars['UUID'];
};

/** The output of our delete `OlympiadRegionSetting` mutation. */
export type DeleteOlympiadRegionSettingPayload = {
  __typename?: 'DeleteOlympiadRegionSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOlympiadRegionSettingNodeId?: Maybe<Scalars['ID']>;
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

/** All input for the `deleteRegionByName` mutation. */
export type DeleteRegionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteRegionByNodeId` mutation. */
export type DeleteRegionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Region` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRegionBySlug` mutation. */
export type DeleteRegionBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
};

/** All input for the `deleteRegion` mutation. */
export type DeleteRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Region` mutation. */
export type DeleteRegionPayload = {
  __typename?: 'DeleteRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRegionNodeId?: Maybe<Scalars['ID']>;
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

/** All input for the `draftCountry` mutation. */
export type DraftCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  countryid?: InputMaybe<Scalars['UUID']>;
  groupid?: InputMaybe<Scalars['UUID']>;
  olympiadid?: InputMaybe<Scalars['UUID']>;
  suggestedcountryid?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `draftCountry` mutation. */
export type DraftCountryPayload = {
  __typename?: 'DraftCountryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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

/** Specific events that are part of a sport. */
export type Event = Node & {
  __typename?: 'Event';
  fullSlug?: Maybe<Scalars['String']>;
  /** The primary key for the event. */
  id: Scalars['UUID'];
  /** The name of the event. */
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  olympiadEvents: OlympiadEventsConnection;
  /** The slug for the event. */
  slug?: Maybe<Scalars['String']>;
  /** Reads a single `Sport` that is related to this `Event`. */
  sport?: Maybe<Sport>;
  /** The foreign key for the sport the event belongs to. */
  sportId: Scalars['UUID'];
  team?: Maybe<Scalars['Boolean']>;
};


/** Specific events that are part of a sport. */
export type EventOlympiadEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadEventCondition>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `fullSlug` field. */
  fullSlug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `sportId` field. */
  sportId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `team` field. */
  team?: InputMaybe<Scalars['Boolean']>;
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
  totalCount: Scalars['Int'];
};

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: 'EventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  countryId: Scalars['UUID'];
  dates?: Maybe<DatetimeRange>;
  /** The primary key for the flag. */
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  png?: Maybe<Scalars['String']>;
  /** The url to the svg of the flag image. */
  svg?: Maybe<Scalars['String']>;
  /** A range of years the flag was used for the country. */
  years?: Maybe<IntRange>;
};

/** A condition to be used against `Flag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FlagCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `dates` field. */
  dates?: InputMaybe<DatetimeRangeInput>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `png` field. */
  png?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `svg` field. */
  svg?: InputMaybe<Scalars['String']>;
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

export type FlagUrlResponse = {
  __typename?: 'FlagUrlResponse';
  png?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['String']>;
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
  totalCount: Scalars['Int'];
};

/** A `Flag` edge in the connection. */
export type FlagsEdge = {
  __typename?: 'FlagsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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

export type Group = Node & {
  __typename?: 'Group';
  /** Reads a single `Player` that is related to this `Group`. */
  commissioner?: Maybe<Player>;
  commissionerId?: Maybe<Scalars['UUID']>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedals: GroupMedalsConnection;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiads: GroupOlympiadsConnection;
  /** Reads and enables pagination through a set of `GroupPlayer`. */
  groupPlayers: GroupPlayersConnection;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type GroupGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


export type GroupGroupOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};


export type GroupGroupPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupPlayerCondition>;
  filter?: InputMaybe<GroupPlayerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};

/** A condition to be used against `Group` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GroupCondition = {
  /** Checks for equality with the object’s `commissionerId` field. */
  commissionerId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
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

export type GroupMedal = Node & {
  __typename?: 'GroupMedal';
  badCountryNegative?: Maybe<Scalars['UUID']>;
  badCountryPositive?: Maybe<Scalars['UUID']>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByBadCountryPositive?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryNegative?: Maybe<Country>;
  /** Reads a single `Country` that is related to this `GroupMedal`. */
  countryByGoodCountryPositive?: Maybe<Country>;
  goodCountryNegative?: Maybe<Scalars['UUID']>;
  goodCountryPositive?: Maybe<Scalars['UUID']>;
  /** Reads a single `Group` that is related to this `GroupMedal`. */
  group?: Maybe<Group>;
  groupId: Scalars['UUID'];
  /** Reads a single `Medal` that is related to this `GroupMedal`. */
  medal?: Maybe<Medal>;
  medalId: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Player` that is related to this `GroupMedal`. */
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['UUID']>;
  score?: Maybe<Scalars['BigFloat']>;
};

/**
 * A condition to be used against `GroupMedal` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GroupMedalCondition = {
  /** Checks for equality with the object’s `badCountryNegative` field. */
  badCountryNegative?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `badCountryPositive` field. */
  badCountryPositive?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `goodCountryNegative` field. */
  goodCountryNegative?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `goodCountryPositive` field. */
  goodCountryPositive?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `medalId` field. */
  medalId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `score` field. */
  score?: InputMaybe<Scalars['BigFloat']>;
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
  badCountryNegative?: InputMaybe<Scalars['UUID']>;
  badCountryPositive?: InputMaybe<Scalars['UUID']>;
  goodCountryNegative?: InputMaybe<Scalars['UUID']>;
  goodCountryPositive?: InputMaybe<Scalars['UUID']>;
  groupId: Scalars['UUID'];
  medalId: Scalars['UUID'];
  playerId?: InputMaybe<Scalars['UUID']>;
  score?: InputMaybe<Scalars['BigFloat']>;
};

/** Represents an update to a `GroupMedal`. Fields that are set will be updated. */
export type GroupMedalPatch = {
  badCountryNegative?: InputMaybe<Scalars['UUID']>;
  badCountryPositive?: InputMaybe<Scalars['UUID']>;
  goodCountryNegative?: InputMaybe<Scalars['UUID']>;
  goodCountryPositive?: InputMaybe<Scalars['UUID']>;
  groupId?: InputMaybe<Scalars['UUID']>;
  medalId?: InputMaybe<Scalars['UUID']>;
  playerId?: InputMaybe<Scalars['UUID']>;
  score?: InputMaybe<Scalars['BigFloat']>;
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
  totalCount: Scalars['Int'];
};

/** A `GroupMedal` edge in the connection. */
export type GroupMedalsEdge = {
  __typename?: 'GroupMedalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  badCountry?: Maybe<Country>;
  badCountryId?: Maybe<Scalars['UUID']>;
  /** Reads a single `Player` that is related to this `GroupOlympiad`. */
  commissioner?: Maybe<Player>;
  commissionerId?: Maybe<Scalars['UUID']>;
  drafted?: Maybe<Scalars['Boolean']>;
  draftingplayer?: Maybe<Scalars['UUID']>;
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  goodCountry?: Maybe<Country>;
  goodCountryId?: Maybe<Scalars['UUID']>;
  /** Reads a single `Group` that is related to this `GroupOlympiad`. */
  group?: Maybe<Group>;
  groupId: Scalars['UUID'];
  /** Reads and enables pagination through a set of `GroupOlympiadCountry`. */
  groupOlympiadCountriesByGroupIdAndOlympiadId: GroupOlympiadCountriesConnection;
  /** Reads and enables pagination through a set of `GroupOlympiadPlayer`. */
  groupOlympiadPlayersByGroupIdAndOlympiadId: GroupOlympiadPlayersConnection;
  locked?: Maybe<Scalars['Boolean']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Olympiad` that is related to this `GroupOlympiad`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID'];
  playerorder?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  roundnum?: Maybe<Scalars['Int']>;
  subscriptionId: Scalars['UUID'];
  /** Reads a single `Country` that is related to this `GroupOlympiad`. */
  suggestedCountry?: Maybe<Country>;
  suggestedCountryId?: Maybe<Scalars['UUID']>;
};


export type GroupOlympiadGroupOlympiadCountriesByGroupIdAndOlympiadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};


export type GroupOlympiadGroupOlympiadPlayersByGroupIdAndOlympiadIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadPlayerCondition>;
  filter?: InputMaybe<GroupOlympiadPlayerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/**
 * A condition to be used against `GroupOlympiad` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GroupOlympiadCondition = {
  /** Checks for equality with the object’s `badCountryId` field. */
  badCountryId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `commissionerId` field. */
  commissionerId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `drafted` field. */
  drafted?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `draftingplayer` field. */
  draftingplayer?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `goodCountryId` field. */
  goodCountryId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `locked` field. */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `playerorder` field. */
  playerorder?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Checks for equality with the object’s `roundnum` field. */
  roundnum?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `subscriptionId` field. */
  subscriptionId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `suggestedCountryId` field. */
  suggestedCountryId?: InputMaybe<Scalars['UUID']>;
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
  totalCount: Scalars['Int'];
};

/** A `GroupOlympiadCountry` edge in the connection. */
export type GroupOlympiadCountriesEdge = {
  __typename?: 'GroupOlympiadCountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  countryId: Scalars['UUID'];
  groupId: Scalars['UUID'];
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadCountry`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  olympiadCountry?: Maybe<OlympiadCountry>;
  olympiadId: Scalars['UUID'];
  /** Reads a single `Player` that is related to this `GroupOlympiadCountry`. */
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['UUID']>;
  roundnum?: Maybe<Scalars['Int']>;
};


export type GroupOlympiadCountryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/**
 * A condition to be used against `GroupOlympiadCountry` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GroupOlympiadCountryCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `roundnum` field. */
  roundnum?: InputMaybe<Scalars['Int']>;
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
  badCountryId?: InputMaybe<Scalars['UUID']>;
  commissionerId?: InputMaybe<Scalars['UUID']>;
  drafted?: InputMaybe<Scalars['Boolean']>;
  draftingplayer?: InputMaybe<Scalars['UUID']>;
  goodCountryId?: InputMaybe<Scalars['UUID']>;
  groupId: Scalars['UUID'];
  locked?: InputMaybe<Scalars['Boolean']>;
  olympiadId: Scalars['UUID'];
  playerorder?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  roundnum?: InputMaybe<Scalars['Int']>;
  subscriptionId?: InputMaybe<Scalars['UUID']>;
  suggestedCountryId?: InputMaybe<Scalars['UUID']>;
};

/** Represents an update to a `GroupOlympiad`. Fields that are set will be updated. */
export type GroupOlympiadPatch = {
  badCountryId?: InputMaybe<Scalars['UUID']>;
  commissionerId?: InputMaybe<Scalars['UUID']>;
  drafted?: InputMaybe<Scalars['Boolean']>;
  draftingplayer?: InputMaybe<Scalars['UUID']>;
  goodCountryId?: InputMaybe<Scalars['UUID']>;
  groupId?: InputMaybe<Scalars['UUID']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  olympiadId?: InputMaybe<Scalars['UUID']>;
  playerorder?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  roundnum?: InputMaybe<Scalars['Int']>;
  subscriptionId?: InputMaybe<Scalars['UUID']>;
  suggestedCountryId?: InputMaybe<Scalars['UUID']>;
};

export type GroupOlympiadPlayer = Node & {
  __typename?: 'GroupOlympiadPlayer';
  color?: Maybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  /** Reads a single `GroupOlympiad` that is related to this `GroupOlympiadPlayer`. */
  groupOlympiad?: Maybe<GroupOlympiad>;
  /** Reads a single `GroupPlayer` that is related to this `GroupOlympiadPlayer`. */
  groupPlayer?: Maybe<GroupPlayer>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  olympiadId: Scalars['UUID'];
  playerId: Scalars['UUID'];
};

/**
 * A condition to be used against `GroupOlympiadPlayer` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GroupOlympiadPlayerCondition = {
  /** Checks for equality with the object’s `color` field. */
  color?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']>;
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
  color?: InputMaybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
  playerId: Scalars['UUID'];
};

/** Represents an update to a `GroupOlympiadPlayer`. Fields that are set will be updated. */
export type GroupOlympiadPlayerPatch = {
  color?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['UUID']>;
  olympiadId?: InputMaybe<Scalars['UUID']>;
  playerId?: InputMaybe<Scalars['UUID']>;
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
  totalCount: Scalars['Int'];
};

/** A `GroupOlympiadPlayer` edge in the connection. */
export type GroupOlympiadPlayersEdge = {
  __typename?: 'GroupOlympiadPlayersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  totalCount: Scalars['Int'];
};

/** A `GroupOlympiad` edge in the connection. */
export type GroupOlympiadsEdge = {
  __typename?: 'GroupOlympiadsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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

export type GroupPlayer = Node & {
  __typename?: 'GroupPlayer';
  /** Reads a single `Group` that is related to this `GroupPlayer`. */
  group?: Maybe<Group>;
  groupId: Scalars['UUID'];
  /** Reads and enables pagination through a set of `GroupOlympiadPlayer`. */
  groupOlympiadPlayersByGroupIdAndPlayerId: GroupOlympiadPlayersConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Player` that is related to this `GroupPlayer`. */
  player?: Maybe<Player>;
  playerId: Scalars['UUID'];
};


export type GroupPlayerGroupOlympiadPlayersByGroupIdAndPlayerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadPlayerCondition>;
  filter?: InputMaybe<GroupOlympiadPlayerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};

/**
 * A condition to be used against `GroupPlayer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GroupPlayerCondition = {
  /** Checks for equality with the object’s `groupId` field. */
  groupId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `playerId` field. */
  playerId?: InputMaybe<Scalars['UUID']>;
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
  totalCount: Scalars['Int'];
};

/** A `GroupPlayer` edge in the connection. */
export type GroupPlayersEdge = {
  __typename?: 'GroupPlayersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  totalCount: Scalars['Int'];
};

/** A `Group` edge in the connection. */
export type GroupsEdge = {
  __typename?: 'GroupsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  distinctFrom?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
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
  inclusive: Scalars['Boolean'];
  /** The value at one end of our range. */
  value: Scalars['Int'];
};

/** The value at one end of a range. A range can either include this value, or not. */
export type IntRangeBoundInput = {
  /** Whether or not the value of this bound is included in the range. */
  inclusive: Scalars['Boolean'];
  /** The value at one end of our range. */
  value: Scalars['Int'];
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
  containsElement?: InputMaybe<Scalars['Int']>;
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
  isNull?: InputMaybe<Scalars['Boolean']>;
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

/** A medal awarded at an olympiad. */
export type Medal = Node & {
  __typename?: 'Medal';
  /** Reads a single `Athlete` that is related to this `Medal`. */
  athlete?: Maybe<Athlete>;
  /** The foreign key for the athlete that won the medal. */
  athleteId: Scalars['UUID'];
  /** Reads a single `Country` that is related to this `Medal`. */
  country?: Maybe<Country>;
  /** The foreign key for the country the medal was awarded to. */
  countryId: Scalars['UUID'];
  flag?: Maybe<Flag>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  groupMedals: GroupMedalsConnection;
  /** The primary key for the medal. */
  id: Scalars['UUID'];
  medalClass?: Maybe<Scalars['Int']>;
  /** Reads a single `MedalClass` that is related to this `Medal`. */
  medalClassByMedalClass?: Maybe<MedalClass>;
  /** Reads a single `MedalTeam` that is related to this `Medal`. */
  medalTeam?: Maybe<MedalTeam>;
  medalTeamId?: Maybe<Scalars['UUID']>;
  /** The type of medal. */
  medalType?: Maybe<Medaltype>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `OlympiadEvent` that is related to this `Medal`. */
  olympiadEvent?: Maybe<OlympiadEvent>;
  /** The foreign key for the olympiad event the medal was awarded at. */
  olympiadEventId: Scalars['UUID'];
  playerMedalByGroup?: Maybe<GroupMedal>;
  /** Reads and enables pagination through a set of `GroupMedal`. */
  playerMedals: GroupMedalsConnection;
  verified?: Maybe<Scalars['Boolean']>;
};


/** A medal awarded at an olympiad. */
export type MedalGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


/** A medal awarded at an olympiad. */
export type MedalPlayerMedalByGroupArgs = {
  selectedGroupId?: InputMaybe<Scalars['UUID']>;
};


/** A medal awarded at an olympiad. */
export type MedalPlayerMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type MedalClass = Node & {
  __typename?: 'MedalClass';
  medalRank: Scalars['Int'];
  medalType?: Maybe<Medaltype>;
  /** Reads and enables pagination through a set of `Medal`. */
  medalsByMedalClass: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type MedalClassMedalsByMedalClassArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/**
 * A condition to be used against `MedalClass` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MedalClassCondition = {
  /** Checks for equality with the object’s `medalRank` field. */
  medalRank?: InputMaybe<Scalars['Int']>;
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
  totalCount: Scalars['Int'];
};

/** A `MedalClass` edge in the connection. */
export type MedalClassesEdge = {
  __typename?: 'MedalClassesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  athleteId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `medalClass` field. */
  medalClass?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `medalTeamId` field. */
  medalTeamId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `medalType` field. */
  medalType?: InputMaybe<Medaltype>;
  /** Checks for equality with the object’s `olympiadEventId` field. */
  olympiadEventId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `verified` field. */
  verified?: InputMaybe<Scalars['Boolean']>;
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

export type MedalTeam = Node & {
  __typename?: 'MedalTeam';
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type MedalTeamMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/**
 * A condition to be used against `MedalTeam` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MedalTeamCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `MedalTeam` object types. All fields are combined with a logical ‘and.’ */
export type MedalTeamFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MedalTeamFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MedalTeamFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MedalTeamFilter>>;
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
  totalCount: Scalars['Int'];
};

/** A `MedalTeam` edge in the connection. */
export type MedalTeamsEdge = {
  __typename?: 'MedalTeamsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MedalTeam` at the end of the edge. */
  node?: Maybe<MedalTeam>;
};

/** Methods to use when ordering `MedalTeam`. */
export enum MedalTeamsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MedalsByMedalTeamIdCountAsc = 'MEDALS_BY_MEDAL_TEAM_ID__COUNT_ASC',
  MedalsByMedalTeamIdCountDesc = 'MEDALS_BY_MEDAL_TEAM_ID__COUNT_DESC',
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
  totalCount: Scalars['Int'];
};

/** A `Medal` edge in the connection. */
export type MedalsEdge = {
  __typename?: 'MedalsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  isNull?: InputMaybe<Scalars['Boolean']>;
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
  /** Creates a single `GroupMedal`. */
  createGroupMedal?: Maybe<CreateGroupMedalPayload>;
  /** Creates a single `GroupOlympiad`. */
  createGroupOlympiad?: Maybe<CreateGroupOlympiadPayload>;
  /** Creates a single `GroupOlympiadPlayer`. */
  createGroupOlympiadPlayer?: Maybe<CreateGroupOlympiadPlayerPayload>;
  /** Creates a single `OlympiadCountry`. */
  createOlympiadCountry?: Maybe<CreateOlympiadCountryPayload>;
  /** Creates a single `OlympiadRegionSetting`. */
  createOlympiadRegionSetting?: Maybe<CreateOlympiadRegionSettingPayload>;
  /** Creates a single `Region`. */
  createRegion?: Maybe<CreateRegionPayload>;
  /** Deletes a single `GroupMedal` using a unique key. */
  deleteGroupMedal?: Maybe<DeleteGroupMedalPayload>;
  /** Deletes a single `GroupMedal` using its globally unique id. */
  deleteGroupMedalByNodeId?: Maybe<DeleteGroupMedalPayload>;
  /** Deletes a single `GroupOlympiad` using a unique key. */
  deleteGroupOlympiad?: Maybe<DeleteGroupOlympiadPayload>;
  /** Deletes a single `GroupOlympiad` using its globally unique id. */
  deleteGroupOlympiadByNodeId?: Maybe<DeleteGroupOlympiadPayload>;
  /** Deletes a single `GroupOlympiadPlayer` using a unique key. */
  deleteGroupOlympiadPlayer?: Maybe<DeleteGroupOlympiadPlayerPayload>;
  /** Deletes a single `GroupOlympiadPlayer` using its globally unique id. */
  deleteGroupOlympiadPlayerByNodeId?: Maybe<DeleteGroupOlympiadPlayerPayload>;
  /** Deletes a single `OlympiadCountry` using a unique key. */
  deleteOlympiadCountry?: Maybe<DeleteOlympiadCountryPayload>;
  /** Deletes a single `OlympiadCountry` using its globally unique id. */
  deleteOlympiadCountryByNodeId?: Maybe<DeleteOlympiadCountryPayload>;
  /** Deletes a single `OlympiadRegionSetting` using a unique key. */
  deleteOlympiadRegionSetting?: Maybe<DeleteOlympiadRegionSettingPayload>;
  /** Deletes a single `OlympiadRegionSetting` using its globally unique id. */
  deleteOlympiadRegionSettingByNodeId?: Maybe<DeleteOlympiadRegionSettingPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegion?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegionByName?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using its globally unique id. */
  deleteRegionByNodeId?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegionBySlug?: Maybe<DeleteRegionPayload>;
  draftCountry?: Maybe<DraftCountryPayload>;
  /** Registers a single user and creates an account. */
  registerPlayer?: Maybe<RegisterPlayerPayload>;
  /** Updates a single `GroupMedal` using a unique key and a patch. */
  updateGroupMedal?: Maybe<UpdateGroupMedalPayload>;
  /** Updates a single `GroupMedal` using its globally unique id and a patch. */
  updateGroupMedalByNodeId?: Maybe<UpdateGroupMedalPayload>;
  /** Updates a single `GroupOlympiad` using a unique key and a patch. */
  updateGroupOlympiad?: Maybe<UpdateGroupOlympiadPayload>;
  /** Updates a single `GroupOlympiad` using its globally unique id and a patch. */
  updateGroupOlympiadByNodeId?: Maybe<UpdateGroupOlympiadPayload>;
  /** Updates a single `GroupOlympiadPlayer` using a unique key and a patch. */
  updateGroupOlympiadPlayer?: Maybe<UpdateGroupOlympiadPlayerPayload>;
  /** Updates a single `GroupOlympiadPlayer` using its globally unique id and a patch. */
  updateGroupOlympiadPlayerByNodeId?: Maybe<UpdateGroupOlympiadPlayerPayload>;
  /** Updates a single `OlympiadCountry` using a unique key and a patch. */
  updateOlympiadCountry?: Maybe<UpdateOlympiadCountryPayload>;
  /** Updates a single `OlympiadCountry` using its globally unique id and a patch. */
  updateOlympiadCountryByNodeId?: Maybe<UpdateOlympiadCountryPayload>;
  /** Updates a single `OlympiadRegionSetting` using a unique key and a patch. */
  updateOlympiadRegionSetting?: Maybe<UpdateOlympiadRegionSettingPayload>;
  /** Updates a single `OlympiadRegionSetting` using its globally unique id and a patch. */
  updateOlympiadRegionSettingByNodeId?: Maybe<UpdateOlympiadRegionSettingPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegion?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegionByName?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using its globally unique id and a patch. */
  updateRegionByNodeId?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegionBySlug?: Maybe<UpdateRegionPayload>;
  upsertGroupMedal?: Maybe<UpsertGroupMedalPayload>;
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
export type MutationCreateGroupOlympiadPlayerArgs = {
  input: CreateGroupOlympiadPlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadCountryArgs = {
  input: CreateOlympiadCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOlympiadRegionSettingArgs = {
  input: CreateOlympiadRegionSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRegionArgs = {
  input: CreateRegionInput;
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
export type MutationDeleteGroupOlympiadPlayerArgs = {
  input: DeleteGroupOlympiadPlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGroupOlympiadPlayerByNodeIdArgs = {
  input: DeleteGroupOlympiadPlayerByNodeIdInput;
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
export type MutationDeleteOlympiadRegionSettingArgs = {
  input: DeleteOlympiadRegionSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOlympiadRegionSettingByNodeIdArgs = {
  input: DeleteOlympiadRegionSettingByNodeIdInput;
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
export type MutationDraftCountryArgs = {
  input: DraftCountryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterPlayerArgs = {
  input: RegisterPlayerInput;
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
export type MutationUpdateGroupOlympiadPlayerArgs = {
  input: UpdateGroupOlympiadPlayerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGroupOlympiadPlayerByNodeIdArgs = {
  input: UpdateGroupOlympiadPlayerByNodeIdInput;
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
export type MutationUpdateOlympiadRegionSettingArgs = {
  input: UpdateOlympiadRegionSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOlympiadRegionSettingByNodeIdArgs = {
  input: UpdateOlympiadRegionSettingByNodeIdInput;
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
export type MutationUpsertGroupMedalArgs = {
  input: UpsertGroupMedalInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Olympiads that have existed. */
export type Olympiad = Node & {
  __typename?: 'Olympiad';
  /** Reads a single `City` that is related to this `Olympiad`. */
  city?: Maybe<City>;
  /** The foreign key from the city that hosted the olympiad. */
  cityId?: Maybe<Scalars['UUID']>;
  dates?: Maybe<DatetimeRange>;
  /** Reads and enables pagination through a set of `GroupOlympiad`. */
  groupOlympiads: GroupOlympiadsConnection;
  /** The primary key for the olympiad. */
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
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
  slug?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Sport`. */
  sports: SportsConnection;
  /** Reads and enables pagination through a set of `OlympiadEvent`. */
  upcomingEvents: OlympiadEventsConnection;
  /** The year the Olympiad took place. */
  year: Scalars['Int'];
};


/** Olympiads that have existed. */
export type OlympiadGroupOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};


/** Olympiads that have existed. */
export type OlympiadOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};


/** Olympiads that have existed. */
export type OlympiadOlympiadEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadEventCondition>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};


/** Olympiads that have existed. */
export type OlympiadOlympiadRegionSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadRegionSettingCondition>;
  filter?: InputMaybe<OlympiadRegionSettingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};


/** Olympiads that have existed. */
export type OlympiadOlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadSportCondition>;
  filter?: InputMaybe<OlympiadSportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};


/** Olympiads that have existed. */
export type OlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<SportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


/** Olympiads that have existed. */
export type OlympiadUpcomingEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/**
 * A condition to be used against `Olympiad` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type OlympiadCondition = {
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `dates` field. */
  dates?: InputMaybe<DatetimeRangeInput>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `olympiadType` field. */
  olympiadType?: InputMaybe<Olympiadtype>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `year` field. */
  year?: InputMaybe<Scalars['Int']>;
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
  totalCount: Scalars['Int'];
};

/** A `OlympiadCountry` edge in the connection. */
export type OlympiadCountriesEdge = {
  __typename?: 'OlympiadCountriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  countryId: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Olympiad` that is related to this `OlympiadCountry`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID'];
  /** Reads a single `Region` that is related to this `OlympiadCountry`. */
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['UUID']>;
};


export type OlympiadCountryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/**
 * A condition to be used against `OlympiadCountry` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OlympiadCountryCondition = {
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']>;
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
  countryId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
  regionId?: InputMaybe<Scalars['UUID']>;
};

/** Represents an update to a `OlympiadCountry`. Fields that are set will be updated. */
export type OlympiadCountryPatch = {
  countryId?: InputMaybe<Scalars['UUID']>;
  olympiadId?: InputMaybe<Scalars['UUID']>;
  regionId?: InputMaybe<Scalars['UUID']>;
};

export type OlympiadEvent = Node & {
  __typename?: 'OlympiadEvent';
  dateString?: Maybe<Scalars['String']>;
  datetime: Scalars['Datetime'];
  /** Reads a single `Event` that is related to this `OlympiadEvent`. */
  event?: Maybe<Event>;
  eventId: Scalars['UUID'];
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Medal`. */
  medals: MedalsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Olympiad` that is related to this `OlympiadEvent`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID'];
};


export type OlympiadEventMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};

/**
 * A condition to be used against `OlympiadEvent` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OlympiadEventCondition = {
  /** Checks for equality with the object’s `dateString` field. */
  dateString?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `datetime` field. */
  datetime?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']>;
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
  totalCount: Scalars['Int'];
};

/** A `OlympiadEvent` edge in the connection. */
export type OlympiadEventsEdge = {
  __typename?: 'OlympiadEventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  /** Filter by the object’s `slug` field. */
  slug?: InputMaybe<StringFilter>;
  /** Filter by the object’s `year` field. */
  year?: InputMaybe<IntFilter>;
};

export type OlympiadRegionSetting = Node & {
  __typename?: 'OlympiadRegionSetting';
  amount: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Olympiad` that is related to this `OlympiadRegionSetting`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID'];
  /** Reads a single `Region` that is related to this `OlympiadRegionSetting`. */
  region?: Maybe<Region>;
  regionId: Scalars['UUID'];
};

/**
 * A condition to be used against `OlympiadRegionSetting` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type OlympiadRegionSettingCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']>;
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
  amount: Scalars['Int'];
  olympiadId: Scalars['UUID'];
  regionId: Scalars['UUID'];
};

/** Represents an update to a `OlympiadRegionSetting`. Fields that are set will be updated. */
export type OlympiadRegionSettingPatch = {
  amount?: InputMaybe<Scalars['Int']>;
  olympiadId?: InputMaybe<Scalars['UUID']>;
  regionId?: InputMaybe<Scalars['UUID']>;
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
  totalCount: Scalars['Int'];
};

/** A `OlympiadRegionSetting` edge in the connection. */
export type OlympiadRegionSettingsEdge = {
  __typename?: 'OlympiadRegionSettingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  nodeId: Scalars['ID'];
  /** Reads a single `Olympiad` that is related to this `OlympiadSport`. */
  olympiad?: Maybe<Olympiad>;
  olympiadId: Scalars['UUID'];
  /** Reads a single `Sport` that is related to this `OlympiadSport`. */
  sport?: Maybe<Sport>;
  sportId: Scalars['UUID'];
};

/**
 * A condition to be used against `OlympiadSport` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OlympiadSportCondition = {
  /** Checks for equality with the object’s `olympiadId` field. */
  olympiadId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `sportId` field. */
  sportId?: InputMaybe<Scalars['UUID']>;
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
  totalCount: Scalars['Int'];
};

/** A `OlympiadSport` edge in the connection. */
export type OlympiadSportsEdge = {
  __typename?: 'OlympiadSportsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  totalCount: Scalars['Int'];
};

/** A `Olympiad` edge in the connection. */
export type OlympiadsEdge = {
  __typename?: 'OlympiadsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Olympiad` at the end of the edge. */
  node?: Maybe<Olympiad>;
};

/** Methods to use when ordering `Olympiad`. */
export enum OlympiadsOrderBy {
  CityByCityIdCountryIdAsc = 'CITY_BY_CITY_ID__COUNTRY_ID_ASC',
  CityByCityIdCountryIdDesc = 'CITY_BY_CITY_ID__COUNTRY_ID_DESC',
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
  isNull?: InputMaybe<Scalars['Boolean']>;
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
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
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
  id: Scalars['UUID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isCommissioner?: Maybe<Scalars['Boolean']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  /** The username of the player. */
  username?: Maybe<Scalars['String']>;
};


/** Players who are playing games. */
export type PlayerGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


/** Players who are playing games. */
export type PlayerGroupOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};


/** Players who are playing games. */
export type PlayerGroupOlympiadsByCommissionerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};


/** Players who are playing games. */
export type PlayerGroupPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupPlayerCondition>;
  filter?: InputMaybe<GroupPlayerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};


/** Players who are playing games. */
export type PlayerGroupsByCommissionerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupCondition>;
  filter?: InputMaybe<GroupFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
};

/** A condition to be used against `Player` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PlayerCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
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
  totalCount: Scalars['Int'];
};

/** A `Player` edge in the connection. */
export type PlayersEdge = {
  __typename?: 'PlayersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  UsernameDesc = 'USERNAME_DESC'
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
  currentPlayerId?: Maybe<Scalars['UUID']>;
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
  nodeId: Scalars['ID'];
  olympiad?: Maybe<Olympiad>;
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
  playersInGroups?: Maybe<Array<Maybe<Scalars['UUID']>>>;
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
};


/** The root query type which gives access points into the data universe. */
export type QueryAthleteArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAthleteByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAthleteBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAthletesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AthleteCondition>;
  filter?: InputMaybe<AthleteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AthletesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAthletesByCountryArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<AthleteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AthletesOrderBy>>;
  slug?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CityCondition>;
  filter?: InputMaybe<CityFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCityArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCityByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCityBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CountryCondition>;
  filter?: InputMaybe<CountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryFlagsByTimestampArgs = {
  countryId?: InputMaybe<Scalars['UUID']>;
  olympiadDates?: InputMaybe<DatetimeRangeInput>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCountryFlagsByYearArgs = {
  countryId?: InputMaybe<Scalars['UUID']>;
  olympiadYear?: InputMaybe<Scalars['Int']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventByFullSlugArgs = {
  fullSlug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEventsBySportSlugArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sportSlug?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFlagArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlagByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FlagCondition>;
  filter?: InputMaybe<FlagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FlagsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalArgs = {
  groupId: Scalars['UUID'];
  medalId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupMedalCondition>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupMedalsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupMedalsByDateArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<GroupMedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  groupid?: InputMaybe<Scalars['UUID']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  olympiaddate?: InputMaybe<Scalars['Datetime']>;
  olympiadid?: InputMaybe<Scalars['UUID']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadArgs = {
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCountryCondition>;
  filter?: InputMaybe<GroupOlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadCountriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadCountryArgs = {
  countryId: Scalars['UUID'];
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadCountryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadPlayerArgs = {
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
  playerId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadPlayerByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadPlayerCondition>;
  filter?: InputMaybe<GroupOlympiadPlayerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadPlayersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupOlympiadCondition>;
  filter?: InputMaybe<GroupOlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupOlympiadsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupPlayerArgs = {
  groupId: Scalars['UUID'];
  playerId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupPlayerByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupPlayerCondition>;
  filter?: InputMaybe<GroupPlayerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupPlayersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GroupCondition>;
  filter?: InputMaybe<GroupFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalClassArgs = {
  medalRank: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalClassByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalClassesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalClassCondition>;
  filter?: InputMaybe<MedalClassFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalClassesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalTeamArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalTeamByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalTeamsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalTeamCondition>;
  filter?: InputMaybe<MedalTeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalTeamsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMedalsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MedalCondition>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MedalsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadCountryArgs = {
  countryId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadCountryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventBySlugsArgs = {
  eventSlug?: InputMaybe<Scalars['String']>;
  olympiadSlug?: InputMaybe<Scalars['String']>;
  sportSlug?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadEventCondition>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadEventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventsByDateArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  olympiaddate?: InputMaybe<Scalars['Datetime']>;
  olympiadslug?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadEventsBySlugsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<OlympiadEventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  olympiadSlug?: InputMaybe<Scalars['String']>;
  sportSlug?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadMedalsBySlugArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<MedalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  olympiadslug?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadRegionSettingArgs = {
  olympiadId: Scalars['UUID'];
  regionId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadRegionSettingByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadRegionSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadRegionSettingCondition>;
  filter?: InputMaybe<OlympiadRegionSettingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadSportArgs = {
  olympiadId: Scalars['UUID'];
  sportId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadSportByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadSportCondition>;
  filter?: InputMaybe<OlympiadSportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOlympiadsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadCondition>;
  filter?: InputMaybe<OlympiadFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPlayerArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlayerByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlayerBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlayerByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlayersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PlayerCondition>;
  filter?: InputMaybe<PlayerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PlayersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RegionCondition>;
  filter?: InputMaybe<RegionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySportArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySportByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySportByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySportBySlugArgs = {
  slug: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SportCondition>;
  filter?: InputMaybe<SportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SportsOrderBy>>;
};

export type Region = Node & {
  __typename?: 'Region';
  /** Reads and enables pagination through a set of `Country`. */
  countries: CountriesConnection;
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `OlympiadCountry`. */
  olympiadCountries: OlympiadCountriesConnection;
  /** Reads and enables pagination through a set of `OlympiadRegionSetting`. */
  olympiadRegionSettings: OlympiadRegionSettingsConnection;
  slug?: Maybe<Scalars['String']>;
};


export type RegionCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CountryCondition>;
  filter?: InputMaybe<CountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};


export type RegionOlympiadCountriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadCountryCondition>;
  filter?: InputMaybe<OlympiadCountryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadCountriesOrderBy>>;
};


export type RegionOlympiadRegionSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadRegionSettingCondition>;
  filter?: InputMaybe<OlympiadRegionSettingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadRegionSettingsOrderBy>>;
};

/** A condition to be used against `Region` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RegionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Region`. Fields that are set will be updated. */
export type RegionPatch = {
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
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
  totalCount: Scalars['Int'];
};

/** A `Region` edge in the connection. */
export type RegionsEdge = {
  __typename?: 'RegionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** The output of our `registerPlayer` mutation. */
export type RegisterPlayerPayload = {
  __typename?: 'RegisterPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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

/** Sports that took place at an olympiad. */
export type Sport = Node & {
  __typename?: 'Sport';
  /** Reads and enables pagination through a set of `Event`. */
  events: EventsConnection;
  /** The primary key for the sport. */
  id: Scalars['UUID'];
  /** The name of the sport. */
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `OlympiadSport`. */
  olympiadSports: OlympiadSportsConnection;
  /** The slug for the sport. */
  slug?: Maybe<Scalars['String']>;
};


/** Sports that took place at an olympiad. */
export type SportEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


/** Sports that took place at an olympiad. */
export type SportOlympiadSportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OlympiadSportCondition>;
  filter?: InputMaybe<OlympiadSportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OlympiadSportsOrderBy>>;
};

/** A condition to be used against `Sport` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type SportCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `slug` field. */
  slug?: InputMaybe<Scalars['String']>;
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
  totalCount: Scalars['Int'];
};

/** A `Sport` edge in the connection. */
export type SportsEdge = {
  __typename?: 'SportsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: InputMaybe<Scalars['String']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: InputMaybe<Scalars['String']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: InputMaybe<Scalars['String']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: InputMaybe<Scalars['String']>;
  /** Contained by the specified list of values. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']>>;
};

/** A filter to be used against UUID List fields. All fields are combined with a logical ‘and.’ */
export type UuidListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: InputMaybe<Scalars['UUID']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: InputMaybe<Scalars['UUID']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Contained by the specified list of values. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};

/** All input for the `updateGroupMedalByNodeId` mutation. */
export type UpdateGroupMedalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GroupMedal` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GroupMedal` being updated. */
  patch: GroupMedalPatch;
};

/** All input for the `updateGroupMedal` mutation. */
export type UpdateGroupMedalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  medalId: Scalars['UUID'];
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiad` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GroupOlympiad` being updated. */
  patch: GroupOlympiadPatch;
};

/** All input for the `updateGroupOlympiad` mutation. */
export type UpdateGroupOlympiadInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GroupOlympiadPlayer` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GroupOlympiadPlayer` being updated. */
  patch: GroupOlympiadPlayerPatch;
};

/** All input for the `updateGroupOlympiadPlayer` mutation. */
export type UpdateGroupOlympiadPlayerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  groupId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
  /** An object where the defined keys will be set on the `GroupOlympiadPlayer` being updated. */
  patch: GroupOlympiadPlayerPatch;
  playerId: Scalars['UUID'];
};

/** The output of our update `GroupOlympiadPlayer` mutation. */
export type UpdateGroupOlympiadPlayerPayload = {
  __typename?: 'UpdateGroupOlympiadPlayerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the `updateOlympiadCountryByNodeId` mutation. */
export type UpdateOlympiadCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OlympiadCountry` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `OlympiadCountry` being updated. */
  patch: OlympiadCountryPatch;
};

/** All input for the `updateOlympiadCountry` mutation. */
export type UpdateOlympiadCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  countryId: Scalars['UUID'];
  olympiadId: Scalars['UUID'];
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
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the `updateOlympiadRegionSettingByNodeId` mutation. */
export type UpdateOlympiadRegionSettingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OlympiadRegionSetting` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `OlympiadRegionSetting` being updated. */
  patch: OlympiadRegionSettingPatch;
};

/** All input for the `updateOlympiadRegionSetting` mutation. */
export type UpdateOlympiadRegionSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  olympiadId: Scalars['UUID'];
  /** An object where the defined keys will be set on the `OlympiadRegionSetting` being updated. */
  patch: OlympiadRegionSettingPatch;
  regionId: Scalars['UUID'];
};

/** The output of our update `OlympiadRegionSetting` mutation. */
export type UpdateOlympiadRegionSettingPayload = {
  __typename?: 'UpdateOlympiadRegionSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the `updateRegionByName` mutation. */
export type UpdateRegionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
};

/** All input for the `updateRegionByNodeId` mutation. */
export type UpdateRegionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Region` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
};

/** All input for the `updateRegionBySlug` mutation. */
export type UpdateRegionBySlugInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
  slug: Scalars['String'];
};

/** All input for the `updateRegion` mutation. */
export type UpdateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
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
  clientMutationId?: Maybe<Scalars['String']>;
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

/** All input for the `upsertGroupMedal` mutation. */
export type UpsertGroupMedalInput = {
  badcountrynegative?: InputMaybe<Scalars['UUID']>;
  badcountrypositive?: InputMaybe<Scalars['UUID']>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  goodcountrynegative?: InputMaybe<Scalars['UUID']>;
  goodcountrypositive?: InputMaybe<Scalars['UUID']>;
  groupid?: InputMaybe<Scalars['UUID']>;
  medalid?: InputMaybe<Scalars['UUID']>;
  newscore?: InputMaybe<Scalars['BigFloat']>;
  playerid?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `upsertGroupMedal` mutation. */
export type UpsertGroupMedalPayload = {
  __typename?: 'UpsertGroupMedalPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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

export type GetFlagsQueryVariables = Exact<{
  visitedCountries?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  now: Scalars['Datetime'];
}>;


export type GetFlagsQuery = { __typename?: 'Query', countries?: { __typename?: 'CountriesConnection', nodes: Array<{ __typename?: 'Country', name?: string | null, flagByTimestamp?: { __typename?: 'Flag', png?: string | null } | null } | null> } | null };


export const GetFlagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"visitedCountries"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"now"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Datetime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"visitedCountries"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"flagByTimestamp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateTimestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"now"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"inclusive"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"now"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"inclusive"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFlagsQuery, GetFlagsQueryVariables>;