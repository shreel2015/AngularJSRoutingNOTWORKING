'use strict';

eventsApp.controller('EditEventController', 
	function EditEventController($scope) {
		$scope.saveEvent = function(event, newEventForm) {
			console.log(newEventForm);
			if(newEventForm.$valid) {
				window.alert('Event ' + event.name + ' Saved !!'); 
			}
		};
		$scope.cancelEvent = function() {
			window.location = "EventDetails.html"
		}
	}
);