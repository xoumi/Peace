# Peace

**WIP**, Not published yet.

Minimal syntax highlighting theme for VS Code.  
Allows you to set your own colors.

Based on [this](https://ctrl-c.us/posts/highlight.html) and [this](https://peppe.rs/posts/color_conundrum/).

The colors are upto you. You try to limit your usage of bright colors to 3-4 colors.
* Primary
* Secondary
* Accent
* Highlight, used very sparingly, think regex and escape chars

I'd love to be able to integrate Xresources or something similar into this some day.

## Installation

Clone this repo inside your extensions directory.

Set your color vars in `src/palette.js`.  

```sh
# Generates theme in themes/Peace-color-theme.json
$ node src/index.js

```

## Development
Open debug panel and run the `Debug` configuration to open a VSCode workspace with theme live reloading.
```sh
# Use nodemon for live reloads
$ npm i -g nodemon
$ nodemon src/index.js
```
## Screenshots
Below screenshots also use [customizeUI](https://marketplace.visualstudio.com/items?itemName=iocave.customize-ui).  
Relevant css and VSCode settings should be in my [dotfiles](https://github.com/xoumi/Dotfiles).

![React code](images/scrot1.png)
![CSS code](images/scrot2.png)
