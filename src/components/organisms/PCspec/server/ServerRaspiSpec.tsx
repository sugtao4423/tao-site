import { Accordion } from '@/components/molecules/Accordion/Accordion'

export const ServerRaspiSpec: React.FC = () => (
  <Accordion title="Raspberry Pi 2 Model B">
    <p>
      元々サーバールーム（倉庫）の換気扇のオン・オフを制御していましたが、鯖室を作ったので制御系のサーバーではなくなりました
    </p>

    <p>
      現在はGPIOを使って
      <a
        href="http://akizukidenshi.com/catalog/g/gK-09421/"
        rel="noopener noreferrer"
        target="_blank"
      >
        BME280搭載のセンサモジュール
      </a>
      から温度、湿度、気圧を取得、記録しています
    </p>
  </Accordion>
)
