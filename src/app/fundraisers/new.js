'use strict';

angular.module('fundraisers').controller('FundraiserCreateController', function($scope, $routeParams, $location, $api) {
  $scope.fundraiser = {
    total_pledged: 0,
    funding_goal: 25000,
    description: "",
    short_description: "",
    team_id: null,
    $days_left: 30
  };

  // Watch current person to add author to fundraiser side bar
  $scope.$watch('current_person', function(person) {
    if (person) {
      $scope.fundraiser.person = angular.copy(person);
    }
  });

  // Watch Fundraiser object for Team. Fetch members if they are not present on the object.
  $scope.$watch('fundraiser.team', function(team) {
    if (team && !team.members) {
      $api.team_members_get(team.slug).then(function(members) {
        $scope.fundraiser.team.members = angular.copy(members);
        return members;
      });
    }
  });

  $scope.create = function() {
    var payload = angular.copy($scope.fundraiser);

    // Replace Team object with Team id as team_id
    if (payload.team) {
      payload.team_id = payload.team.id;
      delete payload.team;
    }

    $api.fundraiser_create(payload, function(response) {
      if (response.meta.success) {
        $location.url("/fundraisers/"+response.data.slug+"/edit");
      } else {
        $scope.error = response.data.error;
      }
    });
  };
});
