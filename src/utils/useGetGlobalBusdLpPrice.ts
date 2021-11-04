import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetGlobalBusdLpPrice = () => {
  const globalAddress = '0xd9a0e9cA8fB98Bb9e57723B18699D36da146CaaB'
  const busdAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
  const inputCurrency = useCurrency(globalAddress)
  const outputCurrency = useCurrency(busdAddress)
  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetGlobalBusdLpPrice
