

# DogOfTheDay
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

### Referrer
https://coryrylan.com/blog/using-web-components-in-angular
https://academia-binaria.com/elementos-Angular-para-los-Web-Components/
https://www.codementor.io/blog/angular-web-components-8e4n0r0zw7
https://github.com/rudolfolah/angular-web-component/blob/master/example/index.html
https://blog.ng-classroom.com/blog/angular/angular-elements/


## Create web components
    ng new dog-of-the-day --prefix ng-chile
    ng add @angular/elements
    ng generate component dog-of-the-day --view-encapsulation Emulated

## Run
#### Anglar server
    npm run star

#### Run build dist (Build Required)
    npm run start-build

## Build
    npm run build

## Example
```html
<!DOCTYPE  html>
<html  lang="en">
	<head>
		<meta  charset="UTF-8">
		<title>Dog of The Day</title>
	</head>
	<body>
		<ng-chile-dotd></ng-chile-dotd>
		<script  src="elements-es2015.js"  type="module"></script>
		<script  src="elements-es5.js"  nomodule  defer></script>
	</body>
</html>
```

