var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { BigNumber } from 'bignumber.js';
import React, { useEffect } from 'react';
import { ErrorCodes, TradeDirection, UniswapDappSharedLogic, Utils as UniswapUtils, } from 'uniswap-dapp-integration-shared';
import Approval from './components/approval';
import ConfirmSwap from './components/confirmSwap';
import Header from './components/header';
import Loading from './components/loading';
import SwapQuoteInfo from './components/swapQuoteInfo';
import TokenIcon from './components/tokenIcon';
import TokensModal from './components/tokensModal';
import TransactionModal from './components/transactionModal';
import { UNISWAP_CSS } from './styles';
var uniswapDappSharedLogic;
var subscriptions = [];
var DEBOUNCE_DELAY = 250;
var UniswapReact = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var uniswapDappSharedLogicContext = _a.uniswapDappSharedLogicContext;
    var _l = React.useState(true), loading = _l[0], setLoading = _l[1];
    var _m = React.useState(), inputToken = _m[0], setInputToken = _m[1];
    var _o = React.useState(), inputBalance = _o[0], setInputBalance = _o[1];
    var _p = React.useState(''), inputValue = _p[0], setInputValue = _p[1];
    var _q = React.useState(), inputFiatPrice = _q[0], setInputFiatPrice = _q[1];
    var _r = React.useState(), outputToken = _r[0], setOutputToken = _r[1];
    var _s = React.useState(), outputBalance = _s[0], setOutputBalance = _s[1];
    var _t = React.useState(''), outputValue = _t[0], setOutputValue = _t[1];
    var _u = React.useState(), outputFiatPrice = _u[0], setOutputFiatPrice = _u[1];
    var _v = React.useState(false), supportedNetwork = _v[0], setSupportedNetwork = _v[1];
    var _w = React.useState(), chainId = _w[0], setChainId = _w[1];
    var _x = React.useState(), selectorOpenFrom = _x[0], setSelectorOpenFrom = _x[1];
    var _y = React.useState(), tradeContext = _y[0], setTradeContext = _y[1];
    var _z = React.useState(), newPriceTradeContext = _z[0], setNewPriceTradeContext = _z[1];
    var _0 = React.useState(), miningTransaction = _0[0], setMiningTransaction = _0[1];
    var _1 = React.useState(), miningTransactionStatus = _1[0], setMiningTransactionStatus = _1[1];
    var _2 = React.useState(false), noLiquidityFound = _2[0], setNoLiquidityFound = _2[1];
    var _3 = React.useState(), debounceTimeout = _3[0], setDebounceTimeout = _3[1];
    var utils = UniswapUtils;
    useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var sharedLogic, supportedNetworkTokens;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        sharedLogic = new UniswapDappSharedLogic(uniswapDappSharedLogicContext);
                        return [4 /*yield*/, sharedLogic.init()];
                    case 1:
                        _d.sent();
                        supportedNetworkTokens = uniswapDappSharedLogicContext.supportedNetworkTokens.find(function (t) { return t.chainId === sharedLogic.chainId; });
                        if (supportedNetworkTokens === null || supportedNetworkTokens === void 0 ? void 0 : supportedNetworkTokens.defaultInputValue) {
                            setInputValue(supportedNetworkTokens.defaultInputValue);
                        }
                        setTradeContext(sharedLogic.tradeContext);
                        subscriptions.push(sharedLogic.tradeContext$.subscribe(function (context) {
                            setTradeContext(context);
                            if (context) {
                                if (context.quoteDirection === TradeDirection.input) {
                                    setOutputValue(context.expectedConvertQuote);
                                }
                                else {
                                    setInputValue(context.expectedConvertQuote);
                                }
                            }
                        }));
                        subscriptions.push(sharedLogic.newPriceTradeContext$.subscribe(function (context) {
                            setNewPriceTradeContext(context);
                        }));
                        subscriptions.push(sharedLogic.tradeCompleted$.subscribe(function (completed) {
                            if (completed) {
                                setNoLiquidityFound(false);
                                setInputValue('');
                                setOutputValue('');
                            }
                        }));
                        if (tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.expectedConvertQuote) {
                            setOutputValue(tradeContext.expectedConvertQuote);
                        }
                        uniswapDappSharedLogic = sharedLogic;
                        setSupportedNetwork(uniswapDappSharedLogic.supportedNetwork);
                        subscriptions.push(uniswapDappSharedLogic.supportedNetwork$.subscribe(function (supported) {
                            setSupportedNetwork(supported);
                        }));
                        setChainId(uniswapDappSharedLogic.chainId);
                        subscriptions.push(uniswapDappSharedLogic.chainId$.subscribe(function (chainId) {
                            setChainId(chainId);
                        }));
                        setInputToken(uniswapDappSharedLogic.inputToken);
                        setInputBalance(utils.toPrecision((_a = uniswapDappSharedLogic.inputToken) === null || _a === void 0 ? void 0 : _a.balance));
                        setInputFiatPrice((_b = uniswapDappSharedLogic.inputToken) === null || _b === void 0 ? void 0 : _b.fiatPrice);
                        subscriptions.push(uniswapDappSharedLogic.inputToken$.subscribe(function (token) {
                            setInputToken(token);
                            setInputBalance(utils.toPrecision(token.balance));
                            setInputFiatPrice(token.fiatPrice);
                        }));
                        setOutputToken(uniswapDappSharedLogic.outputToken);
                        if (uniswapDappSharedLogic.outputToken) {
                            setOutputBalance(utils.toPrecision(uniswapDappSharedLogic.outputToken.balance));
                            setOutputFiatPrice(uniswapDappSharedLogic.outputToken.fiatPrice);
                        }
                        subscriptions.push(uniswapDappSharedLogic.outputToken$.subscribe(function (token) {
                            setOutputToken(token);
                            setOutputBalance(utils.toPrecision(token.balance));
                            setOutputFiatPrice(token.fiatPrice);
                        }));
                        setSelectorOpenFrom(uniswapDappSharedLogic.selectorOpenFrom);
                        subscriptions.push(uniswapDappSharedLogic.selectorOpenFrom$.subscribe(function (openFrom) {
                            setSelectorOpenFrom(openFrom);
                        }));
                        setMiningTransaction(uniswapDappSharedLogic.miningTransaction);
                        setMiningTransactionStatus((_c = uniswapDappSharedLogic.miningTransaction) === null || _c === void 0 ? void 0 : _c.status);
                        subscriptions.push(uniswapDappSharedLogic.miningTransaction$.subscribe(function (_miningTransaction) {
                            setMiningTransaction(_miningTransaction);
                            setMiningTransactionStatus(_miningTransaction === null || _miningTransaction === void 0 ? void 0 : _miningTransaction.status);
                        }));
                        setLoading(false);
                        subscriptions.push(uniswapDappSharedLogic.loading$.subscribe(function (loading) {
                            setLoading(loading);
                        }));
                        return [2 /*return*/];
                }
            });
        }); })();
        return function () {
            for (var i = 0; i < subscriptions.length; i++) {
                subscriptions[i].unsubscribe();
            }
        };
    }, []);
    var changeInputTradePrice = function (amount) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (isValidDecimalLength(amount, inputToken)) {
                setInputValue(amount);
                if (!amount || new BigNumber(amount).isEqualTo(0)) {
                    setOutputValue('');
                    if (debounceTimeout) {
                        clearTimeout(debounceTimeout);
                    }
                    return [2 /*return*/];
                }
                if (debounceTimeout) {
                    clearTimeout(debounceTimeout);
                }
                setDebounceTimeout(setTimeout(function () { return _changeInputTradePrice(amount); }, DEBOUNCE_DELAY));
            }
            return [2 /*return*/];
        });
    }); };
    var _changeInputTradePrice = function (amount) { return __awaiter(void 0, void 0, void 0, function () {
        var success;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, changeTradePrice(amount, TradeDirection.input)];
                case 1:
                    success = _a.sent();
                    if (success) {
                        setOutputValue(uniswapDappSharedLogic.tradeContext.expectedConvertQuote);
                    }
                    else {
                        setOutputValue('');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var changeOutputTradePrice = function (amount) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (isValidDecimalLength(amount, outputToken)) {
                setOutputValue(amount);
                if (!amount || new BigNumber(amount).isEqualTo(0)) {
                    setInputValue('');
                    if (debounceTimeout) {
                        clearTimeout(debounceTimeout);
                    }
                    return [2 /*return*/];
                }
                if (debounceTimeout) {
                    clearTimeout(debounceTimeout);
                }
                setDebounceTimeout(setTimeout(function () { return _changeOutputTradePrice(amount); }, DEBOUNCE_DELAY));
            }
            return [2 /*return*/];
        });
    }); };
    var _changeOutputTradePrice = function (amount) { return __awaiter(void 0, void 0, void 0, function () {
        var success;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, changeTradePrice(amount, TradeDirection.output)];
                case 1:
                    success = _a.sent();
                    if (success) {
                        setInputValue(uniswapDappSharedLogic.tradeContext.expectedConvertQuote);
                    }
                    else {
                        setInputValue('');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var isValidDecimalLength = function (value, token) {
        var decimals = value.split('.');
        if (!decimals[1]) {
            return true;
        }
        if (value.length > token.decimals) {
            return false;
        }
        return true;
    };
    /**
     * Change trade price
     * @param amount The amount
     * @param tradeDirection The trade direction
     */
    var changeTradePrice = function (amount, tradeDirection) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, uniswapDappSharedLogic.changeTradePrice(amount, tradeDirection)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if ((error_1 === null || error_1 === void 0 ? void 0 : error_1.code) === ErrorCodes.noRoutesFound) {
                        handleNoLiquidityFound(true, tradeDirection);
                        return [2 /*return*/, false];
                    }
                    return [3 /*break*/, 3];
                case 3:
                    handleNoLiquidityFound(false, tradeDirection);
                    return [2 /*return*/, true];
            }
        });
    }); };
    var switchSwap = function () { return __awaiter(void 0, void 0, void 0, function () {
        var swapState;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (noLiquidityFound) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, uniswapDappSharedLogic.swapSwitch()];
                case 1:
                    swapState = _a.sent();
                    setInputValue(swapState.inputValue);
                    setOutputValue(swapState.outputValue);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleNoLiquidityFound = function (noLiquidityFound, tradeDirection) {
        setNoLiquidityFound(noLiquidityFound);
        if (noLiquidityFound && tradeDirection) {
            if (tradeDirection === TradeDirection.input) {
                setOutputValue('');
            }
            else {
                setInputValue('');
            }
        }
    };
    return (React.createElement("div", { id: "uniswap__716283642843643826" },
        React.createElement("style", null, UNISWAP_CSS),
        loading && React.createElement(Loading, null),
        !loading && uniswapDappSharedLogic && (React.createElement("div", null,
            React.createElement("div", { className: "uni-ic uni-ic__theme-background" },
                supportedNetwork && inputToken && (React.createElement("div", null,
                    React.createElement(Header, { uniswapDappSharedLogic: uniswapDappSharedLogic, disableMultihopsCompleted: function (noLiquidityFound) {
                            handleNoLiquidityFound(noLiquidityFound, tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.quoteDirection);
                        } }),
                    React.createElement("div", { className: "uni-ic__swap-container" },
                        React.createElement("div", { className: "uni-ic__swap-content" },
                            React.createElement("div", { className: "uni-ic__swap-input-container" },
                                React.createElement("div", { className: "uni-ic__swap-input-content uni-ic__theme-panel" },
                                    React.createElement("div", { className: "uni-ic__swap-input-content-main" },
                                        React.createElement("button", { className: "uni-ic__swap-input-content-main-from-currency-container uni-ic__theme-panel", onClick: function () {
                                                return uniswapDappSharedLogic.openTokenSelectorFrom();
                                            } },
                                            React.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency" },
                                                React.createElement(TokenIcon, { classes: "uni-ic__swap-input-content-main-from-currency-icon", tokenImageContext: inputToken.tokenImageContext }),
                                                React.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency-symbol" }, inputToken.symbol),
                                                React.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", className: "uni-ic__swap-input-content-main-from-currency-choose" },
                                                    React.createElement("path", { d: "M0.97168 1L6.20532 6L11.439 1", stroke: "#AEAEAE" })))),
                                        React.createElement("input", { className: "uni-ic__swap-input-content-main-from uni-ic__theme-panel", autoComplete: "off", autoCorrect: "off", type: "number", step: "any", placeholder: "0.0", maxLength: inputToken.decimals, value: inputValue, onChange: function (e) {
                                                changeInputTradePrice(e.target.value);
                                            }, disabled: uniswapDappSharedLogic.transactionInProcess(), spellCheck: "false" })),
                                    React.createElement("div", { className: "uni-ic__swap-content-balance-and-price-container" },
                                        React.createElement("div", { className: "uni-ic__swap-content-balance-and-price" },
                                            React.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance" },
                                                React.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance-text" },
                                                    React.createElement("span", null,
                                                        "Balance: ",
                                                        inputBalance,
                                                        " ",
                                                        inputToken.symbol))),
                                            inputValue && inputFiatPrice && (React.createElement("div", { className: "uni-ic__swap-content-balance-and-price__price" },
                                                "~$",
                                                React.createElement("span", { className: "uni-ic__swap-content-balance-and-price__price-text" }, utils.formatCurrency(inputFiatPrice.times(inputValue).toFixed())))))))),
                            React.createElement("div", { className: "uni-ic__swap-divider uni-ic__theme-panel", onClick: function () { return switchSwap(); } },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#000000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                    React.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                                    React.createElement("polyline", { points: "19 12 12 19 5 12" }))),
                            React.createElement("div", { className: "uni-ic__swap-output-container" },
                                React.createElement("div", { className: "uni-ic__swap-output-content uni-ic__theme-panel" },
                                    React.createElement("div", { className: "uni-ic__swap-output-content-main" },
                                        React.createElement("button", { className: "uni-ic__swap-output-content-main-select uni-ic__theme-panel", onClick: function () {
                                                return uniswapDappSharedLogic.openTokenSelectorTo();
                                            } },
                                            !outputToken && (React.createElement("span", { className: "uni-ic__swap-output-content-main-select-content" },
                                                React.createElement("span", { className: "uni-ic__swap-output-content-main-select-content-title" }, "Select a token"),
                                                React.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", className: "uni-ic__swap-output-content-main-select-content-icon" },
                                                    React.createElement("path", { d: "M0.97168 1L6.20532 6L11.439 1", stroke: "#AEAEAE" })))),
                                            outputToken && (React.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency" },
                                                React.createElement(TokenIcon, { classes: "uni-ic__swap-input-content-main-from-currency-icon", tokenImageContext: outputToken.tokenImageContext }),
                                                React.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency-symbol" }, outputToken.symbol),
                                                React.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", className: "uni-ic__swap-input-content-main-from-currency-choose" },
                                                    React.createElement("path", { d: "M0.97168 1L6.20532 6L11.439 1", stroke: "#AEAEAE" }))))),
                                        React.createElement("input", { className: "uni-ic__swap-output-content-main-from uni-ic__theme-panel", autoComplete: "off", autoCorrect: "off", type: "number", step: "any", placeholder: "0.0", maxLength: outputToken === null || outputToken === void 0 ? void 0 : outputToken.decimals, value: outputValue, onChange: function (e) {
                                                changeOutputTradePrice(e.target.value);
                                            }, disabled: uniswapDappSharedLogic.transactionInProcess(), spellCheck: "false" })),
                                    outputToken && (React.createElement("div", { className: "uni-ic__swap-content-balance-and-price-container" },
                                        React.createElement("div", { className: "uni-ic__swap-content-balance-and-price" },
                                            React.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance" },
                                                React.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance-text" },
                                                    React.createElement("span", null,
                                                        "Balance: ",
                                                        outputBalance,
                                                        ' ',
                                                        outputToken.symbol))),
                                            outputValue && outputFiatPrice && (React.createElement("div", { className: "uni-ic__swap-content-balance-and-price__price" },
                                                "~$",
                                                React.createElement("span", { className: "uni-ic__swap-content-balance-and-price__price-text" }, utils.formatCurrency(outputFiatPrice
                                                    .times(outputValue)
                                                    .toFixed())))))))))),
                        tradeContext && !noLiquidityFound && (React.createElement(React.Fragment, null,
                            React.createElement(SwapQuoteInfo, { uniswapDappSharedLogic: uniswapDappSharedLogic, tradeContext: tradeContext }),
                            React.createElement(Approval, { uniswapDappSharedLogic: uniswapDappSharedLogic, tradeContext: tradeContext, miningTransaction: miningTransaction, miningTransactionStatus: miningTransactionStatus }))),
                        React.createElement("div", { className: "uni-ic__swap-button-container" },
                            React.createElement("button", { className: "uni-ic__swap-button uni-ic__theme-background-button", onClick: function () { return uniswapDappSharedLogic.showConfirmSwap(); }, disabled: utils.isZero(outputValue) ||
                                    ((_b = uniswapDappSharedLogic.tradeContext) === null || _b === void 0 ? void 0 : _b.hasEnoughAllowance) === false ||
                                    ((_d = (_c = uniswapDappSharedLogic.tradeContext) === null || _c === void 0 ? void 0 : _c.fromBalance) === null || _d === void 0 ? void 0 : _d.hasEnough) === false ||
                                    noLiquidityFound },
                                React.createElement("div", { className: "uni-ic__swap-button-text" },
                                    utils.isZero(outputValue) && !noLiquidityFound && (React.createElement("span", null, "Enter an amount")),
                                    !utils.isZero(outputValue) &&
                                        !noLiquidityFound &&
                                        ((_f = (_e = uniswapDappSharedLogic.tradeContext) === null || _e === void 0 ? void 0 : _e.fromBalance) === null || _f === void 0 ? void 0 : _f.hasEnough) && React.createElement("span", null, "Swap"),
                                    !utils.isZero(outputValue) &&
                                        !noLiquidityFound &&
                                        !((_h = (_g = uniswapDappSharedLogic.tradeContext) === null || _g === void 0 ? void 0 : _g.fromBalance) === null || _h === void 0 ? void 0 : _h.hasEnough) && (React.createElement("span", null,
                                        "Insufficient",
                                        ' ', (_k = (_j = uniswapDappSharedLogic.tradeContext) === null || _j === void 0 ? void 0 : _j.fromToken) === null || _k === void 0 ? void 0 :
                                        _k.symbol,
                                        ' ',
                                        "balance")),
                                    noLiquidityFound && (React.createElement("span", null, "Insufficient liquidity for this trade")))))))),
                !supportedNetwork && (React.createElement("div", { className: "uni-ic__error" },
                    React.createElement("p", null,
                        React.createElement("strong", null,
                            "Chain id ",
                            chainId,
                            " is a unsupported network."))))),
            React.createElement(TokensModal, { uniswapDappSharedLogic: uniswapDappSharedLogic, switchSwapCompleted: function (swapCompleted) {
                    setInputValue(swapCompleted.inputValue);
                    setOutputValue(swapCompleted.outputValue);
                }, changeTokenCompleted: function (noLiquidityFound) {
                    handleNoLiquidityFound(noLiquidityFound, tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.quoteDirection);
                }, selectorOpenFrom: selectorOpenFrom, inputToken: inputToken, outputToken: outputToken }),
            React.createElement(ConfirmSwap, { uniswapDappSharedLogic: uniswapDappSharedLogic, tradeContext: tradeContext, newPriceTradeContext: newPriceTradeContext, inputFiatPrice: inputFiatPrice, outputFiatPrice: outputFiatPrice }),
            React.createElement(TransactionModal, { uniswapDappSharedLogic: uniswapDappSharedLogic, miningTransactionStatus: miningTransactionStatus })))));
};
export default UniswapReact;
