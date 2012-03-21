Class: Mailcheck {#Mailcheck}
==============================


### Syntax:

    var mailcheck = new Mailcheck(element,options)

### Arguments:

- assertion `String` - a string containing a signed claim that proves the user is who they say they are.

- options   `object` - The options for the BrowserID instance.

### Events

### onRequest

* `function` Function to execute when you make a request.

### Signature

    onRequest();

### onComplete

* `function` Function to execute when the request is completed.

### Signature

    onComplete(response);

### Arguments

- `object` The verifier will check that the assertion was meant for your website and is valid
           returns => {status: 'okay','email': 'user@mozilla.com'}, 
           otherwise returns {status: 'failure','reason': 'audience missmatch'}, 


