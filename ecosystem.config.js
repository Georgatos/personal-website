module.exports = {
    apps: [
        {
            name: 'georgatos-portfolio',
            script: './src/backend/server.js',
            instances: 1,
            exec_mode: 'fork',
            env: {
                NODE_ENV: 'development',
                PORT: 5000
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 5000
            },
            // Logging
            log_file: './logs/combined.log',
            out_file: './logs/out.log',
            error_file: './logs/error.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

            // Auto restart
            watch: false,
            max_memory_restart: '1G',

            // Advanced features
            min_uptime: '10s',
            max_restarts: 10,

            // Environment file
            env_file: './src/backend/.env'
        }
    ]
};