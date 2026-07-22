import { sql } from 'drizzle-orm';
import { bigint, boolean, check, foreignKey, index, integer, json, numeric, pgPolicy, pgSchema, primaryKey, smallint, text, timestamp, unique, uuid, varchar } from 'drizzle-orm/pg-core';

export const appPublic = pgSchema('app_public');
export const appPrivate = pgSchema('app_private');
export const medaltypeInAppPublic = appPublic.enum('medaltype', ['gold', 'silver', 'bronze']);
export const olympiadtypeInAppPublic = appPublic.enum('olympiadtype', ['summer', 'winter']);

export const athlete = appPublic.table('athlete', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  fullName: text('full_name'),
  fullFirstName: text('full_first_name'),
  fullLastName: text('full_last_name'),
  usedName: text('used_name'),
  usedFirstName: text('used_first_name'),
  usedLastName: text('used_last_name'),
  otherNames: text('other_names').array(),
  slug: text(),
  totalMedals: smallint('total_medals'),
  goldMedals: smallint('gold_medals'),
  silverMedals: smallint('silver_medals'),
  bronzeMedals: smallint('bronze_medals'),
}, table => [
  index('idx_athlete_total_medals').using('btree', table.totalMedals.asc().nullsLast().op('int2_ops')),
  unique('athlete_slug_key').on(table.slug),
]);

export const region = appPublic.table('region', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text(),
  slug: text(),
  color: text(),
}, table => [
  unique('region_name_key').on(table.name),
  unique('region_slug_key').on(table.slug),
]);

export const country = appPublic.table('country', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text(),
  slug: text(),
  nocs: text().array(),
  regionId: uuid('region_id'),
}, table => [
  foreignKey({
    columns: [table.regionId],
    foreignColumns: [region.id],
  }).onDelete('set null'),
  unique('country_slug_key').on(table.slug),
]);

export const city = appPublic.table('city', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text(),
  countryId: uuid('country_id').notNull(),
  slug: text(),
  formerName: text('former_name'),
}, table => [
  foreignKey({
    columns: [table.countryId],
    foreignColumns: [country.id],
  }),
  unique('city_slug').on(table.slug),
]);

export const medalClass = appPublic.table('medal_class', {
  medalRank: integer('medal_rank').primaryKey().notNull(),
  medalType: medaltypeInAppPublic('medal_type'),
});

export const sport = appPublic.table('sport', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text(),
  slug: text(),
}, table => [
  unique('sport_name_key').on(table.name),
  unique('sport_slug_key').on(table.slug),
]);

export const event = appPublic.table('event', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text(),
  slug: text(),
  sportId: uuid('sport_id').notNull(),
  team: boolean().default(false).notNull(),
  fullSlug: text('full_slug'),
}, table => [
  foreignKey({
    columns: [table.sportId],
    foreignColumns: [sport.id],
  }),
  unique('event_full_slug_key').on(table.fullSlug),
]);

export const olympiad = appPublic.table('olympiad', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  year: smallint().notNull(),
  olympiadType: olympiadtypeInAppPublic('olympiad_type'),
  cityId: uuid('city_id'),
  slug: text(),
  realOlympiad: boolean('real_olympiad').default(true).notNull(),
  previousOlympiadId: uuid('previous_olympiad_id'),
  secondCityId: uuid('second_city_id'),
  startDate: timestamp('start_date', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  endDate: timestamp('end_date', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  maxPlayers: smallint('max_players').default(2).notNull(),
  name: text(),
}, table => [
  foreignKey({
    columns: [table.cityId],
    foreignColumns: [city.id],
  }),
  foreignKey({
    columns: [table.previousOlympiadId],
    foreignColumns: [table.id],
  }).onDelete('set null'),
  foreignKey({
    columns: [table.secondCityId],
    foreignColumns: [city.id],
  }),
  unique('olympiad_slug').on(table.slug),
]);

export const olympiadEvent = appPublic.table('olympiad_event', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  olympiadId: uuid('olympiad_id').notNull(),
  eventId: uuid('event_id').notNull(),
  datetime: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  dateString: text('date_string'),
  verifiedDate: boolean('verified_date').default(false).notNull(),
}, table => [
  index('idx_event_id').using('btree', table.eventId.asc().nullsLast().op('uuid_ops')),
  foreignKey({
    columns: [table.eventId],
    foreignColumns: [event.id],
  }),
  foreignKey({
    columns: [table.olympiadId],
    foreignColumns: [olympiad.id],
  }),
]);

