import 'server-only'
import { Dirent, readdirSync } from 'fs'

import { InmAudioFile } from '@/common/interfaces/inm'

export class InmServer {
  private static readonly inmMaterialDirPath = './public/inm'

  public static getHomobies(): string[] {
    const files = readdirSync(this.inmMaterialDirPath, { withFileTypes: true })
    const homobies = files.filter((f) => f.isDirectory())
    return homobies.map((h) => h.name)
  }

  public readonly homobiName: string

  constructor(urlEncodedHomobiName: string) {
    this.homobiName = decodeURIComponent(urlEncodedHomobiName)
  }

  public isValidHomobi(): boolean {
    const allHomobies = InmServer.getHomobies()
    return allHomobies.includes(this.homobiName)
  }

  private static getHomobiAudioFileName(f: Dirent): string {
    return f.name.replace(/\.[^.]+$/, '')
  }

  private static getHomobiAudioFilePath(f: Dirent): string {
    const base = f.parentPath.replace(/^(?:\.\/)?public/, '')
    return encodeURI(`${base}/${f.name}`)
  }

  public getHomobiAudioFiles(): InmAudioFile[] {
    const homobiDirPath = `${InmServer.inmMaterialDirPath}/${this.homobiName}`

    const files = readdirSync(homobiDirPath, {
      withFileTypes: true,
      recursive: true,
    }).filter((f) => f.isFile())

    return files.map((f) => ({
      filename: f.name,
      name: InmServer.getHomobiAudioFileName(f),
      path: InmServer.getHomobiAudioFilePath(f),
    }))
  }
}
