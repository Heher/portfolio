import {
  pgSchema,
  pgEnum,
  uuid,
  text,
  boolean,
  smallint,
  numeric,
  integer,
  index,
  timestamp,
  bigint,
  varchar,
  AnyPgColumn,
  primaryKey,
  json
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const app_public = pgSchema('app_public');
export const app_private = pgSchema('app_private');
export const medaltypeInApp_public = app_public.enum('medaltype', ['gold', 'silver', 'bronze']);
export const olympiadtypeInApp_public = app_public.enum('olympiadtype', ['summer', 'winter']);

export const AthleteTable = app_public.table(
  'athlete',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    fullName: text('full_name'),
    fullFirstName: text('full_first_name'),
    fullLastName: text('full_last_name'),
    usedName: text('used_name'),
    usedFirstName: text('used_first_name'),
    usedLastName: text('used_last_name'),
    otherNames: text('other_names').array(),
    slug: text('slug'),
    totalMedals: smallint('total_medals'),
    goldMedals: smallint('gold_medals'),
    silverMedals: smallint('silver_medals'),
    bronzeMedals: smallint('bronze_medals')
  },
  (table) => {
    return {
      idx_athlete_total_medals: index('idx_athlete_total_medals').on(table.totalMedals),
      idx_athlete_slug: index('idx_athlete_slug').on(table.slug)
    };
  }
);

export const CityTable = app_public.table(
  'city',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    name: text('name'),
    countryId: uuid('country_id')
      .notNull()
      .references(() => CountryTable.id),
    slug: text('slug'),
    formerName: text('former_name')
  },
  (table) => {
    return {
      idx_city_country_id: index('idx_city_country_id').on(table.countryId)
    };
  }
);

export const CountryTable = app_public.table(
  'country',
  {
    id: uuid('id').primaryKey().defaultRandom().notNull(),
    name: text('name'),
    slug: text('slug'),
    nocs: text('nocs').array(),
    regionId: uuid('region_id').references(() => RegionTable.id)
  },
  (table) => {
    return {
      idx_country_region_id: index('idx_country_region_id').on(table.regionId)
    };
  }
);

export const EventTable = app_public.table(
  'event',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    name: text('name'),
    slug: text('slug'),
    sportId: uuid('sport_id')
      .notNull()
      .references(() => SportTable.id),
    team: boolean('team').default(false).notNull(),
    fullSlug: text('full_slug')
  },
  (table) => {
    return {
      idx_event_sport_id: index('idx_event_sport_id').on(table.sportId)
    };
  }
);

export const FlagTable = app_public.table(
  'flag',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    svg: text('svg'),
    countryId: uuid('country_id')
      .notNull()
      .references(() => CountryTable.id),
    png: text('png'),
    startDate: timestamp('start_date', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    endDate: timestamp('end_date', { withTimezone: true, mode: 'string' })
  },
  (table) => {
    return {
      idx_flag_country_id: index('idx_flag_country_id').on(table.countryId)
    };
  }
);

export const GroupTable = app_public.table(
  'group',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    name: text('name'),
    commissionerId: uuid('commissioner_id')
      .notNull()
      .references(() => PlayerTable.id),
    olympiadId: uuid('olympiad_id')
      .notNull()
      .references(() => OlympiadTable.id),
    drafted: boolean('drafted').default(false).notNull(),
    roundnum: smallint('roundnum'),
    playerorder: uuid('playerorder').array(),
    draftingplayer: uuid('draftingplayer').references(() => PlayerTable.id),
    goodCountryId: uuid('good_country_id').references(() => CountryTable.id),
    badCountryId: uuid('bad_country_id').references(() => CountryTable.id),
    locked: boolean('locked').default(false).notNull(),
    suggestedCountryId: uuid('suggested_country_id').references(() => CountryTable.id),
    goldPoints: numeric('gold_points').default('3.0').notNull(),
    silverPoints: numeric('silver_points').default('2.0').notNull(),
    bronzePoints: numeric('bronze_points').default('1.0').notNull(),
    timerLength: integer('timer_length').default(60).notNull(),
    playerNumber: integer('player_number').default(2).notNull(),
    availableColors: text('available_colors').array(),
    scored: boolean('scored').default(false).notNull(),
    pausedSeconds: numeric('paused_seconds'),
    paused: boolean('paused').default(false).notNull(),
    started: boolean('started').default(false).notNull(),
    chartData: json('chart_data')
  },
  (table) => {
    return {
      idx_group_commissioner_id: index('idx_group_commissioner_id').on(table.commissionerId),
      idx_group_olympiad_id: index('idx_group_olympiad_id').on(table.olympiadId),
      idx_group_draftingplayer: index('idx_group_draftingplayer').on(table.draftingplayer),
      idx_group_good_country_id: index('idx_group_good_country_id').on(table.goodCountryId),
      idx_group_bad_country_id: index('idx_group_bad_country_id').on(table.badCountryId),
      idx_group_suggested_country_id: index('idx_group_suggested_country_id').on(table.suggestedCountryId)
    };
  }
);

