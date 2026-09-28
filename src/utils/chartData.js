// Chart data sourced from the research report and PPT.
// All numbers come from "中国连锁咖啡行业研究报告.pdf" and the accompanying PPT.
// DO NOT add fabricated figures here.

export const industrySizeData = [
  { year: '2016', value: 298 },
  { year: '2017', value: 391 },
  { year: '2018', value: 448 },
  { year: '2019', value: 552 },
  { year: '2020', value: 588 },
  { year: '2021', value: 741 },
  { year: '2022', value: 934 },
  { year: '2023', value: 1214 },
];

// City-level coffee stores per 10,000 people, 2021
export const regionalData = [
  { city: 'Shanghai', stores: 2.80 },
  { city: 'Guangzhou', stores: 1.76 },
  { city: 'Shenzhen', stores: 1.46 },
  { city: 'Beijing', stores: 1.32 },
  { city: 'Chengdu', stores: 1.21 },
  { city: 'Hangzhou', stores: 1.19 },
  { city: 'Suzhou', stores: 0.94 },
  { city: 'Nanjing', stores: 0.96 },
  { city: 'Chongqing', stores: 0.81 },
  { city: 'Wuhan', stores: 0.36 },
];

// Consumer profile, 2025
export const genderData = [
  { name: 'Female', value: 64 },
  { name: 'Male', value: 36 },
];

export const ageData = [
  { age: '19–25', share: 27 },
  { age: '26–30', share: 36 },
  { age: '31–35', share: 24 },
  { age: '36–40', share: 8 },
  { age: '41–45', share: 6 },
];

export const occupationData = [
  { name: 'Office worker', value: 58 },
  { name: 'Student', value: 24 },
  { name: 'Other', value: 18 },
];

// Top brands by store share (2025)
export const marketShareData = [
  { brand: 'Luckin', share: 36 },
  { brand: 'Kudi', share: 18 },
  { brand: 'Starbucks', share: 10 },
  { brand: 'Manner', share: 8 },
  { brand: 'Xingyun Ka', share: 8 },
  { brand: 'Other', share: 10 },
  { brand: 'Kenjoy', share: 3 },
  { brand: 'Huka', share: 3 },
  { brand: 'M Stand', share: 2 },
  { brand: 'Nowwa', share: 1 },
  { brand: 'Tianhao', share: 1 },
];

// Starbucks vs Luckin by city tier (2025)
export const cityTierData = [
  { tier: 'Tier 1', starbucks: 7772, luckin: 6216 },
  { tier: 'New Tier 1', starbucks: 4892, luckin: 4675 },
  { tier: 'Tier 2', starbucks: 3312, luckin: 2669 },
  { tier: 'Tier 3', starbucks: 2450, luckin: 1545 },
  { tier: 'Tier 4', starbucks: 800, luckin: 674 },
  { tier: 'Tier 5', starbucks: 378, luckin: 164 },
];

// Per-capita coffee consumption, 2022 (cups / year)
export const perCapitaData = [
  { country: 'China (10)', value: 9 },
  { country: 'China', value: 11.3 },
  { country: 'Shanghai', value: 20 },
  { country: 'Japan', value: 280 },
  { country: 'Korea', value: 367 },
  { country: 'US', value: 329 },
];

// Side-by-side comparison of the two leading brands.
// All values come from the report.
export const brandCompare = {
  starbucks: {
    name: 'Starbucks',
    sub: 'Premium · "Third Place"',
    storeCount: '~8,000',
    cityCoverage: '29 provinces · 298 cities',
    marketShare: '~10%',
    avgTicket: 'RMB 41',
    storeArea: '100–200 m²',
    model: 'Fully direct-operated',
    dailyCups: '300–400 (tier-1 core)',
    dailyRevenue: 'RMB 18,000–22,000',
    q3Revenue: 'RMB 5.67 bn (2025 Q3 China)',
  },
  luckin: {
    name: 'Luckin Coffee',
    sub: 'Mass · "Anywhere"',
    storeCount: '~28,000',
    cityCoverage: '31 provinces · 300+ cities',
    marketShare: '~36%',
    avgTicket: 'RMB 19',
    storeArea: '20–60 m²',
    model: 'Direct + franchise',
    dailyCups: '~600 (tier-1 core)',
    dailyRevenue: '~RMB 7,200',
    q3Revenue: 'RMB 10.18 bn (2025 Q3)',
  },
};