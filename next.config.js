const path = require("path");

module.exports = {
  i18n: {
    locales: ["UK", "EN", "RU"],
    defaultLocale: "UK",
  },
  env: {
    FROM_USER_LOGIN: "bookvarSite@gmail.com",
    FROM_USER_PASSWORD: "bookvarSitebookvarSite",
    TO_USER_LOGIN: "rzozyla@gmail.com",
    WP_NEXT_PUBLIC_URL: "https://bookvar.flexreality.pro/graphql",
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
