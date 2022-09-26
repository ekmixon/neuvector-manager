// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export class AuthTokenJsonProtocol {
  private static instance: AuthTokenJsonProtocol;

  private constructor() {}

  public static getInstance() {
    if (!AuthTokenJsonProtocol.instance) {
      AuthTokenJsonProtocol.instance = new AuthTokenJsonProtocol();
    }

    return AuthTokenJsonProtocol.instance;
  }
}

export const AuthTokenJsonProtocolInhabitant: AuthTokenJsonProtocol = AuthTokenJsonProtocol.getInstance();

export function isAuthTokenJsonProtocol(v: any): v is AuthTokenJsonProtocol {
  return (v instanceof AuthTokenJsonProtocol) && (v === AuthTokenJsonProtocolInhabitant);
}
