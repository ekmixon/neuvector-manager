// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';
import { Error, isError } from './Error';

export interface ThreatEndpointData {
  threats: Array;
  error?: Error;
}

export function isThreatEndpointData(v: any): v is ThreatEndpointData {
  return (
    (v['threats'] && isArray(v['threats'])) &&
    (!v['error'] || (v['error'] && isError(v['error'])))
  );
}
