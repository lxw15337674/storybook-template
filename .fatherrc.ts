import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    input: 'src',
    ignores: ['**/*.stories.*', '**/*.test.*', '**/*.mdx'],
  },
  cjs: {
    input: 'src',
    ignores: ['**/*.stories.*', '**/*.test.*', '**/*.mdx'],
  },
  prebundle: {
    deps: {}
  },
});
