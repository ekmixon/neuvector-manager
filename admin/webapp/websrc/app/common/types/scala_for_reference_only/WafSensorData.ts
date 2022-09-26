// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { WafSensor, isWafSensor } from './WafSensor';

export interface WafSensorData {
  sensor: WafSensor;
}

export function isWafSensorData(v: any): v is WafSensorData {
  return (
    (v['sensor'] && isWafSensor(v['sensor']))
  );
}
