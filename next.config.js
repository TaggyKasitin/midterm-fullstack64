module.exports = {
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: "preact/compat",
      "react-dom": "preact/compat",
    };

    return config;
  },
};
