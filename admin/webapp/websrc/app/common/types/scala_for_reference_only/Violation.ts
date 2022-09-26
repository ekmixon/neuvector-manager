// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';
import { DateTime, isDateTime } from './DateTime';

export interface Violation {
  client_id: string;
  client_name: string;
  server_id: string;
  server_name: string;
  server_port: number;
  applications: Array;
  reported_at: DateTime;
  policy_id: number;
  client_ip: string;
  server_ip: string;
}

export function isViolation(v: any): v is Violation {
  return (
    ((typeof v['client_id']) === 'string') &&
    ((typeof v['client_name']) === 'string') &&
    ((typeof v['server_id']) === 'string') &&
    ((typeof v['server_name']) === 'string') &&
    ((typeof v['server_port']) === 'number') &&
    (v['applications'] && isArray(v['applications'])) &&
    (v['reported_at'] && isDateTime(v['reported_at'])) &&
    ((typeof v['policy_id']) === 'number') &&
    ((typeof v['client_ip']) === 'string') &&
    ((typeof v['server_ip']) === 'string')
  );
}
