'use strict';

describe('Module: angular-geo-maplocation', function () {
  var $scope, $sandbox, $compile, $timeout;

  // load the controller's module
  beforeEach(module('angular-geo-maplocation'));

  beforeEach(inject(function ($injector, $rootScope, _$compile_, _$timeout_) {
    $scope = $rootScope.$new();
    $compile = _$compile_;
    $timeout = _$timeout_;

    $sandbox = $('<div id="sandbox"></div>').appendTo($('body'));
  }));

  afterEach(function() {
    $sandbox.remove();
    $scope.$destroy();
  });

  var templates = {
    'default': {
      scope: {
        coords: {
          latitude: 51.5033630,
          longitude: -0.1276250
        },
        zoom: 10,
        tooltip: 'marker title',
        start: {
          latitude: 51.1788820,
          longitude: -1.8262150
        }
      },
      element: '<geo-maplocation coords="coords" start="start" zoom="zoom" tooltip="tooltip"></geo-maplocation>'
    }
  };

  function compileDirective(template) {
    template = template ? templates[template] : templates['default'];
    angular.extend($scope, template.scope || templates['default'].scope);
    var $element = $(template.element).appendTo($sandbox);
    $element = $compile($element)($scope);
    $scope.$digest();
    return $element;
  }
  
  it('should error when coords attr not provided', function () {
    var $element = $('<geo-maplocation></geo-maplocation>').appendTo($sandbox);
    expect(function () { $compile($element)($scope); }).toThrow();
  });
  
  describe('google-map element', function () {
    it('should set zoom on scope from attr', function () {
      var elm = compileDirective();
      expect(elm.isolateScope().map.zoom).toEqual(10);
    });
    
    it('should set start on scope from attr', function () {
      var elm = compileDirective();
      expect(elm.isolateScope().map.start).toEqual({
          latitude: 51.1788820,
          longitude: -1.8262150
        });
    });
    
    it('should create google-map element', function () {
      var elm = compileDirective();
      expect(elm.find('google-map').length).toEqual(1);
    });

    it('should pass center', function () {
      var elm = compileDirective();
      expect(elm.find('google-map').attr('center')).toEqual('map.start');
    });

    it('should pass zoom', function () {
      var elm = compileDirective();
      expect(elm.find('google-map').attr('zoom')).toEqual('map.zoom');
    });

    it('should set as draggable', function () {
      var elm = compileDirective();
      expect(elm.find('google-map').attr('draggable')).toEqual('true');
    });

    it('should pass options', function () {
      var elm = compileDirective();
      expect(elm.find('google-map').attr('options')).toEqual('map.options');
    });
  });
  
  describe('marker element', function () {
    it('should set tooltip on scope from attr', function () {
      var elm = compileDirective();
      expect(elm.isolateScope().marker.options.title).toEqual('marker title');
    });
    
    it('should set as draggable', function () {
      var elm = compileDirective();
      expect(elm.isolateScope().marker.options.draggable).toBe(true);
    });
    
    it('should create marker element', function () {
      var elm = compileDirective();
      expect(elm.find('span').length).toEqual(1);
    });
    
    it('should pass coords', function () {
      var elm = compileDirective();
      expect(elm.find('span').attr('coords')).toEqual('coords');
    });
    
    it('should pass options', function () {
      var elm = compileDirective();
      expect(elm.find('span').attr('options')).toEqual('marker.options');
    });
    
    it('should pass events', function () {
      var elm = compileDirective();
      expect(elm.find('span').attr('events')).toEqual('marker.events');
    });
  });
  
});
