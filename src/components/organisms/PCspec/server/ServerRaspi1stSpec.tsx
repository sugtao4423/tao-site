import { Accordion } from '@/components/molecules/Accordion/Accordion'

export const ServerRaspi1stSpec: React.FC = () => (
  <Accordion title="Raspberry Pi 2 Model B">
    <p>2026/01/13に引退しました</p>

    <p>
      元々サーバールーム（倉庫）の換気扇のオン・オフを制御していましたが、鯖室を作ったので制御系のサーバーではなくなりました
      <br />
      現在はGPIOを使って
      <a
        href="http://akizukidenshi.com/catalog/g/gK-09421/"
        rel="noopener noreferrer"
        target="_blank"
      >
        BME280搭載のセンサモジュール
      </a>
      から温度、湿度、気圧を取得し記録しています
    </p>
  </Accordion>
)
