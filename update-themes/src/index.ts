import fs from 'fs/promises';
import path from 'path';

import { metadataSchema } from './schema';

import type { IPublicTheme } from './types';
const repo_owner = 'DeathlyBower959';
const repo_name = 'jiayi-themes';
const getDownloadUrl = (theme: string, file: string) =>
  new URL(
    `https://raw.githubusercontent.com/${repo_owner}/${repo_name}/main/themes/${theme}/${file}`
  );

async function main() {
  let allThemes: IPublicTheme[] = [];

  const dirs = await fs.readdir('../themes', {
    withFileTypes: true,
  });

  for (let theme of dirs) {
    const files = await fs.readdir(path.join('../themes', theme.name), {
      withFileTypes: true,
    });

    let themeData: IPublicTheme = {
      name: theme.name,
      tags: [],
    };
    for (let file of files) {
      if (file.isFile()) {
        if (file.name.startsWith('image.')) {
          themeData.bg = getDownloadUrl(theme.name, file.name);
        } else if (file.name === 'theme.css') {
          themeData.theme = getDownloadUrl(theme.name, file.name);
        } else if (file.name === 'metadata.json') {
          const meta_data = await fs.readFile(
            path.join('../themes', theme.name, file.name),
            'utf8'
          );

          const result = await metadataSchema.safeParse(JSON.parse(meta_data));
          if (!result.success) {
            console.error(
              'Failed to read metadata: ' + theme.name + '\n' + result.error
            );
            continue;
          }

          themeData.meta = getDownloadUrl(theme.name, file.name);
          themeData.tags = result.data.tags;
        } else {
          console.error('Unsupported file in theme: ' + file.name);
        }
      }
    }

    allThemes.push(themeData);
  }

  // add JSON.stringify(allThemes, null, 2) for formatting
  await fs.writeFile('all_themes.json', JSON.stringify(allThemes));
}

main();
