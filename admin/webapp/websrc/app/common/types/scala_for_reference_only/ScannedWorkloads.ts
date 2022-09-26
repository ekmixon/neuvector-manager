// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface ScannedWorkloads {
  id: string;
  name: string;
  base_os: string;
  display_name: string;
  domain: string;
  high: number;
  medium: number;
  host: string;
  image: string;
  platform_role: string;
  policy_mode?: string;
  result: string;
  service: string;
  service_group: string;
  state: string;
  status: string;
  scanner_version: string;
  children?: Array;
  scanned_timestamp: number;
  scanned_at: string;
}

export function isScannedWorkloads(v: any): v is ScannedWorkloads {
  return (
    ((typeof v['id']) === 'string') &&
    ((typeof v['name']) === 'string') &&
    ((typeof v['base_os']) === 'string') &&
    ((typeof v['display_name']) === 'string') &&
    ((typeof v['domain']) === 'string') &&
    ((typeof v['high']) === 'number') &&
    ((typeof v['medium']) === 'number') &&
    ((typeof v['host']) === 'string') &&
    ((typeof v['image']) === 'string') &&
    ((typeof v['platform_role']) === 'string') &&
    (!v['policy_mode'] || ((typeof v['policy_mode']) === 'string')) &&
    ((typeof v['result']) === 'string') &&
    ((typeof v['service']) === 'string') &&
    ((typeof v['service_group']) === 'string') &&
    ((typeof v['state']) === 'string') &&
    ((typeof v['status']) === 'string') &&
    ((typeof v['scanner_version']) === 'string') &&
    (!v['children'] || (v['children'] && isArray(v['children']))) &&
    ((typeof v['scanned_timestamp']) === 'number') &&
    ((typeof v['scanned_at']) === 'string')
  );
}
