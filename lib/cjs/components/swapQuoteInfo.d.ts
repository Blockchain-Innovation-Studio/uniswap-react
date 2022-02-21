/// <reference types="react" />
import { TradeContext, UniswapDappSharedLogic } from 'uniswap-dapp-integration-shared';
declare const SwapQuoteInfo: ({ uniswapDappSharedLogic, tradeContext, }: {
    uniswapDappSharedLogic: UniswapDappSharedLogic;
    tradeContext: TradeContext;
}) => JSX.Element;
export default SwapQuoteInfo;
