// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export class Utils {
  private static instance: Utils;

  private constructor() {}

  public static getInstance() {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }

    return Utils.instance;
  }
}

export const UtilsInhabitant: Utils = Utils.getInstance();

export function isUtils(v: any): v is Utils {
  return (v instanceof Utils) && (v === UtilsInhabitant);
}
