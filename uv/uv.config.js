self.__uv$config = {
	prefix: "/0OOOO0OOO0/",
	bare: 'https://test248.herokuapp.com/bare/',
	encodeUrl: (url) => encodeURIComponent(url),
	decodeUrl: (url) => decodeURIComponent(url),
	handler: '/uv/uv.handler.js',
	bundle: '/uv/uv.bundle.js',
	config: '/uv/uv.config.js',
	sw: '/uv/uv.sw.js',
};