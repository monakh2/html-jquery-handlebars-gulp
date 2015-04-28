HTML5-jQuery-gulp-seed
=================

HTML5/JQuery &amp; Gulp including: unsemantic "sass" (grid only) and other js to support IE8+

##Structure

**In the app folder**    
The index.html file.

**assets folder**:
It holds and style, data, fonts, images and vendor js

#### 2. Naming conversions & structure guide
***
**Naming files**  
This is relate to CSS modulariry.  
Please create modules files and add them to assets>sass>modules. Then call them inside style.scss file.  
All the extra files (partilas, modules, lib) should start with underscore so they won't be compile as independent files.  
files names example:  

* _mod-bt.scss
* _mod-footer

#### 3. Development
***

**JS**:  
Try to build the main.js in a modular way.  
There is a starting IFFE strucutre already in place in the main.js

**Fonts**:  
Please add the necessary fonts to the font folder and edit the assets>sass>partilas> _fonts.scss file to call the font. It has a icon font added to it already.


#### 4. Gulp task runner
***

This seed uses gulp to minify, concatenate, compress images, autoprefix css, template cache system, jshint and sass compiler.    

You can edit Gulpfile.js to adapt to your needs.

***How to use it***
***
1. in the terminal cd to your project folder $cd project_folder
2. $npm install
3. $gulp server (to run project and you can edit it. This will refresh the page)
4. $gulp build (this will create the dist folder with concatenated files and compressed imgeas)
5. $gulp build --prod (this will generate dist folder for production)
6. to test dist folder you can $gulp server:dist (this will show the files in the dist folder)

*Gulp has a server that opens your localhost autmoatically and it comes with livereload*