export const GroupCountryTable = app_public.table(
  'group_country',
  {
    groupId: uuid('group_id')
      .notNull()
      .references(() => GroupTable.id),
    countryId: uuid('country_id')
      .notNull()
      .references(() => CountryTable.id),
    playerId: uuid('player_id').references(() => PlayerTable.id),
    roundnum: smallint('roundnum'),
    totalScore: numeric('total_score').default('0').notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.groupId, table.countryId] }),
      idx_group_country_group_id: index('idx_group_country_group_id').on(table.groupId),
      idx_group_country_country_id: index('idx_group_country_country_id').on(table.countryId),
      idx_group_country_player_id: index('idx_group_country_player_id').on(table.playerId)
    };
  }
);

export const GroupMedalTable = app_public.table(
  'group_medal',
  {
    groupId: uuid('group_id')
      .notNull()
      .references(() => GroupTable.id),
    medalId: uuid('medal_id')
      .notNull()
      .references(() => MedalTable.id),
    score: numeric('score').default('0.0').notNull(),
    playerId: uuid('player_id').references(() => PlayerTable.id),
    goodCountryPositive: uuid('good_country_positive').references(() => CountryTable.id),
    badCountryPositive: uuid('bad_country_positive').references(() => CountryTable.id),
    goodCountryNegative: uuid('good_country_negative').references(() => CountryTable.id),
    badCountryNegative: uuid('bad_country_negative').references(() => CountryTable.id)
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.groupId, table.medalId] }),
      idx_group_medal_group_id: index('idx_group_medal_group_id').on(table.groupId),
      idx_group_medal_medal_id: index('idx_group_medal_medal_id').on(table.medalId),
      idx_group_medal_player_id: index('idx_group_medal_player_id').on(table.playerId)
    };
  }
);

export const GroupPlayerTable = app_public.table(
  'group_player',
  {
    groupId: uuid('group_id')
      .notNull()
      .references(() => GroupTable.id),
    playerId: uuid('player_id')
      .notNull()
      .references(() => PlayerTable.id),
    color: text('color'),
    place: integer('place'),
    totalScore: numeric('total_score').default('0').notNull(),
    autodraft: boolean('autodraft').default(false),
    username: text('username').default('').notNull(),
    robot: boolean('robot').default(false).notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.groupId, table.playerId] }),
      idx_group_player_group_id: index('idx_group_player_group_id').on(table.groupId),
      idx_group_player_player_id: index('idx_group_player_player_id').on(table.playerId)
    };
  }
);

export const groupOlympiad = app_public.table(
  'group_olympiad',
  {
    group_id: uuid('group_id')
      .notNull()
      .references(() => GroupTable.id),
    olympiad_id: uuid('olympiad_id')
      .notNull()
      .references(() => OlympiadTable.id),
    drafted: boolean('drafted').default(false),
    roundnum: smallint('roundnum'),
    playerorder: uuid('playerorder').array(),
    draftingplayer: uuid('draftingplayer').references(() => PlayerTable.id),
    subscription_id: uuid('subscription_id').defaultRandom().notNull(),
    good_country_id: uuid('good_country_id').references(() => CountryTable.id),
    bad_country_id: uuid('bad_country_id').references(() => CountryTable.id),
    commissioner_id: uuid('commissioner_id').references(() => PlayerTable.id),
    locked: boolean('locked').default(false),
    suggested_country_id: uuid('suggested_country_id').references(() => CountryTable.id),
    gold_points: numeric('gold_points').default('3.0'),
    silver_points: numeric('silver_points').default('2.0'),
    bronze_points: numeric('bronze_points').default('1.0'),
    timer_length: integer('timer_length').default(60).notNull(),
    player_number: integer('player_number').default(2).notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.group_id, table.olympiad_id] })
    };
  }
);

