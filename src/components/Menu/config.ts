import { MenuEntry } from '@duhd4h/global-uikit'
import { BASE_MAIN_FRONTEND_URL_FARMS, BASE_MAIN_FRONTEND_URL_HOME, BASE_MAIN_FRONTEND_URL_POOLS } from '../../config'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: BASE_MAIN_FRONTEND_URL_HOME,
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
    href: BASE_MAIN_FRONTEND_URL_FARMS,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: BASE_MAIN_FRONTEND_URL_POOLS,
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
