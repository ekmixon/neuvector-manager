// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { AutoScan, isAutoScan } from './AutoScan';
import { Error, isError } from './Error';

export interface AutoScanConfig {
  config: AutoScan;
  error?: Error;
}

export function isAutoScanConfig(v: any): v is AutoScanConfig {
  return (
    (v['config'] && isAutoScan(v['config'])) &&
    (!v['error'] || (v['error'] && isError(v['error'])))
  );
}
