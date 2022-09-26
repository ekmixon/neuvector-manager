// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { DateTime, isDateTime } from './DateTime';

export interface DashboardIncident {
  name: string;
  host_name: string;
  level: string;
  workload_id?: string;
  workload_name?: string;
  workload_domain?: string;
  client_ip?: string;
  client_port?: number;
  remote_workload_id?: string;
  remote_workload_name?: string;
  remote_workload_domain?: string;
  server_ip?: string;
  server_port?: number;
  server_conn_port?: number;
  conn_ingress?: boolean;
  reported_at: DateTime;
}

export function isDashboardIncident(v: any): v is DashboardIncident {
  return (
    ((typeof v['name']) === 'string') &&
    ((typeof v['host_name']) === 'string') &&
    ((typeof v['level']) === 'string') &&
    (!v['workload_id'] || ((typeof v['workload_id']) === 'string')) &&
    (!v['workload_name'] || ((typeof v['workload_name']) === 'string')) &&
    (!v['workload_domain'] || ((typeof v['workload_domain']) === 'string')) &&
    (!v['client_ip'] || ((typeof v['client_ip']) === 'string')) &&
    (!v['client_port'] || ((typeof v['client_port']) === 'number')) &&
    (!v['remote_workload_id'] || ((typeof v['remote_workload_id']) === 'string')) &&
    (!v['remote_workload_name'] || ((typeof v['remote_workload_name']) === 'string')) &&
    (!v['remote_workload_domain'] || ((typeof v['remote_workload_domain']) === 'string')) &&
    (!v['server_ip'] || ((typeof v['server_ip']) === 'string')) &&
    (!v['server_port'] || ((typeof v['server_port']) === 'number')) &&
    (!v['server_conn_port'] || ((typeof v['server_conn_port']) === 'number')) &&
    (!v['conn_ingress'] || ((typeof v['conn_ingress']) === 'boolean')) &&
    (v['reported_at'] && isDateTime(v['reported_at']))
  );
}
