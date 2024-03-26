module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:storybook/recommended',
	],
	plugins: [
		'react',
		'simple-import-sort',
		'prettier',
		'@typescript-eslint',
		'unused-imports',
		'@emotion',
	],
	ignorePatterns: ['vite.config.ts', 'vite-env.d.ts'],
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'prettier/prettier': ['error'],
		'no-unused-vars': 'error',
		'prefer-const': 'error',
		'no-irregular-whitespace': 'error',
		'no-trailing-spaces': 'error',
		'no-empty-function': 'error',
		'no-duplicate-imports': 'error',
		'newline-after-var': 'error',
		// eslint-disable-next-line no-dupe-keys
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'unused-imports/no-unused-imports-ts': ['error'],
		'react/react-in-jsx-scope': 'off',
		'react/no-unknown-property': ['error', { ignore: ['css'] }],
		'@typescript-eslint/no-explicit-any': 'error',
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs,ts}'],
			parserOptions: {
				sourceType: 'module',
				createDefaultProgram: true,
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
}
