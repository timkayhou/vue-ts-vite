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

## Solve Network: use \`--host` to expose

- vite.config.ts

```
export default defineConfig({
	server: {
		host: '0.0.0.0'
	}
})
```
