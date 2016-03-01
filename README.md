![MountCSS Logo](http://barbo.sa.com/16FPu/60Bwg3lr+)  

mountCSS (beta) is a simple SCSS starter and small component library to quickstart your websites. Like Bootstrap in a very lightweight version and without the bloat. It provides basic styles for common elements that you can easily custom.  

# How to use
---
All the library is in the `scss/` folder. You need to compile `style.scss` into a valid `.css` file (A basic `gulpfile.js` is included in this repository that compile, prefix css and group media queries together).  

Start by customizing the `_variables.scss` and extend the structure depending on your project.
  
**PLEASE NOTE THAT THE WHOLE LIBRARY IS UNPREFIXED, YOU'LL NEED TO USE AUTOPREFIXR OR POSTCSS TO PROVIDE THE PREFIX ON THE COMPILED VERSION**

# Structure
---

```scss
|-- _style.scss // The main file that calls all partials
|-- base
|  |-- _buttons.scss
|  |-- _defaults.scss
|  |-- _forms.scss
|  |-- _grid.scss
|  |-- _lists.scss
|  |-- _tables.scss
|  `-- _typography.scss
|-- components // Some common patterns used on website
|  |-- _breadcrumbs.scss
|  |-- _embed-responsive.scss
|  |-- _footers.scss
|  |-- _headers.scss
|  |-- _hero.scss
|  |-- _media-object.scss
|  |-- _messages.scss
|  |-- _pagination.scss
|  |-- _tags.scss
|  |-- _utilities-forms.scss
|  `-- _utilities-layout.scss
|-- config
|  `-- _variables.scss
|-- pages // CUSTOMIZE THE BASE STYLES HERE
|  `-- _home.scss
|-- style.scss
|-- utils
|  |-- _brands-colors.scss
|  |-- _colors.scss
|  |-- _font-stacks.scss
|  `-- _mixins.scss
`-- vendors
   `-- _normalize.scss
```
