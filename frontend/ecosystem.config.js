module.exports = {
  apps: [
    {
      name: "sailpan-frontend",
      cwd: "/domains/sailpan.info/dist/frontend",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