export const medalTeam = appPublic.table('medal_team', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text(),
  mixed: boolean().default(false).notNull(),
  olympiadEventId: uuid('olympiad_event_id'),
}, table => [
  index('idx_medal_team_olympiad_event_id').using('btree', table.olympiadEventId.asc().nullsLast().op('uuid_ops')),
  foreignKey({
    columns: [table.olympiadEventId],
    foreignColumns: [olympiadEvent.id],
  }).onDelete('cascade'),
]);

export const medal = appPublic.table('medal', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  athleteId: uuid('athlete_id'),
  medalType: medaltypeInAppPublic('medal_type'),
  olympiadEventId: uuid('olympiad_event_id').notNull(),
  countryId: uuid('country_id').notNull(),
  medalClass: integer('medal_class').default(0).notNull(),
  medalTeamId: uuid('medal_team_id'),
  verified: boolean(),
  athleteCountryId: uuid('athlete_country_id'),
}, table => [
  index('idx_athlete_country_medals').using('btree', table.athleteCountryId.asc().nullsLast().op('uuid_ops')),
  index('idx_athlete_medals').using('btree', table.athleteId.asc().nullsLast().op('uuid_ops')),
  index('idx_country_medals').using('btree', table.countryId.asc().nullsLast().op('uuid_ops')),
  foreignKey({
    columns: [table.athleteCountryId],
    foreignColumns: [country.id],
  }).onDelete('set null'),
  foreignKey({
    columns: [table.athleteId],
    foreignColumns: [athlete.id],
  }),
  foreignKey({
    columns: [table.countryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.medalClass],
    foreignColumns: [medalClass.medalRank],
  }),
  foreignKey({
    columns: [table.medalTeamId],
    foreignColumns: [medalTeam.id],
  }),
  foreignKey({
    columns: [table.olympiadEventId],
    foreignColumns: [olympiadEvent.id],
  }),
]);

export const flag = appPublic.table('flag', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  svg: text(),
  countryId: uuid('country_id').notNull(),
  png: text(),
  startDate: timestamp('start_date', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  endDate: timestamp('end_date', { withTimezone: true, mode: 'string' }),
}, table => [
  foreignKey({
    columns: [table.countryId],
    foreignColumns: [country.id],
  }),
]);

export const player = appPublic.table('player', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  username: text(),
  slug: text(),
  robot: boolean().default(false).notNull(),
  registeredDate: timestamp('registered_date', { withTimezone: true, mode: 'string' }),
  lastLogin: timestamp('last_login', { withTimezone: true, mode: 'string' }),
  archived: boolean().default(false).notNull(),
}, table => [
  unique('player_username_key').on(table.username),
  unique('player_slug_key').on(table.slug),
  pgPolicy('update_player', { as: 'permissive', for: 'update', to: ['app_player'], using: sql`(id = (NULLIF(current_setting('jwt.claims.player_id'::text, true), ''::text))::uuid)` }),
  pgPolicy('select_player', { as: 'permissive', for: 'select', to: ['public'] }),
  pgPolicy('player_admin', { as: 'permissive', for: 'all', to: ['app_admin'] }),
  pgPolicy('delete_player', { as: 'permissive', for: 'delete', to: ['app_player'] }),
]);

