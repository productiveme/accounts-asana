## accounts-asana

Asana OAuth2 login service for use with Meteor Auth

### Dependencies

* [asana](https://github.com/productiveme/asana)
* Meteor v1.0+

### Usage

* Clone the repo into your local meteor `packages` folder
* OR install with meteorite

``` bash
	$ mrt add accounts-asana
```

* Call `Meteor.loginWithAsana();`


### Example

Here is an example of setting up the accounts-asana package for a new meteor project.

```bash
meteor create TestAsana
cd TestAsana
meteor add accounts-ui
meteor add productiveme:accounts-asana
meteor add productiveme:asana
```
Update `TestAsana.html` to the following:

```html
<head>
  <title>TestAsana</title>
</head>

<body>
  {{> hello}}
</body>

<template name="hello">
  <h1>Hello World!</h1>
  <p>{{greeting}}</p>
  
  <p>{{> loginButtons}}</p>
  
  <input type="button" value="Test" />
  
</template>
```

Configure Asana Login by following the instructions.

Sign in with Asana

Change the `TestAsana.js` file to the following:

```javascript
if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to TestAsana.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      result = Meteor.call('getMyTasks', function(err, result) {
        console.log(result);
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Future = Npm.require('fibers/future'); // <-- To call async server methods
  });

  Meteor.methods({
    getMyTasks : function() {

      var fut = new Future(); // <-- Will require a future or Meteor._wrapAsync since it will make an async call

      var client = Asana.createClient({
        oauth: {
          clientId: '133**********', // <-- Your clientId here
          clientSecret: '63f*******************', // <-- Your client secret
          accessToken: Meteor.user().services.asana.accessToken,
          refreshToken: Meteor.user().services.asana.refreshToken,
          redirectUrl: Meteor.absoluteUrl("_oauth/asana?close")
        }
      });

      var myAsanaId = Meteor.user().services.asana.id;

      client.users.tasks(myAsanaId, function(err, tasks) {
        if(err) return fut.throw(new Meteor.Error(err));
        fut.return(tasks);
      });

      return fut.wait();
    }
  });
}

```

### Credits

* Cloned and adapted from [Jamie Atkinson's Github Auth package](https://github.com/Jabbslad/accounts-github)
