/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "government.vintage-artgallery.com",
                port: "",
                pathname: "/**",
            },
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
