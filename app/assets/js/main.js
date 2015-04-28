/*jslint browser:true */
/*global Handlebars */


'use strict';

// IIFE - Immediately Invoked Function Expression (JS modules)
(function($, window, document) {

    //The $ is now locally scoped 
   //Listen for the jQuery ready event on the document
   $(function() {

     App.init();  

   });

    var App = {
    	init: function(){
        App.loadService();
      },
    	eventHandlers: function(){},
      loadService: function(){
        // Get the data
        var url = 'assets/data/default.json';
          $.ajax({
              url: url,
              dataType: 'json',
              //For Crossdomian calls wrap you json file win a jsonCallback() and rename dataType to 'jsonp'
              //jsonpCallback: 'jsonCallback', 
              success: function (data) {
                console.log(data.data);
                //Populate handlebars
                //Use the code below only if you want to use handlebars otherwise delete it
                App._hbsTemplates('#mainTemplate', data.data, '#main');
              },
              error: function (e) {
                  //console.log("error " + e.message);
              }
          });
      },
      //Use the code below only if you want to use handlebars otherwise delete it
      _hbsTemplates: function(temp, data, destination){

        //Handlebars initialization
        var templateToUse = $(temp).html(), //Define the template
          dest = $(destination), //Point where to apply the template
          dataInfo = data, //Get the data 

          //Handlebars variables
          source   = templateToUse, //Get the template
          context = dataInfo, //Data to populate the template
          template = Handlebars.compile(source), //Compile template
          html    = template(context); //populate template

        dest.empty().append(html);
      }
    };

 }(window.jQuery, window, document)); // The global jQuery object is passed as a parameter
