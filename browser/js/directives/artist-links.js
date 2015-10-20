app.directive('artistsInSong', function(PlayerFactory) {
	return {
		restrict: 'E', 
		templateUrl: '/templates/artistsInSong.html',
		scope: {
			songs: '=',
		},
		link: function(scope) {
		}
	};
});
