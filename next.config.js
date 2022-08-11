const nextConfig = {
  assetPrefix: "../../",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "",
    nextImageExportOptimizer: {
      imageFolderPath: "public",
      exportFolderPath: "out",
      quality: 75,
    },
  },
  exportPathMap: function () {
    return {
      "/pt-BR/home": { page: "/[locales]/home" },
      "/en-US/home": { page: "/[locales]/home" },
      "/pt-BR/about": { page: "/[locales]/about" },
      "/en-US/about": { page: "/[locales]/about" },
    };
  },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
  },
};

module.exports = nextConfig;
