'use strict';

angular.module('projectSiteApp')
  .controller('MainCtrl', function ($scope, $http) {
      $http.get('site.json').success(function (data) {
        $scope.name = data.name;
        $scope.versions = data.versions;
        $scope.currentVersion = data.versions.reduce(function(memo, version) {
          if (version.version === data.currentVersion) {
            memo = version;
          }
          return memo;
        }, {});
        $scope.currentSection = $scope.currentVersion.sections[0];
        $scope.wiki = data.wiki;
        $scope.issues = data.issues;
        $scope.github = data.github;
      });

      $scope.selectSection = function(section) {
        $scope.currentSection = section;
      }
  });
