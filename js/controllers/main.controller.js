var app = angular.module('crworlds');

app.controller('MainCtrl', ['$scope', '$sce', '$mdMedia', '$mdSidenav', '$mdDialog', 'TwitchService',
	function($scope, $sce, $mdMedia, $mdSidenav, $mdDialog, TwitchService) {

	$scope.$mdMedia = $mdMedia;
	$scope.$sce = $sce;
	$scope.currentPlayer = 0;
	$scope.players = [
		{
			channel: 'enchatin',
			twitter: 'enchatin',
			photo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/enchatin-profile_image-f3f03701302e9ac4-300x300.png',
			cover: 'http://i.imgur.com/jd7LD9B.jpg'
		}
	];

	$scope.selectPlayer = function(index) {
		$scope.currentPlayer = index;

		if (twttr) {
			var timeline = document.getElementById("twitter-timeline");
			if (timeline) timeline.innerHTML = '';
				
			twttr.widgets.createTimeline({
				sourceType: "profile",
				screenName: $scope.players[index].twitter
			},
				timeline
			);
		}

		TwitchService.selectPlayer($scope.players[index].channel).then(function(response) {
			console.log(response);
			$scope.players[index].twitch = response.data;

			if (!$scope.currentVideo) {
				$scope.currentVideo = $scope.players[0].twitch.videos[0];
			}
		});
	};

	$scope.selectVideo = function(video) {
		$scope.currentVideo = video;
	};

	$scope.selectPlayer($scope.currentPlayer);

	$scope.toggleDrawer = function() {
		$mdSidenav('left').toggle();
	};

	$scope.openBrackets = function(ev) {
		$mdDialog.show({
			controller: ['$scope', function($scope) {

			}],
			// I'm so sorry about this. Pls forgive me
			template: `
				<md-dialog aria-label="Mango (Fruit)">
					<md-dialog-content layout="column" layout-align="start center">
						<h3 class="md-headline md-padding" style="margin-top: 10px; margin-bottom: 0px;">Brackets</h3>

						<div class="brackets">
							<ul class="round round-1 left">
								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Lousville <span>79</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">NC A&T <span>48</span></li>

								<li class="spacer">&nbsp;</li>
									
								<li class="game game-top winner">Colo St <span>84</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Missouri <span>72</span></li>

								<li class="spacer">&nbsp;</li>
									
								<li class="game game-top ">Oklahoma St <span>55</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom winner">Oregon <span>68</span></li>
								
								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Saint Louis <span>64</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">New Mexico St <span>44</span></li>
							</ul>
							<ul class="round round-2 left">
								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Lousville <span>82</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Colo St <span>56</span></li>

								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Oregon <span>74</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Saint Louis <span>57</span></li>
							</ul>
							<ul class="round round-3 left">
								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Lousville <span>77</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Oregon <span>69</span></li>

								<li class="spacer">&nbsp;</li>
							</ul>
							<ul class="round round-4 center">
								<li class="spacer">&nbsp;</li>

								<li class="game game-top winner">Winner</li>
								<li class="game game-bottom">Loser</li>

								<li class="spacer">&nbsp;</li>
							</ul>
							<ul class="round round-3 right">
								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Lousville <span>77</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Oregon <span>69</span></li>

								<li class="spacer">&nbsp;</li>
							</ul>
							<ul class="round round-2 right">
								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Lousville <span>82</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Colo St <span>56</span></li>

								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Oregon <span>74</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Saint Louis <span>57</span></li>
							</ul>
							<ul class="round round-1 right">
								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Lousville <span>79</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">NC A&T <span>48</span></li>

								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Colo St <span>84</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">Missouri <span>72</span></li>

								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top ">Oklahoma St <span>55</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom winner">Oregon <span>68</span></li>

								<li class="spacer">&nbsp;</li>
								
								<li class="game game-top winner">Saint Louis <span>64</span></li>
								<li class="game game-spacer">&nbsp;</li>
								<li class="game game-bottom ">New Mexico St <span>44</span></li>
							</ul>
						</div>
					</md-dialog-content>
				</md-dialog>
			`,
			/*
			 * PHP is dead
			 * This code isn't wise
			 * I now give you permission
			 * to bleach your eyes	
			 *
			 * [A poem by Alex W]			
			*/
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		});
	};
}]);