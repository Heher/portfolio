import z from 'zod';

const ZImage = z.object({
  medium: z.url().nullable().optional(),
  original: z.url().nullable().optional(),
});

const ZRating = z.object({
  average: z.number().nullable().optional(),
});

const ZCountry = z.object({
  name: z.string(),
  code: z.string(),
  timezone: z.string(),
});

const ZSchedule = z.object({
  time: z.string(),
  days: z.array(z.string()),
});

const ZLink = z.object({
  href: z.url(),
  name: z.string().optional(),
});

const ZNetwork = z.object({
  id: z.number().nullable().optional(),
  name: z.string().nullable().optional(),
  country: ZCountry.nullable().optional(),
  officialSite: z.url().nullable().optional(),
});

const ZExternalIds = z.object({
  tvrage: z.unknown().nullable().optional(),
  thetvdb: z.number().nullable().optional(),
  imdb: z.string().nullable().optional(),
});

const ZShow = z.object({
  id: z.number(),
  url: z.url(),
  name: z.string(),
  type: z.string(),
  language: z.string(),
  genres: z.array(z.string()),
  status: z.string(),
  runtime: z.number().nullable().optional(),
  averageRuntime: z.number().nullable().optional(),
  premiered: z.string().nullable().optional(),
  ended: z.string().nullable().optional(),
  officialSite: z.url().nullable().optional(),
  schedule: ZSchedule,
  rating: ZRating,
  weight: z.number().nullable().optional(),
  network: ZNetwork.nullable().optional(),
  webChannel: z.unknown().nullable().optional(),
  dvdCountry: z.unknown().nullable().optional(),
  externals: ZExternalIds,
  image: ZImage,
  summary: z.string().nullable().optional(),
  updated: z.number().nullable().optional(),
  _links: z.object({
    self: ZLink,
    previousepisode: ZLink.optional(),
    nextepisode: ZLink.optional(),
  }).optional(),
});

export const ZScheduleData = z.object({
  id: z.number(),
  url: z.url(),
  name: z.string(),
  season: z.number(),
  number: z.number(),
  type: z.string(),
  airdate: z.string(),
  airtime: z.string(),
  airstamp: z.string(),
  runtime: z.number(),
  rating: ZRating,
  image: ZImage.optional(),
  summary: z.string().nullable().optional(),
  show: ZShow,
  _links: z.object({
    self: ZLink,
    show: ZLink,
  }),
});

export type ScheduleData = z.infer<typeof ZScheduleData>;
export type Network = z.infer<typeof ZNetwork>;

const ZFormattedShow = z.object({
  id: z.number(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  duration: z.number(),
});
export type FormattedShow = z.infer<typeof ZFormattedShow>;

const ZFormattedNetwork = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string().nullable().optional(),
  shows: z.array(ZFormattedShow),
});
export type FormattedNetwork = z.infer<typeof ZFormattedNetwork>;
