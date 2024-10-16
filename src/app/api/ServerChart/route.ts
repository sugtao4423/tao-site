import { ImageResponse } from 'next/og'
import { NextRequest, NextResponse } from 'next/server'
import { createElement } from 'react'

import { ZabbixGraphRepository } from '@/repositories/zabbix-graph'

const ErrorImage = (code: number, message: string): ImageResponse => {
  const element = createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        color: 'red',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    message
  )

  return new ImageResponse(element, {
    width: 200,
    height: 40,
    status: code,
  })
}

export const GET = async (request: NextRequest): Promise<Response> => {
  const params = request.nextUrl.searchParams
  const graphType = params.get('graphType')
  const graphId = params.get('graphId')

  if (graphType === null || graphId === null) {
    return ErrorImage(400, '400 Bad Request')
  }

  try {
    const imageBuffer = await ZabbixGraphRepository.getGraphImage(
      graphType,
      graphId
    )
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: { 'Content-Type': 'image/png' },
    })
  } catch {
    return ErrorImage(500, '500 Internal Server Error')
  }
}
