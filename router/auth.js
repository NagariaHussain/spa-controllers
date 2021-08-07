export default [
    {
		path: '/login/:forgot?',
		name: 'Login',
		component: () =>
			// TODO: Add your login component here
			import(/* webpackChunkName: "login" */ ''),
		meta: {
			isLoginPage: true
		},
		props: true
	}
]