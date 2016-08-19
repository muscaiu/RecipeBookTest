Template.ShoppingList.onCreated(function(){
    var self = this;
    self.autorun(function(){ //unsubscribe from old subscriptions
        self.subscribe('recipes');
    })
});

Template.ShoppingList.helpers({
    shoppingList: () => { //shoppingList in in the js
        return Recipes.find({inMenu: true});
    }
});