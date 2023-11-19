import z from 'zod';

export const metadataSchema = z.object({
  author: z.string(),
  tags: z.array(z.string()),
  raw_tags: z.array(z.enum(['dark', 'light', 'animated'])),
});
