export const translations = {
  en: {
    header: {
      blog: "BLOG",
      portfolio: "PORTFOLIO",
    },
    hero: {
      title: "SEHYUN's\nDIGITAL WORKSPACE.",
      blog: {
        title: "BLOG",
        description: "Insights, tutorials, and thoughts on web development and design.",
        action: "EXPLORE",
      },
      portfolio: {
        title: "PORTFOLIO",
        description: "Showcase of my best projects, experiments, and creative works.",
        action: "VIEW WORKS",
      },
      footer: "CRAFTING DIGITAL EXPERIENCES\nWITH NEXT.JS ECOSYSTEM",
    },
  },
  ko: {
    header: {
      blog: "블로그",
      portfolio: "포트폴리오",
    },
    hero: {
      title: "세현의\n디지털 워크스페이스.",
      blog: {
        title: "블로그",
        description: "웹 개발과 디자인에 대한 통찰, 튜토리얼, 그리고 생각들.",
        action: "탐험하기",
      },
      portfolio: {
        title: "포트폴리오",
        description: "최고의 프로젝트, 실험, 그리고 창의적인 작업들의 쇼케이스.",
        action: "작업 보기",
      },
      footer: "NEXT.JS 생태계로 만드는\n디지털 경험",
    },
  },
} as const;

export type Language = keyof typeof translations;
