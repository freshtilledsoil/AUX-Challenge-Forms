
$(document).ready(function() {
  $('form').validate({
    rules: {
      title: {
        required:true
      },

      address: {
        required:true
      },

      name: {
        required:true
      },

      email: {
        required:true,
        email:true
      },

      password: {
        required:true,
        minlength:4
      },

      number: {
        required:true,
        maxlength:16,
        minlength:16,
        number:true
      },

      security: {
        required:true,
        maxlength:4,
        number:true
      },
    }
  });
});





/*if (!Modernizr.input.required) {
   
Modernizr.load([
  {
    load: 'http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/jquery.validate.js',
    complete: function () {
      if ( !window.jQuery ) {
            Modernizr.load('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
      }
    }
  },
  {
    // This will wait for the fallback to load and
    // execute if it needs to.
    load: 'needs-jQuery.js'
  }
]);
 }

*/

 