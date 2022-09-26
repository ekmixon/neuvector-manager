// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { WorkloadBrief2, isWorkloadBrief2 } from './WorkloadBrief2';

export interface WorkloadsOutput {
  containerMap: { [key: string]: WorkloadBrief2 };
  hasPrivilegedContainer: boolean;
  hasRunAsRoot: boolean;
}

export function isWorkloadsOutput(v: any): v is WorkloadsOutput {
  return (
    ((typeof v['containerMap']) == 'object' && Object.keys(v['containerMap']).every(key => ((typeof key) === 'string') && (v['containerMap'][key] && isWorkloadBrief2(v['containerMap'][key])))) &&
    ((typeof v['hasPrivilegedContainer']) === 'boolean') &&
    ((typeof v['hasRunAsRoot']) === 'boolean')
  );
}
