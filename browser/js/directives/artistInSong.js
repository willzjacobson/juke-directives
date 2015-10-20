app.directive('artistInSong', function() {
	return {
		restrict: 'E',
		templateUrl: '/templates/artistInSong.html', 
		scope: {
			artists: '='
		} 
	};
});