import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetGlobalBusdLpPrice = () => {
  const globalAddress = '0xC8d439D3B72280801d64eB371fe58Fede1a556ae'
  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  const inputCurrency = useCurrency(globalAddress)
  const outputCurrency = useCurrency(busdAddress)
  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetGlobalBusdLpPrice
