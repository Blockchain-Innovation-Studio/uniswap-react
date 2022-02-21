"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uniswap_dapp_integration_shared_1 = require("uniswap-dapp-integration-shared");
var tokenIcon_1 = __importDefault(require("./tokenIcon"));
var Approval = function (_a) {
    var _b;
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, tradeContext = _a.tradeContext, miningTransaction = _a.miningTransaction, miningTransactionStatus = _a.miningTransactionStatus;
    var transactionStatus = uniswap_dapp_integration_shared_1.TransactionStatus;
    return (react_1.default.createElement("div", null, (tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.approvalTransaction) &&
        ((_b = tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.fromBalance) === null || _b === void 0 ? void 0 : _b.hasEnough) && (react_1.default.createElement("button", { className: "uni-ic__swap-allow uni-ic__theme-background-button", onClick: function () { return uniswapDappSharedLogic.approveAllowance(); }, disabled: uniswapDappSharedLogic.transactionInProcess() },
        react_1.default.createElement(tokenIcon_1.default, { classes: "uni-ic__swap-allow-icon", tokenImageContext: uniswapDappSharedLogic.inputToken.tokenImageContext }),
        (miningTransaction === undefined ||
            miningTransactionStatus === transactionStatus.rejected) && (react_1.default.createElement("span", null,
            "You must give the Uniswap smart contract permisson to use your",
            ' ',
            tradeContext.fromToken.symbol,
            ". You only have to do this once per token per uniswap version. Click here to approve the permissons.")),
        (miningTransaction === null || miningTransaction === void 0 ? void 0 : miningTransaction.status) ===
            transactionStatus.waitingForConfirmation && (react_1.default.createElement("span", null, "Waiting for confirmation....")),
        (miningTransaction === null || miningTransaction === void 0 ? void 0 : miningTransaction.status) === transactionStatus.mining && (react_1.default.createElement("span", null,
            "Waiting for your transaction to be mined...",
            react_1.default.createElement("u", null,
                react_1.default.createElement("a", { className: "uni-ic__swap-allow-etherscan", onClick: function () { return uniswapDappSharedLogic.viewOnEtherscan(); } }, "View tx on etherscan"))))))));
};
exports.default = Approval;
