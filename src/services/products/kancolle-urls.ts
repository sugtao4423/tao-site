import { KancolleBattleBgmData } from '@/common/interfaces/kancolle-urls'
import { keys } from '@/services/products/kancolle-urls-const'

export class KancolleUrlsService {
  private static serverOrigin = 'http://w12p.kancolle-server.com'

  public static voiceUrl(
    shipId: number,
    shipCode: string,
    voiceId: number
  ): string {
    const fileName =
      voiceId <= 53
        ? ((17 * (shipId + 7) * keys.voice[voiceId - 1]) % 99173) + 1e5
        : voiceId
    return `${this.serverOrigin}/kcs/sound/kc${shipCode}/${fileName}.mp3`
  }

  private static resourceId(id: number, name: string): string {
    const s = name.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0)
    const a = name.length <= 0 ? 1 : name.length
    return (
      ((17 * (id + 7) * keys.resource[(s + id * a) % 100]) % 8973) +
      1e3
    ).toString()
  }

  public static pictureUrl(shipId: number, pictureId: string): string {
    const fileName = this.resourceId(shipId, `ship_${pictureId}`)
    const id = shipId.toString().padStart(4, '0')
    return `${this.serverOrigin}/kcs2/resources/ship/${pictureId}/${id}_${fileName}.png`
  }

  public static bgmLink(bgmId: number, kind: 'port' | 'battle'): string {
    const fileName = this.resourceId(bgmId, `bgm_${kind}`)
    const id = bgmId.toString().padStart(3, '0')
    return `${this.serverOrigin}/kcs2/resources/bgm/${kind}/${id}_${fileName}.mp3`
  }

  public static battleBgmItems(
    bgm: KancolleBattleBgmData
  ): { name: string; href: string }[] {
    return [
      {
        name: '海域BGM',
        href: this.bgmLink(bgm.moving_bgm, 'battle'),
      },
      {
        name: '通常戦闘 昼',
        href: this.bgmLink(bgm.map_bgm[0], 'battle'),
      },
      {
        name: '通常戦闘 夜',
        href: this.bgmLink(bgm.map_bgm[1], 'battle'),
      },
      {
        name: 'ボス戦 昼',
        href: this.bgmLink(bgm.boss_bgm[0], 'battle'),
      },
      {
        name: 'ボス戦 夜',
        href: this.bgmLink(bgm.boss_bgm[1], 'battle'),
      },
    ]
  }
}
