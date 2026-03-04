import { DomainConfig, defaultConfig } from "./config";

export const domainMap: Record<string, DomainConfig> = {
  // ── Arizona (default) ──
  "webflowarizona.com": defaultConfig,
  "arizonawebflow.com": {
    ...defaultConfig,
    domain: "arizonawebflow.com",
  },

  // ── California ──
  "webflowcalifornia.com": {
    ...defaultConfig,
    slug: "california",
    domain: "webflowcalifornia.com",
    region: "California",
    regionAdjective: "California-based",
    metaTitle: "Webflow Agency California | Expert Webflow Design & Development",
    metaDescription:
      "California's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "California's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for California businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Los Angeles", region: "CA", country: "US" },
    geoCoordinates: { latitude: 34.0522, longitude: -118.2437 },
    geoRegionCode: "US-CA",
    gtmId: "GTM-WFM4M62F",
  },

  // ── San Francisco ──
  "webflowsanfrancisco.com": {
    ...defaultConfig,
    slug: "san-francisco",
    domain: "webflowsanfrancisco.com",
    region: "San Francisco",
    regionAdjective: "San Francisco-based",
    metaTitle: "Webflow Agency San Francisco | Expert Webflow Design & Development",
    metaDescription:
      "San Francisco's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "San Francisco's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for San Francisco businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "San Francisco", region: "CA", country: "US" },
    geoCoordinates: { latitude: 37.7749, longitude: -122.4194 },
    geoRegionCode: "US-CA",
    gtmId: "GTM-NH6KTMTF",
  },

  // ── Colorado ──
  "webflowcolorado.com": {
    ...defaultConfig,
    slug: "colorado",
    domain: "webflowcolorado.com",
    region: "Colorado",
    regionAdjective: "Colorado-based",
    metaTitle: "Webflow Agency Colorado | Expert Webflow Design & Development",
    metaDescription:
      "Colorado's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Colorado's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Colorado businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Denver", region: "CO", country: "US" },
    geoCoordinates: { latitude: 39.7392, longitude: -104.9903 },
    geoRegionCode: "US-CO",
    gtmId: "GTM-T6R94MBK",
  },

  // ── Florida ──
  "webflowflorida.com": {
    ...defaultConfig,
    slug: "florida",
    domain: "webflowflorida.com",
    region: "Florida",
    regionAdjective: "Florida-based",
    metaTitle: "Webflow Agency Florida | Expert Webflow Design & Development",
    metaDescription:
      "Florida's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Florida's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Florida businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Miami", region: "FL", country: "US" },
    geoCoordinates: { latitude: 25.7617, longitude: -80.1918 },
    geoRegionCode: "US-FL",
    gtmId: "GTM-PWW7TVXT",
  },

  // ── Idaho ──
  "webflowidaho.com": {
    ...defaultConfig,
    slug: "idaho",
    domain: "webflowidaho.com",
    region: "Idaho",
    regionAdjective: "Idaho-based",
    metaTitle: "Webflow Agency Idaho | Expert Webflow Design & Development",
    metaDescription:
      "Idaho's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Idaho's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Idaho businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Boise", region: "ID", country: "US" },
    geoCoordinates: { latitude: 43.615, longitude: -116.2023 },
    geoRegionCode: "US-ID",
    gtmId: "GTM-KQXL556F",
  },

  // ── Montana ──
  "webflowmontana.com": {
    ...defaultConfig,
    slug: "montana",
    domain: "webflowmontana.com",
    region: "Montana",
    regionAdjective: "Montana-based",
    metaTitle: "Webflow Agency Montana | Expert Webflow Design & Development",
    metaDescription:
      "Montana's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Montana's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Montana businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Billings", region: "MT", country: "US" },
    geoCoordinates: { latitude: 45.7833, longitude: -108.5007 },
    geoRegionCode: "US-MT",
    gtmId: "GTM-TZKJ442J",
  },

  // ── Nevada ──
  "webflownevada.com": {
    ...defaultConfig,
    slug: "nevada",
    domain: "webflownevada.com",
    region: "Nevada",
    regionAdjective: "Nevada-based",
    metaTitle: "Webflow Agency Nevada | Expert Webflow Design & Development",
    metaDescription:
      "Nevada's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Nevada's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Nevada businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Las Vegas", region: "NV", country: "US" },
    geoCoordinates: { latitude: 36.1699, longitude: -115.1398 },
    geoRegionCode: "US-NV",
    gtmId: "GTM-5BZTJDKM",
  },

  // ── Oregon ──
  "webfloworegon.com": {
    ...defaultConfig,
    slug: "oregon",
    domain: "webfloworegon.com",
    region: "Oregon",
    regionAdjective: "Oregon-based",
    metaTitle: "Webflow Agency Oregon | Expert Webflow Design & Development",
    metaDescription:
      "Oregon's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Oregon's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Oregon businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Portland", region: "OR", country: "US" },
    geoCoordinates: { latitude: 45.5152, longitude: -122.6784 },
    geoRegionCode: "US-OR",
    gtmId: "GTM-KR9L863D",
  },

  // ── Singapore ──
  "webflowsingapore.com": {
    ...defaultConfig,
    slug: "singapore",
    domain: "webflowsingapore.com",
    region: "Singapore",
    regionAdjective: "Singapore-based",
    country: "SG",
    metaTitle: "Webflow Agency Singapore | Expert Webflow Design & Development",
    metaDescription:
      "Singapore's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Singapore's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Singapore businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Singapore", region: "SG", country: "SG" },
    geoCoordinates: { latitude: 1.3521, longitude: 103.8198 },
    geoRegionCode: "SG",
    gtmId: "GTM-KSXG75VL",
  },

  // ── Hong Kong ──
  "webflowhongkong.com": {
    ...defaultConfig,
    slug: "hong-kong",
    domain: "webflowhongkong.com",
    region: "Hong Kong",
    regionAdjective: "Hong Kong-based",
    country: "HK",
    metaTitle: "Webflow Agency Hong Kong | Expert Webflow Design & Development",
    metaDescription:
      "Hong Kong's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Hong Kong's Premier Webflow Agency",
    heroSubhead:
      "We design, build, and launch high-performance Webflow websites for Hong Kong businesses ready to grow. No templates. No shortcuts.",
    schemaAddress: { locality: "Hong Kong", region: "HK", country: "HK" },
    geoCoordinates: { latitude: 22.3193, longitude: 114.1694 },
    geoRegionCode: "HK",
    gtmId: "GTM-NLLTXLFS",
  },
};
