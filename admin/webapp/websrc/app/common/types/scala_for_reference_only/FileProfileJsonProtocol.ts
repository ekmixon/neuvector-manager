// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export class FileProfileJsonProtocol {
  private static instance: FileProfileJsonProtocol;

  private constructor() {}

  public static getInstance() {
    if (!FileProfileJsonProtocol.instance) {
      FileProfileJsonProtocol.instance = new FileProfileJsonProtocol();
    }

    return FileProfileJsonProtocol.instance;
  }
}

export const FileProfileJsonProtocolInhabitant: FileProfileJsonProtocol = FileProfileJsonProtocol.getInstance();

export function isFileProfileJsonProtocol(v: any): v is FileProfileJsonProtocol {
  return (v instanceof FileProfileJsonProtocol) && (v === FileProfileJsonProtocolInhabitant);
}
