"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_js_1 = require("bignumber.js");
var react_1 = __importStar(require("react"));
var uniswap_dapp_integration_shared_1 = require("uniswap-dapp-integration-shared");
var approval_1 = __importDefault(require("./components/approval"));
var confirmSwap_1 = __importDefault(require("./components/confirmSwap"));
var header_1 = __importDefault(require("./components/header"));
var loading_1 = __importDefault(require("./components/loading"));
var swapQuoteInfo_1 = __importDefault(require("./components/swapQuoteInfo"));
var tokenIcon_1 = __importDefault(require("./components/tokenIcon"));
var tokensModal_1 = __importDefault(require("./components/tokensModal"));
var transactionModal_1 = __importDefault(require("./components/transactionModal"));
var styles_1 = require("./styles");
var uniswapDappSharedLogic;
var subscriptions = [];
var DEBOUNCE_DELAY = 250;
var UniswapReact = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var uniswapDappSharedLogicContext = _a.uniswapDappSharedLogicContext;
    var _l = react_1.default.useState(true), loading = _l[0], setLoading = _l[1];
    var _m = react_1.default.useState(), inputToken = _m[0], setInputToken = _m[1];
    var _o = react_1.default.useState(), inputBalance = _o[0], setInputBalance = _o[1];
    var _p = react_1.default.useState(''), inputValue = _p[0], setInputValue = _p[1];
    var _q = react_1.default.useState(), inputFiatPrice = _q[0], setInputFiatPrice = _q[1];
    var _r = react_1.default.useState(), outputToken = _r[0], setOutputToken = _r[1];
    var _s = react_1.default.useState(), outputBalance = _s[0], setOutputBalance = _s[1];
    var _t = react_1.default.useState(''), outputValue = _t[0], setOutputValue = _t[1];
    var _u = react_1.default.useState(), outputFiatPrice = _u[0], setOutputFiatPrice = _u[1];
    var _v = react_1.default.useState(false), supportedNetwork = _v[0], setSupportedNetwork = _v[1];
    var _w = react_1.default.useState(), chainId = _w[0], setChainId = _w[1];
    var _x = react_1.default.useState(), selectorOpenFrom = _x[0], setSelectorOpenFrom = _x[1];
    var _y = react_1.default.useState(), tradeContext = _y[0], setTradeContext = _y[1];
    var _z = react_1.default.useState(), newPriceTradeContext = _z[0], setNewPriceTradeContext = _z[1];
    var _0 = react_1.default.useState(), miningTransaction = _0[0], setMiningTransaction = _0[1];
    var _1 = react_1.default.useState(), miningTransactionStatus = _1[0], setMiningTransactionStatus = _1[1];
    var _2 = react_1.default.useState(false), noLiquidityFound = _2[0], setNoLiquidityFound = _2[1];
    var _3 = react_1.default.useState(), debounceTimeout = _3[0], setDebounceTimeout = _3[1];
    var utils = uniswap_dapp_integration_shared_1.Utils;
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var sharedLogic, supportedNetworkTokens;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        sharedLogic = new uniswap_dapp_integration_shared_1.UniswapDappSharedLogic(uniswapDappSharedLogicContext);
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
                                if (context.quoteDirection === uniswap_dapp_integration_shared_1.TradeDirection.input) {
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
                if (!amount || new bignumber_js_1.BigNumber(amount).isEqualTo(0)) {
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
                case 0: return [4 /*yield*/, changeTradePrice(amount, uniswap_dapp_integration_shared_1.TradeDirection.input)];
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
                if (!amount || new bignumber_js_1.BigNumber(amount).isEqualTo(0)) {
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
                case 0: return [4 /*yield*/, changeTradePrice(amount, uniswap_dapp_integration_shared_1.TradeDirection.output)];
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
                    if ((error_1 === null || error_1 === void 0 ? void 0 : error_1.code) === uniswap_dapp_integration_shared_1.ErrorCodes.noRoutesFound) {
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
            if (tradeDirection === uniswap_dapp_integration_shared_1.TradeDirection.input) {
                setOutputValue('');
            }
            else {
                setInputValue('');
            }
        }
    };
    return (react_1.default.createElement("div", { id: "uniswap__716283642843643826" },
        react_1.default.createElement("style", null, styles_1.UNISWAP_CSS),
        loading && react_1.default.createElement(loading_1.default, null),
        !loading && uniswapDappSharedLogic && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "uni-ic uni-ic__theme-background" },
                supportedNetwork && inputToken && (react_1.default.createElement("div", null,
                    react_1.default.createElement(header_1.default, { uniswapDappSharedLogic: uniswapDappSharedLogic, disableMultihopsCompleted: function (noLiquidityFound) {
                            handleNoLiquidityFound(noLiquidityFound, tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.quoteDirection);
                        } }),
                    react_1.default.createElement("div", { className: "uni-ic__swap-container" },
                        react_1.default.createElement("div", { className: "uni-ic__swap-content" },
                            react_1.default.createElement("div", { className: "uni-ic__swap-input-container" },
                                react_1.default.createElement("div", { className: "uni-ic__swap-input-content uni-ic__theme-panel" },
                                    react_1.default.createElement("div", { className: "uni-ic__swap-input-content-main" },
                                        react_1.default.createElement("button", { className: "uni-ic__swap-input-content-main-from-currency-container uni-ic__theme-panel", onClick: function () {
                                                return uniswapDappSharedLogic.openTokenSelectorFrom();
                                            } },
                                            react_1.default.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency" },
                                                react_1.default.createElement(tokenIcon_1.default, { classes: "uni-ic__swap-input-content-main-from-currency-icon", tokenImageContext: inputToken.tokenImageContext }),
                                                react_1.default.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency-symbol" }, inputToken.symbol),
                                                react_1.default.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", className: "uni-ic__swap-input-content-main-from-currency-choose" },
                                                    react_1.default.createElement("path", { d: "M0.97168 1L6.20532 6L11.439 1", stroke: "#AEAEAE" })))),
                                        react_1.default.createElement("input", { className: "uni-ic__swap-input-content-main-from uni-ic__theme-panel", autoComplete: "off", autoCorrect: "off", type: "number", step: "any", placeholder: "0.0", maxLength: inputToken.decimals, value: inputValue, onChange: function (e) {
                                                changeInputTradePrice(e.target.value);
                                            }, disabled: uniswapDappSharedLogic.transactionInProcess(), spellCheck: "false" })),
                                    react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price-container" },
                                        react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price" },
                                            react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance" },
                                                react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance-text" },
                                                    react_1.default.createElement("span", null,
                                                        "Balance: ",
                                                        inputBalance,
                                                        " ",
                                                        inputToken.symbol))),
                                            inputValue && inputFiatPrice && (react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price__price" },
                                                "~$",
                                                react_1.default.createElement("span", { className: "uni-ic__swap-content-balance-and-price__price-text" }, utils.formatCurrency(inputFiatPrice.times(inputValue).toFixed())))))))),
                            react_1.default.createElement("div", { className: "uni-ic__swap-divider uni-ic__theme-panel", onClick: function () { return switchSwap(); } },
                                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#000000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                    react_1.default.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                                    react_1.default.createElement("polyline", { points: "19 12 12 19 5 12" }))),
                            react_1.default.createElement("div", { className: "uni-ic__swap-output-container" },
                                react_1.default.createElement("div", { className: "uni-ic__swap-output-content uni-ic__theme-panel" },
                                    react_1.default.createElement("div", { className: "uni-ic__swap-output-content-main" },
                                        react_1.default.createElement("button", { className: "uni-ic__swap-output-content-main-select uni-ic__theme-panel", onClick: function () {
                                                return uniswapDappSharedLogic.openTokenSelectorTo();
                                            } },
                                            !outputToken && (react_1.default.createElement("span", { className: "uni-ic__swap-output-content-main-select-content" },
                                                react_1.default.createElement("span", { className: "uni-ic__swap-output-content-main-select-content-title" }, "Select a token"),
                                                react_1.default.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", className: "uni-ic__swap-output-content-main-select-content-icon" },
                                                    react_1.default.createElement("path", { d: "M0.97168 1L6.20532 6L11.439 1", stroke: "#AEAEAE" })))),
                                            outputToken && (react_1.default.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency" },
                                                react_1.default.createElement(tokenIcon_1.default, { classes: "uni-ic__swap-input-content-main-from-currency-icon", tokenImageContext: outputToken.tokenImageContext }),
                                                react_1.default.createElement("span", { className: "uni-ic__swap-input-content-main-from-currency-symbol" }, outputToken.symbol),
                                                react_1.default.createElement("svg", { width: "12", height: "7", viewBox: "0 0 12 7", fill: "none", className: "uni-ic__swap-input-content-main-from-currency-choose" },
                                                    react_1.default.createElement("path", { d: "M0.97168 1L6.20532 6L11.439 1", stroke: "#AEAEAE" }))))),
                                        react_1.default.createElement("input", { className: "uni-ic__swap-output-content-main-from uni-ic__theme-panel", autoComplete: "off", autoCorrect: "off", type: "number", step: "any", placeholder: "0.0", maxLength: outputToken === null || outputToken === void 0 ? void 0 : outputToken.decimals, value: outputValue, onChange: function (e) {
                                                changeOutputTradePrice(e.target.value);
                                            }, disabled: uniswapDappSharedLogic.transactionInProcess(), spellCheck: "false" })),
                                    outputToken && (react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price-container" },
                                        react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price" },
                                            react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance" },
                                                react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price__balance-text" },
                                                    react_1.default.createElement("span", null,
                                                        "Balance: ",
                                                        outputBalance,
                                                        ' ',
                                                        outputToken.symbol))),
                                            outputValue && outputFiatPrice && (react_1.default.createElement("div", { className: "uni-ic__swap-content-balance-and-price__price" },
                                                "~$",
                                                react_1.default.createElement("span", { className: "uni-ic__swap-content-balance-and-price__price-text" }, utils.formatCurrency(outputFiatPrice
                                                    .times(outputValue)
                                                    .toFixed())))))))))),
                        tradeContext && !noLiquidityFound && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(swapQuoteInfo_1.default, { uniswapDappSharedLogic: uniswapDappSharedLogic, tradeContext: tradeContext }),
                            react_1.default.createElement(approval_1.default, { uniswapDappSharedLogic: uniswapDappSharedLogic, tradeContext: tradeContext, miningTransaction: miningTransaction, miningTransactionStatus: miningTransactionStatus }))),
                        react_1.default.createElement("div", { className: "uni-ic__swap-button-container" },
                            react_1.default.createElement("button", { className: "uni-ic__swap-button uni-ic__theme-background-button", onClick: function () { return uniswapDappSharedLogic.showConfirmSwap(); }, disabled: utils.isZero(outputValue) ||
                                    ((_b = uniswapDappSharedLogic.tradeContext) === null || _b === void 0 ? void 0 : _b.hasEnoughAllowance) === false ||
                                    ((_d = (_c = uniswapDappSharedLogic.tradeContext) === null || _c === void 0 ? void 0 : _c.fromBalance) === null || _d === void 0 ? void 0 : _d.hasEnough) === false ||
                                    noLiquidityFound },
                                react_1.default.createElement("div", { className: "uni-ic__swap-button-text" },
                                    utils.isZero(outputValue) && !noLiquidityFound && (react_1.default.createElement("span", null, "Enter an amount")),
                                    !utils.isZero(outputValue) &&
                                        !noLiquidityFound &&
                                        ((_f = (_e = uniswapDappSharedLogic.tradeContext) === null || _e === void 0 ? void 0 : _e.fromBalance) === null || _f === void 0 ? void 0 : _f.hasEnough) && react_1.default.createElement("span", null, "Swap"),
                                    !utils.isZero(outputValue) &&
                                        !noLiquidityFound &&
                                        !((_h = (_g = uniswapDappSharedLogic.tradeContext) === null || _g === void 0 ? void 0 : _g.fromBalance) === null || _h === void 0 ? void 0 : _h.hasEnough) && (react_1.default.createElement("span", null,
                                        "Insufficient",
                                        ' ', (_k = (_j = uniswapDappSharedLogic.tradeContext) === null || _j === void 0 ? void 0 : _j.fromToken) === null || _k === void 0 ? void 0 :
                                        _k.symbol,
                                        ' ',
                                        "balance")),
                                    noLiquidityFound && (react_1.default.createElement("span", null, "Insufficient liquidity for this trade")))))))),
                !supportedNetwork && (react_1.default.createElement("div", { className: "uni-ic__error" },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("strong", null,
                            "Chain id ",
                            chainId,
                            " is a unsupported network."))))),
            react_1.default.createElement(tokensModal_1.default, { uniswapDappSharedLogic: uniswapDappSharedLogic, switchSwapCompleted: function (swapCompleted) {
                    setInputValue(swapCompleted.inputValue);
                    setOutputValue(swapCompleted.outputValue);
                }, changeTokenCompleted: function (noLiquidityFound) {
                    handleNoLiquidityFound(noLiquidityFound, tradeContext === null || tradeContext === void 0 ? void 0 : tradeContext.quoteDirection);
                }, selectorOpenFrom: selectorOpenFrom, inputToken: inputToken, outputToken: outputToken }),
            react_1.default.createElement(confirmSwap_1.default, { uniswapDappSharedLogic: uniswapDappSharedLogic, tradeContext: tradeContext, newPriceTradeContext: newPriceTradeContext, inputFiatPrice: inputFiatPrice, outputFiatPrice: outputFiatPrice }),
            react_1.default.createElement(transactionModal_1.default, { uniswapDappSharedLogic: uniswapDappSharedLogic, miningTransactionStatus: miningTransactionStatus })))));
};
exports.default = UniswapReact;