export const group = appPublic.table('group', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: text(),
  commissionerId: uuid('commissioner_id').notNull(),
  olympiadId: uuid('olympiad_id').notNull(),
  drafted: boolean().default(false).notNull(),
  roundnum: smallint(),
  playerorder: uuid().array(),
  draftingplayer: uuid(),
  subscriptionId: uuid('subscription_id').defaultRandom().notNull(),
  goodCountryId: uuid('good_country_id'),
  badCountryId: uuid('bad_country_id'),
  locked: boolean().default(false).notNull(),
  suggestedCountryId: uuid('suggested_country_id'),
  goldPoints: numeric('gold_points').default('3.0').notNull(),
  silverPoints: numeric('silver_points').default('2.0').notNull(),
  bronzePoints: numeric('bronze_points').default('1.0').notNull(),
  timerLength: integer('timer_length').default(60).notNull(),
  playerNumber: integer('player_number').default(2).notNull(),
  availableColors: text('available_colors').array(),
  scored: boolean().default(false).notNull(),
  pausedSeconds: numeric('paused_seconds'),
  started: boolean().default(false).notNull(),
  paused: boolean().default(false).notNull(),
  chartData: json('chart_data'),
}, table => [
  foreignKey({
    columns: [table.badCountryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.commissionerId],
    foreignColumns: [player.id],
  }),
  foreignKey({
    columns: [table.goodCountryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.olympiadId],
    foreignColumns: [olympiad.id],
  }),
  foreignKey({
    columns: [table.suggestedCountryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.draftingplayer],
    foreignColumns: [player.id],
  }),
  pgPolicy('group_update_if_commissioner', { as: 'permissive', for: 'update', to: ['app_player'], using: sql`(commissioner_id = app_public.current_player_id())`, withCheck: sql`(commissioner_id = app_public.current_player_id())` }),
  pgPolicy('group_select', { as: 'permissive', for: 'select', to: ['public'] }),
  pgPolicy('group_admin', { as: 'permissive', for: 'all', to: ['app_admin'] }),
]);

export const playerAccount = appPrivate.table('player_account', {
  playerId: uuid('player_id').primaryKey().notNull(),
  email: text().notNull(),
  passwordHash: text('password_hash'),
  admin: boolean().default(false),
  commissioner: boolean().default(false),
  currentChallenge: text('current_challenge'),
  plusPlayer: boolean('plus_player').default(false).notNull(),
}, table => [
  index('idx_player_account_player_id').using('btree', table.playerId.asc().nullsLast().op('uuid_ops')),
  foreignKey({
    columns: [table.playerId],
    foreignColumns: [player.id],
  }).onDelete('cascade'),
  unique('player_account_email_key').on(table.email),
  check('player_account_email_check', sql`email ~* '^.+@.+\..+$'::text`),
]);

