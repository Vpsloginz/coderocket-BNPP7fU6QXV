// Deployment configuration with timeout and error handling
export default {
  // Build timeout (5 minutes)
  buildTimeout: 300000,
  
  // Deployment timeout (10 minutes)
  deployTimeout: 600000,
  
  // Retry configuration
  retries: 3,
  retryDelay: 5000,
  
  // Error handling
  onBuildError: (error) => {
    console.error('Build failed:', error.message);
    process.exit(1);
  },
  
  onDeployError: (error) => {
    console.error('Deployment failed:', error.message);
    process.exit(1);
  },
  
  // Build configuration
  build: {
    command: 'npm run build',
    directory: 'dist',
    timeout: 300000, // 5 minutes
    env: {
      NODE_ENV: 'production',
      VITE_APP_ENV: 'production'
    }
  },
  
  // Health check configuration
  healthCheck: {
    enabled: true,
    timeout: 30000,
    retries: 5,
    path: '/',
    expectedStatus: 200
  },
  
  // Rollback configuration
  rollback: {
    enabled: true,
    keepVersions: 3
  }
};