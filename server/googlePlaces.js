Meteor.methods({
    // Declaring a method
    placesAutocomplete: function (input) {
        this.unblock();
		var API_KEY="AIzaSyBDjgkYUezEAeO17leh6RYIY1EtcL0JFHs";
		var url="https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+input+"&types=establishment&sensor=false&key="+API_KEY;
		return Meteor.http.get(url);
    }
});
