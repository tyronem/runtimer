angular.module("runApp", [])
	.controller("RunAppController", function() {

		this.leaveby = undefined;
		this.calcTime = function(){
			//console.log("calculate!");
			var miles = parseInt(angular.element(document.querySelector("#mileage")).val());
			var pace = parseInt(angular.element(document.querySelector("#estimate")).val());
			var travelto = parseInt(angular.element(document.querySelector("#travelto")).val());
			var travelfrom = parseInt(angular.element(document.querySelector("#travelfrom")).val());
			var destTime = angular.element(document.querySelector("#arriveby")).val();

			var mins = (miles * pace) + travelto + travelfrom;
			//console.log("minutes: " + mins);
			this.leaveby = moment(destTime, 'HH:mm').subtract(mins, 'minutes').format("hh:mm a");
			console.log(this.leaveby);
			//angular.element(document.querySelector("#leaveby")).html(leaveby);
		};
	});