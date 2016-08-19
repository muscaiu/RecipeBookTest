//using reactive-var package make SessionVariable for Template
Template.Recipe.onCreated(function(){
    this.editMode = new ReactiveVar(false);
})

Template.Recipe.events({
    'click .toggle-menu': function(){
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function() {
        // new Confirmation({
        //     message: "Are you sure ?",
        //     title: "Confirmation",
        //     cancelText: "Cancel",
        //     okText: "Delete",
        //     //success: true, // whether the button should be green or red
        //     focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
        //     }, function (ok) {
        //         console.log('ok');
                Meteor.call('deleteRecipe', this._id);
        //});
    },
    'click .fa-pencil': function(event, template) {
        // Session.set('editMode', !Session.get('editMode'));
        template.editMode.set(!template.editMode.get());
    }
});

Template.Recipe.helpers({
    updateRecipeId: function(){
        return this._id;
    },
    editMode: function(){
        return Template.instance().editMode.get();
    }
});
