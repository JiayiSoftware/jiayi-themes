# jiayi-themes

A collection of themes for [Jiayi Launcher](https://github.com/JiayiSoftware/JiayiLauncher), a Minecraft for Windows mod manager.

## About

This place hosts themes and the resources that these themes depend on.

[Anyone is welcome to open a pull request and add their theme to this repo](https://github.com/JiayiSoftware/jiayi-themes/edit/main/README.md#adding-a-new-theme).

## How to use

In the future, you will be able to access the themes here right inside of the launcher.

## Adding a new theme

To add a theme, fork this repository and create a new folder with your desired theme name inside of the `themes` directory.

An example theme's file structure can look like this:

```bash
├── themes
│   ├── <your theme name>
    │   ├── background.<png|jpg|gif|(other common image types) ; mp4|mov|webm>
    │   ├── metadata.json
    │   └── theme.css
```

A `metadata.json` file should have an author and any applicable tags for your theme, and could look like this:

```json
{
  "author": "DeathlyBower959",
  "tags": ["sunset", "aesthetic", "red", "orange", "gradient"],
  "raw_tags": ["dark", "light", "animated"] // these are the only supported raw tags
}
```

Theme metadata is validated automatically.

You can obtain your `theme.css` file within the launcher. Go to **Settings > Appearance > Show theme** to reveal your theme in File Explorer, and drop the file inside of your fork.

When you're finished, open a pull request. Every theme is manually reviewed, and all correctly formatted themes will be accepted, [no matter how good or bad it looks](https://raw.githubusercontent.com/JiayiSoftware/jiayi-themes/main/.github/assets/bad%20theme.png).
