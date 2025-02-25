/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["en", "fa"], // زبان‌های پشتیبانی‌شده
  //   defaultLocale: "fa", // زبان پیش‌فرض
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.karkojo.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    );
    // تنظیم لودر فایل‌های MP4
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          esModule: false,
        },
      },
    });
    return config;
  },
};

export default nextConfig;
