window.onload = function() {
	console.log('DOM has loaded');

	var activeRoutes = Array.from(document.querySelectorAll('[route]'))
	//console.log(activeRoutes);
	var Router = function(name, routes) {
		return {
			name: name,
			routes: routes
		}
	};



	var myFirstRouter = new Router('myFirstRouter', [
		{
			path: '/',
			name: 'Main'
		},
		{
			path: '/cart',
			name: 'CART'
		},
		{
			path: '/share',
			name: 'SHARE'
		},
		{
			path: '/order',
			name: 'ORDER'
		},
	])
	var currentPath = window.location.pathname;
	if(currentPath === '/') {
		console.log('You are on the Main page')
	} else {
		var route = myFirstRouter.routes.filter(function(r) {
			return r.path === currentPath
		})[0];
		console.log('You are on the ' + route.name + ' path');
	}
}