// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { LdapServer, isLdapServer } from './LdapServer';
import { LdapTestAccount, isLdapTestAccount } from './LdapTestAccount';

export interface LdapServerTestAccount {
  name?: string;
  ldap?: LdapServer;
  test_ldap?: LdapTestAccount;
}

export function isLdapServerTestAccount(v: any): v is LdapServerTestAccount {
  return (
    (!v['name'] || ((typeof v['name']) === 'string')) &&
    (!v['ldap'] || (v['ldap'] && isLdapServer(v['ldap']))) &&
    (!v['test_ldap'] || (v['test_ldap'] && isLdapTestAccount(v['test_ldap'])))
  );
}
