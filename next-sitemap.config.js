// const staticPaths = [
//   "/about",
//   "/services",
//   "/gallery",
//   "/blog",
//   "/course",
//   "/contacts",
// ];

// const locales = ["ru", "en", "de", "fr"];
// const siteUrl = "https://www.trinkotattoo.ink";

// module.exports = {
//   siteUrl,
//   generateRobotsTxt: true,
//   sitemapSize: 5000,
//   i18n: {
//     locales,
//     defaultLocale: "ru",
//   },
//   additionalPaths: async () => {
//     const paths = [];

//     for (const path of staticPaths) {
//       for (const locale of locales) {
//         paths.push({
//           loc: `${siteUrl}/${locale}${path}`,
//           changefreq: "monthly",
//           priority: 0.7,
//           lastmod: new Date().toISOString(),
//         });
//       }
//     }

//     return paths;
//   },
// };
