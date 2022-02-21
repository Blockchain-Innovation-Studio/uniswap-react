/// <reference types="react" />
import BigNumber from 'bignumber.js';
import { TradeContext, UniswapDappSharedLogic } from 'uniswap-dapp-integration-shared';
declare const ConfirmSwap: ({ uniswapDappSharedLogic, tradeContext, newPriceTradeContext, inputFiatPrice, outputFiatPrice }: {
    uniswapDappSharedLogic: UniswapDappSharedLogic;
    tradeContext: TradeContext | undefined;
    newPriceTradeContext: TradeContext | undefined;
    inputFiatPrice: BigNumber | undefined;
    outputFiatPrice: BigNumber | undefined;
}) => JSX.Element;
export default ConfirmSwap;
