# Profile Card

A one-page personal profile card built with plain HTML, CSS and a little JavaScript, with a sliding light/dark theme switch.

| Light mode | Dark mode |
|:---:|:---:|
| <img src="screenshots/light.png" alt="Profile card in light mode" width="320"> | <img src="screenshots/dark.png" alt="Profile card in dark mode" width="320"> |

## Features

- **Light and dark themes.** A sun/moon switch in the card's top-right corner slides between them.
- **Remembers your choice.** On a first visit it follows your computer's light/dark setting. After that it remembers the theme you picked.
- **Design tokens.** All colours, spacing, corner radii and shadows are defined once as CSS variables. Each theme is a set of values for the same tokens, like variable modes in Figma.
- **Responsive.** The card scales down to fit phone screens.
- **Accessible switch.** Screen readers announce it as a "Dark mode" switch that is on or off.

## How to view it

1. Download or clone this repository.
2. Open `index.html` in any web browser.

You don't need to install or build anything.

## Files

| File | What it does |
|---|---|
| `index.html` | The content and structure: what's on the card and in what order. |
| `styles.css` | The visual design: colours, type, spacing, layout and the two themes. |
| `theme.js` | The theme switch: flips between light and dark and remembers the choice. |
| `screenshots/` | The images used in this README. |

## Design notes

- **Palette:** a warm orange accent (`#e8590c`) with a peach-to-pink cover gradient. In dark mode the accent brightens to `#ff8a4c` so it stays vivid on the dark card. Text on orange switches from white to dark navy so it stays readable.
- **Type:** [Inter](https://fonts.google.com/specimen/Inter), loaded from Google Fonts.
- **Spacing:** a 4/8/16/24/32px scale, based on an 8pt grid.
- **Motion:** the switch knob slides with an ease-out curve over 0.3s, and colours fade when the theme changes.

## Built with

- HTML
- CSS (custom properties, Flexbox and Grid)
- JavaScript (theme switch only)
