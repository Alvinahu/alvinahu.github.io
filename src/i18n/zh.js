// Chinese (default) — 全部真实内容来自简历与咖啡研报
export default {
  meta: {
    title: '胡沛杉 | 上海财经大学金融学',
    description:
      '上海财经大学金融专业本科生，关注金融与投资，并对金融市场、数据分析以及 AI 在金融领域的应用保持兴趣。',
    ogTitle: '胡沛杉 | 上海财经大学金融学',
    ogDescription:
      '上海财经大学金融专业本科生，关注金融与投资，并对金融市场、数据分析以及 AI 在金融领域的应用保持兴趣。',
  },

  nav: {
    about: '关于',
    education: '教育',
    experience: '经历',
    projects: '研究',
    contact: '联系',
    cv: '简历',
    langToggle: 'EN',
    mobileMenu: '菜单',
    close: '关闭',
  },

  hero: {
    name: '胡沛杉',
    nameEn: 'Alvina Hu',
    role: '上海财经大学  金融学',
    roleShort: '上海财经大学 · 金融专业',
    location: '上海',
    aboutEyebrow: '关于',
    aboutTitle: '关于我',
    aboutBody:
      '我是上海财经大学金融专业大二本科生，关注金融与投资，并对金融市场、数据分析以及 AI 在金融领域的应用保持兴趣。',
    interestTitle: '当前关注方向',
    interestList: ['金融与投资', '金融市场', '数据与分析', 'AI 在金融中的应用'],
    scrollHint: '向下滚动',
  },

  education: {
    eyebrow: '教育',
    title: '教育经历',
    primaryTitle: '上海财经大学',
    primarySchool: '金融学院',
    primaryDegree: '金融学  本科',
    primaryPeriod: '2025.09 – 2029.06',
    primaryLocation: '中国 上海',
    previousTitle: '此前',
    previousSchool: '北京市交通大学附属中学',
    previousPeriod: '2022.09 – 2025.06',
    previousLocation: '中国 北京',
    courseworkTitle: '部分相关课程',
    coursework: [
      {
        group: '金融与投资',
        items: ['货币银行学', '投资学'],
      },
      {
        group: '经济',
        items: ['中级微观经济学', '中级宏观经济学'],
      },
      {
        group: '数学',
        items: ['高等数学', '线性代数', '概率论'],
      },
      {
        group: '编程',
        items: ['Python', '数据结构与算法'],
      },
    ],
  },

  experience: {
    eyebrow: '经历',
    title: '实习经历',
    items: [
      {
        org: '毕马威华振会计师事务所（特殊普通合伙）上海分所',
        team: 'CP 组',
        role: '审计实习生',
        period: '2026.01 – 2026.02',
        location: '上海',
        bullets: [
          '参与某半导体科技公司 IPO 审计项目，驻场协助执行财务报表审计程序。',
          '负责税金、工资、费用（管理、销售、制造、研发等科目）抽凭工作，协助编制实质性测试底稿，核对原始凭证与账面记录的一致性。',
          '导出全年序时帐、流水账等数据，使用 Excel（VLOOKUP、数据透视表等）进行数据整理，为项目组提供财务数据支持。',
          '审阅销售合同并提取关键信息；参与客户函证文件整理，协助发函与收函。',
          '参与企业参访，记录访谈内容；参与审计报告的复核工作。',
        ],
      },
    ],
    campusTitle: '校园经历',
    campusItems: [
      {
        org: '上海财经大学学生会',
        team: '对外交流部',
        role: '核心成员',
        period: '2025.09 – 2026.06',
        bullets: ['策划并参与了多场校级活动。'],
      },
    ],
  },

  projects: {
    eyebrow: '研究',
    title: '项目研究',
    items: [
      {
        title: '中国连锁咖啡行业研究',
        subtitle: 'China Chain Coffee Industry Research',
        period: '2025.09 – 2025.10',
        type: '独立研究项目',
        summary:
          '基于极海品牌监测、企业官网及行业报告，系统整理中国连锁咖啡市场门店规模、门店数量与人均消费数据；独立完成研究框架设计、数据整理、可视化与完整研究报告撰写。',
        highlights: [
          '对中国现磨咖啡市场规模、人均消费量与下游门店结构进行趋势分析',
          '对星巴克与瑞幸两类头部品牌进行多维度对比分析',
          '结合消费人群结构、下沉市场扩张与精品咖啡趋势，分析行业未来方向',
        ],
        cta: '查看完整研究 →',
      },
    ],
  },

  contact: {
    eyebrow: '联系',
    title: '联系方式',
    nameZh: '胡沛杉',
    nameEn: 'Alvina Hu',
    emailLabel: '邮箱',
    emails: [
      { value: '2025110189@stu.sufe.edu.cn', label: '学校邮箱' },
      { value: 'alvina060224@gmail.com', label: '个人邮箱' },
    ],
    phoneLabel: '电话',
    locationLabel: '所在地',
    locationValue: '上海 / 北京',
    blurb:
      '欢迎实习、研究项目或行业交流方面的邮件联系。邮件标题请简要说明来意，我会尽快回复。',
  },

  footer: {
    copyright: '© 2026 Alvina Hu',
    builtWith: '本站使用 Vite + React 构建，托管于 GitHub Pages。',
    lastUpdated: '内容更新：2026 年 9 月',
  },

  // Coffee project detail page
  coffee: {
    backToHome: '← 返回主页',
    eyebrow: '独立研究项目',
    title: '中国连锁咖啡行业研究',
    subtitle: 'China Chain Coffee Industry Research',
    period: '2025.09 – 2025.10',
    shareBadge: 'RESEARCH CASE STUDY',

    sections: [
      {
        id: 'overview',
        index: '01',
        title: '研究概览',
        paragraphs: [
          '本研究独立完成于 2025 年 9 月至 10 月，聚焦中国连锁咖啡行业的市场规模、区域差异、消费人群、竞争格局与发展方向。',
          '资料来源以极海品牌监测、企业官网与公开行业报告为主，结合《2024 中国城市咖啡发展报告》、德勤中国《2021 年中国现磨咖啡行业白皮书》、艾媒咨询、艾瑞咨询等。',
          '完整研究报告约一万字，包含研究框架设计、资料收集、数据清洗、图表可视化与文字撰写五个步骤，最终形成正文 6 个章节。',
        ],
        meta: [
          { label: '项目类型', value: '独立研究' },
          { label: '时间区间', value: '2025.09 – 2025.10' },
          { label: '资料来源', value: '公开数据 · 企业资料 · 行业报告' },
          { label: '研究方法', value: '框架设计 · 数据整理 · 可视化 · 文字撰写' },
        ],
      },

      {
        id: 'industry',
        index: '02',
        title: '行业规模',
        paragraphs: [
          '2023 年中国咖啡产业规模达到 2,654 亿元，近三年复合增长率约 17.4%；中国现磨咖啡市场规模从 2016 年的 298 亿元增长至 2023 年的 1,214 亿元，约为 2016 年的 4 倍。',
          '需求端持续放量：中国人均年消费咖啡已从 2016 年的 9 杯上升至 2023 年的 17 杯；2025 年消费者经常饮用的咖啡种类中，咖啡店在售咖啡以 55.70% 位居榜首。',
          '供给端同步扩张：世界咖啡门户数据显示，2023 年中国连锁咖啡门店共计 52,308 家，中国成为全球拥有连锁咖啡门店最多的国家。',
        ],
        chartCaption: '现磨咖啡市场规模（亿元），2016–2023',
        chartSource: '来源：中国连锁咖啡行业研究报告',
      },

      {
        id: 'regional',
        index: '03',
        title: '区域差异',
        paragraphs: [
          '中国连锁咖啡市场呈"双线并行"模式：高线城市引领密度与增长，下沉市场持续扩容。',
          '2022 年连锁咖啡在高线城市的扩店数占比达 63%；同年四线城市扩店数占比 18%，超过二线（16%）和三线（13%），下沉市场扩张提速。',
          '上海每万人拥有 2.80 家咖啡店，远超其他高线城市，稳居第一梯队；北京、杭州、广州、深圳、南京等南部省会与经济发达城市处于第二梯队，每万人拥有 1.19–1.76 家咖啡店。',
        ],
        chartCaption: '2021 年部分城市咖啡门店数（家 / 万人）',
        chartSource: '来源：中国连锁咖啡行业研究报告',
      },

      {
        id: 'consumer',
        index: '04',
        title: '消费人群',
        paragraphs: [
          '现磨咖啡消费者中女性占比 64%，约为男性（36%）的近两倍；35 岁以下消费者占 83%，反映连锁咖啡已成为年轻一代的日常饮品。',
          '上班族占消费者总量的 58%，凸显咖啡提神醒脑、提高工作效率的功能性需求。',
          '总体而言，年轻女性上班族构成中国连锁咖啡的绝对消费主力，与咖啡在职场与日常场景中的功能属性高度吻合。',
        ],
        chartCaption: '性别 / 职业结构（%）',
        chartSource: '来源：中国连锁咖啡行业研究报告',
      },

      {
        id: 'competition',
        index: '05',
        title: '竞争格局',
        paragraphs: [
          '截至 2025 年 9 月，中国连锁咖啡门店总量已接近 8 万家，前十大品牌合计占据 90% 市场份额，行业呈现高度集中的格局。',
          '以星巴克为代表的高端品牌阵营与以瑞幸、库迪为代表的平价规模阵营形成对峙格局；其他品牌（如 Manner、Tim Hortons）在两者之间寻求差异化定位。',
          '本研究以星巴克与瑞幸两类头部品牌为重点，从消费场景、定价区间、门店分布与商业模式四个维度进行对比。',
        ],
        chartCaption: '市场份额对比（按门店数，%）',
        chartSource: '来源：中国连锁咖啡行业研究报告',
      },

      {
        id: 'investment',
        index: '06',
        title: '研究视角',
        paragraphs: [
          '本节内容为研究者观察视角，并非投资建议。',
          '研究认为，高端品牌代表稳健与品牌价值，平价品牌代表规模与成长性；二者并非简单的"谁取代谁"的关系，而是在不同消费场景中形成长期共存。',
          '从供应链角度看，云南精品化政策推动国产咖啡豆在连锁品牌原料中占比逐步提升，"本土化 + 精品化"将成为行业供应链的两个并行方向。',
        ],
        chartCaption: '人均咖啡消费杯数（杯 / 年）',
        chartSource: '来源：德勤中国 · 中国连锁咖啡行业研究报告',
      },

      {
        id: 'takeaways',
        index: '07',
        title: '主要结论',
        paragraphs: [
          '本研究从市场现状、竞争格局、地域差异与文化层面四个维度得出以下结论：',
        ],
        takeaways: [
          {
            headline: '行业仍处快速扩张期',
            body: '中国咖啡市场发展水平显著低于发达国家，增长潜力大；2023 年中国咖啡产业规模 2,654 亿元，近三年 CAGR 约 17.4%。',
          },
          {
            headline: '两极化格局已经形成',
            body: '星巴克代表高端稳健模式，瑞幸代表平价扩张模式；高端稳健增长有限，平价扩张成长空间大但波动更高。',
          },
          {
            headline: '下沉市场仍有空间',
            body: '高线城市市场逐渐饱和，四线及以下城市扩店数占比上升，下沉市场正在不断释放潜力。',
          },
          {
            headline: '精品化与连锁化并存',
            body: '上海等一线城市精品咖啡与"主理人文化"兴起；高线城市未来可能形成"连锁 + 独立精品"并存的格局。',
          },
        ],
      },
    ],

    nextCta: '返回主页',
  },

  // UI microcopy
  ui: {
    comingSoon: '即将上线',
    download: '下载',
    downloadCv: '下载简历 PDF',
    viewMore: '查看更多',
    close: '关闭',
    language: '语言',
  },
};