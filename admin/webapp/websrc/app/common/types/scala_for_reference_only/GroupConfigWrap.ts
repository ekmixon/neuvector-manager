// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { GroupConfig, isGroupConfig } from './GroupConfig';

export interface GroupConfigWrap {
  config: GroupConfig;
}

export function isGroupConfigWrap(v: any): v is GroupConfigWrap {
  return (
    (v['config'] && isGroupConfig(v['config']))
  );
}
