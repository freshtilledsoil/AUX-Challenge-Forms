
if (!Modernizr.input.required) {
   
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


  /*if (!Modernizr.input.required) {
        form.onsubmit = function() {
            var required = [], att, val;
            // loop through input elements looking for required
            for (var i = 0; i < inputs.length; i++) {
                att = inputs[i].getAttribute('required');
                // if required, get the value and trim whitespace
                if (att != null) {
                    val = inputs[i].value;
                    // if the value is empty, add to required array
                    if (val.replace(/^\s+|\s+$/g, '') == '') {
                        required.push(inputs[i].name);
                    }
                }
            }
            // show alert if required array contains any elements
            if (required.length > 0) {
                alert('The following fields are required: ' +
                    required.join(', '));
                // prevent the form from being submitted
                return false;
            }
        };
    }
}
*/