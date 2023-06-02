/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
     loader: '@svgr/webpack',
     options: {
      prettier: false,
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            // В последней документации имя плагинам задавать обязательно!
            name: 'preset-default',
            params: {
              overrides: {
                // disable plugins
                removeViewBox: false,
              }
            }
            
          }
        ]
      },

      titleProp: true,
     },

     test: /\.svg$/,
    });

    return config;
  }  
}

module.exports = nextConfig
