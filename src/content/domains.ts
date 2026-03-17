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
    locality: "Los Angeles",
    stateCode: "CA",
    nearbyAreas: "Santa Monica, Beverly Hills, Pasadena, Long Beach, and Burbank",
    metaTitle: "Webflow Agency California | Expert Webflow Design & Development",
    metaDescription:
      "California's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "California's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "San Francisco",
    stateCode: "CA",
    nearbyAreas: "Oakland, Berkeley, San Jose, Palo Alto, and Marin County",
    metaTitle: "San Francisco Webflow Agency | Expert Design & Development",
    metaDescription:
      "San Francisco's premier Webflow agency. We design and launch high-performance websites for Bay Area businesses. Get a free strategy call today.",
    heroH1: "San Francisco's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Denver",
    stateCode: "CO",
    nearbyAreas: "Boulder, Aurora, Colorado Springs, Fort Collins, and Lakewood",
    metaTitle: "Webflow Agency Colorado | Expert Webflow Design & Development",
    metaDescription:
      "Colorado's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Colorado's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Miami",
    stateCode: "FL",
    nearbyAreas: "Fort Lauderdale, Tampa, Orlando, Jacksonville, and West Palm Beach",
    metaTitle: "Webflow Agency Florida | Expert Webflow Design & Development",
    metaDescription:
      "Florida's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Florida's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Boise",
    stateCode: "ID",
    nearbyAreas: "Meridian, Nampa, Idaho Falls, Pocatello, and Twin Falls",
    metaTitle: "Webflow Agency Idaho | Expert Webflow Design & Development",
    metaDescription:
      "Idaho's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Idaho's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Billings",
    stateCode: "MT",
    nearbyAreas: "Missoula, Great Falls, Bozeman, Helena, and Kalispell",
    metaTitle: "Webflow Agency Montana | Expert Webflow Design & Development",
    metaDescription:
      "Montana's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Montana's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Las Vegas",
    stateCode: "NV",
    nearbyAreas: "Henderson, Reno, North Las Vegas, Sparks, and Carson City",
    metaTitle: "Webflow Agency Nevada | Expert Webflow Design & Development",
    metaDescription:
      "Nevada's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Nevada's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Portland",
    stateCode: "OR",
    nearbyAreas: "Beaverton, Salem, Eugene, Lake Oswego, and Hillsboro",
    metaTitle: "Webflow Agency Oregon | Expert Webflow Design & Development",
    metaDescription:
      "Oregon's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Oregon's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Singapore",
    stateCode: "SG",
    nearbyAreas: "Orchard, Marina Bay, Raffles Place, Jurong, and Tampines",
    metaTitle: "Webflow Agency Singapore | Expert Webflow Design & Development",
    metaDescription:
      "Singapore's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Singapore's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
    locality: "Hong Kong",
    stateCode: "HK",
    nearbyAreas: "Central, Wan Chai, Tsim Sha Tsui, Causeway Bay, and Kowloon",
    metaTitle: "Webflow Agency Hong Kong | Expert Webflow Design & Development",
    metaDescription:
      "Hong Kong's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
    heroH1: "Hong Kong's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Hong Kong", region: "HK", country: "HK" },
    geoCoordinates: { latitude: 22.3193, longitude: 114.1694 },
    geoRegionCode: "HK",
    gtmId: "GTM-NLLTXLFS",
  },

  // ── Washington ──
  "webflowwashington.com": {
    ...defaultConfig,
    slug: "washington",
    domain: "webflowwashington.com",
    region: "Washington",
    regionAdjective: "Washington-based",
    locality: "Seattle",
    stateCode: "WA",
    nearbyAreas: "Bellevue, Tacoma, Redmond, Kirkland, and Olympia",
    metaTitle: "Webflow Agency Washington | Expert Design & Development",
    metaDescription:
      "Washington's premier Webflow agency. We design and launch high-performance websites for Pacific Northwest businesses. Free strategy call.",
    heroH1: "Washington's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Seattle", region: "WA", country: "US" },
    geoCoordinates: { latitude: 47.6062, longitude: -122.3321 },
    geoRegionCode: "US-WA",
    gtmId: "GTM-PSZHCGXH",
  },

  // ── Hawaii ──
  "webflowhawaii.com": {
    ...defaultConfig,
    slug: "hawaii",
    domain: "webflowhawaii.com",
    region: "Hawaii",
    regionAdjective: "Hawaii-based",
    locality: "Honolulu",
    stateCode: "HI",
    nearbyAreas: "Waikiki, Maui, Kailua, Pearl City, and Hilo",
    metaTitle: "Webflow Agency Hawaii | Expert Webflow Design & Development",
    metaDescription:
      "Hawaii's premier Webflow agency. We design, build, and launch high-performance Webflow websites for island businesses ready to grow. Get a free strategy call today.",
    heroH1: "Hawaii's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Honolulu", region: "HI", country: "US" },
    geoCoordinates: { latitude: 21.3069, longitude: -157.8583 },
    geoRegionCode: "US-HI",
    gtmId: "GTM-KNN7CW6T",
  },

  // ── Texas ──
  "webflowtexas.com": {
    ...defaultConfig,
    slug: "texas",
    domain: "webflowtexas.com",
    region: "Texas",
    regionAdjective: "Texas-based",
    locality: "Austin",
    stateCode: "TX",
    nearbyAreas: "Dallas, Houston, San Antonio, Fort Worth, and Round Rock",
    metaTitle: "Webflow Agency Texas | Expert Webflow Design & Development",
    metaDescription:
      "Texas's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses across the Lone Star State. Get a free strategy call today.",
    heroH1: "Texas's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Austin", region: "TX", country: "US" },
    geoCoordinates: { latitude: 30.2672, longitude: -97.7431 },
    geoRegionCode: "US-TX",
    gtmId: "GTM-5FBZVRPT",
  },

  // ── Ontario ──
  "webflowontario.com": {
    ...defaultConfig,
    slug: "ontario",
    domain: "webflowontario.com",
    region: "Ontario",
    regionAdjective: "Ontario-based",
    country: "CA",
    locality: "Toronto",
    stateCode: "ON",
    nearbyAreas: "Mississauga, Ottawa, Hamilton, Brampton, and Markham",
    metaTitle: "Webflow Agency Ontario | Expert Webflow Design & Development",
    metaDescription:
      "Ontario's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses across Canada's most populous province. Get a free strategy call today.",
    heroH1: "Ontario's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Toronto", region: "ON", country: "CA" },
    geoCoordinates: { latitude: 43.6532, longitude: -79.3832 },
    geoRegionCode: "CA-ON",
    gtmId: "GTM-PS6CG2CZ",
  },

  // ── Canada ──
  "webflowcanada.com": {
    ...defaultConfig,
    slug: "canada",
    domain: "webflowcanada.com",
    region: "Canada",
    regionAdjective: "Canada-based",
    country: "CA",
    locality: "Toronto",
    stateCode: "ON",
    nearbyAreas: "Vancouver, Montreal, Calgary, Ottawa, and Edmonton",
    metaTitle: "Webflow Agency Canada | Expert Webflow Design & Development",
    metaDescription:
      "Canada's premier Webflow agency. We design, build, and launch high-performance Webflow websites for Canadian businesses ready to grow. Get a free strategy call today.",
    heroH1: "Canada's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Toronto", region: "ON", country: "CA" },
    geoCoordinates: { latitude: 43.6532, longitude: -79.3832 },
    geoRegionCode: "CA-ON",
    gtmId: "GTM-W77CLV99",
  },

  // ── Vancouver ──
  "webflowvancouver.com": {
    ...defaultConfig,
    slug: "vancouver",
    domain: "webflowvancouver.com",
    region: "Vancouver",
    regionAdjective: "Vancouver-based",
    country: "CA",
    locality: "Vancouver",
    stateCode: "BC",
    nearbyAreas: "Burnaby, Surrey, Richmond, North Vancouver, and Coquitlam",
    metaTitle: "Webflow Agency Vancouver | Expert Webflow Design & Development",
    metaDescription:
      "Vancouver's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses across British Columbia. Get a free strategy call today.",
    heroH1: "Vancouver's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Vancouver", region: "BC", country: "CA" },
    geoCoordinates: { latitude: 49.2827, longitude: -123.1207 },
    geoRegionCode: "CA-BC",
    gtmId: "GTM-KK435ZQC",
  },

  // ── Norway ──
  "webflownorway.com": {
    ...defaultConfig,
    slug: "norway",
    domain: "webflownorway.com",
    region: "Norway",
    regionAdjective: "Norway-based",
    country: "NO",
    locality: "Oslo",
    stateCode: "NO",
    nearbyAreas: "Bergen, Stavanger, Trondheim, Drammen, and Fredrikstad",
    metaTitle: "Webflow Agency Norway | Expert Webflow Design & Development",
    metaDescription:
      "Norway's premier Webflow agency. We design, build, and launch high-performance Webflow websites for Norwegian businesses ready to grow. Get a free strategy call today.",
    heroH1: "Norway's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Oslo", region: "Oslo", country: "NO" },
    geoCoordinates: { latitude: 59.9139, longitude: 10.7522 },
    geoRegionCode: "NO",
    gtmId: "GTM-T37VPCTN",
  },

  // ── Switzerland ──
  "webflowswitzerland.com": {
    ...defaultConfig,
    slug: "switzerland",
    domain: "webflowswitzerland.com",
    region: "Switzerland",
    regionAdjective: "Switzerland-based",
    country: "CH",
    locality: "Zurich",
    stateCode: "CH",
    nearbyAreas: "Geneva, Basel, Bern, Lausanne, and Lucerne",
    metaTitle: "Webflow Agency Switzerland | Expert Design & Dev",
    metaDescription:
      "Switzerland's premier Webflow agency. We design and launch high-performance websites for Swiss businesses. Free strategy call today.",
    heroH1: "Switzerland's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Zurich", region: "ZH", country: "CH" },
    geoCoordinates: { latitude: 47.3769, longitude: 8.5417 },
    geoRegionCode: "CH",
    gtmId: "GTM-T6WQCGN9",
  },

  // ── France ──
  "webflowfrance.com": {
    ...defaultConfig,
    slug: "france",
    domain: "webflowfrance.com",
    region: "France",
    regionAdjective: "France-based",
    country: "FR",
    locality: "Paris",
    stateCode: "FR",
    nearbyAreas: "Lyon, Marseille, Toulouse, Nice, and Bordeaux",
    metaTitle: "Webflow Agency France | Expert Webflow Design & Development",
    metaDescription:
      "France's premier Webflow agency. We design, build, and launch high-performance Webflow websites for French businesses ready to grow. Get a free strategy call today.",
    heroH1: "France's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Paris", region: "Île-de-France", country: "FR" },
    geoCoordinates: { latitude: 48.8566, longitude: 2.3522 },
    geoRegionCode: "FR",
    gtmId: "GTM-MVW29Q94",
  },

  // ── Belgium ──
  "webflowbelgium.com": {
    ...defaultConfig,
    slug: "belgium",
    domain: "webflowbelgium.com",
    region: "Belgium",
    regionAdjective: "Belgium-based",
    country: "BE",
    locality: "Brussels",
    stateCode: "BE",
    nearbyAreas: "Antwerp, Ghent, Bruges, Leuven, and Liège",
    metaTitle: "Webflow Agency Belgium | Expert Webflow Design & Development",
    metaDescription:
      "Belgium's premier Webflow agency. We design, build, and launch high-performance Webflow websites for Belgian businesses ready to grow. Get a free strategy call today.",
    heroH1: "Belgium's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Brussels", region: "Brussels", country: "BE" },
    geoCoordinates: { latitude: 50.8503, longitude: 4.3517 },
    geoRegionCode: "BE",
    gtmId: "GTM-K2BPHBPD",
  },

  // ── Netherlands ──
  "webflownetherlands.com": {
    ...defaultConfig,
    slug: "netherlands",
    domain: "webflownetherlands.com",
    region: "Netherlands",
    regionAdjective: "Netherlands-based",
    country: "NL",
    locality: "Amsterdam",
    stateCode: "NL",
    nearbyAreas: "Rotterdam, The Hague, Utrecht, Eindhoven, and Groningen",
    metaTitle: "Webflow Agency Netherlands | Expert Design & Dev",
    metaDescription:
      "The Netherlands' premier Webflow agency. We design and launch high-performance websites for Dutch businesses. Free strategy call today.",
    heroH1: "The Netherlands' Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Amsterdam", region: "North Holland", country: "NL" },
    geoCoordinates: { latitude: 52.3676, longitude: 4.9041 },
    geoRegionCode: "NL",
    gtmId: "GTM-NJTNJN43",
  },

  // ── New Zealand ──
  "webflownewzealand.com": {
    ...defaultConfig,
    slug: "new-zealand",
    domain: "webflownewzealand.com",
    region: "New Zealand",
    regionAdjective: "New Zealand-based",
    country: "NZ",
    locality: "Auckland",
    stateCode: "NZ",
    nearbyAreas: "Wellington, Christchurch, Hamilton, Queenstown, and Tauranga",
    metaTitle: "Webflow Agency New Zealand | Expert Design & Dev",
    metaDescription:
      "New Zealand's premier Webflow agency. We design and launch high-performance websites for Kiwi businesses. Free strategy call today.",
    heroH1: "New Zealand's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Auckland", region: "Auckland", country: "NZ" },
    geoCoordinates: { latitude: -36.8485, longitude: 174.7633 },
    geoRegionCode: "NZ",
    gtmId: "GTM-P86MX9HJ",
  },

  // ── Sweden ──
  "webflowsweden.com": {
    ...defaultConfig,
    slug: "sweden",
    domain: "webflowsweden.com",
    region: "Sweden",
    regionAdjective: "Sweden-based",
    country: "SE",
    locality: "Stockholm",
    stateCode: "SE",
    nearbyAreas: "Gothenburg, Malmö, Uppsala, Linköping, and Västerås",
    metaTitle: "Webflow Agency Sweden | Expert Webflow Design & Development",
    metaDescription:
      "Sweden's premier Webflow agency. We design, build, and launch high-performance Webflow websites for Swedish businesses ready to grow. Get a free strategy call today.",
    heroH1: "Sweden's Premier Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Stockholm", region: "Stockholm", country: "SE" },
    geoCoordinates: { latitude: 59.3293, longitude: 18.0686 },
    geoRegionCode: "SE",
    gtmId: "GTM-NQZJP6TC",
  },

  // ── Canadian Agency ──
  "webflowagency.ca": {
    ...defaultConfig,
    slug: "agency-ca",
    domain: "webflowagency.ca",
    region: "Canadian Agency",
    regionAdjective: "Canadian",
    country: "CA",
    locality: "Toronto",
    stateCode: "ON",
    nearbyAreas: "Vancouver, Montreal, Calgary, Ottawa, and Edmonton",
    metaTitle: "Webflow Agency Canada | Your Trusted Canadian Webflow Partner",
    metaDescription:
      "Your trusted Canadian Webflow agency. We design, build, and launch high-performance Webflow websites for businesses across Canada. Get a free strategy call today.",
    heroH1: "Your Trusted Canadian Webflow Agency",
    heroSubhead:
      "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
    schemaAddress: { locality: "Toronto", region: "ON", country: "CA" },
    geoCoordinates: { latitude: 43.6532, longitude: -79.3832 },
    geoRegionCode: "CA-ON",
    gtmId: "GTM-TLPKRLDR",
  },

};
