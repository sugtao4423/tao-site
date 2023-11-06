import { LinkData } from '@/common/interfaces/link'
import { BlogIcon } from '@/components/icons/BlogIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { SteamIcon } from '@/components/icons/SteamIcon'
import { TwitterIcon } from '@/components/icons/TwitterIcon'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'

export enum Links {
  twitter = 'https://twitter.com/sugtao4423',
  github = 'https://github.com/sugtao4423',
  youtube = 'https://www.youtube.com/@sugtao4423.',
  instagram = 'https://www.instagram.com/sugtao4423',
  steam = 'https://steamcommunity.com/id/sugtao4423',
  blog = 'https://blog.sugtao4423.xyz',
  ameba = 'https://ameblo.jp/sug703ta4423',

  blogChinachuClient = 'https://blog.sugtao4423.xyz/20151006-chinachu-client/',
  githubLoD = `${github}/Lightning-of-Dark`,
}

export const LinkItems: LinkData[] = [
  {
    icon: <TwitterIcon />,
    title: 'Twitter',
    subtitle: '@sugtao4423',
    href: Links.twitter,
    asNewTab: true,
  },
  {
    icon: <GithubIcon />,
    title: 'GitHub',
    subtitle: 'sugtao4423',
    href: Links.github,
    asNewTab: true,
  },
  {
    icon: <YoutubeIcon />,
    title: 'YouTube',
    subtitle: '@sugtao4423.',
    href: Links.youtube,
    asNewTab: true,
  },
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    subtitle: '@sugtao4423',
    href: Links.instagram,
    asNewTab: true,
  },
  {
    icon: <SteamIcon />,
    title: 'Steam',
    subtitle: 'sugtao4423',
    href: Links.steam,
    asNewTab: true,
  },
  {
    icon: <BlogIcon />,
    title: 'Blog',
    href: Links.blog,
    asNewTab: true,
  },
]
