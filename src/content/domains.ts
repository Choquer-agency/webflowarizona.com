import { DomainConfig, defaultConfig } from "./config";

export const domainMap: Record<string, DomainConfig> = {
  "webflowarizona.com": defaultConfig,
  "arizonawebflow.com": {
    ...defaultConfig,
    domain: "arizonawebflow.com",
  },
  // Future domains — add configs here as you expand:
  // "webflowcalifornia.com": { ... },
  // "webflowexperts.ca": { ... },
};
