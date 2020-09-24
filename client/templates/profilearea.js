import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'

Template.profilearea.helpers({
    following: () => {
        var user = Meteor.user();
        return user.profile.follow;
    },
    followers: () => {
        var user = Meteor.user();
        var followers = Meteor.users.find({ 'profile.follow': { $in: [user.username] } });
        return followers;
    }
})

Template.profilearea.events({
    'click .filter-user': function (event) {
        event.preventDefault();
        var selectedUser = event.target.text;

        Session.set('username', selectedUser);
    },
    'click .filter-com': function (event) {
        event.preventDefault();
        Session.set('username', null);
    }
})