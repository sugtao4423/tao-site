import { Accordion } from '@/components/molecules/Accordion/Accordion'

export const ServerRaspi2ndSpec: React.FC = () => (
  <Accordion title="Raspberry Pi 4 Model B 4GB">
    <p>
      BME280を使って温度、湿度、気圧を取得し記録しています
      <br />
      メインVLANとIoT用VLANのmDNSリフレクターとしても機能しています
    </p>

    <p>2026/01/13より運用開始</p>
  </Accordion>
)
