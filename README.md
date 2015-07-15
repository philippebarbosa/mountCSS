![MountCSS Logo](http://barbo.sa.com/16FPu/60Bwg3lr+)  

mountCSS (beta) is a simple SCSS starter and small component library to quickstart your websites. Like Bootstrap but in a very lightweight version and more pragmatic. It provides basic styles for common elements that you can easily custom.  

# How to use
---
All the library is in the `scss/`folder. You need to compile `style.scss` into a valid .css file (A basic Gruntfile is included in this repository that provide a simple autoprefixing and compile.).  

Start by customizing the `_variables.scss` and extend the structure depending on your project.
  
**PLEASE NOTE THAT THE WHOLE LIBRARY IS UNPREFIXED, YOU'LL NEED TO USE AUTOPREFIXR OR POSTCSS TO PROVIDE THE PREFIX ON THE COMPILED VERSION**

# Structure
---

```scss
├── style.scss // The main file that calls all partials
├── base // Basic html styles
│   ├── _buttons.scss
│   ├── _defaults.scss
│   ├── _forms.scss
│   ├── _grid.scss
│   ├── _lists.scss
│   ├── _tables.scss
│   └── _typography.scss
├── components // Some common patterns used on website
│   ├── _breadcrumbs.scss
│   ├── _embed-responsive.scss
│   ├── _footers.scss
│   ├── _headers.scss
│   ├── _hero.scss
│   ├── _media-object.scss
│   ├── _messages.scss
│   ├── _pagination.scss
│   ├── _tags.scss
│   ├── _utilities-forms.scss
│   └── _utilities-layout.scss
├── pages // Include specific page styles here
│   └── _home.scss
├── utils // Some usefull variables & mixin.
│   ├── _brands-colors.scss
│   ├── _colors.scss
│   ├── _font-stacks.scss
│   ├── _mixins.scss
│   └── _variables.scss // CUSTOMIZE THE BASE STYLES HERE
└── vendors
    └── _normalize.scss
```