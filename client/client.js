/**
 * Templates
 */
Template.restaurants.restaurants = function () {
	return Restaurants.find({}, { sort: { time: -1 }});
}

Template.addRestaurant.events = {
	'submit form' : function (event) {
		console.log("adding");
		if (Meteor.user())
			var name = Meteor.user().profile.name;
		else
			var name = 'Anonymous';
		var restaurantName = document.getElementById('name');

		if (restaurantName.value != '') {
			Restaurants.insert({
				submitter: name,
				name: restaurantName.value,
				time: Date.now(),
			});

			document.getElementById('name').value = '';
			restaurantName.value = '';
		}
		return false;
	}
}
