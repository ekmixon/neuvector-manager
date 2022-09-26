// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { BackpressureSettings, isBackpressureSettings } from './BackpressureSettings';
import { Duration, isDuration } from './Duration';
import { Host, isHost } from './Host';
import { ParserSettings, isParserSettings } from './ParserSettings';
import { Timeouts, isTimeouts } from './Timeouts';

export interface ServerSettings {
  serverHeader: string;
  sslEncryption: boolean;
  pipeliningLimit: number;
  timeouts: Timeouts;
  reapingCycle: Duration;
  statsSupport: boolean;
  remoteAddressHeader: boolean;
  rawRequestUriHeader: boolean;
  transparentHeadRequests: boolean;
  timeoutHandler: string;
  chunklessStreaming: boolean;
  verboseErrorMessages: boolean;
  verboseErrorLogging: boolean;
  requestChunkAggregationLimit: number;
  responseHeaderSizeHint: number;
  maxEncryptionChunkSize: number;
  defaultHostHeader: Host;
  backpressureSettings?: BackpressureSettings;
  sslTracing: boolean;
  parserSettings: ParserSettings;
}

export function isServerSettings(v: any): v is ServerSettings {
  return (
    ((typeof v['serverHeader']) === 'string') &&
    ((typeof v['sslEncryption']) === 'boolean') &&
    ((typeof v['pipeliningLimit']) === 'number') &&
    (v['timeouts'] && isTimeouts(v['timeouts'])) &&
    (v['reapingCycle'] && isDuration(v['reapingCycle'])) &&
    ((typeof v['statsSupport']) === 'boolean') &&
    ((typeof v['remoteAddressHeader']) === 'boolean') &&
    ((typeof v['rawRequestUriHeader']) === 'boolean') &&
    ((typeof v['transparentHeadRequests']) === 'boolean') &&
    ((typeof v['timeoutHandler']) === 'string') &&
    ((typeof v['chunklessStreaming']) === 'boolean') &&
    ((typeof v['verboseErrorMessages']) === 'boolean') &&
    ((typeof v['verboseErrorLogging']) === 'boolean') &&
    ((typeof v['requestChunkAggregationLimit']) === 'number') &&
    ((typeof v['responseHeaderSizeHint']) === 'number') &&
    ((typeof v['maxEncryptionChunkSize']) === 'number') &&
    (v['defaultHostHeader'] && isHost(v['defaultHostHeader'])) &&
    (!v['backpressureSettings'] || (v['backpressureSettings'] && isBackpressureSettings(v['backpressureSettings']))) &&
    ((typeof v['sslTracing']) === 'boolean') &&
    (v['parserSettings'] && isParserSettings(v['parserSettings']))
  );
}
