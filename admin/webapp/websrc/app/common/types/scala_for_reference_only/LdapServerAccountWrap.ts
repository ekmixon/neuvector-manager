// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { LdapServerTestAccount, isLdapServerTestAccount } from './LdapServerTestAccount';

export interface LdapServerAccountWrap {
  test: LdapServerTestAccount;
}

export function isLdapServerAccountWrap(v: any): v is LdapServerAccountWrap {
  return (
    (v['test'] && isLdapServerTestAccount(v['test']))
  );
}
