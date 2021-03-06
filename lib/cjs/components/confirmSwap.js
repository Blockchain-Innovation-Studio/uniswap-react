"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uniswap_dapp_integration_shared_1 = require("uniswap-dapp-integration-shared");
var tokenIcon_1 = __importDefault(require("./tokenIcon"));
var ConfirmSwap = function (_a) {
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, tradeContext = _a.tradeContext, newPriceTradeContext = _a.newPriceTradeContext, inputFiatPrice = _a.inputFiatPrice, outputFiatPrice = _a.outputFiatPrice;
    var utils = uniswap_dapp_integration_shared_1.Utils;
    return (react_1.default.createElement("div", null, uniswapDappSharedLogic.supportedNetwork && tradeContext && (react_1.default.createElement("div", { id: "uni-ic__modal-confirm-swap", className: "uni-ic__modal" },
        react_1.default.createElement("div", { className: "uni-ic__modal__content uni-ic__modal-confirm-swap uni-ic__theme-background" },
            react_1.default.createElement("span", { className: "uni-ic__modal__close", onClick: function () { return uniswapDappSharedLogic.hideConfirmSwap(); } }, "\u00D7"),
            react_1.default.createElement("p", null, "Confirm swap"),
            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__content" },
                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-container uni-ic__theme-panel" },
                    react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input" },
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-header" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-header__text" }, "From"),
                            inputFiatPrice && (react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-header__price-container" },
                                "~$",
                                react_1.default.createElement("span", { className: "uni-ic__modal-confirm-swap__input-header__price" }, utils.formatCurrency(inputFiatPrice.times(tradeContext.baseConvertRequest).toFixed()))))),
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__symbol" },
                                react_1.default.createElement(tokenIcon_1.default, { classes: "uni-ic__modal-confirm-swap__input-main__symbol__image", tokenImageContext: uniswapDappSharedLogic.inputToken.tokenImageContext }),
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__symbol__label" }, tradeContext.fromToken.symbol)),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__price" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__price-text" },
                                    tradeContext.quoteDirection ===
                                        uniswap_dapp_integration_shared_1.TradeDirection.input && (react_1.default.createElement("span", null, tradeContext.baseConvertRequest)),
                                    tradeContext.quoteDirection ===
                                        uniswap_dapp_integration_shared_1.TradeDirection.output && (react_1.default.createElement("span", null, tradeContext.expectedConvertQuote))))))),
                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__divider uni-ic__theme-panel" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#565A69", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        react_1.default.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                        react_1.default.createElement("polyline", { points: "19 12 12 19 5 12" }))),
                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-container uni-ic__theme-panel" },
                    react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output" },
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-header" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-header__text" }, "To"),
                            outputFiatPrice && (react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-header__price-container" },
                                "~$",
                                react_1.default.createElement("span", { className: "uni-ic__modal-confirm-swap__output-header__price" }, utils.formatCurrency(outputFiatPrice.times(tradeContext.expectedConvertQuote).toFixed()))))),
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__symbol" },
                                react_1.default.createElement(tokenIcon_1.default, { classes: "uni-ic__modal-confirm-swap__output-main__symbol__image", tokenImageContext: uniswapDappSharedLogic.outputToken.tokenImageContext }),
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__symbol__label" }, tradeContext.toToken.symbol)),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__price" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__price-text" },
                                    tradeContext.quoteDirection ===
                                        uniswap_dapp_integration_shared_1.TradeDirection.input && (react_1.default.createElement("span", null, tradeContext.expectedConvertQuote)),
                                    tradeContext.quoteDirection ===
                                        uniswap_dapp_integration_shared_1.TradeDirection.output && (react_1.default.createElement("span", null, tradeContext.baseConvertRequest))))))),
                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__price" },
                    react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__price__title" }, "Price"),
                    react_1.default.createElement("button", { className: "uni-ic__modal-confirm-swap__price__rate-button" },
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__price__rate" },
                            react_1.default.createElement("span", null,
                                "1 ",
                                tradeContext.fromToken.symbol,
                                " =",
                                ' ',
                                uniswapDappSharedLogic.workOutOneEqualTo(),
                                ' ',
                                tradeContext.toToken.symbol)))),
                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info-container uni-ic__theme-panel" },
                    react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info" },
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Liquidity Provider Fee")),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                tradeContext.liquidityProviderFee,
                                ' ',
                                tradeContext.fromToken.symbol)),
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Route")),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" }, tradeContext.routeText)),
                        tradeContext.minAmountConvertQuote && (react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Minimum received")),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                tradeContext.minAmountConvertQuote,
                                ' ',
                                tradeContext.toToken.symbol))),
                        tradeContext.maximumSent && (react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Maximum sent")),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                tradeContext.maximumSent,
                                ' ',
                                tradeContext.fromToken.symbol))),
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Slippage tolerance")),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                uniswapDappSharedLogic.uniswapPairSettings.slippage *
                                    100,
                                "%")),
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Uniswap version")),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" }, tradeContext.uniswapVersion)))),
                newPriceTradeContext && (react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated-container" },
                    react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated" },
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated__text" },
                            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                react_1.default.createElement("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
                                react_1.default.createElement("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                                react_1.default.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
                            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated__text-content" }, "Price Updated")),
                        react_1.default.createElement("button", { className: "uni-ic__modal-confirm-swap__price-updated__action uni-ic__theme-background-button", onClick: function () {
                                return uniswapDappSharedLogic.acceptPriceChange();
                            } }, "Accept")))),
                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-info-container" },
                    react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__output-info" },
                        tradeContext.minAmountConvertQuote && (react_1.default.createElement("span", null,
                            "Output is estimated. You will receive at least",
                            ' ',
                            react_1.default.createElement("b", null,
                                tradeContext.minAmountConvertQuote,
                                ' ',
                                tradeContext.toToken.symbol),
                            ' ',
                            "or the transaction will revert.")),
                        tradeContext.maximumSent && (react_1.default.createElement("span", null,
                            "Input is estimated. You will sell at most",
                            ' ',
                            react_1.default.createElement("b", null,
                                tradeContext.maximumSent,
                                ' ',
                                tradeContext.fromToken.symbol),
                            ' ',
                            "or the transaction will revert."))))),
            react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__action-container" },
                react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__action" },
                    react_1.default.createElement("button", { id: "confirm-swap-or-send", className: "uni-ic__modal-confirm-swap__action__button uni-ic__theme-background-button", disabled: newPriceTradeContext !== undefined, onClick: function () { return uniswapDappSharedLogic.swapTransaction(); } },
                        react_1.default.createElement("div", { className: "uni-ic__modal-confirm-swap__action__button-text" }, "Confirm Swap")))))))));
};
exports.default = ConfirmSwap;
