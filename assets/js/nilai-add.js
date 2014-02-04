/*!
    Add Page scripts for Nilai.co
    Copyright 2014 - Plain - http://plainmade.com
*/

(function ($) {

    // Wait for Page to load
    $(document).ready(function () {

        // Gets an HTML list of data and prepends the list
        // Run as a callback for the getData function below
        function built_label_list(res) {
            var list = nilai.label_list(res);
            $('ul.label-choices').prepend(list);
        };

        // Grab the labels list
        nilai.getData('labels', built_label_list);
    
    });

}(window.jQuery));