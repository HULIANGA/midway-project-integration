module.exports = {
    apps: [
      {
        name: 'MidwayIntegration',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './bootstrap.js',
        args: 'start'
      }
    ]
  }