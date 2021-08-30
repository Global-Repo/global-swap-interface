import { MenuEntry } from '@duhd4h/global-uikit'
import {
  BASE_MAIN_FRONTEND_URL_CONTACT,
  BASE_MAIN_FRONTEND_URL_FARMS,
  BASE_MAIN_FRONTEND_URL_HOME,
  BASE_MAIN_FRONTEND_URL_OPTIMIZER,
  BASE_MAIN_FRONTEND_URL_POOLS,
  BASE_MAIN_FRONTEND_URL_VAULTS
} from '../../config'

const config: MenuEntry[] = [
  {
    label: 'Home',
    href: BASE_MAIN_FRONTEND_URL_HOME,
  },
  {
    label: 'Exchange',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    href: '/pool',
  },
  {
    label: 'Farms',
    href: BASE_MAIN_FRONTEND_URL_FARMS,
  },
  {
    label: 'Pools',
    href: BASE_MAIN_FRONTEND_URL_POOLS,
  },
  {
    label: 'Vaults Globals',
    href: BASE_MAIN_FRONTEND_URL_VAULTS,
  },
  {
    label: 'Optimizer',
    href: BASE_MAIN_FRONTEND_URL_OPTIMIZER,
  },
  {
    label: 'Contact',
    href: BASE_MAIN_FRONTEND_URL_CONTACT,
  }
]

export default config
