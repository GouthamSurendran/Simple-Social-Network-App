import { Template } from 'meteor/templating';

Template.postForm.events({
  'submit form': (event) => {
    event.preventDefault();
    var content = document.getElementById('content').value;
    console.log(content);

    Meteor.call('addPost',content);
    event.target.reset();
  }
})

