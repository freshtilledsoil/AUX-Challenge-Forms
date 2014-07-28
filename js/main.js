
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
        required:true
      }
    }
  });
});









 