const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]',
  })
);