export const medalTypeEnum = pgEnum('medal_type', ['gold', 'silver', 'bronze']);

export const MedalTable = app_public.table(
  'medal',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    athleteId: uuid('athlete_id').references(() => AthleteTable.id),
    medalType: medalTypeEnum('medal_type'),
    olympiadEventId: uuid('olympiad_event_id')
      .notNull()
      .references(() => OlympiadEventTable.id),
    countryId: uuid('country_id')
      .notNull()
      .references(() => CountryTable.id),
    medalClass: integer('medal_class').default(0).notNull(),
    medalTeamId: uuid('medal_team_id').references(() => MedalTeamTable.id),
    verified: boolean('verified'),
    athleteCountryId: uuid('athlete_country_id').references(() => CountryTable.id)
  },
  (table) => {
    return {
      idx_athlete_medals: index('idx_athlete_medals').on(table.athleteId),
      idx_medal_olympiad_event: index('idx_medal_olympiad_event').on(table.olympiadEventId),
      idx_country_medals: index('idx_country_medals').on(table.countryId),
      idx_medal_team_medal: index('idx_medal_team_medal').on(table.medalTeamId),
      idx_athlete_country_medals: index('idx_athlete_country_medals').on(table.athleteCountryId)
    };
  }
);

export const MedalTeamTable = app_public.table(
  'medal_team',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    name: text('name'),
    mixed: boolean('mixed').default(false).notNull(),
    olympiadEventId: uuid('olympiad_event_id').references(() => OlympiadEventTable.id)
  },
  (table) => {
    return {
      idx_medal_team_olympiad_event_id: index('idx_medal_team_olympiad_event_id').on(table.olympiadEventId)
    };
  }
);

export const OlympiadType = pgEnum('olympiad_type', ['summer', 'winter']);

export const OlympiadTable = app_public.table(
  'olympiad',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    year: smallint('year').notNull(),
    olympiadType: OlympiadType('olympiad_type'),
    cityId: uuid('city_id').references(() => CityTable.id),
    slug: text('slug'),
    realOlympiad: boolean('real_olympiad').default(true).notNull(),
    previousOlympiadId: uuid('previous_olympiad_id').references((): AnyPgColumn => OlympiadTable.id),
    secondCityId: uuid('second_city_id').references(() => CityTable.id),
    startDate: timestamp('start_date', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    endDate: timestamp('end_date', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    maxPlayers: smallint('max_players').default(2).notNull()
  },
  (table) => {
    return {
      idx_olympiad_city_id: index('idx_olympiad_city_id').on(table.cityId),
      idx_olympiad_previous_olympiad_id: index('idx_olympiad_previous_olympiad_id').on(table.previousOlympiadId),
      idx_olympiad_second_city_id: index('idx_olympiad_second_city_id').on(table.secondCityId)
    };
  }
);

export const OlympiadAthleteTable = app_public.table(
  'olympiad_athlete',
  {
    olympiadId: uuid('olympiad_id')
      .notNull()
      .references(() => OlympiadTable.id),
    athleteId: uuid('athlete_id')
      .notNull()
      .references(() => AthleteTable.id)
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.olympiadId, table.athleteId] }),
      idx_olympiad_athlete_olympiad_id: index('idx_olympiad_athlete_olympiad_id').on(table.olympiadId),
      idx_olympiad_athlete_athlete_id: index('idx_olympiad_athlete_athlete_id').on(table.athleteId)
    };
  }
);

