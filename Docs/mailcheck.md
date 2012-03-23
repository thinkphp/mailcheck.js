Class: Mailcheck {#Mailcheck}
==============================

A MooTools plugin that suggests a right domain when your users misspell it in an email address using Levenshtein Distance.

### Implements

    Events, Options

### Syntax:

    var mailcheck = new Mailcheck(element, options);

### Arguments:

- element `Element` - A textfield Element you want to attach.

- options `object`  - An object containing the Mailcheck instance's options. (see below)

### Options:

- domains `Array` - An array of domains you want to check against.

### Events

### suggested

* `function` This function is fired when we have suggestions.

### Signature

    onSuggested(suggestions);

### onEmpty

* `function` callback(function) to execute when we haven't suggestions.

### Signature

    onEmpty(empty);

### Arguments



