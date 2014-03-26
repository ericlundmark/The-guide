////////////////
// BeforeHooks
////////////////
// I use an object that contains all before hooks
var IR_BeforeHooks = {
    isLoggedIn: function() {
        if (!(Meteor.loggingIn() || Meteor.user())) {
          Notify.setError(__('Please login.'));
          this.render('login');
          this.stop();
        }
    },
    somethingForAnyRoute: function() {},
    // add more before hooks here
}

// (Global) Before hooks for any route
Router.before(IR_BeforeHooks.somethingForAnyRoute);

// Before hooks for specific routes
// Must be equal to the route names of the Iron Router route map
Router.before(IR_BeforeHooks.isLoggedIn, {only: ['userAreaA', 'userAreaB']});

////////////////
// After Hooks
////////////////
// Another object for all after hooks
var IR_AfterHooks = {
}
