// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface Score {
  newServiceModeScore: number;
  serviceModeScore: number;
  serviceModeScoreBy100: number;
  exposureScore: number;
  exposureScoreBy100: number;
  privilegedContainerScore: number;
  runAsRoot: number;
  admissionRuleScore: number;
  vulnerabilityScore: number;
  vulnerabilityScoreBy100: number;
  securityRiskScore: number;
  hasError: boolean;
}

export function isScore(v: any): v is Score {
  return (
    ((typeof v['newServiceModeScore']) === 'number') &&
    ((typeof v['serviceModeScore']) === 'number') &&
    ((typeof v['serviceModeScoreBy100']) === 'number') &&
    ((typeof v['exposureScore']) === 'number') &&
    ((typeof v['exposureScoreBy100']) === 'number') &&
    ((typeof v['privilegedContainerScore']) === 'number') &&
    ((typeof v['runAsRoot']) === 'number') &&
    ((typeof v['admissionRuleScore']) === 'number') &&
    ((typeof v['vulnerabilityScore']) === 'number') &&
    ((typeof v['vulnerabilityScoreBy100']) === 'number') &&
    ((typeof v['securityRiskScore']) === 'number') &&
    ((typeof v['hasError']) === 'boolean')
  );
}
