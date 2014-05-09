# angular-geo-maplocation

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/stavinski/jquery-angular-geo-maplocation/master/dist/angular-angular-geo-maplocation.min.js
[max]: https://raw.github.com/stavinski/jquery-angular-geo-maplocation/master/dist/angular-angular-geo-maplocation.js

In your web page:

```html
<script src="dist/angular-geo-maplocation.min.js"></script>
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

```js
$scope.location = {
  latitude: 51.5033630,
  longitude: -0.1276250
};
```
In template:

```html
<geo-maplocation coords="location"></geo-maplocation>
```