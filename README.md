![MountCSS Logo](http://barbo.sa.com/16FPu/60Bwg3lr+)  

mountCSS (beta) is a simple front starter and small pattern library to quickstart your websites. Like Bootstrap in a very lightweight version and without the bloat. It provides basic styles for common elements that you can easily custom.  

# How to use
---
All the library is in the `scss/` folder. You need to compile `style.scss` into a valid `.css` file (A basic `gulpfile.js` is included in this repository that compile, prefix css and group media queries together).  

Start by customizing the `_variables.scss` and extend the structure depending on your project.
  
**Please note that the whole library is unprefixed, you'll need to use autoprefixr or postcss to provide the prefix on the compiled version**

# Frontend starter
---

To quickly start to work, I added a small structure structure (index.html, js folders, gulpfile workflow), to quickly start to code your website.

# Structure
---

• DONE
    - Utils font stack
    - Utils Colors
    - Replace normalize by Reboot
    - Base : Buttons
    - Base : Forms TODO
        All styles
        All states

• TODO
    - Pattern : Section (todo : order variables)
    - Pattern : Blocks (todo : order variables)
    - Pattern : Visibility (find other classes)
    - Pattern : Hero (todo : variabilize)
    - Pattern : Media Object
    - Utils : Mixins
        Box shadow
        Arrows
    - Pattern : Headers
    - Pattern : Footers
    - 
    - Pattern : Badges
    - Pattern : SVG & icons
    - Pattern : Cards
    - Pattern : Absolute positionnement
    - Module : Sliders
    - Module : Modals
    - Module : Cookie
    - Module : Menu responsive
    - Module : Offcanva
    - Module : Star rating


TODO :
    - Improve text color on theme maps loops : https://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184
