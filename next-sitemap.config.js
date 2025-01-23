module.exports = {
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { allow: '/', userAgent: '*' },
            { disallow: '/postForm', userAgent: '*' },
            { disallow: '/admin', userAgent: '*' },
            { disallow: '/archives', userAgent: '*' },
        ],
    },
    siteUrl: 'https://www.netcopipe.com',
};