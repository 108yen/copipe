module.exports = {
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { allow: "/", userAgent: "*" },
      { disallow: "/postForm", userAgent: "*" },
      { disallow: "/admin", userAgent: "*" },
      { disallow: "/archives", userAgent: "*" },
      { allow: "/archives", userAgent: "Googlebot" },
    ],
  },
  siteUrl: "https://www.netcopipe.com",
}
