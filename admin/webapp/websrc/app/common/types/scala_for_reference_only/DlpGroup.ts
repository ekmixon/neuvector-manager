// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { DlpSetting, isDlpSetting } from './DlpSetting';

export interface DlpGroup {
  name: string;
  status: boolean;
  sensors: ReadonlyArray<DlpSetting>;
}

export function isDlpGroup(v: any): v is DlpGroup {
  return (
    ((typeof v['name']) === 'string') &&
    ((typeof v['status']) === 'boolean') &&
    (Array.isArray(v['sensors']) && v['sensors'].every(elmt => elmt && isDlpSetting(elmt)))
  );
}
