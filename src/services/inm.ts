import 'server-only'
import { readdirSync } from 'fs'

export class InmServer {
  private static readonly inmMaterialDirPath = './public/inm'

  public static getHomobies(): string[] {
    const files = readdirSync(this.inmMaterialDirPath, { withFileTypes: true })
    const homobies = files.filter((f) => f.isDirectory())
    return homobies.map((h) => h.name)
  }
}
