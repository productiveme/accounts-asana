## accounts-asana

Asana OAuth2 login service for use with Meteor Auth

### Package Dependencies

This login service depends on the bleeding edge changes within the Meteor Auth branch. See [https://github.com/meteor/meteor/wiki/Getting-started-with-Auth](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth) for further details.

* accounts ([Meteor Auth Branch](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth))
* accounts-oauth2-helper ([Meteor Auth Branch](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth))
* http

### Usage

* Clone the repo into your local meteor `packages` folder
* OR install with meteorite

	mrt add accounts-asana

* Call `Meteor.loginWithAsana();`

### Credits

* Shamelessly based upon [Jamie Atkinson's Github Auth package](https://github.com/Jabbslad/accounts-github) which in turn is based on [@possibilities](https://github.com/possibilities) Google OAuth2 login service

