module.exports = {
  apps: [
    {
      name: "sailpan-backend",
      cwd: "/domains/sailpan.info/dist/backend",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
