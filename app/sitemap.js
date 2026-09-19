export default function sitemap() {
  const baseUrl = 'https://courtmarriage.pro'
  const routes = [
    '/',
    '/about',
    '/contact',
    '/procedure',
    '/process-fees',
    '/legal-nadra-process',
    '/services/court-marriage',
    '/services/online-nikah',
    '/services/overseas-support',
    '/services/sharia-compliant',
    '/services/cities-services/karachi',
    '/services/cities-services/islamabad',
    '/services/cities-services/lahore',
    '/services/cities-services/rawalpindi',
    '/services/cities-services/faisalabad',
    '/services/online-nikah/karachi',
    '/services/online-nikah/islamabad',
    '/services/online-nikah/lahore',
    '/services/online-nikah/rawalpindi',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('/services/') ? 0.8 : 0.6,
  }))
}
