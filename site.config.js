const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Duc Khoan",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "AI Researcher",
    bio: "Bring AI to the World",
    email: "duckhoan.work@gmail.com",
    linkedin: "khoan-le",
    github: "Khoan-IT",
    instagram: "",
  },
  projects: [
    {
      name: `Emotional Speech Recognition`,
      href: "https://github.com/Khoan-IT/ESD_W2V2",
    },
    {
      name: `Emotion Detection`,
      href: "https://github.com/Khoan-IT/emotion_classification",
    },
    {
      name: `AI gRPC Service`,
      href: "https://github.com/Khoan-IT/es_service"
    }
  ],
  // blog setting (required)
  blog: {
    title: "DucKhoan-Blog",
    description: "Welcome to DucKhoan-Blog!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://khoan-it.github.io/private-blog",
  since: 0, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
