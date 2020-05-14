module.exports = {
  apps: [
    {
      name: "sailpan-frontend",
      cwd: "/domains/sailpan.info/dist/frontend",
      script: "yarn",
      args: "start",
      watch: true,
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
