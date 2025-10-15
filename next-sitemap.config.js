module.exports = {
  siteUrl: 'https://www.smilexpertsdental.com',
  generateRobotsTxt: true,
  outDir: './public',
  sitemapBaseFileName: 'sitemap',
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    // Higher priority for service pages and blog
    const isServicePage = path.includes('-washington-dc');
    const isBlogPage = path.includes('/blog');
    
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : isBlogPage ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : isServicePage ? 0.9 : isBlogPage ? 0.8 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};