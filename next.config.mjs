/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: `@import "src/shared/styles/variables.scss"; @import "src/shared/styles/functions.scss";`,
    },
};

export default nextConfig;
