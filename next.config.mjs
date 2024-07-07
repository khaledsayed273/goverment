/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "government.ysk-movies.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
