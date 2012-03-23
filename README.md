mailcheck.js
============

A MooTools plugin that suggests a right domain when your users misspell it in an email address using Levenshtein Distance.

![Screenshot](http://farm8.staticflickr.com/7216/6857832762_56f14145a9.jpg)

How to use
----------

Include MooTools, Mailcheck.js and String.levenshtein.js into the page:

    <script type="text/javascript" src="mootools.js"></script>
    <script type="text/javascript" src="https://github.com/thinkphp/String.levenshtein/blob/master/Source/String.levenshtein.js"></script>
    <script src="mailcheck.js" type="text/javascript"></script>

When your user types in "adrian@yahuu.com", Mailcheck will suggest "adrian@yahoo.com".

        #HTML
       <p><label for="email">Email</label><input type="text" name="email" id="email" value="adrian@yahuu.com"/></p>
       <div id="suggestions"></div>

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
