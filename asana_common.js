if (!Meteor.accounts.asana) {
	Meteor.accounts.asana = {};
}

Meteor.accounts.asana.config = function(options) {
	Meteor.accounts.asana._options = options;
};