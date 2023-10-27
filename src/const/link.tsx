import { LinkData } from '@/common/interfaces/link'
import { BlogIcon } from '@/components/icons/BlogIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { SteamIcon } from '@/components/icons/SteamIcon'
import { TwitterIcon } from '@/components/icons/TwitterIcon'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'

export const LinkItems: LinkData[] = [
  {
    icon: <TwitterIcon />,
    title: 'Twitter',
    subtitle: '@sugtao4423',
    href: 'https://twitter.com/sugtao4423',
    asNewTab: true,
  },
  {
    icon: <GithubIcon />,
    title: 'GitHub',
    subtitle: 'sugtao4423',
    href: 'https://github.com/sugtao4423',
    asNewTab: true,
  },
  {
    icon: <YoutubeIcon />,
    title: 'YouTube',
    subtitle: '@sugtao4423.',
    href: 'https://www.youtube.com/@sugtao4423.',
    asNewTab: true,
  },
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    subtitle: '@sugtao4423',
    href: 'https://www.instagram.com/sugtao4423',
    asNewTab: true,
  },
  {
    icon: <SteamIcon />,
    title: 'Steam',
    subtitle: 'sugtao4423',
    href: 'https://steamcommunity.com/id/sugtao4423',
    asNewTab: true,
  },
  {
    icon: <BlogIcon />,
    title: 'Blog',
    href: 'https://blog.sugtao4423.xyz',
    asNewTab: true,
  },
]
