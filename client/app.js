Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function () {
	/**
	 * The route's name is "home"
	 * The route's template is also "home"
	 * The default action will render the home template
	 */
	this.route('index', {
		path: '/',
		template: 'index'
	});

	this.route('signUp', {
		path: '/signUp'
	});

	
	/**
	 * The route's name is "posts"
	 * The route's path is "/posts"
	 * The route's template is inferred to be "posts"
	 */
	this.route('restaurants', {
		path: '/restaurants'
	});

	this.route('addRestaurant', {
		path: '/restaurant',
		template: 'addRestaurant'
	});

	this.route('restaurant', {
		path: '/restaurant/:_id',
		template: 'restaurantView',

		load: function () {
			// called on first load
		},
		

		// before hooks are run before your action
		before: [
			function () {
				this.subscribe('restaurants', this.params._id).wait();
				//this.subscribe('restaurants'); // don't wait
			}
		]
	});
});
