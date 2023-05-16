import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import unoCss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unoCss({
		rules: [
			['flex', {display: 'flex'}],
			['red', {color: 'red'}]
		]
	}), vueJsx(),AutoImport({
		// include: [
		// 	/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
		// 	/\.vue$/,
		// 	/\.vue\?vue/, // .vue
		// 	/\.md$/ // .md
		// ],
		imports: ['vue'], // , 'vue-router', '@vueuse/core'
		// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
		dts: 'src/auto-import.d.ts',
		// // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
		// // 生成全局声明文件，给eslint用
		// eslintrc: {
		// 	enabled: true, // Default `false`
		// 	filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
		// 	globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
		// }
	})],
	// vite.config.js

	// css: {
	// 	/* CSS 预处理器 */
	// 	preprocessorOptions: {
	// 		scss: {
	// 			additionalData: '@import "src/assets/styles/var.scss";'
	// 		}
	// 	}
	// }
})