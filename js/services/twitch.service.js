var app = angular.module('crworlds');

app.service('TwitchService', ['$http', function($http) {
	this.selectPlayer = function(channel) {
		return $http({
			method: 'GET',
			url: 'https://api.twitch.tv/kraken/channels/'+channel+'/videos',
			headers: {
				'Client-ID': '5s3as3zrs8w8zqayv4ly0f99c3u9gp'
			},
			params: {
				limit: 100
			}
		})
	};
}]);