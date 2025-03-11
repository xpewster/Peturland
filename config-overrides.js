module.exports = function override(config, env) {
    // Add TypeScript loader for node_modules
    config.module.rules.push({
      test: /\.tsx?$/,
      include: /node_modules\/world-geojson/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });
    
    return config;
}
