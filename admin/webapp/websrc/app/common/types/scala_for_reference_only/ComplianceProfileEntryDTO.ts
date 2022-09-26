// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { ComplianceProfileEntry, isComplianceProfileEntry } from './ComplianceProfileEntry';

export interface ComplianceProfileEntryDTO {
  name: string;
  entry: ComplianceProfileEntry;
}

export function isComplianceProfileEntryDTO(v: any): v is ComplianceProfileEntryDTO {
  return (
    ((typeof v['name']) === 'string') &&
    (v['entry'] && isComplianceProfileEntry(v['entry']))
  );
}
