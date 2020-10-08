const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#242424',
              '@link-color': '#1178C9',
              '@layout-sider-background':
                'linear-gradient(180deg, #1c1c1c, #414141)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
