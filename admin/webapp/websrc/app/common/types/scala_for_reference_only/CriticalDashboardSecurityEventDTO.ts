// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { TopSecurityEvent, isTopSecurityEvent } from './TopSecurityEvent';

export interface CriticalDashboardSecurityEventDTO {
  summary: { [key: string]: ReadonlyArray<[string, number]> };
  top_security_events: TopSecurityEvent;
}

export function isCriticalDashboardSecurityEventDTO(v: any): v is CriticalDashboardSecurityEventDTO {
  return (
    ((typeof v['summary']) == 'object' && Object.keys(v['summary']).every(key => ((typeof key) === 'string') && (Array.isArray(v['summary'][key]) && v['summary'][key].every(elmt => Array.isArray(elmt) && elmt.length == 2 && ((typeof elmt[0]) === 'string') && ((typeof elmt[1]) === 'number'))))) &&
    (v['top_security_events'] && isTopSecurityEvent(v['top_security_events']))
  );
}
