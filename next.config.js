const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sergiojo",
        mongodb_password: "U1loUqrCiXCTJaI3",
        mongodb_clustername: "nextjs",
        mongodb_database: "my-site",
      },
    };
  }

  return {
    env: {
      mongodb_username: "sergiojo",
      mongodb_password: "U1loUqrCiXCTJaI3",
      mongodb_clustername: "nextjs",
      mongodb_database: "my-site",
    },
  };
};
