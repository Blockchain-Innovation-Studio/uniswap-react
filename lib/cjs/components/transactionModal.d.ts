/// <reference types="react" />
import { TransactionStatus, UniswapDappSharedLogic } from 'uniswap-dapp-integration-shared';
declare const TransactionModal: ({ uniswapDappSharedLogic, miningTransactionStatus, }: {
    uniswapDappSharedLogic: UniswapDappSharedLogic;
    miningTransactionStatus: TransactionStatus | undefined;
}) => JSX.Element;
export default TransactionModal;
