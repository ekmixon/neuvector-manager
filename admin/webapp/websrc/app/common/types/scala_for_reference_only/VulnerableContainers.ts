// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface VulnerableContainers {
  top5Containers: Array;
  vulnerabilitiesTotal: number;
  total: number;
}

export function isVulnerableContainers(v: any): v is VulnerableContainers {
  return (
    (v['top5Containers'] && isArray(v['top5Containers'])) &&
    ((typeof v['vulnerabilitiesTotal']) === 'number') &&
    ((typeof v['total']) === 'number')
  );
}
