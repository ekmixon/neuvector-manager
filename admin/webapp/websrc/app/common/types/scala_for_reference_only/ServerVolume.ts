// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface ServerVolume {
  id: string;
  name: string;
  volume: number;
}

export function isServerVolume(v: any): v is ServerVolume {
  return (
    ((typeof v['id']) === 'string') &&
    ((typeof v['name']) === 'string') &&
    ((typeof v['volume']) === 'number')
  );
}
