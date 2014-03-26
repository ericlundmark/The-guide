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
	},
	'keyup #name' : function(event){
		// Calling our Meteor server's function 
		// and simply storing data into current session
		Meteor.call('placesAutocomplete',document.getElementById('name').value, function (error, response) {
			Session.set('autocomplete_data', response.data['predictions']);
		});
	}
}

Template.addRestaurant.autoCompleteData= function (){
	var autoCompleteData = Session.get('autocomplete_selected_item');
	if(autoCompleteData != null)
		return autoCompleteData['terms'];
	else
		return null;
}

Template.placesAutocomplete.events = {
	'click' : function (event) {
		event.preventDefault();
		console.log(this);
		Session.set('autocomplete_selected_item', this);
		Session.set('autocomplete_data', null);
	}
}

// Providing meteor data for template (it renders on data received)
Template.placesAutocomplete.autocomplete_data = function () {
    return Session.get('autocomplete_data');
};

Template.map.rendered = function() {
    
    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
								  mapOptions);
}
