import { friendOneConfig } from './friend-one.ts'
import { friendTwoConfig } from './friend-two.ts'
import { gursewakConfig } from './gursewak.ts'
import type { PortfolioConfig } from '../types/portfolio.ts'

const profiles: Record<string, PortfolioConfig> = {
  gursewak: gursewakConfig,
  'friend-one': friendOneConfig,
  'friend-two': friendTwoConfig,
}

const requestedId = import.meta.env?.VITE_PORTFOLIO_ID ?? 'friend-one'

export const portfolioConfig = profiles[requestedId] ?? friendOneConfig
export const activeProfileId = profiles[requestedId] ? requestedId : 'friend-one'

