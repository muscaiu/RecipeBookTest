//using gwendall:auth-client-callbacks 
//redirect imediatly after Logged In
Accounts.onLogin(function(){
    FlowRouter.go('recipe-book');
});
//redirect imediatly after Logged Out
Accounts.onLogout(function(){
    FlowRouter.go('home');
});

//If user is not logged in go home
FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home')
    }
}]);
//Adding a simpe route based on filename and template name
FlowRouter.route('/', {
    name: 'home',
    action(){
        if(Meteor.userId()){
            FlowRouter.go('recipe-book');
        }
        // GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});
//Adding a route based on filename that has multiple templates
FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action(){
        // GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});
//Routing by id
FlowRouter.route('/recipe/:id', {
    name: 'recipe-single',
    action(){
        // GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});
//Route to Menu
FlowRouter.route('/menu',{
    name: 'menu',
    action(){
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
})
//Route to ShoppingList
FlowRouter.route('/shopping-list',{
    name: 'shopping-list',
    action(){
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
    }
})