"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uniswap_dapp_integration_shared_1 = require("uniswap-dapp-integration-shared");
var TransactionModal = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, miningTransactionStatus = _a.miningTransactionStatus;
    var transactionStatus = uniswap_dapp_integration_shared_1.TransactionStatus;
    return (react_1.default.createElement("div", { id: "uni-ic__modal-transaction", className: "uni-ic__modal" },
        react_1.default.createElement("div", { className: "\n      uni-ic__modal__content uni-ic__modal-transaction uni-ic__theme-background\n    " },
            miningTransactionStatus === transactionStatus.completed && (react_1.default.createElement("span", { className: "uni-ic__modal__close", onClick: function () { return uniswapDappSharedLogic.hideTransaction(); } }, "\u00D7")),
            (miningTransactionStatus ===
                transactionStatus.waitingForConfirmation ||
                miningTransactionStatus === transactionStatus.mining ||
                miningTransactionStatus === transactionStatus.completed) && (react_1.default.createElement("div", { className: "uni-ic__modal-transaction__state" },
                miningTransactionStatus !== transactionStatus.completed && (react_1.default.createElement("div", { className: "uni-ic__modal-transaction__state__loading" },
                    react_1.default.createElement("svg", { className: "uni-ic__modal-transaction__state__loading-spinner", width: "94", height: "94", viewBox: "0 0 94 94", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92", stroke: "#2172E5", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })))),
                react_1.default.createElement("div", { className: "uni-ic__modal-transaction__state__info" },
                    react_1.default.createElement("div", { className: "uni-ic__modal-transaction__state__info-confirmation" },
                        miningTransactionStatus ===
                            transactionStatus.waitingForConfirmation && (react_1.default.createElement("span", null, "Waiting For Confirmation")),
                        miningTransactionStatus === transactionStatus.mining && (react_1.default.createElement("span", null, "Mining")),
                        miningTransactionStatus === transactionStatus.completed && (react_1.default.createElement("span", null, "Swap complete"))),
                    react_1.default.createElement("div", { className: "uni-ic__modal-transaction__state__info-quote" },
                        react_1.default.createElement("div", { className: "uni-ic__modal-transaction__state__info-quote-info" },
                            (miningTransactionStatus ===
                                transactionStatus.waitingForConfirmation ||
                                miningTransactionStatus === transactionStatus.mining) && (react_1.default.createElement("span", null, "Swapping")),
                            miningTransactionStatus === transactionStatus.completed && (react_1.default.createElement("span", null, "Swapped")),
                            ' ',
                            ((_b = uniswapDappSharedLogic.tradeContext) === null || _b === void 0 ? void 0 : _b.quoteDirection) === uniswap_dapp_integration_shared_1.TradeDirection.input && (react_1.default.createElement("span", null, (_c = uniswapDappSharedLogic.tradeContext) === null || _c === void 0 ? void 0 :
                                _c.baseConvertRequest,
                                ' ', (_e = (_d = uniswapDappSharedLogic.tradeContext) === null || _d === void 0 ? void 0 : _d.fromToken) === null || _e === void 0 ? void 0 :
                                _e.symbol,
                                " for",
                                ' ', (_f = uniswapDappSharedLogic.tradeContext) === null || _f === void 0 ? void 0 :
                                _f.expectedConvertQuote,
                                ' ', (_h = (_g = uniswapDappSharedLogic.tradeContext) === null || _g === void 0 ? void 0 : _g.toToken) === null || _h === void 0 ? void 0 :
                                _h.symbol)),
                            ((_j = uniswapDappSharedLogic.tradeContext) === null || _j === void 0 ? void 0 : _j.quoteDirection) === uniswap_dapp_integration_shared_1.TradeDirection.output && (react_1.default.createElement("span", null, (_k = uniswapDappSharedLogic.tradeContext) === null || _k === void 0 ? void 0 :
                                _k.expectedConvertQuote,
                                ' ', (_m = (_l = uniswapDappSharedLogic.tradeContext) === null || _l === void 0 ? void 0 : _l.fromToken) === null || _m === void 0 ? void 0 :
                                _m.symbol,
                                " for",
                                ' ', (_o = uniswapDappSharedLogic.tradeContext) === null || _o === void 0 ? void 0 :
                                _o.baseConvertRequest,
                                ' ', (_q = (_p = uniswapDappSharedLogic.tradeContext) === null || _p === void 0 ? void 0 : _p.toToken) === null || _q === void 0 ? void 0 :
                                _q.symbol)))),
                    react_1.default.createElement("div", { className: "uni-ic__modal-transaction__state__action" },
                        miningTransactionStatus ===
                            transactionStatus.waitingForConfirmation && (react_1.default.createElement("span", null, "Confirm this transaction in your wallet")),
                        (miningTransactionStatus === transactionStatus.mining ||
                            miningTransactionStatus === transactionStatus.completed) && (react_1.default.createElement("button", { onClick: function () { return uniswapDappSharedLogic.viewOnEtherscan(); }, className: "uni-ic__theme-background-button" }, "View tx on etherscan")))))),
            miningTransactionStatus === transactionStatus.rejected && (react_1.default.createElement("div", { className: "uni-ic__modal-transaction__rejected" },
                react_1.default.createElement("div", { className: "uni-ic__modal-transaction__rejected__content" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64", viewBox: "0 0 24 24", fill: "none", stroke: "#DA2D2B", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" },
                        react_1.default.createElement("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
                        react_1.default.createElement("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                        react_1.default.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
                    react_1.default.createElement("div", { className: "uni-ic__modal-transaction__rejected__content-text" }, "Transaction rejected.")),
                react_1.default.createElement("div", { className: "uni-ic__modal-transaction__rejected__dismiss" },
                    react_1.default.createElement("button", { className: "uni-ic__modal-transaction__rejected__dismiss-button uni-ic__theme-background-button", onClick: function () { return uniswapDappSharedLogic.hideTransaction(); } }, "Dismiss")))))));
};
exports.default = TransactionModal;
