Template.Menu.onCreated(function(){
    var self = this;
    self.autorun(function(){ //unsubscribe from old subscriptions
        self.subscribe('recipes');
    })
});

Template.Menu.helpers({
    recipes: () => {
        return Recipes.find({inMenu: true});
    }
});