export const OlympiadCountryTable = app_public.table(
  'olympiad_country',
  {
    motherCountryId: uuid('mother_country_id')
      .notNull()
      .references(() => CountryTable.id),
    countryId: uuid('country_id')
      .notNull()
      .references(() => CountryTable.id),
    olympiadId: uuid('olympiad_id')
      .notNull()
      .references(() => OlympiadTable.id),
    regionId: uuid('region_id').references(() => RegionTable.id),
    flagId: uuid('flag_id').references(() => FlagTable.id)
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.countryId, table.olympiadId] }),
      idx_olympiad_country_mother_country_id: index('idx_olympiad_country_mother_country_id').on(table.motherCountryId),
      idx_olympiad_country_country_id: index('idx_olympiad_country_country_id').on(table.countryId),
      idx_olympiad_country_olympiad_id: index('idx_olympiad_country_olympiad_id').on(table.olympiadId),
      idx_olympiad_country_region_id: index('idx_olympiad_country_region_id').on(table.regionId),
      idx_olympiad_country_flag_id: index('idx_olympiad_country_flag_id').on(table.flagId)
    };
  }
);

export const OlympiadEventTable = app_public.table(
  'olympiad_event',
  {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    olympiadId: uuid('olympiad_id')
      .notNull()
      .references(() => OlympiadTable.id),
    eventId: uuid('event_id')
      .notNull()
      .references(() => EventTable.id),
    datetime: timestamp('datetime', { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    dateString: text('date_string'),
    verifiedDate: boolean('verified_date').default(false).notNull()
  },
  (table) => {
    return {
      idx_event_id: index('idx_event_id').on(table.eventId),
      idx_olympiad_event_olympiad_id: index('idx_olympiad_event_olympiad_id').on(table.olympiadId)
    };
  }
);

export const OlympiadRegionSettingTable = app_public.table(
  'olympiad_region_setting',
  {
    olympiadId: uuid('olympiad_id')
      .notNull()
      .references(() => OlympiadTable.id),
    regionId: uuid('region_id')
      .notNull()
      .references(() => RegionTable.id),
    amount: integer('amount').notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.olympiadId, table.regionId] }),
      idx_olympiad_region_setting_olympiad_id: index('idx_olympiad_region_setting_olympiad_id').on(table.olympiadId),
      idx_olympiad_region_setting_region_id: index('idx_olympiad_region_setting_region_id').on(table.regionId)
    };
  }
);

export const OlympiadSportTable = app_public.table(
  'olympiad_sport',
  {
    olympiadId: uuid('olympiad_id')
      .notNull()
      .references(() => OlympiadTable.id),
    sportId: uuid('sport_id')
      .notNull()
      .references(() => SportTable.id),
    tops: json('tops')
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.olympiadId, table.sportId] }),
      idx_olympiad_sport_olympiad_id: index('idx_olympiad_sport_olympiad_id').on(table.olympiadId),
      idx_olympiad_sport_sport_id: index('idx_olympiad_sport_sport_id').on(table.sportId)
    };
  }
);

export const PlayerTable = app_public.table('player', {
  id: uuid('id').defaultRandom().notNull().primaryKey(),
  username: text('username'),
  slug: text('slug'),
  robot: boolean('robot').default(false).notNull(),
  registeredDate: timestamp('registered_date', { withTimezone: true, mode: 'string' }),
  lastLogin: timestamp('last_login', { withTimezone: true, mode: 'string' }),
  archived: boolean('archived').default(false).notNull()
});

export const PlayerAccountTable = app_private.table(
  'player_account',
  {
    playerId: uuid('player_id')
      .notNull()
      .references(() => PlayerTable.id),
    email: text('email').notNull(),
    passwordHash: text('password_hash'),
    admin: boolean('admin').default(false),
    commissioner: boolean('commissioner').default(false),
    currentChallenge: text('current_challenge'),
    plusPlayer: boolean('plus_player').default(false)
  },
  (table) => {
    return {
      idx_player_account_player_id: index('idx_player_account_player_id').on(table.playerId)
    };
  }
);

export const SiteSettingsTable = app_private.table('site_settings', {
  allowRegistration: boolean('allow_registration').default(true).notNull(),
  allowParis: boolean('allow_paris').default(false).notNull()
});

// export const groupOlympiadCountry = app_public.table('group_olympiad_country', {
//   group_id: uuid('group_id').notNull(),
//   country_id: uuid('country_id').notNull(),
//   olympiad_id: uuid('olympiad_id').notNull(),
//   player_id: uuid('player_id'),
//   roundnum: smallint('roundnum')
// });

