/// <reference types="react" />
import { MiningTransaction, TradeContext, TransactionStatus, UniswapDappSharedLogic } from 'uniswap-dapp-integration-shared';
declare const Approval: ({ uniswapDappSharedLogic, tradeContext, miningTransaction, miningTransactionStatus, }: {
    uniswapDappSharedLogic: UniswapDappSharedLogic;
    tradeContext: TradeContext | undefined;
    miningTransaction: MiningTransaction | undefined;
    miningTransactionStatus: TransactionStatus | undefined;
}) => JSX.Element;
export default Approval;
