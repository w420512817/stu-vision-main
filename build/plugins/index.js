import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';
import Unocss from '@unocss/vite';
import unplugin from './unplugin';
import html from './html';
import mock from './mock';
import compress from './compress';
import { visualizer } from 'rollup-plugin-visualizer';
// import resolveExternalsPlugin from 'vite-plugin-resolve-externals';

export function createVitePlugins(viteEnv, isBuild) {
  const { VITE_USE_MOCK, VITE_COMPRESS_TYPE } = viteEnv;

  const plugins = [
    Vue(),
    VueJsx(),
    html(viteEnv),
    DefineOptions(),
    Unocss(),
    visualizer(),
    // resolveExternalsPlugin({
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter'
    // }),
    ...unplugin
  ];

  VITE_USE_MOCK && plugins.push(mock(isBuild));

  if (isBuild) {
    plugins.push(compress(VITE_COMPRESS_TYPE));
  }

  return plugins;
}
