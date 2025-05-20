export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "StepFishPage/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DZPAzPLP.js",app:"_app/immutable/entry/app.BHnzRmj4.js",imports:["_app/immutable/entry/start.DZPAzPLP.js","_app/immutable/chunks/BPv4eLHE.js","_app/immutable/chunks/B7raxhyI.js","_app/immutable/chunks/BnI5fpHY.js","_app/immutable/entry/app.BHnzRmj4.js","_app/immutable/chunks/B7raxhyI.js","_app/immutable/chunks/Bu4eQ944.js","_app/immutable/chunks/BLcp3-99.js","_app/immutable/chunks/DKnHX_Ip.js","_app/immutable/chunks/B26qZVl3.js","_app/immutable/chunks/znPh9jfB.js","_app/immutable/chunks/BnI5fpHY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dataprivacypolicy",
				pattern: /^\/dataprivacypolicy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
