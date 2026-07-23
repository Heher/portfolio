import { defineRelations } from 'drizzle-orm';

import * as schema from './schema';

export const relations = defineRelations(schema, (r) => {
  return {
    olympiad: {
      city: r.one.city({
        from: r.olympiad.cityId,
        to: r.city.id,
      }),
      olympiadSports: r.many.olympiadSport(),
      olympiadEvents: r.many.olympiadEvent(),
      groups: r.many.group(),
      olympiadRegionSettings: r.many.olympiadRegionSetting(),
      // olympiadCountries: r.many.country({
      //   from: r.olympiad.id.through(r.olympiadCountry.olympiadId),
      //   to: r.country.id.through(r.olympiadCountry.countryId),
      // }),
      olympiadCountries: r.many.olympiadCountry(),
    },
    city: {
      olympiads: r.many.olympiad(),
      country: r.one.country({
        from: r.city.countryId,
        to: r.country.id,
      }),
    },
    country: {
      flags: r.many.flag(),
      cities: r.many.city(),
      groupCountries: r.many.groupCountry(),
      olympiadCountries: r.many.olympiadCountry(),
      medals: r.many.medal({
        alias: 'country',
      }),
    },
    flag: {
      country: r.one.country({
        from: r.flag.countryId,
        to: r.country.id,
      }),
    },
    sport: {
      olympiadSports: r.many.olympiadSport(),
      events: r.many.event(),
    },
    olympiadSport: {
      olympiad: r.one.olympiad({
        from: r.olympiadSport.olympiadId,
        to: r.olympiad.id,
      }),
      sport: r.one.sport({
        from: r.olympiadSport.sportId,
        to: r.sport.id,
      }),
    },
    event: {
      sport: r.one.sport({
        from: r.event.sportId,
        to: r.sport.id,
      }),
      olympiadEvents: r.many.olympiadEvent(),
    },
    olympiadEvent: {
      event: r.one.event({
        from: r.olympiadEvent.eventId,
        to: r.event.id,
      }),
      olympiad: r.one.olympiad({
        from: r.olympiadEvent.olympiadId,
        to: r.olympiad.id,
      }),
      medals: r.many.medal(),
    },
    groupPlayer: {
      group: r.one.group({
        from: r.groupPlayer.groupId,
        to: r.group.id,
      }),
      player: r.one.player({
        from: r.groupPlayer.playerId,
        to: r.player.id,
      }),
    },
    group: {
      groupPlayers: r.many.groupPlayer(),
      olympiad: r.one.olympiad({
        from: r.group.olympiadId,
        to: r.olympiad.id,
      }),
      groupCountries: r.many.groupCountry(),
      groupMedals: r.many.groupMedal(),
    },
    player: {
      groupPlayers: r.many.groupPlayer(),
      groupCountries: r.many.groupCountry(),
      playerAccount: r.one.playerAccount({
        from: r.player.id,
        to: r.playerAccount.playerId,
      }),
    },
    groupCountry: {
      group: r.one.group({
        from: r.groupCountry.groupId,
        to: r.group.id,
      }),
      country: r.one.country({
        from: r.groupCountry.countryId,
        to: r.country.id,
      }),
      player: r.one.player({
        from: r.groupCountry.playerId,
        to: r.player.id,
      }),
    },
    groupMedal: {
      group: r.one.group({
        from: r.groupMedal.groupId,
        to: r.group.id,
      }),
      medal: r.one.medal({
        from: r.groupMedal.medalId,
        to: r.medal.id,
      }),
      player: r.one.player({
        from: r.groupMedal.playerId,
        to: r.player.id,
      }),
    },
    medal: {
      athlete: r.one.athlete({
        from: r.medal.athleteId,
        to: r.athlete.id,
      }),
      country: r.one.country({
        from: r.medal.countryId,
        to: r.country.id,
        alias: 'country',
      }),
      medalTeam: r.one.medalTeam({
        from: r.medal.medalTeamId,
        to: r.medalTeam.id,
      }),
      athleteCountry: r.one.country({
        from: r.medal.athleteCountryId,
        to: r.country.id,
        alias: 'athleteCountry',
      }),
      olympiadEvent: r.one.olympiadEvent({
        from: r.medal.olympiadEventId,
        to: r.olympiadEvent.id,
      }),
    },
    athlete: {
      medals: r.many.medal(),
    },
    olympiadCountry: {
      country: r.one.country({
        from: r.olympiadCountry.countryId,
        to: r.country.id,
      }),
      olympiad: r.one.olympiad({
        from: r.olympiadCountry.olympiadId,
        to: r.olympiad.id,
      }),
      flag: r.one.flag({
        from: r.olympiadCountry.flagId,
        to: r.flag.id,
      }),
    },
    olympiadRegionSetting: {
      olympiad: r.one.olympiad({
        from: r.olympiadRegionSetting.olympiadId,
        to: r.olympiad.id,
      }),
      region: r.one.region({
        from: r.olympiadRegionSetting.regionId,
        to: r.region.id,
      }),
    },
  };
});
