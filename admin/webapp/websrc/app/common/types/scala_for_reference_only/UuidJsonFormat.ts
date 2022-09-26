// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export class UuidJsonFormat {
  private static instance: UuidJsonFormat;

  private constructor() {}

  public static getInstance() {
    if (!UuidJsonFormat.instance) {
      UuidJsonFormat.instance = new UuidJsonFormat();
    }

    return UuidJsonFormat.instance;
  }
}

export const UuidJsonFormatInhabitant: UuidJsonFormat = UuidJsonFormat.getInstance();

export function isUuidJsonFormat(v: any): v is UuidJsonFormat {
  return (v instanceof UuidJsonFormat) && (v === UuidJsonFormatInhabitant);
}