export const MedalClassTable = app_public.table('medal_class', {
  medalRank: integer('medal_rank').notNull().primaryKey(),
  medalType: medalTypeEnum('medal_type')
});

export const passwordReset = app_private.table('password_reset', {
  email: text('email').notNull(),
  reset_key: text('reset_key')
});

export const RegionTable = app_public.table('region', {
  id: uuid('id').defaultRandom().notNull().primaryKey(),
  name: text('name'),
  slug: text('slug'),
  color: text('color')
});

// export const groupOlympiadPlayer = app_public.table('group_olympiad_player', {
//   group_id: uuid('group_id').notNull(),
//   player_id: uuid('player_id').notNull(),
//   olympiad_id: uuid('olympiad_id').notNull(),
//   color: text('color'),
//   place: integer('place'),
//   total_score: numeric('total_score').default('0.0'),
//   autodraft: boolean('autodraft').default(false).notNull(),
//   username: text('username')
// });

export const SportTable = app_public.table('sport', {
  id: uuid('id').defaultRandom().notNull().primaryKey(),
  name: text('name'),
  slug: text('slug')
});

export const UserAuthenticatorTable = app_public.table(
  'user_authenticator',
  {
    credentialId: text('credential_id').notNull().primaryKey(),
    credentialPublicKey: text('credential_public_key'),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    counter: bigint('counter', { mode: 'number' }),
    credentialDeviceType: varchar('credential_device_type', { length: 32 }),
    credentialBackedUp: boolean('credential_backed_up'),
    transports: varchar('transports', { length: 255 }),
    playerId: uuid('player_id')
      .notNull()
      .references(() => PlayerTable.id),
    name: text('name').default('Unknown device').notNull(),
    icon: text('icon').default('desktop').notNull(),
    os: text('os').default('Unknown os').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow().notNull()
  },
  (table) => {
    return {
      idx_user_authenticator_player_id: index('idx_user_authenticator_player_id').on(table.playerId)
    };
  }
);

// * RELATIONS

export const OlympiadTableRelations = relations(OlympiadTable, ({ one, many }) => {
  return {
    city: one(CityTable, {
      fields: [OlympiadTable.cityId],
      references: [CityTable.id]
    }),
    olympiadSports: many(OlympiadSportTable),
    olympiadEvents: many(OlympiadEventTable),
    groups: many(GroupTable),
    olympiadRegionSettings: many(OlympiadRegionSettingTable)
  };
});

export const CityTableRelations = relations(CityTable, ({ one, many }) => {
  return {
    olympiads: many(OlympiadTable),
    country: one(CountryTable, {
      fields: [CityTable.countryId],
      references: [CountryTable.id]
    })
  };
});

export const CountryTableRelations = relations(CountryTable, ({ one, many }) => {
  return {
    flags: many(FlagTable),
    cities: many(CityTable),
    groupCountries: many(GroupCountryTable),
    olympiadCountries: many(OlympiadCountryTable),
    medals: many(MedalTable, { relationName: 'country' })
  };
});

export const FlagTableRelations = relations(FlagTable, ({ one, many }) => {
  return {
    country: one(CountryTable, {
      fields: [FlagTable.countryId],
      references: [CountryTable.id]
    })
  };
});

export const SportTableRelations = relations(SportTable, ({ one, many }) => {
  return {
    olympiadSports: many(OlympiadSportTable),
    events: many(EventTable)
  };
});

export const OlympiadSportRelations = relations(OlympiadSportTable, ({ one, many }) => {
  return {
    olympiad: one(OlympiadTable, {
      fields: [OlympiadSportTable.olympiadId],
      references: [OlympiadTable.id]
    }),
    sport: one(SportTable, {
      fields: [OlympiadSportTable.sportId],
      references: [SportTable.id]
    })
  };
});

export const EventTableRelations = relations(EventTable, ({ one, many }) => {
  return {
    sport: one(SportTable, {
      fields: [EventTable.sportId],
      references: [SportTable.id]
    }),
    olympiadEvents: many(OlympiadEventTable)
  };
});

export const OlympiadEventTableRelations = relations(OlympiadEventTable, ({ one, many }) => {
  return {
    event: one(EventTable, {
      fields: [OlympiadEventTable.eventId],
      references: [EventTable.id]
    }),
    olympiad: one(OlympiadTable, {
      fields: [OlympiadEventTable.olympiadId],
      references: [OlympiadTable.id]
    }),
    medals: many(MedalTable)
  };
});

