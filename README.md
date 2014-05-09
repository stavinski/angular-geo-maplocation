# angular-geo-maplocation

## Getting Started

Install [bower](http://bower.io/) if you don't already have it installed then run the following from the command line:

```
bower install angular-geo-maplocation
```

This will add the necessary js files to your bower components directory (usually bower_components), if you already have a build script in place that automatically references bower packages then you can skip to the module declaration otherwise you can add the following underneath your angular script element: 

```html
<script src="[bower component directory]/dist/angular-geo-maplocation.min.js"></script>
```
In your module declaration:

```js
angular.module('mymodule', ['angular-geo-maplocation']);
```

## Documentation

This directive is built on top of the fantastic [angular-google-maps](http://angular-google-maps.org/) library I had a use case were I just wanted to have a map with a single marker representing a geo location that could be moved around a map to enable them to set lat & lon without having to type them in manually, hence this directive was born for this use case.

The directive uses isolated scope to prevent it from polluting the parent scope but supports 2 way binding through the coords attribute, this means that the parent can supply the coords through any means such as a postcode query.

## Examples

In controller:

```javascript
$scope.location = {
  latitude: 51.5033630,
  longitude: -0.1276250
};
```
In template:

```html
<geo-maplocation coords="location"></geo-maplocation>
```

## Attributes

### coords

**Required**

```javascript
{
  latitude: 51.5033630,
  longitude: -0.1276250
}
```

Specifies the expression that will be bound to the marker, this is 2 way bounded to allow changes to be reflected in either direction

### zoom

**optional**

Is a numeric value to control at what the level the map is zoomed in at.

### tooltip

**optional**

This is the content that will be displayed when the mouse is hovered over the marker