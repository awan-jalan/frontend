/** @type {import('next').NextConfig} */

module.exports = {
    nextConfig,
    output: 'standalone',
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            path: false,
            child_process:false,
            net:false,
            tls:false
        };
        return config;
    },
    typescript: {
        ignoreBuildErrors: true
    }
}
