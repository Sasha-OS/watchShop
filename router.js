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
			path: '/watchShop/index',
			name: 'Main'
		},
		{
			path: '/watchShop/cart',
			name: 'CART'
		},
		{
			path: '/watchShop/share',
			name: 'SHARE'
		},
		{
			path: '/watchShop/order',
			name: 'ORDER'
		},
	])
	var currentPath = window.location.pathname;
	if(currentPath === '/watchShop/index') {
		console.log('You are on the Main page')
	} else {
		var route = myFirstRouter.routes.filter(function(r) {
			return r.path === currentPath
		})[0];
		console.log('You are on the ' + route.name + ' path');
	}
}