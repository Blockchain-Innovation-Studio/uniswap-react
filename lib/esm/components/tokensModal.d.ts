/// <reference types="react" />
import { ExtendedToken, SelectTokenActionFrom, SwapSwitchResponse, UniswapDappSharedLogic } from 'uniswap-dapp-integration-shared';
declare const TokensModal: ({ uniswapDappSharedLogic, switchSwapCompleted, changeTokenCompleted, selectorOpenFrom, inputToken, outputToken, }: {
    uniswapDappSharedLogic: UniswapDappSharedLogic;
    switchSwapCompleted: (swapSwitchResponse: SwapSwitchResponse) => void;
    changeTokenCompleted: (noLiquidityFound: boolean) => void;
    selectorOpenFrom: SelectTokenActionFrom;
    inputToken: ExtendedToken;
    outputToken: ExtendedToken | undefined;
}) => JSX.Element;
export default TokensModal;
