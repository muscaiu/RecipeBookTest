Recipes = new Mongo.Collection('recipes');
//if userId is true then we can add to db
Recipes.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
})
//new type to use in RecipeSchema
Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    ammount: {
        type: String
    }
});

//Add shcema for db and quickform
RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type:String,
        label: "Description"
    },
    ingredients: {
        //type: Ingredient //shows just 1 ingredient on page
        type: [Ingredient] //[]makes autoform add +-
    },
    inMenu:{
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});
//Method for Toggle Menu state
Meteor.methods({
    toggleMenuItem: function(id, currentState){
        Recipes.update(id, {
            $set:{
                inMenu: !currentState
            }
        });
    },
    deleteRecipe: function (id){
        Recipes.remove(id);
    }
});

Recipes.attachSchema( RecipeSchema );