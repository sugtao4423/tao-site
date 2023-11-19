import { NextApiRequest, NextApiResponse } from 'next'

import requestIp from 'request-ip'

import { HomeNetworkDiagramUrl } from '@/common/interfaces/api/home-network-diagram-url'

const diagramUrl = process.env.HOME_NETWORK_DIAGRAM_URL
const localIpRegex =
  /^(?:::ffff:)?(?:192\.168|(?:10|127)\.\d{1,3}|172\.(?:1[6-9]|2[0-9]|3[0-1]))\.\d{1,3}\.\d{1,3}$|^::1$/

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeNetworkDiagramUrl>
): void {
  if (req.method !== 'GET') {
    res.status(405).json({ code: 405, diagram_url: null })
    return
  }

  const remoteIp = requestIp.getClientIp(req)
  if (!remoteIp) {
    res.status(500).json({ code: 500, diagram_url: null })
    return
  }

  const isLocalIp = localIpRegex.test(remoteIp)
  if (!isLocalIp) {
    res.status(403).json({ code: 403, diagram_url: null })
    return
  }

  res.status(200).json({ code: 200, diagram_url: diagramUrl })
}
