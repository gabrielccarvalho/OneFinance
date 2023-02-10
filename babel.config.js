module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@containers': './src/containers',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-paper/babel',
  ],
};