export const userAuthenticator = appPublic.table('user_authenticator', {
  credentialId: text('credential_id').primaryKey().notNull(),
  credentialPublicKey: text('credential_public_key'),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  counter: bigint({ mode: 'number' }),
  credentialDeviceType: varchar('credential_device_type', { length: 32 }),
  credentialBackedUp: boolean('credential_backed_up'),
  transports: varchar({ length: 255 }),
  playerId: uuid('player_id').notNull(),
  name: text().default('Unknown device').notNull(),
  icon: text().default('desktop').notNull(),
  os: text().default('Unknown os').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, table => [
  foreignKey({
    columns: [table.playerId],
    foreignColumns: [player.id],
  }).onDelete('cascade'),
  pgPolicy('user_authenticator_player_select', { as: 'permissive', for: 'select', to: ['app_player'], using: sql`(player_id = app_public.current_player_id())` }),
  pgPolicy('user_authenticator_player_delete', { as: 'permissive', for: 'delete', to: ['app_player'] }),
  pgPolicy('user_authenticator_admin_select', { as: 'permissive', for: 'select', to: ['app_admin'] }),
  pgPolicy('user_authenticator_admin_delete', { as: 'permissive', for: 'delete', to: ['app_admin'] }),
]);

export const siteSettings = appPrivate.table('site_settings', {
  allowRegistration: boolean('allow_registration').default(true).notNull(),
  allowParis: boolean('allow_paris').default(false).notNull(),
});

export const olympiadAthlete = appPublic.table('olympiad_athlete', {
  olympiadId: uuid('olympiad_id').notNull(),
  athleteId: uuid('athlete_id').notNull(),
}, table => [
  foreignKey({
    columns: [table.athleteId],
    foreignColumns: [athlete.id],
  }).onDelete('cascade'),
  foreignKey({
    columns: [table.olympiadId],
    foreignColumns: [olympiad.id],
  }).onDelete('cascade'),
  primaryKey({ columns: [table.olympiadId, table.athleteId], name: 'olympiad_athlete_pkey' }),
]);

export const olympiadRegionSetting = appPublic.table('olympiad_region_setting', {
  olympiadId: uuid('olympiad_id').notNull(),
  regionId: uuid('region_id').notNull(),
  amount: integer().notNull(),
}, table => [
  foreignKey({
    columns: [table.olympiadId],
    foreignColumns: [olympiad.id],
  }),
  foreignKey({
    columns: [table.regionId],
    foreignColumns: [region.id],
  }),
  primaryKey({ columns: [table.olympiadId, table.regionId], name: 'olympiad_region_setting_pkey' }),
]);

export const olympiadSport = appPublic.table('olympiad_sport', {
  olympiadId: uuid('olympiad_id').notNull(),
  sportId: uuid('sport_id').notNull(),
  tops: json(),
}, table => [
  foreignKey({
    columns: [table.olympiadId],
    foreignColumns: [olympiad.id],
  }),
  foreignKey({
    columns: [table.sportId],
    foreignColumns: [sport.id],
  }),
  primaryKey({ columns: [table.olympiadId, table.sportId], name: 'olympiad_sport_pkey' }),
]);

export const olympiadCountry = appPublic.table('olympiad_country', {
  countryId: uuid('country_id').notNull(),
  olympiadId: uuid('olympiad_id').notNull(),
  regionId: uuid('region_id'),
  flagId: uuid('flag_id'),
  motherCountryId: uuid('mother_country_id').notNull(),
}, table => [
  foreignKey({
    columns: [table.countryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.olympiadId],
    foreignColumns: [olympiad.id],
  }),
  foreignKey({
    columns: [table.regionId],
    foreignColumns: [region.id],
  }),
  foreignKey({
    columns: [table.flagId],
    foreignColumns: [flag.id],
  }),
  foreignKey({
    columns: [table.motherCountryId],
    foreignColumns: [country.id],
  }),
  primaryKey({ columns: [table.countryId, table.olympiadId], name: 'olympiad_country_pkey' }),
]);

export const groupCountry = appPublic.table('group_country', {
  groupId: uuid('group_id').notNull(),
  countryId: uuid('country_id').notNull(),
  playerId: uuid('player_id'),
  roundnum: smallint(),
  totalScore: numeric('total_score').default('0').notNull(),
}, table => [
  foreignKey({
    columns: [table.countryId],
    foreignColumns: [country.id],
  }).onDelete('cascade'),
  foreignKey({
    columns: [table.groupId],
    foreignColumns: [group.id],
  }).onDelete('cascade'),
  foreignKey({
    columns: [table.playerId],
    foreignColumns: [player.id],
  }).onDelete('set null'),
  primaryKey({ columns: [table.groupId, table.countryId], name: 'group_country_pkey' }),
]);

export const groupMedal = appPublic.table('group_medal', {
  groupId: uuid('group_id').notNull(),
  medalId: uuid('medal_id').notNull(),
  score: numeric().default('0.0').notNull(),
  playerId: uuid('player_id'),
  goodCountryPositive: uuid('good_country_positive'),
  badCountryPositive: uuid('bad_country_positive'),
  goodCountryNegative: uuid('good_country_negative'),
  badCountryNegative: uuid('bad_country_negative'),
}, table => [
  foreignKey({
    columns: [table.badCountryNegative],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.badCountryPositive],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.goodCountryNegative],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.goodCountryPositive],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.groupId],
    foreignColumns: [group.id],
  }).onDelete('cascade'),
  foreignKey({
    columns: [table.medalId],
    foreignColumns: [medal.id],
  }).onDelete('cascade'),
  foreignKey({
    columns: [table.playerId],
    foreignColumns: [player.id],
  }),
  primaryKey({ columns: [table.groupId, table.medalId], name: 'group_medal_pkey' }),
  pgPolicy('group_medal_select', { as: 'permissive', for: 'all', to: ['app_player'], using: sql`(group_id IN ( SELECT group_player.group_id
   FROM app_public.group_player
  WHERE (group_player.player_id = app_public.current_player_id())))` }),
  pgPolicy('group_medal_admin', { as: 'permissive', for: 'all', to: ['app_admin'] }),
]);

