/*
---
description: A MooTools plugin that suggests a right domain when your users misspell it in an email address using Levenshtein Distance.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.4.5: '*'

provides: Mailcheck
...
*/

var Mailcheck = new Class({

    Implements: [Options, Events],

    options: {

        domains: [] 
    },

    initialize: function(element, options) {

           if(element.get('value').indexOf('@') != -1) {

           this.setOptions(options);

           var input = element.get('value').split("@");

           this.user = input[0];

           this._matchDomains(input[1]); 
           }
    },
    _matchDomains: function(input) {

          var suggestions = this.options.domains.filter(function(domain){

                  var len = domain.levenshtein(input);

                      if(len >=0 && len <= 3) {

                            return domain; 
                      } 
          }) 

          suggestions = this._alterSuggest(suggestions);

          if(typeof suggestions == 'object' && suggestions.length > 0) {

             this.fireEvent('suggested',[suggestions])

          } else {

             this.fireEvent('empty',["no match"])
          }
   },

   _alterSuggest: function(suggestions) {

         var clone = [];

         suggestions.each(function(suggest){

               suggest = this.user + "@" + suggest

               clone.push(suggest);

         }.bind(this))

      return clone;
   }
});