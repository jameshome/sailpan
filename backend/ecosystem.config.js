module.exports = {
  apps: [
    {
      name: "sailpan-backend",
      cwd: "/domains/sailpan.info/dist/backend",
      script: "npm",
      args: "start",
      node_args: "-r dotenv/config",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
