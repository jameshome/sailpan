module.exports = {
  apps: [
    {
      name: "sailpan-frontend",
      cwd: "/domains/sailpan.info/dist/frontend",
      script: "yarn",
      args: "start",
      watch: true,
      watch_delay: 1000,
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
