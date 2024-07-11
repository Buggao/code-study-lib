module.exports = {
	// 若项目中有多个子项目，且每个项目都会有.eslintrc，子项目会一直向上查找所有的.eslintrc，直到找到root:true的eslintrc，再将所有的.eslintrc合并
	'root': true,
	// 对环境定义的一组全局变量的预设 详细看：https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
	'env': {
		// 浏览器全局变量
		browser: true,
		// Node.js 全局变量和作用域
		node: true,
		// CommonJS全局变量和CommonJS作用域
		commonjs: true,
		// 启用除模块之外的所有ECMAScript 6功能
		es6: true
	},
	// 将数据提供给每一个将被执行的规则
	"settings": {
		"sharedData": "Hello"
	},
	// 继承另一个配置文件的所有特性
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	// 插件，向ESLint添加各种扩展，可以定义规则，环境或配置的第三方模块
	'plugins': [
		'@typescript-eslint'
	],
	// 全局变量
	'globals': {
		// false、readable、readonly 这 3 个是等价的，表示变量只可读不可写；
		// true、writeable、writable 这 3 个是等价的，表示变量可读可写；
		'$': true,
		'console': false
	},
	// 解释器
	'parser': '@typescript-eslint/parser',
	// 解释器的配置
	'parserOptions': {
		// 代码模块类型，可选script(默认)，module
		'sourceType': 'module',
		// 指定ECMAScript版本，默认为5
		'ecamVersion': 6,
		// 额外的语言特性，所有选项默认都是 false
		'ecmaFeatures': {
			// 是否允许 return 语句出现在 global 环境下
			'globalReturn': true,
			// 是否开启全局 script 模式
			'impliedStrict': true,
			// 是否启用 JSX
			'jsx': true,
			// 是否启用对实验性的objectRest/spreadProperties的支持
			'experimentalObjectRestSpread': false
		}
	},
	// 规则
	'rules': {
		// 禁止使用 alert
		'no-alert': 'off',
		// 逗号前面没有空格 后面有空格
		'comma-spacing': [2, {
			'before': false, 'after': true
		}],
	}
};
