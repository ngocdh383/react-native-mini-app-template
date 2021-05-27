import { Environment } from "./environment";
import { DomainEnv } from "./domain";

const DOMAIN_ENVs: DomainEnv = {
  DEV: {
    HOST: "https://www.super-app-example.vn:4000/",
    CHAT: "https://www.chat-example.vn:4000/",
  },
  TESTING: {
    HOST: "https://www.super-app-example.vn:5000/",
    CHAT: "https://www.chat-example.vn:5000/",
  },
  STAGING: {
    HOST: "https://www.super-app-example.vn:6000/",
    CHAT: "https://www.chat-example.vn:6000/",
  },
  PRODUCTION: {
    HOST: "https://www.super-app-example.vn:7000/",
    CHAT: "https://www.chat-example.vn:7000/",
  },
};

export const ENV = Environment.TESTING;
export const Domains = DOMAIN_ENVs[ENV];
