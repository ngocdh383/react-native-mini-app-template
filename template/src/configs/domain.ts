interface DomainGroup {
  HOST: string;
  CHAT: string;
}

export interface DomainEnv {
  [env: string]: DomainGroup;
}
