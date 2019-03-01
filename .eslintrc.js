const fs = require('fs');
const path = require('path');
module.exports = {
	"extends": [
		"eslint-config-synacor"
	],
	"rules": {
		"brace-style": [2, "1tbs"],
		"eqeqeq": [
			2,
			"smart"
		],
		"react/jsx-wrap-multilines": 1,
		"no-shadow": "error",
		"no-unused-vars": [
			"error",
			{
				"vars": "all",
				"args": "after-used",
				"ignoreRestSiblings": true
			}
		],
	},
	"settings": {
		"react": {
			"pragma": "h",
			"version": "15.0"
		}
	}
}