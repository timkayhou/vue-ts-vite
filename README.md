# Vue 3 + Typescript + Vite + Less + ESLint + SFC

## Vue 3 + Typescript + Vite

- PowerShell

```
npm create @vitejs/app vue-vite
```

## Less

- PowerShell

```
npm i -D Less
```

- App.vue

```
import './assets/styles/app.less';
```

## ESLint

- PowerShell

```
npm i -D eslint
```

- .eslintrc.json

```
"rules": {
	"indent": [
		"error",
		2,
		{
			"SwitchCase": 1
		}
	],
	"linebreak-style": [
		"error",
		"unix"
	],
	"no-console": [
		"warn",
		{
			"allow": [
				"warn",
				"error"
			]
		}
	],
	"quotes": [
		"error",
		"single"
	],
	"semi": [
		"error",
		"always"
	]
}
```

## CSpell

- PowerShell

```
npm i -D cspell
```

- .vscode\settings.json

```
{
  "cSpell.words": [
    "Avenir",
    "esnext",
    "linebreak",
    "singlefile",
    "vite",
    "vitejs"
  ]
}
```

## SFC: Single File Component

- PowerShell

```
npm i -D vite-plugin-singlefile
```

- vite.config.ts

```
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
	plugins: [vue(), viteSingleFile()],
	build: {
		target: "esnext",
		assetsInlineLimit: 100000000,
		chunkSizeWarningLimit: 100000000,
		cssCodeSplit: false,
		brotliSize: false,
		rollupOptions: {
			inlineDynamicImports: true,
			output: {
				manualChunks: () => "everything.js",
			},
		},
	},
})
```

## Removing hash codes from vite packaged files

- vite.config.ts

```
rollupOptions: {
	output: {
		entryFileNames: `assets/[name].js`,
		chunkFileNames: `assets/[name].js`,
		assetFileNames: `assets/[name].[ext]`,
	}
}
```

## Set file location of .eslintcache

- package.json

```
"scripts": {
    "eslint": "eslint --cache --cache-location \"node_modules\\.cache\\.eslintcache\" --max-warnings 0 \"{src,mock}/**/*.{vue,ts,tsx,js,jsx}\" --fix",
  },
```

## Solve Network: use \`--host` to expose

- vite.config.ts

```
export default defineConfig({
	server: {
		host: '0.0.0.0'
	}
})
```

## Read JSON

- public/app.json

```
{
  "msg": "Hello Vue 3 + TypeScript + Vite + Less + ESLint + SFC"
}
```

- src/App.vue

```
<script setup lang="ts">
import json from '../public/app.json';
</script>

<template>
  <HelloWorld :msg="json.msg" />
</template>
```

## Error: eslint should be listed in the project's dependencies, not devDependencies

- .eslintrc.json

```
"import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
```

## Error: Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style

- .eslintrc.json

```
eslint linebreak-style: ["error", "windows"]
```

## Vue Error: "the template root requires exactly one element"

- .eslintrc.json

```
"extends": ["plugin:vue/vue3-essential",],
```

## Error: 'defineProps' is not defined.eslintno-undef

- .eslintrc.json

```
"env": {
	"vue/setup-compiler-macros": true
},
```
