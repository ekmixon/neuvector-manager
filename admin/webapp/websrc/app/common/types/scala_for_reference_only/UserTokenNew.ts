// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { TokenNew, isTokenNew } from './TokenNew';

export interface UserTokenNew {
  token: TokenNew;
  roles?: { [key: string]: string };
  login_timestamp?: string;
}

export function isUserTokenNew(v: any): v is UserTokenNew {
  return (
    (v['token'] && isTokenNew(v['token'])) &&
    (!v['roles'] || ((typeof v['roles']) == 'object' && Object.keys(v['roles']).every(key => ((typeof key) === 'string') && ((typeof v['roles'][key]) === 'string')))) &&
    (!v['login_timestamp'] || ((typeof v['login_timestamp']) === 'string'))
  );
}
