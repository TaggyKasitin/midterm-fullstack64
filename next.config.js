module.exports = {
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: "preact/compat",
      "react-dom": "preact/compat",
    };

    return config;
  },

  images: {
    domains: [
      "imgur.com",
      "i.imgur.com",
      "farm1.staticflickr.com",
      "farm2.staticflickr.com",
      "farm3.staticflickr.com",
      "farm4.staticflickr.com",
      "farm5.staticflickr.com",
      "farm6.staticflickr.com",
      "farm7.staticflickr.com",
      "farm8.staticflickr.com",
      "farm9.staticflickr.com",
      "live.staticflickr.com",
      "images2.imgbox.com",
    ],
  },
};
