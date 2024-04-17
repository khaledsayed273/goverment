/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "government.mixtesting.online",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
