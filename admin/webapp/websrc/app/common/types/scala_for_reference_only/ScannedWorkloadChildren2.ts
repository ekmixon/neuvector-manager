// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';
import { ScanSummary, isScanSummary } from './ScanSummary';

export interface ScannedWorkloadChildren2 {
  id: string;
  name: string;
  display_name: string;
  image: string;
  domain: string;
  state: string;
  service: string;
  platform_role: string;
  scan_summary: ScanSummary;
  quarantine_reason?: string;
  privileged: boolean;
  run_as_root: boolean;
  host_name: string;
  enforcer_id: string;
  network_mode: string;
  started_at: string;
  finished_at: string;
  ports?: Array;
  applications?: Array;
}

export function isScannedWorkloadChildren2(v: any): v is ScannedWorkloadChildren2 {
  return (
    ((typeof v['id']) === 'string') &&
    ((typeof v['name']) === 'string') &&
    ((typeof v['display_name']) === 'string') &&
    ((typeof v['image']) === 'string') &&
    ((typeof v['domain']) === 'string') &&
    ((typeof v['state']) === 'string') &&
    ((typeof v['service']) === 'string') &&
    ((typeof v['platform_role']) === 'string') &&
    (v['scan_summary'] && isScanSummary(v['scan_summary'])) &&
    (!v['quarantine_reason'] || ((typeof v['quarantine_reason']) === 'string')) &&
    ((typeof v['privileged']) === 'boolean') &&
    ((typeof v['run_as_root']) === 'boolean') &&
    ((typeof v['host_name']) === 'string') &&
    ((typeof v['enforcer_id']) === 'string') &&
    ((typeof v['network_mode']) === 'string') &&
    ((typeof v['started_at']) === 'string') &&
    ((typeof v['finished_at']) === 'string') &&
    (!v['ports'] || (v['ports'] && isArray(v['ports']))) &&
    (!v['applications'] || (v['applications'] && isArray(v['applications'])))
  );
}
