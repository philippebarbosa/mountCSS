![MountCSS Logo](http://barbo.sa.com/16FPu/60Bwg3lr+)  

mountCSS (beta) is a simple front starter and small pattern library to quickstart your websites. Like Bootstrap in a very lightweight version and without the bloat. It provides basic styles for common elements that you can easily custom.  

# How to use
---
All the library is in the `scss/` folder. You need to compile `style.scss` into a valid `.css` file (A basic `gulpfile.js` is included in this repository that compile, prefix css and group media queries together).  

Start by customizing the `_variables.scss` and extend the structure depending on your project.
  
**Please note that the whole library is unprefixed, you'll need to use autoprefixr or postcss to provide the prefix on the compiled version**

# Frontend starter
---

To quickly start to work, I added a small structure structure (index.html, js folders, gulpfile workflow), to quickly start to code your website. a

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
|-- config // Suit basinc mountCSS styles heres
|  `-- _variables.scss
|-- pages // Customize the base styles here
|  `-- _home.scss
|-- patterns // Some common patterns used on website
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
|-- utils
|  |-- _brands-colors.scss
|  |-- _colors.scss
|  |-- _font-stacks.scss
|  `-- _mixins.scss
`-- vendors
   `-- _normalize.scss
```
