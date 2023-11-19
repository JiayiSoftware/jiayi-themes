export interface IPublicTheme {
  name: string;

  author: string;
  tags: string[];
  raw_tags: string[];

  bg?: URL;
  meta?: URL;
  theme?: URL;
}
