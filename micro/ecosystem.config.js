module.exports = {
    apps: [
        {
            name: "androidcore",
            script: "./index.js",
            watch: true,
            env: {
                NODE_ENV: "production",
                PORT: 7500,
            },
        },
    ],
};