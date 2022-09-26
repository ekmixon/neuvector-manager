// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface Metrics {
  deny_adm_ctrl_rules: number;
  discover_cves: number;
  discover_ext_eps: number;
  discover_groups: number;
  monitor_groups: number;
  protect_groups: number;
  running_pods: number;
  groups: number;
  host_cves: number;
  hosts: number;
  monitor_cves: number;
  monitor_ext_eps: number;
  new_service_policy_mode: string;
  platform: string;
  platform_cves: number;
  privileged_wls: number;
  protect_cves: number;
  protect_ext_eps: number;
  root_wls: number;
  threat_ext_eps: number;
  violate_ext_eps: number;
}

export function isMetrics(v: any): v is Metrics {
  return (
    ((typeof v['deny_adm_ctrl_rules']) === 'number') &&
    ((typeof v['discover_cves']) === 'number') &&
    ((typeof v['discover_ext_eps']) === 'number') &&
    ((typeof v['discover_groups']) === 'number') &&
    ((typeof v['monitor_groups']) === 'number') &&
    ((typeof v['protect_groups']) === 'number') &&
    ((typeof v['running_pods']) === 'number') &&
    ((typeof v['groups']) === 'number') &&
    ((typeof v['host_cves']) === 'number') &&
    ((typeof v['hosts']) === 'number') &&
    ((typeof v['monitor_cves']) === 'number') &&
    ((typeof v['monitor_ext_eps']) === 'number') &&
    ((typeof v['new_service_policy_mode']) === 'string') &&
    ((typeof v['platform']) === 'string') &&
    ((typeof v['platform_cves']) === 'number') &&
    ((typeof v['privileged_wls']) === 'number') &&
    ((typeof v['protect_cves']) === 'number') &&
    ((typeof v['protect_ext_eps']) === 'number') &&
    ((typeof v['root_wls']) === 'number') &&
    ((typeof v['threat_ext_eps']) === 'number') &&
    ((typeof v['violate_ext_eps']) === 'number')
  );
}
