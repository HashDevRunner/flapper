var app = angular.module('flapperNews', [])

app.module('flapperNews',['ui.router']).config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider.state('home',{
			url:'/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});

		$urlRouterProvider.otherwise('home')
	
	}]);

app.controller('MainCtrl', ['$scope','posts',function($scope,posts){
	
	$scope.test = 'Hello world!';

	$scope.posts = [
		];
  	
	$scope.posts = posts.posts;

	$scope.addPost = function(){

		if(!$scope.title || $scope.title === ''){ return; };
		$scope.posts.push({title: $scope.title,
							link: $scope.link,
							upvotes: 0});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpVotes = function(post){
		post.upvotes += 1;
		console.log('Increment Upvotes:' + post.upvotes);
	}

}]);

app.factory('posts',[function(){

	var o = {
		posts: [
			{title: 'post 1', link:'#', upvotes: 5},
			{title: 'post 2', link:'#', upvotes: 2},
			{title: 'post 3', link:'#', upvotes: 15},
			{title: 'post 4', link:'#', upvotes: 9},
			{title: 'post 5', link:'#', upvotes: 4}
		]
	};

	return o;
}])
