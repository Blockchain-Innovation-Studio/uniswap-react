import React from 'react';
import { TradeDirection, Utils as UniswapUtils } from 'uniswap-dapp-integration-shared';
import TokenIcon from './tokenIcon';
var ConfirmSwap = function (_a) {
    var uniswapDappSharedLogic = _a.uniswapDappSharedLogic, tradeContext = _a.tradeContext, newPriceTradeContext = _a.newPriceTradeContext, inputFiatPrice = _a.inputFiatPrice, outputFiatPrice = _a.outputFiatPrice;
    var utils = UniswapUtils;
    return (React.createElement("div", null, uniswapDappSharedLogic.supportedNetwork && tradeContext && (React.createElement("div", { id: "uni-ic__modal-confirm-swap", className: "uni-ic__modal" },
        React.createElement("div", { className: "uni-ic__modal__content uni-ic__modal-confirm-swap uni-ic__theme-background" },
            React.createElement("span", { className: "uni-ic__modal__close", onClick: function () { return uniswapDappSharedLogic.hideConfirmSwap(); } }, "\u00D7"),
            React.createElement("p", null, "Confirm swap"),
            React.createElement("div", { className: "uni-ic__modal-confirm-swap__content" },
                React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-container uni-ic__theme-panel" },
                    React.createElement("div", { className: "uni-ic__modal-confirm-swap__input" },
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-header" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-header__text" }, "From"),
                            inputFiatPrice && (React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-header__price-container" },
                                "~$",
                                React.createElement("span", { className: "uni-ic__modal-confirm-swap__input-header__price" }, utils.formatCurrency(inputFiatPrice.times(tradeContext.baseConvertRequest).toFixed()))))),
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__symbol" },
                                React.createElement(TokenIcon, { classes: "uni-ic__modal-confirm-swap__input-main__symbol__image", tokenImageContext: uniswapDappSharedLogic.inputToken.tokenImageContext }),
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__symbol__label" }, tradeContext.fromToken.symbol)),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__price" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__input-main__price-text" },
                                    tradeContext.quoteDirection ===
                                        TradeDirection.input && (React.createElement("span", null, tradeContext.baseConvertRequest)),
                                    tradeContext.quoteDirection ===
                                        TradeDirection.output && (React.createElement("span", null, tradeContext.expectedConvertQuote))))))),
                React.createElement("div", { className: "uni-ic__modal-confirm-swap__divider uni-ic__theme-panel" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#565A69", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                        React.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                        React.createElement("polyline", { points: "19 12 12 19 5 12" }))),
                React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-container uni-ic__theme-panel" },
                    React.createElement("div", { className: "uni-ic__modal-confirm-swap__output" },
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-header" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-header__text" }, "To"),
                            outputFiatPrice && (React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-header__price-container" },
                                "~$",
                                React.createElement("span", { className: "uni-ic__modal-confirm-swap__output-header__price" }, utils.formatCurrency(outputFiatPrice.times(tradeContext.expectedConvertQuote).toFixed()))))),
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__symbol" },
                                React.createElement(TokenIcon, { classes: "uni-ic__modal-confirm-swap__output-main__symbol__image", tokenImageContext: uniswapDappSharedLogic.outputToken.tokenImageContext }),
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__symbol__label" }, tradeContext.toToken.symbol)),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__price" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-main__price-text" },
                                    tradeContext.quoteDirection ===
                                        TradeDirection.input && (React.createElement("span", null, tradeContext.expectedConvertQuote)),
                                    tradeContext.quoteDirection ===
                                        TradeDirection.output && (React.createElement("span", null, tradeContext.baseConvertRequest))))))),
                React.createElement("div", { className: "uni-ic__modal-confirm-swap__price" },
                    React.createElement("div", { className: "uni-ic__modal-confirm-swap__price__title" }, "Price"),
                    React.createElement("button", { className: "uni-ic__modal-confirm-swap__price__rate-button" },
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__price__rate" },
                            React.createElement("span", null,
                                "1 ",
                                tradeContext.fromToken.symbol,
                                " =",
                                ' ',
                                uniswapDappSharedLogic.workOutOneEqualTo(),
                                ' ',
                                tradeContext.toToken.symbol)))),
                React.createElement("div", { className: "uni-ic__modal-confirm-swap__info-container uni-ic__theme-panel" },
                    React.createElement("div", { className: "uni-ic__modal-confirm-swap__info" },
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Liquidity Provider Fee")),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                tradeContext.liquidityProviderFee,
                                ' ',
                                tradeContext.fromToken.symbol)),
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Route")),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" }, tradeContext.routeText)),
                        tradeContext.minAmountConvertQuote && (React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Minimum received")),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                tradeContext.minAmountConvertQuote,
                                ' ',
                                tradeContext.toToken.symbol))),
                        tradeContext.maximumSent && (React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Maximum sent")),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                tradeContext.maximumSent,
                                ' ',
                                tradeContext.fromToken.symbol))),
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Slippage tolerance")),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" },
                                uniswapDappSharedLogic.uniswapPairSettings.slippage *
                                    100,
                                "%")),
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item" },
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title" },
                                React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__title-content" }, "Uniswap version")),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__info__item__value" }, tradeContext.uniswapVersion)))),
                newPriceTradeContext && (React.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated-container" },
                    React.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated" },
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated__text" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                React.createElement("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
                                React.createElement("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                                React.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
                            React.createElement("div", { className: "uni-ic__modal-confirm-swap__price-updated__text-content" }, "Price Updated")),
                        React.createElement("button", { className: "uni-ic__modal-confirm-swap__price-updated__action uni-ic__theme-background-button", onClick: function () {
                                return uniswapDappSharedLogic.acceptPriceChange();
                            } }, "Accept")))),
                React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-info-container" },
                    React.createElement("div", { className: "uni-ic__modal-confirm-swap__output-info" },
                        tradeContext.minAmountConvertQuote && (React.createElement("span", null,
                            "Output is estimated. You will receive at least",
                            ' ',
                            React.createElement("b", null,
                                tradeContext.minAmountConvertQuote,
                                ' ',
                                tradeContext.toToken.symbol),
                            ' ',
                            "or the transaction will revert.")),
                        tradeContext.maximumSent && (React.createElement("span", null,
                            "Input is estimated. You will sell at most",
                            ' ',
                            React.createElement("b", null,
                                tradeContext.maximumSent,
                                ' ',
                                tradeContext.fromToken.symbol),
                            ' ',
                            "or the transaction will revert."))))),
            React.createElement("div", { className: "uni-ic__modal-confirm-swap__action-container" },
                React.createElement("div", { className: "uni-ic__modal-confirm-swap__action" },
                    React.createElement("button", { id: "confirm-swap-or-send", className: "uni-ic__modal-confirm-swap__action__button uni-ic__theme-background-button", disabled: newPriceTradeContext !== undefined, onClick: function () { return uniswapDappSharedLogic.swapTransaction(); } },
                        React.createElement("div", { className: "uni-ic__modal-confirm-swap__action__button-text" }, "Confirm Swap")))))))));
};
export default ConfirmSwap;