export const groupPlayer = appPublic.table('group_player', {
  playerId: uuid('player_id').notNull(),
  groupId: uuid('group_id').notNull(),
  color: text(),
  place: integer(),
  totalScore: numeric('total_score').default('0').notNull(),
  autodraft: boolean().default(false),
  username: text().default('').notNull(),
  robot: boolean().default(false).notNull(),
}, table => [
  foreignKey({
    columns: [table.groupId],
    foreignColumns: [group.id],
  }).onDelete('cascade'),
  foreignKey({
    columns: [table.playerId],
    foreignColumns: [player.id],
  }),
  primaryKey({ columns: [table.playerId, table.groupId], name: 'group_player_pkey' }),
  pgPolicy('group_player_select', { as: 'permissive', for: 'select', to: ['app_player'], using: sql`(player_id = ANY (app_public.players_in_groups()))` }),
  pgPolicy('group_player_admin', { as: 'permissive', for: 'all', to: ['app_admin'] }),
]);

export const groupOlympiad = appPublic.table('group_olympiad', {
  groupId: uuid('group_id').notNull(),
  olympiadId: uuid('olympiad_id').notNull(),
  drafted: boolean().default(false),
  roundnum: smallint(),
  playerorder: uuid().array(),
  draftingplayer: uuid(),
  subscriptionId: uuid('subscription_id').defaultRandom().notNull(),
  goodCountryId: uuid('good_country_id'),
  badCountryId: uuid('bad_country_id'),
  commissionerId: uuid('commissioner_id'),
  locked: boolean().default(false),
  suggestedCountryId: uuid('suggested_country_id'),
  goldPoints: numeric('gold_points').default('3.0'),
  silverPoints: numeric('silver_points').default('2.0'),
  bronzePoints: numeric('bronze_points').default('1.0'),
  timerLength: integer('timer_length').default(60).notNull(),
  playerNumber: integer('player_number').default(2).notNull(),
}, table => [
  foreignKey({
    columns: [table.badCountryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.commissionerId],
    foreignColumns: [player.id],
  }),
  foreignKey({
    columns: [table.goodCountryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.groupId],
    foreignColumns: [group.id],
  }).onDelete('cascade'),
  foreignKey({
    columns: [table.olympiadId],
    foreignColumns: [olympiad.id],
  }),
  foreignKey({
    columns: [table.suggestedCountryId],
    foreignColumns: [country.id],
  }),
  foreignKey({
    columns: [table.draftingplayer],
    foreignColumns: [player.id],
  }),
  primaryKey({ columns: [table.groupId, table.olympiadId], name: 'group_olympiad_pkey' }),
  pgPolicy('group_olympiad_update_if_commissioner', { as: 'permissive', for: 'update', to: ['app_player'], using: sql`((commissioner_id = app_public.current_player_id()) AND (locked = false))`, withCheck: sql`(commissioner_id = app_public.current_player_id())` }),
  pgPolicy('group_olympiad_select', { as: 'permissive', for: 'select', to: ['app_player'] }),
  pgPolicy('group_olympiad_insert_if_commissioner', { as: 'permissive', for: 'insert', to: ['app_player'] }),
  pgPolicy('group_olympiad_delete_if_commissioner', { as: 'permissive', for: 'delete', to: ['app_player'] }),
  pgPolicy('group_olympiad_admin', { as: 'permissive', for: 'all', to: ['app_admin'] }),
]);

export const groupOlympiadPlayer = appPublic.table('group_olympiad_player', {
  groupId: uuid('group_id').notNull(),
  playerId: uuid('player_id').notNull(),
  olympiadId: uuid('olympiad_id').notNull(),
  color: text(),
  place: integer(),
  totalScore: numeric('total_score').default('0.0'),
  autodraft: boolean().default(false).notNull(),
  username: text(),
}, table => [
  foreignKey({
    columns: [table.groupId, table.olympiadId],
    foreignColumns: [groupOlympiad.groupId, groupOlympiad.olympiadId],
  }).onDelete('cascade'),
  primaryKey({ columns: [table.groupId, table.playerId, table.olympiadId], name: 'group_olympiad_player_pkey' }),
  pgPolicy('group_olympiad_player_player_select', { as: 'permissive', for: 'select', to: ['app_player'], using: sql`(group_id IN ( SELECT group_player.group_id
   FROM app_public.group_player
  WHERE (group_player.player_id = app_public.current_player_id())))` }),
  pgPolicy('group_olympiad_player_autodraft_update', { as: 'permissive', for: 'update', to: ['app_player'] }),
  pgPolicy('group_olympiad_player_admin', { as: 'permissive', for: 'all', to: ['app_admin'] }),
]);
