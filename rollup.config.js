import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    postcss({
      // Opciones de configuración de PostCSS
      plugins: [
        require('autoprefixer')
      ]
    })
  ]
};