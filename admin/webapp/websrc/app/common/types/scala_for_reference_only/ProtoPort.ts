// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface ProtoPort {
  ip_proto: number;
  port: number;
  host_ip: string;
  host_port: number;
}

export function isProtoPort(v: any): v is ProtoPort {
  return (
    ((typeof v['ip_proto']) === 'number') &&
    ((typeof v['port']) === 'number') &&
    ((typeof v['host_ip']) === 'string') &&
    ((typeof v['host_port']) === 'number')
  );
}
