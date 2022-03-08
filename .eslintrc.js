module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
		"eslint:recommended",
		"@vue/typescript/recommended",
		"plugin:vue/vue3-essential",
    ],
    parserOptions: {
      ecmaVersion: 2021,
    },
    plugins: ['vue'],   
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': 0,
		// 关闭禁止混用tab和空格
		'no-mixed-spaces-and-tabs': 2,
		'no-extra-semi': 2,
		// 1 tab
		'indent': ['warn', 'tab'],
		'no-tabs': 'off',
		// 禁止结尾没有分号
		'semi': ['error', 'never'],
		// 禁止出现多行空行
		'no-multiple-empty-lines': 0,
		// 禁止重复引用
		'no-duplicate-imports': 'off',
		// 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
		'no-useless-rename': 0,
		'no-return-await': 0,
		// 转义符
		'no-useless-escape': 0,
		// 不允许扩展原生对象
		// "no-extend-native" : 0,
		// 不允许对null用==或者!=
		'no-eq-null': 2,
		// 禁止尾随逗号
		"comma-dangle": ["error", "never"],
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
		'max-len': ['error', {
			code: 160,
			ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
			ignoreUrls: true,
		}],
		"@typescript-eslint/ban-types": "off",
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
          moduleDirectory: ['node_modules', 'src/'],
        },
        alias: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
          map: [['@', './src']],
        },
      },
    },
  };
  