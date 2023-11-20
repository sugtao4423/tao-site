/**
 * From request-ip
 * https://github.com/pbojinov/request-ip/blob/e1d0f4b89edf26c77cf62b5ef662ba1a0bd1c9fd/lib/is.js#L3-L6
 */
const regexes = {
  ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
  ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
}

const searchHeaderKeys = [
  'x-client-ip',
  'x-forwarded-for',
  'cf-connecting-ip',
  'fastly-client-ip',
  'true-client-ip',
  'x-real-ip',
  'x-cluster-client-ip',
  'x-forwarded',
  'forwarded-for',
  'forwarded',
  'x-appengine-user-ip',
  'Cf-Pseudo-IPv4',
]

export class IpAddress {
  public static getClientIp(request: Request): string | null {
    const validIpKeys = searchHeaderKeys.filter((key) => {
      const v = request.headers.get(key)
      return v !== null && (regexes.ipv4.test(v) || regexes.ipv6.test(v))
    })
    const ips = validIpKeys.map((key) => request.headers.get(key))

    return ips.length > 0 ? ips[0] : null
  }
}
