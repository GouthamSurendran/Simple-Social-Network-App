Post = new Mongo.Collection('post');

Meteor.methods({
    addPost: (content) => {
        if (!Meteor.user()) {
            throw new Meteor.Error('Not-Authorized');
        }
        var username = Meteor.user().username;

        Post.insert({
            content: content,
            created: new Date(),
            username: username
        })
    },

    follow: (post) => {
        var user = Meteor.user();

        if (!user) {
            throw new Meteor.Error('You need to Login to Follow');
        }

        if (user.username != post.username && user.profile.follow.indexOf(post.username) == -1) {
            Meteor.users.update(
                { _id: user._id },
                {
                    $push: { 'profile.follow': post.username }
                });
        }
    }
})