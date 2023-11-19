import z from 'zod';

export const metadataSchema = z.object({
  author: z.string(),
  tags: z.array(z.string()),
});
