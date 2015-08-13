// Code goes here
(function() {

    var app = angular.module('githubViewer');

    var RepoController = function($scope, $routeParams, github) {
        
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;
        
        var onRepo = function(data) {
            $scope.repo = data;
        }

        var onError = function(reason) {
            $scope.error = "Could not fetch the Data";
        };

        github.getRepoDetails(username, reponame).then(onRepo, onError)

    };

    app.controller("RepoController", RepoController);

})();