'use strict';

angular.module('angular-geo-maplocation', ['google-maps'])

  .directive('geoMaplocation', function() {

    return {
      restrict: 'E',
      scope: {
        start: '=',
        coords: '=',
        zoom: '=?',
        tooltip: '=?'
      },
      template: '<google-map center="map.start" zoom="map.zoom" draggable="true" options="map.options"><marker coords="coords" options="marker.options" events="marker.events"></marker></google-map>',
      controller: ['$scope', function ($scope) {
        if (!$scope.coords) {
          throw new Error('coords must be supplied');
        }
        
        $scope.map = {
          zoom: $scope.zoom || 8,
          options: {
            streetViewControl: false
          },
          start: $scope.start
        };
        
        $scope.marker = {
          options: {
            draggable: true,
            title: $scope.tooltip || 'Drag marker to geo-location'
          },
          events: {
            dragend: function (marker) {
              $scope.$apply(function () {
                $scope.coords.latitude = marker.getPosition().lat();
                $scope.coords.longitude = marker.getPosition().lng();
              });
            }
          }
        };
      }
   ]};

  });
