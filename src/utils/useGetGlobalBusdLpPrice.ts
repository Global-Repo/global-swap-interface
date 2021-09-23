import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetGlobalBusdLpPrice = () => {
  const globalAddress = '0xe5eEb81e563aF8e92FBbeDD868500958f3D5f720'
  const busdAddress = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
  const inputCurrency = useCurrency(globalAddress)
  const outputCurrency = useCurrency(busdAddress)
  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetGlobalBusdLpPrice
