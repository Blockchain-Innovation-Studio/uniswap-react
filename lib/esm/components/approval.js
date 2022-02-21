import React from 'react';
import { TransactionStatus, } from 'uniswap-dapp-integration-shared';
import TokenIcon from './tokenIcon';
var Approval = function (_a) {
    var _b;
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, tradeContext = _a.tradeContext, miningTransaction = _a.miningTransaction, miningTransactionStatus = _a.miningTransactionStatus;
    var transactionStatus = TransactionStatus;
    return (React.createElement("div", null, (tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.approvalTransaction) &&
        ((_b = tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.fromBalance) === null || _b === void 0 ? void 0 : _b.hasEnough) && (React.createElement("button", { className: "uni-ic__swap-allow uni-ic__theme-background-button", onClick: function () { return uniswapDappSharedLogic.approveAllowance(); }, disabled: uniswapDappSharedLogic.transactionInProcess() },
        React.createElement(TokenIcon, { classes: "uni-ic__swap-allow-icon", tokenImageContext: uniswapDappSharedLogic.inputToken.tokenImageContext }),
        (miningTransaction === undefined ||
            miningTransactionStatus === transactionStatus.rejected) && (React.createElement("span", null,
            "You must give the Uniswap smart contract permisson to use your",
            ' ',
            tradeContext.fromToken.symbol,
            ". You only have to do this once per token per uniswap version. Click here to approve the permissons.")),
        (miningTransaction === null || miningTransaction === void 0 ? void 0 : miningTransaction.status) ===
            transactionStatus.waitingForConfirmation && (React.createElement("span", null, "Waiting for confirmation....")),
        (miningTransaction === null || miningTransaction === void 0 ? void 0 : miningTransaction.status) === transactionStatus.mining && (React.createElement("span", null,
            "Waiting for your transaction to be mined...",
            React.createElement("u", null,
                React.createElement("a", { className: "uni-ic__swap-allow-etherscan", onClick: function () { return uniswapDappSharedLogic.viewOnEtherscan(); } }, "View tx on etherscan"))))))));
};
export default Approval;
