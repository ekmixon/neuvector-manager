// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { WafRuleDetail, isWafRuleDetail } from './WafRuleDetail';

export interface WafRuleData {
  rule: WafRuleDetail;
}

export function isWafRuleData(v: any): v is WafRuleData {
  return (
    (v['rule'] && isWafRuleDetail(v['rule']))
  );
}
