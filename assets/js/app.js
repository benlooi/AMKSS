/**
* amkss Module
*
* Description
*/
angular.module('amkss', ['controllers','services','ui.router','angular-carousel'])
.config(function ($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'templates/home.html',
		controller:'homeCtrl'
	})
	.state('home.welcome',{
		url:'/welcome',
		views: {
			'main@home':{
		templateUrl:'templates/welcome.html',
		controller:'homeCtrl'
		}
	}
	})
.state('home.game',{
		url:'/game',
		views: {
			'main@home':{
				templateUrl:'templates/game.html',
		controller:'gameCtrl'
			}
		}
		
	})
.state('home.media',{
		url:'/media',
		views: {
			'main@home':{
				templateUrl:'templates/media.html',
		controller:'mediaCtrl'
			}
		}
		
	})
	;
	$urlRouterProvider.otherwise('/home');
})