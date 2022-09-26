// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface OpenIdServer {
  issuer: string;
  client_id: string;
  client_secret?: string;
  group_claim?: string;
  enable?: boolean;
  default_role?: string;
  group_mapped_roles?: Array;
}

export function isOpenIdServer(v: any): v is OpenIdServer {
  return (
    ((typeof v['issuer']) === 'string') &&
    ((typeof v['client_id']) === 'string') &&
    (!v['client_secret'] || ((typeof v['client_secret']) === 'string')) &&
    (!v['group_claim'] || ((typeof v['group_claim']) === 'string')) &&
    (!v['enable'] || ((typeof v['enable']) === 'boolean')) &&
    (!v['default_role'] || ((typeof v['default_role']) === 'string')) &&
    (!v['group_mapped_roles'] || (v['group_mapped_roles'] && isArray(v['group_mapped_roles'])))
  );
}
