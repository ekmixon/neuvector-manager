// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface SsoServer {
  server_name: string;
  server_type: string;
  redirect_url: string;
}

export function isSsoServer(v: any): v is SsoServer {
  return (
    ((typeof v['server_name']) === 'string') &&
    ((typeof v['server_type']) === 'string') &&
    ((typeof v['redirect_url']) === 'string')
  );
}
