import { NextRequest, NextResponse } from 'next/server'

import { HomeNetworkDiagramUrl } from '@/common/interfaces/api/home-network-diagram-url'
import { IpAddress } from '@/common/interfaces/api/ip-address'

const diagramUrl = process.env.HOME_NETWORK_DIAGRAM_URL
const localIpRegex =
  /^(?:::ffff:)?(?:192\.168|(?:10|127)\.\d{1,3}|172\.(?:1[6-9]|2[0-9]|3[0-1]))\.\d{1,3}\.\d{1,3}$|^::1$/

export const GET = (
  request: NextRequest
): NextResponse<HomeNetworkDiagramUrl> => {
  const remoteIp = IpAddress.getClientIp(request)
  if (!remoteIp) {
    return NextResponse.json({ code: 500, diagram_url: null }, { status: 500 })
  }

  const isLocalIp = localIpRegex.test(remoteIp)
  if (!isLocalIp) {
    return NextResponse.json({ code: 403, diagram_url: null }, { status: 403 })
  }

  return NextResponse.json(
    { code: 200, diagram_url: diagramUrl },
    { status: 200 }
  )
}
