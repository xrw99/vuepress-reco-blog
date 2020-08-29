module.exports = {
  "title": "Ne-Blog",
  "description": "人生不止眼前的苟且，还有看不懂bug和写不完code",
  "dest": "public",
  "base": "/blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.jfif"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 导航栏配置
    "nav": require('./nav'),
    // 侧边栏配置
    "sidebar": require('./sidebar'),
    // 博客配置
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    // 评论配置
    "valineConfig": {
        "appId": 'ghriHzBMDtWTEwfFsKOJjcD0-gzGzoHsz',
        "appKey": 'U6eHxaNzrSGEVAtAhtSPgto8',
        "avatar": 'monsterid'
    },
    // 友链
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.jfif",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xrw",
    "authorAvatar": "/self.PNG",
    "record": "xrw-blog",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}