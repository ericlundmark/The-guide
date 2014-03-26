Template.restaurants.restaurants = function () {
	return Restaurants.find({}, { sort: { time: -1 }});
}
