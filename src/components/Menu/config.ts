import { MenuEntry } from '@duhd4h/global-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Exchange',
    icon: 'PoolIcon',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    icon: 'PoolIcon',
    href: '/pool',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: '',
      },
      {
        label: 'Voting',
        href: '',
      },
      {
        label: 'Github',
        href: 'https://github.com/Global-Repo',
      },
    ],
  },
]

export default config
