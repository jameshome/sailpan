module.exports = {
  apps: [
    {
      name: "sailpan-frontend",
      cwd: "/domains/sailpan.info/dist/frontend",
      script: "next",
      args: "start",
      node_args: "-r dotenv/config",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