export const GroupPlayerTableRelations = relations(GroupPlayerTable, ({ one, many }) => {
  return {
    group: one(GroupTable, {
      fields: [GroupPlayerTable.groupId],
      references: [GroupTable.id]
    }),
    player: one(PlayerTable, {
      fields: [GroupPlayerTable.playerId],
      references: [PlayerTable.id]
    })
  };
});

export const GroupTableRelations = relations(GroupTable, ({ one, many }) => {
  return {
    groupPlayers: many(GroupPlayerTable),
    olympiad: one(OlympiadTable, {
      fields: [GroupTable.olympiadId],
      references: [OlympiadTable.id]
    }),
    groupCountries: many(GroupCountryTable),
    groupMedals: many(GroupMedalTable)
  };
});

export const PlayerTableRelations = relations(PlayerTable, ({ one, many }) => {
  return {
    groupPlayers: many(GroupPlayerTable),
    groupCountries: many(GroupCountryTable),
    playerAccount: one(PlayerAccountTable, {
      fields: [PlayerTable.id],
      references: [PlayerAccountTable.playerId]
    })
  };
});

export const GroupCountryTableRelations = relations(GroupCountryTable, ({ one, many }) => {
  return {
    group: one(GroupTable, {
      fields: [GroupCountryTable.groupId],
      references: [GroupTable.id]
    }),
    country: one(CountryTable, {
      fields: [GroupCountryTable.countryId],
      references: [CountryTable.id]
    }),
    player: one(PlayerTable, {
      fields: [GroupCountryTable.playerId],
      references: [PlayerTable.id]
    })
  };
});

export const GroupMedalTableRelations = relations(GroupMedalTable, ({ one, many }) => {
  return {
    group: one(GroupTable, {
      fields: [GroupMedalTable.groupId],
      references: [GroupTable.id]
    }),
    medal: one(MedalTable, {
      fields: [GroupMedalTable.medalId],
      references: [MedalTable.id]
    }),
    player: one(PlayerTable, {
      fields: [GroupMedalTable.playerId],
      references: [PlayerTable.id]
    })
  };
});

export const MedalTableRelations = relations(MedalTable, ({ one, many }) => {
  return {
    athlete: one(AthleteTable, {
      fields: [MedalTable.athleteId],
      references: [AthleteTable.id]
    }),
    country: one(CountryTable, {
      fields: [MedalTable.countryId],
      references: [CountryTable.id],
      relationName: 'country'
    }),
    medalTeam: one(MedalTeamTable, {
      fields: [MedalTable.medalTeamId],
      references: [MedalTeamTable.id]
    }),
    athleteCountry: one(CountryTable, {
      fields: [MedalTable.athleteCountryId],
      references: [CountryTable.id],
      relationName: 'athleteCountry'
    }),
    olympiadEvent: one(OlympiadEventTable, {
      fields: [MedalTable.olympiadEventId],
      references: [OlympiadEventTable.id]
    })
  };
});

export const AthleteTableRelations = relations(AthleteTable, ({ one, many }) => {
  return {
    medals: many(MedalTable)
  };
});

export const OlympiadCountryTableRelations = relations(OlympiadCountryTable, ({ one, many }) => {
  return {
    country: one(CountryTable, {
      fields: [OlympiadCountryTable.countryId],
      references: [CountryTable.id]
    }),
    olympiad: one(OlympiadTable, {
      fields: [OlympiadCountryTable.olympiadId],
      references: [OlympiadTable.id]
    }),
    flag: one(FlagTable, {
      fields: [OlympiadCountryTable.flagId],
      references: [FlagTable.id]
    })
  };
});

export const OlympiadRegionSettingsTableRelations = relations(OlympiadRegionSettingTable, ({ one, many }) => {
  return {
    olympiad: one(OlympiadTable, {
      fields: [OlympiadRegionSettingTable.olympiadId],
      references: [OlympiadTable.id]
    }),
    region: one(RegionTable, {
      fields: [OlympiadRegionSettingTable.regionId],
      references: [RegionTable.id]
    })
  };
});
