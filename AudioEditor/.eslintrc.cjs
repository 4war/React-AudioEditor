module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": '@typescript-eslint/parser',
        "project": './tsconfig.json',
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "react",
        '@typescript-eslint',
        'i18next'
    ],
    "rules": {
        "@typescript-eslint/indent": "off",
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": [2, {"extensions": ["js", "jsx", ".ts", ".tsx"]}],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "semi": "off",
        "@typescript-eslint/semi": "off",
        "import/no-unresolved": 'off',
        "import/prefer-default-export": 'off',
        "no-unused-vars": 'warn',
        "i18next/no-literal-string": ['error', { markupOnly: true }]
    },
    "settings": {
        "react": {
          "version": "detect"
        }
    },
    globals: {
        '__IS_DEV__': true
    }, 
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                "i18next/no-literal-string": 'off'
            }
        }
    ]
}
