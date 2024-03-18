module.exports = {
	plugins: ['react', 'simple-import-sort', 'prettier', '@typescript-eslint'],
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
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
		},
		{
			files: ['**/*.js?(x)'],
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2015,
			},
		},
	],
}
