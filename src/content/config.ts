import { defineCollection, z } from "astro:content";

const episodeSchema = z.object({
  title: z.string(),
  audioUrl: z.string(),
  audioSubtitleUrl: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  cover: z.string().optional(),
  explicit: z.boolean().optional(),
  episode: z.number().optional(),
  season: z.number().optional(),
  episodeType: z.string().optional(),
  duration: z.coerce.string(), //duration in format hh:mm:ss
  size: z.number(), // size in megabytes
  index: z.number(),
});

export type episodeSchema = z.infer<typeof episodeSchema>;

const episodeCollection = defineCollection({ schema: episodeSchema });

export const collections = {
  'episode': episodeCollection,
}
