mailcheck.js
============

A MooTools plugin that suggests a right domain when your users misspell it in an email address using Levenshtein Distance.

![Screenshot](http://farm8.staticflickr.com/7216/6857832762_56f14145a9.jpg)

How to use
----------

When your user types in "adrian@yahuu.com", Mailcheck will suggest "adrian@yahoo.com".

        #HTML
       <p><label for="email">Email</label><input type="text" name="email" id="email" value="adrian@yahuu.com"/></p>

When DOM is ready:

        #JS

        var domains = ['hotmail.com', 'gmail.com', 'yahoo.com','aol.com','excite.com','thinkphp.ro']
 
        $('email').addEvent('keyup',function(){

           new Mailcheck($('email'),{domains: domains, onSuggested: function(suggestions){

               $("suggestions").set('html', '<span class="didyoumean">Did you mean </span>' + suggestions.join(", ") + " ?");

           },onEmpty: function(){

                     //do stuff
           }
           })
       })

References:

- http://thinkphp.ro/apps/js-hacks/String.levenshtein/String.levenshtein.html
- https://github.com/Kicksend/mailcheck
- http://en.wikipedia.org/wiki/Levenshtein_distance
