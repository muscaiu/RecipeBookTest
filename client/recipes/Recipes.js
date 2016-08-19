//subscribe only to what need to be fetched for speed
//Meteor.subscribe('recipes');

Template.Recipes.onCreated(function(){
    var self = this;
    self.autorun(function(){ //unsubscribe from old subscriptions
        self.subscribe('recipes');
    })
});

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }
});
//console.log("access private: " + Meteor.settings.private.key);
//console.log("access public: " + Meteor.settings.public.ga.account);
Template.Recipes.events({
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }
})