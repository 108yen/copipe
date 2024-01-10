module.exports = {
    siteUrl: 'https://www.netcopipe.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: '/postForm' },
            { userAgent: '*', disallow: '/admin' },
        ],
    },
};