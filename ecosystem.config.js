module.exports = {
  apps: [
    {
      name: "cvi-backend",
      script: "dist/main.js",
      env_file: ".env",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
